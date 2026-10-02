/* Codes4U Protected Super Admin Dashboard Template Module */

function getAdminTemplateHTML() {
  return `
  <!-- SUPER ADMIN DASHBOARD MODAL WITH LEFT VERTICAL SIDEBAR -->
  <div class="sc-modal-overlay" id="adminDashboardModal">
    <div class="sc-dashboard-wrapper">
      
      <!-- LEFT SIDEBAR NAV (VERTICAL ORDER 1, 2, 3, 4) -->
      <aside class="sc-dashboard-sidebar">
        <div class="sc-sidebar-brand" style="margin-bottom: 1.2rem; position: relative;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.4rem;">
            <div>
              <div style="font-size: 1.3rem; font-weight: 900; color: #FFFFFF; display: flex; align-items: center; gap: 0.4rem;">
                👑 Codes4U
              </div>
              <div style="font-size: 0.75rem; color: #38BDF8; font-weight: 800; margin-top: 0.1rem;">Super Admin Panel</div>
            </div>

            <!-- Single Dedicated Top Notification & Admin Profile Badge -->
            <div style="position: relative; display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.22); padding: 0.35rem 0.7rem; border-radius: 99px;">
              <!-- Bell Notification Trigger -->
              <span style="position: relative; cursor: pointer; padding: 2px; font-size: 1.05rem;" onclick="toggleAdminNotificationsMenu(event)" title="Notifications & System Alerts">
                🔔<span style="position: absolute; top: -2px; right: -2px; width: 8px; height: 8px; background: #EF4444; border-radius: 50%; box-shadow: 0 0 0 2px #0F172A;" id="adminBellDot"></span>
              </span>

              <span style="color: rgba(255,255,255,0.3); font-weight: 300; font-size: 0.8rem;">|</span>

              <!-- Admin Profile Trigger -->
              <span style="font-weight: 800; font-size: 0.82rem; color: #38BDF8; cursor: pointer; display: flex; align-items: center; gap: 0.2rem;" onclick="toggleAdminProfileMenu(event)" title="Admin Account Settings">
                👤 Admin ▾
              </span>
            </div>
          </div>

          <!-- Notifications Dropdown Menu (Positioned at top of dashboard) -->
          <div id="adminNotificationsMenu" style="display: none; position: absolute; top: calc(100% + 5px); left: 0; width: 290px; background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 14px; box-shadow: 0 10px 30px rgba(15,23,42,0.25); z-index: 10000; padding: 1rem; color: #0F172A;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.6rem; margin-bottom: 0.8rem;">
              <strong style="font-size: 0.95rem; color: #0F172A; display: flex; align-items: center; gap: 0.4rem;">🔔 System Notifications</strong>
              <span style="font-size: 0.72rem; color: #059669; background: #DCFCE7; font-weight: 800; padding: 1px 6px; border-radius: 99px;" id="adminNotifCount">4 New</span>
            </div>
            <div id="adminNotifList" style="display: flex; flex-direction: column; gap: 0.6rem; max-height: 220px; overflow-y: auto;">
              <div style="font-size: 0.8rem; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.5rem 0.7rem; border-radius: 8px;">
                <div style="font-weight: 800; color: #E11D48;">🚨 Expiry Warning</div>
                <div style="color: #475569; margin-top: 2px;">3 promo codes for Sephora expire in 24 hours.</div>
              </div>
              <div style="font-size: 0.8rem; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.5rem 0.7rem; border-radius: 8px;">
                <div style="font-weight: 800; color: #1D61E7;">👑 New Sub-Admin</div>
                <div style="color: #475569; margin-top: 2px;">Sub-admin 'rahul_editor' was assigned Editor role.</div>
              </div>
              <div style="font-size: 0.8rem; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.5rem 0.7rem; border-radius: 8px;">
                <div style="font-weight: 800; color: #059669;">👥 New User Registration</div>
                <div style="color: #475569; margin-top: 2px;">Rahul Sharma created a new shopper account.</div>
              </div>
            </div>
            <button class="sc-admin-btn-primary" style="width: 100%; margin-top: 0.8rem; font-size: 0.78rem; padding: 0.4rem;" onclick="clearAdminNotifications()">Mark All as Read</button>
          </div>

          <!-- Admin Profile Dropdown Menu -->
          <div id="adminProfileMenu" style="display: none; position: absolute; top: calc(100% + 5px); left: 0; width: 250px; background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 14px; box-shadow: 0 10px 30px rgba(15,23,42,0.25); z-index: 10000; padding: 1rem; color: #0F172A;">
            <div style="display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.8rem; margin-bottom: 0.8rem;">
              <div style="width: 38px; height: 38px; border-radius: 50%; background: #1D61E7; color: #FFFFFF; font-weight: 900; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;">
                SA
              </div>
              <div>
                <strong style="font-size: 0.95rem; color: #0F172A; display: block;">Super Admin</strong>
                <span style="font-size: 0.75rem; color: #059669; font-weight: 800;">👑 System Owner</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.82rem;">
              <button class="sc-tab-btn" style="text-align: left; padding: 0.45rem 0.7rem; border: none; background: #F8FAFC; color: #0F172A;" onclick="switchAdminTab('settings'); toggleAdminProfileMenu();">
                🔐 Security & Password
              </button>
              <button class="sc-tab-btn" style="text-align: left; padding: 0.45rem 0.7rem; border: none; background: #F8FAFC; color: #0F172A;" onclick="switchAdminTab('settings'); toggleAdminProfileMenu();">
                👑 Manage Sub-Admins
              </button>
              <button class="sc-admin-btn-delete" style="width: 100%; margin-top: 0.4rem; padding: 0.45rem; text-align: center; font-size: 0.8rem;" onclick="closeAdminDashboardModal(); toggleAdminProfileMenu();">
                🚪 Log Out Admin Panel
              </button>
            </div>
          </div>
        </div>

        <nav class="sc-sidebar-nav">
          <button class="sc-sidebar-item active" onclick="switchAdminTab('analytics')">
            <span class="sc-sidebar-num">1</span>
            <span style="flex:1;">📊 Analytics & Traffic</span>
            <span class="sc-sidebar-chevron">›</span>
          </button>
          <button class="sc-sidebar-item" onclick="switchAdminTab('stores')">
            <span class="sc-sidebar-num">2</span>
            <span style="flex:1;">🏪 Merchant Companies</span>
            <span class="sc-sidebar-chevron">›</span>
          </button>
          <button class="sc-sidebar-item" onclick="switchAdminTab('codes')">
            <span class="sc-sidebar-num">3</span>
            <span style="flex:1;">💎 Promo Codes & Deals</span>
            <span class="sc-sidebar-chevron">›</span>
          </button>
          <button class="sc-sidebar-item" onclick="switchAdminTab('userlist')">
            <span class="sc-sidebar-num">4</span>
            <span style="flex:1;">👥 Logged-In Users</span>
            <span class="sc-sidebar-chevron">›</span>
          </button>
          <button class="sc-sidebar-item" onclick="switchAdminTab('settings')">
            <span class="sc-sidebar-num">5</span>
            <span style="flex:1;">⚙️ Dynamic Site Content</span>
            <span class="sc-sidebar-chevron">›</span>
          </button>
          <button class="sc-sidebar-item" onclick="switchAdminTab('csvhub')">
            <span class="sc-sidebar-num">6</span>
            <span style="flex:1;">📁 CSV Bulk Import/Export</span>
            <span class="sc-sidebar-chevron">›</span>
          </button>
        </nav>

        <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
          <button class="sc-admin-btn-delete" style="width: 100%; text-align: center; padding: 0.6rem; font-size: 0.85rem;" onclick="closeAdminDashboardModal()">
            🚪 Exit Dashboard
          </button>
        </div>
      </aside>

      <!-- MAIN CONTENT PANEL -->
      <main class="sc-dashboard-main">
        <div class="sc-superadmin-header">
          <div>
            <h2 style="font-size: 1.5rem; font-weight: 900; color: #0F172A; margin: 0;">Super Admin Dashboard</h2>
            <p style="font-size: 0.82rem; color: var(--sc-text-sub); margin-top: 0.2rem;">Real-time site traffic, user login tracking & multi-code merchant manager.</p>
          </div>

          <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
            <div class="sc-search-input-box" style="width: 220px; border: 1px solid #CBD5E1; background: #FFFFFF; margin: 0;">
              <svg width="15" height="15" fill="none" stroke="var(--sc-text-muted)" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" id="adminHeaderSearchInput" placeholder="Search company or domain..." style="font-size: 0.8rem;" oninput="filterAdminGlobalSearch(this.value)">
            </div>
            <button class="sc-admin-btn-primary" onclick="openAddStoreModal()">+ Add New Company</button>
            <button class="sc-modal-close" style="position: static;" onclick="closeAdminDashboardModal()">&times;</button>
          </div>
        </div>

        <!-- TAB 1: REAL-TIME ANALYTICS & STATS -->
        <div id="adminTabAnalytics" style="display: block;">
          <div class="sc-stats-grid">
            <div class="sc-stat-card">
              <div class="sc-stat-val" style="color: var(--sc-neon-green);" id="statActiveVisitors">0</div>
              <div class="sc-stat-lbl">🟢 Live Active Visitors Right Now</div>
            </div>
            <div class="sc-stat-card">
              <div class="sc-stat-val" style="color: #1D61E7;" id="statTotalLogins">0</div>
              <div class="sc-stat-lbl">👥 User Logins Today</div>
            </div>
            <div class="sc-stat-card">
              <div class="sc-stat-val" style="color: #F59E0B;" id="statCodeCopies">0</div>
              <div class="sc-stat-lbl">💎 Total Coupon Codes Copied</div>
            </div>
            <div class="sc-stat-card">
              <div class="sc-stat-val" style="color: #9333EA;" id="statShopRedirects">0</div>
              <div class="sc-stat-lbl">🚀 Merchant Redirect Clicks</div>
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem;">
              <h3 style="font-size: 1.1rem; font-weight: 800; color: #0F172A; margin: 0;">⚡ Live User Activity Stream</h3>
              <div class="sc-search-input-box" style="width: 200px; margin: 0; padding: 0.3rem 0.6rem; border: 1px solid #CBD5E1;">
                <input type="text" id="adminActivitySearchInput" placeholder="Filter live stream..." style="font-size: 0.78rem;" oninput="filterActivityLogs(this.value)">
              </div>
            </div>
            <div id="adminActivityStream" style="max-height: 250px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.4rem;"></div>
          </div>
        </div>

        <!-- TAB 2: MERCHANT COMPANIES -->
        <div id="adminTabStores" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem;">
            <div>
              <h3 style="font-size: 1.2rem; font-weight: 900; color: #0F172A; margin: 0;">🏪 Merchant Stores & Multiple Promo Codes</h3>
              <p style="font-size: 0.78rem; color: var(--sc-text-sub); margin-top: 0.2rem;">Add, edit or delete company names, domains, logos, and promo code lists.</p>
            </div>
            <div style="display: flex; gap: 0.6rem;">
              <button class="sc-admin-btn-primary" onclick="openAddStoreModal()">+ Add New Company</button>
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 12px; padding: 1rem; margin-bottom: 1.2rem;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 0.8rem;">
              <input type="text" id="adminStoreSearchInput" class="sc-admin-input" placeholder="Search by store name or domain..." oninput="renderAdminStoreList(this.value)">
              <select id="adminStoreCategoryFilter" class="sc-admin-input" onchange="renderAdminStoreList()">
                <option value="ALL">All Categories</option>
                <option value="fashion">Fashion & Apparel</option>
                <option value="electronics">Electronics & Tech</option>
                <option value="travel">Travel & Hotels</option>
                <option value="food">Food & Delivery</option>
              </select>
              <button class="sc-admin-btn-save" onclick="renderAdminStoreList()">🔍 Filter Stores</button>
            </div>
          </div>

          <div id="adminStoreList" style="display: flex; flex-direction: column; gap: 1rem;"></div>
        </div>

        <!-- TAB 3: PROMO CODES -->
        <div id="adminTabCodes" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem;">
            <div>
              <h3 style="font-size: 1.2rem; font-weight: 900; color: #0F172A; margin: 0;">💎 Universal Promo Codes Registry</h3>
              <p style="font-size: 0.78rem; color: var(--sc-text-sub); margin-top: 0.2rem;">Audit and manage working discount codes across all stores.</p>
            </div>
          </div>

          <div id="adminGlobalCodesList" style="display: flex; flex-direction: column; gap: 0.8rem;"></div>
        </div>

        <!-- TAB 4: LOGGED-IN USERS -->
        <div id="adminTabUserlist" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem;">
            <div>
              <h3 style="font-size: 1.2rem; font-weight: 900; color: #0F172A; margin: 0;">👥 Registered User Accounts & Live Sessions</h3>
              <p style="font-size: 0.78rem; color: var(--sc-text-sub); margin-top: 0.2rem;">View user logins, IP addresses, shopping visits, and manage account statuses.</p>
            </div>
            <button class="sc-admin-btn-primary" onclick="openAddUserForm()">+ Add New User</button>
          </div>

          <div class="sc-table-wrap">
            <table class="sc-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Username / Email</th>
                  <th>Login IP</th>
                  <th>Codes Used</th>
                  <th>Status</th>
                  <th>Last Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="adminUserTableBody"></tbody>
            </table>
          </div>
        </div>

        <!-- TAB 5: DYNAMIC SITE CONTENT -->
        <div id="adminTabSettings" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap; gap: 0.8rem;">
            <div>
              <h3 style="font-size: 1.2rem; font-weight: 900; color: #0F172A; margin: 0;">⚙️ 100% Dynamic Site Content Editor</h3>
              <p style="font-size: 0.78rem; color: var(--sc-text-sub); margin-top: 0.2rem;">Modify website brand name, top banner, headlines, feature cards, and download links in real-time.</p>
            </div>
            <div style="display: flex; gap: 0.6rem;">
              <button class="sc-admin-btn-save" onclick="saveSiteSettings()">💾 Save & Publish Live</button>
            </div>
          </div>
        </div>

        <!-- TAB 6: CSV HUB -->
        <div id="adminTabCsvhub" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div class="sc-header-icon-box" style="background: #ECFDF5; color: #059669; font-size: 1.3rem; padding: 10px 12px; border-radius: 12px;">📁</div>
              <div>
                <h3 style="font-size: 1.4rem; font-weight: 900; color: #0F172A; margin: 0;">CSV & Excel Bulk Hub (Import / Export)</h3>
                <p style="font-size: 0.85rem; color: #64748B; margin-top: 0.15rem;">One-click bulk download entire database or bulk upload merchant stores, promo codes, and user accounts.</p>
              </div>
            </div>
            <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
              <button class="sc-admin-btn-primary" style="background: linear-gradient(135deg, #059669, #047857);" onclick="exportStoresToCSV()">
                📥 Export Merchants CSV
              </button>
              <button class="sc-admin-btn-primary" style="background: linear-gradient(135deg, #2563EB, #1D4ED8);" onclick="exportCodesToCSV()">
                💎 Export Codes CSV
              </button>
              <button class="sc-admin-btn-primary" style="background: linear-gradient(135deg, #9333EA, #7E22CE);" onclick="exportUsersToCSV()">
                👥 Export Users CSV
              </button>
            </div>
          </div>

          <!-- SECTION 1: DOWNLOAD PRE-FORMATTED SAMPLE CSV TEMPLATES -->
          <div style="background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 16px; padding: 1.4rem; margin-bottom: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem;">
              <div>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: #0F172A; margin: 0; display: flex; align-items: center; gap: 0.4rem;">
                  📄 Pre-Formatted Sample CSV Templates & Direct Downloads
                </h4>
                <p style="font-size: 0.78rem; color: #64748B; margin-top: 0.2rem;">Download these sample CSV files to see the correct columns and headers before importing your data.</p>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
              <!-- Sample 1: Merchants -->
              <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 1rem; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="font-weight: 800; font-size: 0.9rem; color: #0F172A; display: flex; align-items: center; gap: 0.4rem;">
                    🏪 Merchant Stores Sample
                  </div>
                  <div style="font-size: 0.75rem; color: #64748B; margin-top: 0.3rem; line-height: 1.4;">
                    Columns: Company Name, Domain, Category, Target URL, Discount Title, Logo URL
                  </div>
                </div>
                <button class="sc-tab-btn" style="margin-top: 0.8rem; background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; font-weight: 800; font-size: 0.78rem; padding: 0.45rem 0.8rem; border-radius: 8px; cursor: pointer;" onclick="downloadCSVTemplate('stores')">
                  📄 Download Sample Merchants CSV
                </button>
              </div>

              <!-- Sample 2: Promo Codes -->
              <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 1rem; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="font-weight: 800; font-size: 0.9rem; color: #0F172A; display: flex; align-items: center; gap: 0.4rem;">
                    💎 Promo Codes & Deals Sample
                  </div>
                  <div style="font-size: 0.75rem; color: #64748B; margin-top: 0.3rem; line-height: 1.4;">
                    Columns: Company Name, Promo Code String, Discount Title, Description Terms
                  </div>
                </div>
                <button class="sc-tab-btn" style="margin-top: 0.8rem; background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; font-weight: 800; font-size: 0.78rem; padding: 0.45rem 0.8rem; border-radius: 8px; cursor: pointer;" onclick="downloadCSVTemplate('codes')">
                  📄 Download Sample Promo Codes CSV
                </button>
              </div>

              <!-- Sample 3: User Accounts -->
              <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 1rem; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="font-weight: 800; font-size: 0.9rem; color: #0F172A; display: flex; align-items: center; gap: 0.4rem;">
                    👥 User Accounts Sample
                  </div>
                  <div style="font-size: 0.75rem; color: #64748B; margin-top: 0.3rem; line-height: 1.4;">
                    Columns: Username Email, Full Name, Login Password, Role, Status
                  </div>
                </div>
                <button class="sc-tab-btn" style="margin-top: 0.8rem; background: #F3E8FF; color: #7E22CE; border: 1px solid #E9D5FF; font-weight: 800; font-size: 0.78rem; padding: 0.45rem 0.8rem; border-radius: 8px; cursor: pointer;" onclick="downloadCSVTemplate('users')">
                  📄 Download Sample User Accounts CSV
                </button>
              </div>
            </div>
          </div>

          <!-- SECTION 2: BULK CSV UPLOAD & IMPORT ENGINE -->
          <div style="background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 16px; padding: 1.4rem; margin-bottom: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem;">
              <div>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: #0F172A; margin: 0; display: flex; align-items: center; gap: 0.4rem;">
                  📤 Bulk Upload & Import CSV File into Database
                </h4>
                <p style="font-size: 0.78rem; color: #64748B; margin-top: 0.2rem;">Select the database table, pick your CSV file, preview rows, and import with 1-click.</p>
              </div>

              <!-- Import Category Selector -->
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <label style="font-size: 0.8rem; font-weight: 700; color: #0F172A;">Import Into:</label>
                <select id="csvImportCategory" style="background: #F8FAFC; border: 1px solid #CBD5E1; padding: 0.45rem 0.8rem; border-radius: 8px; font-weight: 800; font-size: 0.82rem; color: #0F172A; cursor: pointer;">
                  <option value="stores">🏪 Merchant Companies</option>
                  <option value="codes">💎 Promo Codes & Deals</option>
                  <option value="users">👥 User Accounts / Bulk Users</option>
                </select>
              </div>
            </div>

            <!-- Upload Dropzone -->
            <input type="file" id="csvFileInput" accept=".csv" onchange="handleCSVFileSelected(event)" style="display: none;">
            <div onclick="document.getElementById('csvFileInput').click()" style="background: #F8FAFC; border: 2px dashed #94A3B8; border-radius: 14px; padding: 2.2rem; text-align: center; cursor: pointer; transition: all 0.2s;" ondragover="event.preventDefault(); this.style.borderColor='#1D61E7'; this.style.background='#EFF6FF';" ondragleave="this.style.borderColor='#94A3B8'; this.style.background='#F8FAFC';" ondrop="event.preventDefault(); this.style.borderColor='#94A3B8'; this.style.background='#F8FAFC'; if (event.dataTransfer.files.length) { document.getElementById('csvFileInput').files = event.dataTransfer.files; handleCSVFileSelected({ target: document.getElementById('csvFileInput') }); }">
              <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">📁</div>
              <div style="font-weight: 800; font-size: 1rem; color: #0F172A;">Click here to Browse CSV File or Drag & Drop File</div>
              <div style="font-size: 0.78rem; color: #64748B; margin-top: 0.3rem;">Supports standard .csv files with headers. Auto-parses commas and quotes.</div>
            </div>

            <!-- CSV Preview & Confirmation Container (Hidden until file selected) -->
            <div id="csvPreviewContainer" style="display: none; margin-top: 1.4rem; background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 12px; padding: 1.2rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem;">
                <div>
                  <span style="font-weight: 800; font-size: 0.95rem; color: #0F172A;" id="csvFileName">uploaded_file.csv</span>
                  <div style="font-size: 0.78rem; color: #059669; font-weight: 700; margin-top: 0.1rem;" id="csvRecordCount">0 rows found</div>
                </div>
                <div style="display: flex; gap: 0.6rem;">
                  <button class="sc-admin-btn-primary" style="background: linear-gradient(135deg, #059669, #047857);" onclick="confirmBulkImportToDatabase()">
                    🚀 Confirm & Import to Database
                  </button>
                  <button class="sc-admin-btn-delete" style="padding: 0.45rem 0.8rem; font-size: 0.8rem;" onclick="cancelCSVUpload()">
                    ❌ Cancel
                  </button>
                </div>
              </div>

              <!-- Preview Table -->
              <div style="max-height: 250px; overflow-x: auto; overflow-y: auto; background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 8px;">
                <table class="sc-user-table" style="margin: 0; font-size: 0.8rem;">
                  <thead id="csvPreviewThead" style="background: #F1F5F9; position: sticky; top: 0;"></thead>
                  <tbody id="csvPreviewTbody"></tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- SECTION 3: DIRECT QUICK BULK USER CREATION CARD -->
          <div style="background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 16px; padding: 1.4rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.8rem;">
              <div>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: #0F172A; margin: 0; display: flex; align-items: center; gap: 0.4rem;">
                  👥 Quick Bulk User Creator (Multi-Line / Copy-Paste)
                </h4>
                <p style="font-size: 0.78rem; color: #64748B; margin-top: 0.2rem;">Quickly paste multiple email addresses or usernames (one per line) to instantly generate user accounts.</p>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
              <textarea id="bulkUserPasteInput" rows="4" style="width: 100%; border: 1px solid #CBD5E1; border-radius: 10px; padding: 0.8rem; font-family: monospace; font-size: 0.85rem; outline: none; background: #F8FAFC;" placeholder="Enter multiple users line-by-line, e.g.:
rahul@gmail.com, Rahul Sharma, pass123
priya@yahoo.com, Priya Verma, pass456
amit@codes4u.com, Amit Patel, pass789"></textarea>
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
                <span style="font-size: 0.75rem; color: #64748B;">Format: <code>email, Full Name, password</code> (or simply enter email per line)</span>
                <button class="sc-admin-btn-primary" style="background: linear-gradient(135deg, #7C3AED, #6D28D9);" onclick="quickCreateBulkUsers()">
                  ✨ Create Bulk User Accounts Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- DETAILED USER PROFILE & ACTIVITY MODAL -->
  <div class="sc-modal-overlay" id="userDetailModal">
    <div class="sc-superadmin-dashboard">
      <div class="sc-superadmin-header">
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.3rem;">
            <span style="font-size: 1.4rem;">👤</span>
            <h3 style="font-size: 1.3rem; font-weight: 900; color: #0F172A; margin: 0;" id="userModalTitle">User Profile Details</h3>
            <span id="userModalStatusBadge" style="font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 99px; background: rgba(0,230,118,0.15); color: var(--sc-neon-green);">🟢 Active</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--sc-text-sub);" id="userModalSub">Comprehensive live tracking & shopping audit log</p>
        </div>
        <button class="sc-modal-close" style="position: static;" onclick="closeUserDetailModal()">&times;</button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.8rem; margin-bottom: 1.2rem;">
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.8rem; border-radius: 10px;">
          <div style="font-size: 0.75rem; color: var(--sc-text-muted);">🕒 Kab Login Hua</div>
          <div style="font-size: 0.85rem; font-weight: 800; color: #0F172A; margin-top: 0.2rem;" id="udLoginTime">2026-09-25 21:05</div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.8rem; border-radius: 10px;">
          <div style="font-size: 0.75rem; color: var(--sc-text-muted);">⏱️ Kitni Der Live Tha</div>
          <div style="font-size: 0.85rem; font-weight: 800; color: var(--sc-neon-green); margin-top: 0.2rem;" id="udLiveDuration">14 mins 32 secs</div>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.8rem; border-radius: 10px;">
          <div style="font-size: 0.75rem; color: var(--sc-text-muted);">🌐 Login IP & Device</div>
          <div style="font-size: 0.82rem; font-weight: 700; color: #0F172A; margin-top: 0.2rem;" id="udIpDevice">192.168.1.42</div>
        </div>
      </div>

      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1rem; margin-bottom: 1.2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--sc-neon-green);">
            🛍️ Shopping Sites Visited (<span id="udShoppingCount">0</span> Stores)
          </h4>
          <span style="font-size: 0.72rem; color: var(--sc-text-muted);">Stores redirect clicked</span>
        </div>
        <div id="udShoppingList" style="max-height: 140px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem;"></div>
      </div>

      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 0.6rem;">
          💎 Copied Promo Codes (<span id="udCodesCount">0</span>)
        </h4>
        <div id="udCodesList" style="display: flex; flex-wrap: wrap; gap: 0.4rem;"></div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--sc-border); padding-top: 1.2rem; flex-wrap: wrap; gap: 0.8rem;">
        <div style="display: flex; gap: 0.6rem;">
          <button id="udBlockBtn" class="sc-admin-btn-block" onclick="toggleBlockSelectedUser()">🚫 Block User</button>
          <button id="udDeleteBtn" class="sc-admin-btn-delete" onclick="deleteSelectedUser()">🗑️ Delete User</button>
        </div>
        <button class="sc-tab-btn active" style="padding: 0.5rem 1.2rem;" onclick="closeUserDetailModal()">Close Profile</button>
      </div>
    </div>
  </div>
  `;
}

module.exports = { getAdminTemplateHTML };
