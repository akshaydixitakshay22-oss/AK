/* Codes4U Advanced Security & Anti-Inspection Guard */
(function() {
  'use strict';

  // 1. Disable Right-Click Context Menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if (typeof showToast === 'function') {
      showToast('🚫 Right-Click Inspect is disabled for security!');
    }
    return false;
  }, false);

  // 2. Disable Key Combinations for DevTools and Source Viewing
  document.addEventListener('keydown', function(e) {
    // F12 key
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl + Shift + I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
    // Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }
    // Ctrl + Shift + C (Element Inspector)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
    // Ctrl + U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
    // Ctrl + S (Save Page)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
  }, false);

  // 3. Disable Text Selection & Dragging
  document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });

  // 4. Overwrite Console Methods to Prevent Log Extraction
  const disableConsole = function() {
    const noop = function() {};
    try {
      window.console.log = noop;
      window.console.warn = noop;
      window.console.error = noop;
      window.console.info = noop;
      window.console.table = noop;
      window.console.dir = noop;
      window.console.debug = noop;
    } catch (err) {}
  };
  
  // Wipe console periodically
  setInterval(function() {
    try {
      console.clear();
      disableConsole();
    } catch(e) {}
  }, 300);

  disableConsole();

  // 5. Anti-DevTools Debugger Trap
  setInterval(function() {
    const startTime = performance.now();
    (function() {
      // Debugger trap halts inspection if DevTools is open
      Function("debugger")();
    })();
    const endTime = performance.now();
    if (endTime - startTime > 100) {
      // DevTools detected as open
      document.body.innerHTML = `
        <div style="background:#03070C; color:#FF5252; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; text-align:center; padding:2rem;">
          <h1 style="font-size:2rem; margin-bottom:1rem;">⚠️ Security Violation Detected</h1>
          <p style="font-size:1rem; color:#94A3B8; max-width:500px;">Developer Inspection Tools have been detected. For data safety and backend protection, inspecting this application is prohibited.</p>
          <button onclick="location.reload()" style="margin-top:1.5rem; background:#00E676; color:#000; border:none; padding:0.75rem 1.5rem; font-weight:800; border-radius:8px; cursor:pointer;">Reload Application 🔄</button>
        </div>
      `;
    }
  }, 1000);

})();
