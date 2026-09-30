/* Codes4U Master Application & Super Admin Engine */

const defaultStores = [
  {
    id: 'nike',
    name: 'Nike',
    category: 'fashion',
    domain: 'nike.com',
    health: '98% Health',
    discountTitle: '30% OFF + 10% Cash Back',
    discountDesc: 'Extra 30% Off Clearance & Footwear at Nike',
    logo: 'https://cdn.svgporn.com/logos/nike.svg',
    targetUrl: 'https://www.nike.com',
    cashback: '10% Cash Back',
    codes: [
      { title: '30% OFF Clearance Sneakers', code: 'SWISH30', desc: 'Extra 30% off footwear & activewear' },
      { title: 'Free Shipping No Min', code: 'NIKEPASS', desc: 'Free express shipping for Nike members' },
      { title: '20% OFF Member Exclusive', code: 'JUSTDOIT20', desc: 'Valid on select new releases' }
    ]
  },
  {
    id: 'macys',
    name: "Macy's",
    category: 'fashion',
    domain: 'macys.com',
    health: '97% Health',
    discountTitle: '25% OFF + 8% Cash Back',
    discountDesc: "Extra 25% Off Storewide & VIP Sale at Macy's",
    logo: 'https://cdn.svgporn.com/logos/macys.svg',
    targetUrl: 'https://www.macys.com',
    cashback: '8% Cash Back',
    codes: [
      { title: '25% OFF Storewide VIP Sale', code: 'MACYS25', desc: 'Extra 25% off fashion, shoes & home' },
      { title: '$10 OFF $25 Purchase', code: 'FIFTY10', desc: 'Valid on select apparel categories' }
    ]
  },
  {
    id: 'kohls',
    name: "Kohl's",
    category: 'fashion',
    domain: 'kohls.com',
    health: '96% Health',
    discountTitle: "15% OFF + $10 Kohl's Cash",
    discountDesc: "Extra 15% Off Your Order at Kohl's",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kohl%27s_logo.svg/1024px-Kohl%27s_logo.svg.png',
    targetUrl: 'https://www.kohls.com',
    cashback: '5% Cash Back',
    codes: [
      { title: '15% OFF Sitewide', code: 'TAKE15', desc: 'Take 15% off any order online' },
      { title: '$10 OFF $50 Home Goods', code: 'HOME10', desc: 'Bedding, kitchen & bath products' }
    ]
  },
  {
    id: 'homedepot',
    name: 'The Home Depot',
    category: 'home',
    domain: 'homedepot.com',
    health: '99% Health',
    discountTitle: 'Up to 30% OFF',
    discountDesc: '30% Off Power Tools & Major Appliances',
    logo: 'https://cdn.svgporn.com/logos/home-depot.svg',
    targetUrl: 'https://www.homedepot.com',
    cashback: '6% Cash Back',
    codes: [
      { title: '$10 OFF $50 Hardware', code: 'HOMEDEPOT10', desc: 'Valid on tools, hardware & garden' },
      { title: 'Free Delivery on Appliances', code: 'APPLIANCEFREE', desc: 'Free home delivery over $396' }
    ]
  },
  {
    id: 'dominos',
    name: "Domino's Pizza",
    category: 'food',
    domain: 'dominos.com',
    health: '99% Health',
    discountTitle: '50% OFF Pizza',
    discountDesc: "50% Off Any Menu Price Pizza at Domino's",
    logo: 'https://cdn.svgporn.com/logos/dominos-pizza.svg',
    targetUrl: 'https://www.dominos.com',
    cashback: '4% Cash Back',
    codes: [
      { title: '50% OFF Any Menu Price Pizza', code: '50OFFPIZZA', desc: 'Valid on online carryout orders' },
      { title: '$7.99 Carryout Deal', code: '9193', desc: '2-topping large pizzas or wings' }
    ]
  },
  {
    id: 'walgreens',
    name: 'Walgreens',
    category: 'top',
    domain: 'walgreens.com',
    health: '95% Health',
    discountTitle: '70% OFF Photo Prints',
    discountDesc: '70% Off Canvas Prints & Custom Photo Gifts',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Walgreens_logo.svg/1024px-Walgreens_logo.svg.png',
    targetUrl: 'https://www.walgreens.com',
    cashback: '12% Cash Back',
    codes: [
      { title: '70% OFF Photo Canvas & Books', code: 'PHOTO70', desc: 'Create custom gifts & wall decor' },
      { title: '20% OFF Beauty & Personal Care', code: 'BEAUTY20', desc: 'Skincare, makeup & vitamins' }
    ]
  },
  {
    id: 'sephora',
    name: 'Sephora',
    category: 'fashion',
    domain: 'sephora.com',
    health: '97% Health',
    discountTitle: '25% OFF + Free Gift',
    discountDesc: '25% Off Beauty Insider Pass & Skincare at Sephora',
    logo: 'https://cdn.svgporn.com/logos/sephora.svg',
    targetUrl: 'https://www.sephora.com',
    cashback: '10% Cash Back',
    codes: [
      { title: '25% OFF Beauty VIP Pass', code: 'BEAUTYVIP25', desc: 'Skincare, makeup palettes & fragrances' },
      { title: 'Free Deluxe Sample Kit', code: 'FREESAMPLE', desc: 'Free mini sample on orders over $35' }
    ]
  },
  {
    id: 'target',
    name: 'Target',
    category: 'top',
    domain: 'target.com',
    health: '95% Health',
    discountTitle: '15% OFF + $10 Gift Card',
    discountDesc: '15% Off Home & Essentials at Target',
    logo: 'https://cdn.svgporn.com/logos/target.svg',
    targetUrl: 'https://www.target.com',
    cashback: '5% Cash Back',
    codes: [
      { title: '15% OFF Target Circle', code: 'TARGETCIRCLE15', desc: 'Home decor, apparel & kitchen items' },
      { title: '$10 Gift Card on $50 Household', code: 'CLEAN10', desc: 'Laundry & home cleaning essentials' }
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    category: 'tech',
    domain: 'amazon.com',
    health: '94% Health',
    discountTitle: '$20 OFF Tech',
    discountDesc: '$20 Off $50 Prime Electronics at Amazon',
    logo: 'https://cdn.svgporn.com/logos/amazon-icon.svg',
    targetUrl: 'https://www.amazon.com',
    cashback: '3% Cash Back',
    codes: [
      { title: '$20 OFF $50 Electronics', code: 'PRIME20DEAL', desc: 'Valid on smart home & tech accessories' },
      { title: '15% OFF Pantry Essentials', code: 'AMAZON15', desc: 'Subscribe & Save additional discount' }
    ]
  },
  {
    id: 'walmart',
    name: 'Walmart',
    category: 'top',
    domain: 'walmart.com',
    health: '96% Health',
    discountTitle: '$10 OFF Grocery',
    discountDesc: '$10 Off First 3 Grocery Pickup Orders',
    logo: 'https://cdn.svgporn.com/logos/walmart.svg',
    targetUrl: 'https://www.walmart.com',
    cashback: '5% Cash Back',
    codes: [
      { title: '$10 OFF $50 First Order', code: 'SAVEMORE', desc: 'Valid for online pickup & delivery' },
      { title: '20% OFF Electronics Rollback', code: 'WALMART20', desc: 'TVs, laptops & audio equipment' }
    ]
  },
  {
    id: 'bestbuy',
    name: 'Best Buy',
    category: 'tech',
    domain: 'bestbuy.com',
    health: '95% Health',
    discountTitle: '15% OFF Laptops',
    discountDesc: '15% Off Select Laptops, Gaming & Audio',
    logo: 'https://cdn.svgporn.com/logos/bestbuy.svg',
    targetUrl: 'https://www.bestbuy.com',
    cashback: '4% Cash Back',
    codes: [
      { title: '15% OFF Student Laptop Deals', code: 'BESTBUY15', desc: 'MacBooks, Windows PCs & gaming gear' }
    ]
  },
  {
    id: 'wayfair',
    name: 'Wayfair',
    category: 'home',
    domain: 'wayfair.com',
    health: '94% Health',
    discountTitle: '20% OFF Furniture',
    discountDesc: '20% Off Furniture, Rugs & Lighting',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wayfair_logo.svg/1024px-Wayfair_logo.svg.png',
    targetUrl: 'https://www.wayfair.com',
    cashback: '7% Cash Back',
    codes: [
      { title: '20% OFF Living Room Refresh', code: 'HOME20', desc: 'Sofas, coffee tables & lighting' }
    ]
  },
  {
    id: 'ubereats',
    name: 'Uber Eats',
    category: 'food',
    domain: 'ubereats.com',
    health: '98% Health',
    discountTitle: '$20 OFF Orders',
    discountDesc: '$20 Off First 2 Orders of $25+',
    logo: 'https://cdn.svgporn.com/logos/uber-eats.svg',
    targetUrl: 'https://www.ubereats.com',
    cashback: '8% Cash Back',
    codes: [
      { title: '$20 OFF First 2 Delivery Orders', code: 'EATS20', desc: 'Valid on participating restaurants' }
    ]
  },
  {
    id: 'nordstrom',
    name: 'Nordstrom',
    category: 'fashion',
    domain: 'nordstrom.com',
    health: '95% Health',
    discountTitle: 'Up to 40% OFF',
    discountDesc: 'Up to 40% Off Designer Apparel & Shoes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nordstrom_logo.svg/1024px-Nordstrom_logo.svg.png',
    targetUrl: 'https://www.nordstrom.com',
    cashback: '6% Cash Back',
    codes: [
      { title: '40% OFF Designer Sale', code: 'ANNIVERSARY', desc: 'Free shipping & returns on all orders' }
    ]
  },
  {
    id: 'ebay',
    name: 'eBay',
    category: 'tech',
    domain: 'ebay.com',
    health: '93% Health',
    discountTitle: '15% OFF Refurbished',
    discountDesc: '15% Off Certified Refurbished Tech & Tools',
    logo: 'https://cdn.svgporn.com/logos/ebay.svg',
    targetUrl: 'https://www.ebay.com',
    cashback: '5% Cash Back',
    codes: [
      { title: '15% OFF Certified Refurbished', code: 'EBAYSAVE15', desc: 'Phones, laptops, consoles & tools' }
    ]
  },
  {
    id: 'harborfreight',
    name: 'Harbor Freight',
    category: 'home',
    domain: 'harborfreight.com',
    health: '100% Health',
    discountTitle: '10% OFF Storewide',
    discountDesc: '10% Off Storewide at Harbor Freight',
    logo: 'https://images.simplycodes.com/brand/harborfreight.com/logo.png?v=1',
    targetUrl: 'https://www.harborfreight.com',
    cashback: '5% Cash Back',
    codes: [
      { title: '10% OFF Storewide', code: '66380583', desc: '10% Off any purchase storewide' },
      { title: 'Free Express Shipping', code: 'FREESHIP2026', desc: 'Free delivery on orders over $50' },
      { title: '20% OFF Single Item', code: 'HFVIP20', desc: 'Valid on tools & power equipment' }
    ]
  },
  {
    id: 'shein',
    name: 'SHEIN',
    category: 'fashion',
    domain: 'shein.com',
    health: '98% Health',
    discountTitle: '20% OFF Sitewide',
    discountDesc: '20% Off Entire Order No Minimum at SHEIN',
    logo: 'https://cdn.svgporn.com/logos/shein.svg',
    targetUrl: 'https://www.shein.com',
    cashback: '10% Cash Back',
    codes: [
      { title: '20% OFF Sitewide', code: 'SPRING20', desc: '20% Off entire fashion cart' },
      { title: '$15 OFF $79 Order', code: 'SHEIN15', desc: 'Applicable to new collection items' }
    ]
  },
  {
    id: 'apple',
    name: 'Apple',
    category: 'tech',
    domain: 'apple.com',
    health: '99% Health',
    discountTitle: 'Free $150 Gift Card',
    discountDesc: 'Get up to $150 Gift Card on Mac & iPad for Education',
    logo: 'https://cdn.svgporn.com/logos/apple.svg',
    targetUrl: 'https://www.apple.com',
    cashback: '3% Cash Back',
    codes: [
      { title: 'Education Discount + Gift Card', code: 'EDUAPPLE2026', desc: 'Valid on MacBooks, iPad Pro & Apple Care' }
    ]
  },
  {
    id: 'adidas',
    name: 'Adidas',
    category: 'fashion',
    domain: 'adidas.com',
    health: '97% Health',
    discountTitle: '25% OFF + Free Delivery',
    discountDesc: '25% Off adiClub Member Exclusive & Clearance',
    logo: 'https://cdn.svgporn.com/logos/adidas.svg',
    targetUrl: 'https://www.adidas.com',
    cashback: '8% Cash Back',
    codes: [
      { title: '25% OFF adiClub Members', code: 'ADI25OFF', desc: 'Valid on Ultraboost, Samba & NMD' }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung',
    category: 'tech',
    domain: 'samsung.com',
    health: '96% Health',
    discountTitle: 'Up to $300 OFF Galaxy',
    discountDesc: 'Instant Trade-in Savings on Galaxy S24 & Fold',
    logo: 'https://cdn.svgporn.com/logos/samsung.svg',
    targetUrl: 'https://www.samsung.com',
    cashback: '6% Cash Back',
    codes: [
      { title: 'Extra $100 OFF Galaxy S24', code: 'GALAXY100', desc: 'Stackable with trade-in discount' }
    ]
  },
  {
    id: 'temu',
    name: 'Temu',
    category: 'top',
    domain: 'temu.com',
    health: '98% Health',
    discountTitle: '30% OFF App Coupon Bundle',
    discountDesc: '$100 Coupon Bundle + 30% Off First Order',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Temu_logo.svg/1024px-Temu_logo.svg.png',
    targetUrl: 'https://www.temu.com',
    cashback: '15% Cash Back',
    codes: [
      { title: '30% OFF $39 Order', code: 'TEMU30', desc: 'Valid for new app users' }
    ]
  },
  {
    id: 'aliexpress',
    name: 'AliExpress',
    category: 'tech',
    domain: 'aliexpress.com',
    health: '95% Health',
    discountTitle: '$12 OFF $80 Sitewide',
    discountDesc: 'Choice Day Super Deals & Fast Express Shipping',
    logo: 'https://cdn.svgporn.com/logos/aliexpress.svg',
    targetUrl: 'https://www.aliexpress.com',
    cashback: '7% Cash Back',
    codes: [
      { title: '$12 OFF $80 Order', code: 'CHOICE12', desc: 'Global Choice Day promo code' }
    ]
  },
  {
    id: 'ulta',
    name: 'Ulta Beauty',
    category: 'fashion',
    domain: 'ulta.com',
    health: '97% Health',
    discountTitle: '$3.50 OFF $15 Order',
    discountDesc: '$3.50 Off Qualifying Cosmetics & Fragrances',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ulta_Beauty_logo.svg/1024px-Ulta_Beauty_logo.svg.png',
    targetUrl: 'https://www.ulta.com',
    cashback: '8% Cash Back',
    codes: [
      { title: '$3.50 OFF $15 Purchase', code: 'ULTA350', desc: 'Valid on drugstore makeup & hair products' }
    ]
  },
  {
    id: 'doordash',
    name: 'DoorDash',
    category: 'food',
    domain: 'doordash.com',
    health: '99% Health',
    discountTitle: '50% OFF First 2 Orders',
    discountDesc: '50% Off Restaurant & Grocery Delivery',
    logo: 'https://cdn.svgporn.com/logos/doordash.svg',
    targetUrl: 'https://www.doordash.com',
    cashback: '5% Cash Back',
    codes: [
      { title: '50% OFF First Order', code: 'DASH50', desc: 'Save up to $15 on delivery' }
    ]
  },
  {
    id: 'lululemon',
    name: 'Lululemon',
    category: 'fashion',
    domain: 'lululemon.com',
    health: '96% Health',
    discountTitle: 'We Made Too Much Sale',
    discountDesc: 'Up to 50% Off Leggings, Sports Bras & Accessories',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1024px-Lululemon_Athletica_logo.svg.png',
    targetUrl: 'https://www.lululemon.com',
    cashback: '4% Cash Back',
    codes: [
      { title: 'Free Express Shipping & Returns', code: 'LULUFREE', desc: 'No minimum order required' }
    ]
  },
  {
    id: 'puma',
    name: 'Puma',
    category: 'fashion',
    domain: 'puma.com',
    health: '95% Health',
    discountTitle: '20% OFF Extra Sale',
    discountDesc: 'Extra 20% Off Sneakers & Streetwear',
    logo: 'https://cdn.svgporn.com/logos/puma.svg',
    targetUrl: 'https://www.puma.com',
    cashback: '9% Cash Back',
    codes: [
      { title: '20% OFF Footwear', code: 'PUMA20', desc: 'Valid on classic Suede & RS-X' }
    ]
  },
  {
    id: 'etsy',
    name: 'Etsy',
    category: 'top',
    domain: 'etsy.com',
    health: '98% Health',
    discountTitle: '15% OFF Handmade Gifts',
    discountDesc: '15% Off Custom Jewelry, Home & Vintage Goods',
    logo: 'https://cdn.svgporn.com/logos/etsy-icon.svg',
    targetUrl: 'https://www.etsy.com',
    cashback: '6% Cash Back',
    codes: [
      { title: '15% OFF Select Sellers', code: 'ETSYCREATIVE', desc: 'Handmade crafts & personalized gifts' }
    ]
  },
  {
    id: 'hm',
    name: 'H&M',
    category: 'fashion',
    domain: 'hm.com',
    health: '94% Health',
    discountTitle: '20% OFF Member First Order',
    discountDesc: '20% Off Fashion & Home Decor for H&M Members',
    logo: 'https://cdn.svgporn.com/logos/hm-icon.svg',
    targetUrl: 'https://www.hm.com',
    cashback: '7% Cash Back',
    codes: [
      { title: '20% OFF H&M Member Pass', code: 'HMMEMBER20', desc: 'Free delivery on orders over $40' }
    ]
  },
  {
    id: 'oldnavy',
    name: 'Old Navy',
    category: 'fashion',
    domain: 'oldnavy.com',
    health: '95% Health',
    discountTitle: '30% OFF Entire Purchase',
    discountDesc: '30% Off Jeans, Tees & Super Cash Rewards',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Old_Navy_logo.svg/1024px-Old_Navy_logo.svg.png',
    targetUrl: 'https://www.oldnavy.com',
    cashback: '6% Cash Back',
    codes: [
      { title: '30% OFF Sitewide', code: 'HURRY', desc: 'Take 30% off all apparel categories' }
    ]
  },
  {
    id: 'dell',
    name: 'Dell',
    category: 'tech',
    domain: 'dell.com',
    health: '96% Health',
    discountTitle: '10% OFF XPS & Alienware',
    discountDesc: 'Extra 10% Off Laptops, Gaming PCs & Monitors',
    logo: 'https://cdn.svgporn.com/logos/dell.svg',
    targetUrl: 'https://www.dell.com',
    cashback: '5% Cash Back',
    codes: [
      { title: '10% OFF Dell Laptops', code: 'SAVE10DELL', desc: 'Valid on XPS 13 & Alienware desktops' }
    ]
  },
  {
    id: 'hp',
    name: 'HP',
    category: 'tech',
    domain: 'hp.com',
    health: '95% Health',
    discountTitle: '$50 OFF $200 Laptop',
    discountDesc: '$50 Off Spectre & ENVY Laptops + Free Shipping',
    logo: 'https://cdn.svgporn.com/logos/hp.svg',
    targetUrl: 'https://www.hp.com',
    cashback: '6% Cash Back',
    codes: [
      { title: '$50 OFF $200 HP Order', code: 'HPSAVE50', desc: 'Valid on PCs, printers & ink' }
    ]
  },
  {
    id: 'asos',
    name: 'ASOS',
    category: 'fashion',
    domain: 'asos.com',
    health: '96% Health',
    discountTitle: '20% OFF App Exclusive',
    discountDesc: '20% Off Everything in the ASOS App',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/ASOS_logo.svg/1024px-ASOS_logo.svg.png',
    targetUrl: 'https://www.asos.com',
    cashback: '8% Cash Back',
    codes: [
      { title: '20% OFF Everything', code: 'ASOSAPP20', desc: 'Valid on 850+ fashion brands' }
    ]
  },
  {
    id: 'booking',
    name: 'Booking.com',
    category: 'top',
    domain: 'booking.com',
    health: '98% Health',
    discountTitle: '15% OFF Genius Travel',
    discountDesc: 'Save 15% or more on Hotels & Vacation Rentals',
    logo: 'https://cdn.svgporn.com/logos/booking.svg',
    targetUrl: 'https://www.booking.com',
    cashback: '10% Cash Back',
    codes: [
      { title: '15% OFF Genius Member Deals', code: 'GENIUS15', desc: 'Worldwide hotel & resort bookings' }
    ]
  },
  {
    id: 'expedia',
    name: 'Expedia',
    category: 'top',
    domain: 'expedia.com',
    health: '97% Health',
    discountTitle: '8% OFF Hotels',
    discountDesc: 'Extra 8% Off Member Hotel Reservations',
    logo: 'https://cdn.svgporn.com/logos/expedia.svg',
    targetUrl: 'https://www.expedia.com',
    cashback: '7% Cash Back',
    codes: [
      { title: '8% OFF Hotel Package', code: 'EXPEDIA8', desc: 'Save on flights + hotel bundles' }
    ]
  }
];

// Default User Logins Database with Rich Activity Metrics & Orders History
const defaultUserLogins = [
  {
    id: 'USR-8901',
    name: 'sarah_shopper@gmail.com',
    fullName: 'Sarah Shopper',
    ip: '192.168.1.42',
    loginTime: '2026-09-25 21:05:12',
    sessionStartMs: Date.now() - (35 * 60 * 1000 + 12 * 1000),
    codesUsed: 14,
    status: '🟢 Active',
    lastActive: '1 min ago',
    device: 'Windows 11 / Chrome 128',
    shoppingVisits: [
      { storeName: 'Harbor Freight', targetUrl: 'https://www.harborfreight.com', time: '21:10:45' },
      { storeName: 'Nike', targetUrl: 'https://www.nike.com', time: '21:22:15' },
      { storeName: 'SHEIN', targetUrl: 'https://www.shein.com', time: '21:30:00' }
    ],
    copiedCodes: ['SAVE10', 'SWISH30', 'SPRING20', 'HFVIP20'],
    orders: [
      {
        id: 'ORD-7821',
        storeName: 'Nike',
        logo: 'https://cdn.svgporn.com/logos/nike.svg',
        targetUrl: 'https://www.nike.com',
        code: 'SWISH30',
        discount: '30% OFF Clearance Sneakers',
        savedAmount: '$45.00',
        status: '🟢 Verified & Completed',
        date: '2026-09-28 12:30'
      },
      {
        id: 'ORD-6519',
        storeName: 'Harbor Freight',
        logo: 'https://images.simplycodes.com/brand/harborfreight.com/logo.png?v=1',
        targetUrl: 'https://www.harborfreight.com',
        code: 'HFVIP20',
        discount: '20% OFF Single Item',
        savedAmount: '$28.50',
        status: '🟢 Verified & Completed',
        date: '2026-09-27 18:45'
      },
      {
        id: 'ORD-5410',
        storeName: 'SHEIN',
        logo: 'https://cdn.svgporn.com/logos/shein.svg',
        targetUrl: 'https://www.shein.com',
        code: 'SPRING20',
        discount: '20% OFF Sitewide',
        savedAmount: '$18.20',
        status: '🟢 Verified & Completed',
        date: '2026-09-26 14:10'
      }
    ]
  },
  {
    id: 'USR-8902',
    name: 'alex.k@yahoo.com',
    fullName: 'Alex Kumar',
    ip: '172.16.0.88',
    loginTime: '2026-09-25 20:45:00',
    sessionStartMs: Date.now() - (52 * 60 * 1000 + 40 * 1000),
    codesUsed: 8,
    status: '🟢 Active',
    lastActive: '3 mins ago',
    device: 'macOS Sonoma / Safari 17',
    shoppingVisits: [
      { storeName: 'Amazon', targetUrl: 'https://www.amazon.com', time: '20:50:10' },
      { storeName: 'Sephora', targetUrl: 'https://www.sephora.com', time: '21:15:20' }
    ],
    copiedCodes: ['PRIME20DEAL', 'BEAUTYVIP25'],
    orders: [
      {
        id: 'ORD-4392',
        storeName: 'Amazon',
        logo: 'https://cdn.svgporn.com/logos/amazon-icon.svg',
        targetUrl: 'https://www.amazon.com',
        code: 'PRIME20DEAL',
        discount: '$20 OFF $50 Electronics',
        savedAmount: '$20.00',
        status: '🟢 Verified & Completed',
        date: '2026-09-27 20:15'
      },
      {
        id: 'ORD-3198',
        storeName: 'Sephora',
        logo: 'https://cdn.svgporn.com/logos/sephora.svg',
        targetUrl: 'https://www.sephora.com',
        code: 'BEAUTYVIP25',
        discount: '25% OFF Beauty VIP Pass',
        savedAmount: '$32.40',
        status: '🟢 Verified & Completed',
        date: '2026-09-26 11:05'
      }
    ]
  },
  {
    id: 'USR-8903',
    name: 'david_tech@outlook.com',
    fullName: 'David Miller',
    ip: '10.0.4.12',
    loginTime: '2026-09-25 19:30:15',
    sessionStartMs: Date.now() - (126 * 60 * 1000),
    codesUsed: 22,
    status: '🟢 Active',
    lastActive: '5 mins ago',
    device: 'Android 14 / Chrome Mobile',
    shoppingVisits: [
      { storeName: 'Apple', targetUrl: 'https://www.apple.com', time: '19:35:00' },
      { storeName: 'Target', targetUrl: 'https://www.target.com', time: '20:05:44' },
      { storeName: 'Airbnb', targetUrl: 'https://www.airbnb.com', time: '21:00:12' }
    ],
    copiedCodes: ['EDUAPPLE2026', 'TARGETCIRCLE15', 'EXPLORE50'],
    orders: [
      {
        id: 'ORD-8812',
        storeName: 'Target',
        logo: 'https://cdn.svgporn.com/logos/target.svg',
        targetUrl: 'https://www.target.com',
        code: 'TARGETCIRCLE15',
        discount: '15% OFF Target Circle',
        savedAmount: '$16.50',
        status: '🟢 Verified & Completed',
        date: '2026-09-27 15:20'
      }
    ]
  }
];

let storeData = [];
let userLogins = [];
let activeStore = null;
let activeUser = null;
let selectedUserId = null;
let udTimerInterval = null;
let isAdminLoggedIn = false;
let isUserLoggedIn = false;

// Analytics Counters
let metrics = {
  liveVisitors: 1284,
  userLogins: 452,
  codeCopies: 8940,
  shopRedirects: 3120
};

document.addEventListener('DOMContentLoaded', () => {
  loadStoreData();
  loadUserData();
  loadSiteSettings();
  renderStoreCards();
  setupSearch();
  checkUserSession();
  startLiveAnalyticsStream();
  startAdminAutoRefreshEngine();
  setupModalGlobalEvents();
});


// REST API Backend Client Integration
const API_BASE = window.location.origin.includes('http') ? window.location.origin : 'http://localhost:5000';

// Load stores from API backend or fallback to storage/defaults
async function loadStoreData() {
  try {
    const res = await fetch(`${API_BASE}/api/stores`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        storeData = data;
        renderStoreCards();
        return;
      }
    }
  } catch (e) {}

  const saved = localStorage.getItem('simplycodes_stores_data_v2');
  if (saved) {
    try {
      let parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Backfill missing categories & cashback info from defaultStores
        defaultStores.forEach(defStore => {
          let matched = parsed.find(s => s.id === defStore.id);
          if (matched) {
            matched.category = defStore.category || matched.category;
            if (defStore.cashback) matched.cashback = defStore.cashback;
          } else {
            parsed.push(defStore);
          }
        });
        storeData = parsed;
      } else {
        storeData = defaultStores;
      }
    } catch(e) {
      storeData = defaultStores;
    }
  } else {
    storeData = defaultStores;
  }

  // Fallback check to guarantee category on all items
  storeData.forEach(s => {
    if (!s.category) {
      const def = defaultStores.find(d => d.id === s.id);
      s.category = def ? def.category : 'top';
    }
  });

  saveStoresToStorage();
}

function saveStoresToStorage() {
  localStorage.setItem('simplycodes_stores_data_v2', JSON.stringify(storeData));
  // Sync to API backend if available
  fetch(`${API_BASE}/api/stores`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(storeData)
  }).catch(() => {});
}

// Load users from API backend or fallback
async function loadUserData() {
  try {
    const res = await fetch(`${API_BASE}/api/users`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        userLogins = data;
        if (!activeUser && userLogins.length > 0) activeUser = userLogins[0];
        return;
      }
    }
  } catch (e) {}

  const saved = localStorage.getItem('simplycodes_users_data_v3');
  if (saved) {
    try {
      userLogins = JSON.parse(saved);
      userLogins.forEach(u => {
        if (!u.orders) {
          const matchedDef = defaultUserLogins.find(d => d.id === u.id || d.name === u.name);
          u.orders = matchedDef && matchedDef.orders ? matchedDef.orders : [
            {
              id: 'ORD-7821',
              storeName: 'Nike',
              logo: 'https://cdn.svgporn.com/logos/nike.svg',
              targetUrl: 'https://www.nike.com',
              code: 'SWISH30',
              discount: '30% OFF Clearance Sneakers',
              savedAmount: '$45.00',
              status: '🟢 Verified & Completed',
              date: '2026-09-28 12:30'
            }
          ];
        }
      });
    } catch(e) {
      userLogins = defaultUserLogins;
    }
  } else {
    userLogins = defaultUserLogins;
    saveUsersToStorage();
  }
  if (!activeUser && userLogins.length > 0) activeUser = userLogins[0];
}

function saveUsersToStorage() {
  localStorage.setItem('simplycodes_users_data_v3', JSON.stringify(userLogins));
  refreshAdminViewsRealtime();
}

function ensureActiveUserSession() {
  if (!activeUser) {
    const savedUser = localStorage.getItem('simplycodes_user_session');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        const matched = userLogins.find(u => u.id === parsed.id || u.name === parsed.name);
        if (matched) {
          activeUser = matched;
          isUserLoggedIn = true;
          return activeUser;
        }
      } catch(e) {}
    }
    if (userLogins && userLogins.length > 0) {
      activeUser = userLogins[0];
    } else {
      activeUser = {
        id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
        name: 'guest_shopper@gmail.com',
        fullName: 'Guest Shopper',
        ip: '192.168.1.50',
        loginTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
        sessionStartMs: Date.now(),
        codesUsed: 0,
        status: '🟢 Active',
        lastActive: 'Just now',
        device: 'Web Browser',
        shoppingVisits: [],
        copiedCodes: [],
        orders: []
      };
      userLogins.unshift(activeUser);
      saveUsersToStorage();
    }
  }
  return activeUser;
}

function refreshAdminViewsRealtime() {
  const tbody = document.getElementById('adminUserTableBody');
  if (tbody && tbody.offsetParent !== null) {
    renderUserTable();
  }

  if (selectedUserId && document.getElementById('userDetailModal')?.classList.contains('active')) {
    const u = userLogins.find(user => user.id === selectedUserId);
    if (u) {
      const sCount = document.getElementById('udShoppingCount');
      const cCount = document.getElementById('udCodesCount');
      if (sCount) sCount.textContent = (u.shoppingVisits || []).length;
      if (cCount) cCount.textContent = (u.copiedCodes || []).length;

      const shoppingList = document.getElementById('udShoppingList');
      if (shoppingList) {
        const visits = u.shoppingVisits || [];
        if (visits.length === 0) {
          shoppingList.innerHTML = `<div style="font-size:0.82rem; color:var(--sc-text-muted);">No shopping redirects clicked yet.</div>`;
        } else {
          shoppingList.innerHTML = visits.map(v => `
            <div style="display:flex; justify-content:space-between; align-items:center; background:#F8FAFC; padding:0.5rem 0.75rem; border-radius:8px; border:1px solid #E2E8F0;">
              <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                <strong style="color:#0F172A; font-size:0.85rem;">🛍️ ${v.storeName}</strong>
                <a href="${v.targetUrl}" target="_blank" style="font-size:0.75rem; color:var(--sc-neon-green); text-decoration:underline;">${v.targetUrl}</a>
              </div>
              <span style="font-size:0.75rem; color:var(--sc-text-muted);">${v.time}</span>
            </div>
          `).join('');
        }
      }

      const codesList = document.getElementById('udCodesList');
      if (codesList) {
        const codes = u.copiedCodes || [];
        if (codes.length === 0) {
          codesList.innerHTML = `<div style="font-size:0.82rem; color:var(--sc-text-muted);">No codes copied yet.</div>`;
        } else {
          codesList.innerHTML = codes.map(c => `
            <span style="font-family:monospace; font-size:0.8rem; font-weight:800; color:var(--sc-neon-green); background:var(--sc-neon-green-bg); border:1px solid rgba(0,230,118,0.3); padding:0.2rem 0.6rem; border-radius:6px;">
              💎 ${c}
            </span>
          `).join('');
        }
      }
    }
  }

  const undoLogContainer = document.getElementById('adminUndoLogList');
  if (undoLogContainer && undoLogContainer.offsetParent !== null) {
    renderUndoLogList();
  }
}

function startAdminAutoRefreshEngine() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'simplycodes_users_data_v3' || e.key === 'codes4u_undo_logs_v1') {
      const saved = localStorage.getItem('simplycodes_users_data_v3');
      if (saved) {
        try { userLogins = JSON.parse(saved); } catch(err) {}
      }
      refreshAdminViewsRealtime();
    }
  });

  setInterval(() => {
    refreshAdminViewsRealtime();
  }, 1500);
}


// Category Filtering Engine
function filterStores(category, btnElement) {
  const tabs = document.querySelectorAll('.sc-tab-btn');
  tabs.forEach(t => {
    const clickAttr = t.getAttribute('onclick') || '';
    if (clickAttr.includes(`'${category}'`)) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  if (btnElement) btnElement.classList.add('active');

  let filtered = [];
  if (category === 'all') {
    filtered = storeData;
  } else if (category === 'top') {
    filtered = storeData.filter(s => 
      s.category === 'top' || 
      ['nike', 'macys', 'kohls', 'homedepot', 'dominos', 'walgreens', 'sephora', 'target', 'amazon', 'walmart', 'bestbuy'].includes(s.id)
    );
  } else if (category === 'cashback') {
    filtered = storeData.filter(s => 
      s.cashback || 
      (s.discountTitle && s.discountTitle.toLowerCase().includes('cash back'))
    );
  } else {
    filtered = storeData.filter(s => s.category === category || s.id === category);
  }

  renderFilteredStores(filtered);
}

function setupSearch() {
  const input = document.getElementById('heroSearchInput');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderStoreCards();
      return;
    }

    const filtered = storeData.filter(s => {
      const matchName = s.name.toLowerCase().includes(query);
      const matchDomain = (s.domain || '').toLowerCase().includes(query);
      const matchCategory = (s.category || '').toLowerCase().includes(query);
      const matchDiscount = (s.discountTitle || '').toLowerCase().includes(query);
      const matchCodes = (s.codes || []).some(c => (c.code || '').toLowerCase().includes(query) || (c.title || '').toLowerCase().includes(query));
      return matchName || matchDomain || matchCategory || matchDiscount || matchCodes;
    });

    renderFilteredStores(filtered);
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = input.value.toLowerCase().trim();
      const matched = storeData.find(s => s.name.toLowerCase() === query || s.id === query || (s.domain || '').toLowerCase().includes(query));
      if (matched) {
        openCouponModal(matched.id);
      } else {
        const grid = document.getElementById('storeGrid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

function quickSearch(storeId) {
  const s = storeData.find(item => item.id === storeId);
  if (s) {
    openCouponModal(s.id);
  } else {
    const input = document.getElementById('heroSearchInput');
    if (input) {
      input.value = storeId;
      input.dispatchEvent(new Event('input'));
    }
  }
}

// Render Store Cards Grid on Homepage
function renderStoreCards() {
  renderFilteredStores(storeData);
}

// 8 Distinct Vibrant Color Palettes for Every Store Box
const storeColorPalettes = [
  { // Pink / Magenta
    id: 'pink',
    pillBg: '#FDF2F8', pillBorder: '#FCE7F3', pillText: '#DB2777',
    codeBg: '#FDF2F8', codeBorder: '#EC4899', codeText: '#DB2777',
    btnBg: 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)', btnShadow: 'rgba(236, 72, 153, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)',
    cardBorder: '#EC4899', cardGlow: 'rgba(236, 72, 153, 0.15)'
  },
  { // Royal Blue
    id: 'blue',
    pillBg: '#EFF6FF', pillBorder: '#DBEAFE', pillText: '#0284C7',
    codeBg: '#EFF6FF', codeBorder: '#3B82F6', codeText: '#1D4ED8',
    btnBg: 'linear-gradient(135deg, #0264D8 0%, #1D4ED8 100%)', btnShadow: 'rgba(2, 100, 216, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    cardBorder: '#3B82F6', cardGlow: 'rgba(59, 130, 246, 0.15)'
  },
  { // Orange / Amber
    id: 'orange',
    pillBg: '#FFF7ED', pillBorder: '#FFEDD5', pillText: '#EA580C',
    codeBg: '#FFF7ED', codeBorder: '#F97316', codeText: '#C2410C',
    btnBg: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', btnShadow: 'rgba(249, 115, 22, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
    cardBorder: '#F97316', cardGlow: 'rgba(249, 115, 22, 0.15)'
  },
  { // Emerald Green
    id: 'green',
    pillBg: '#ECFDF5', pillBorder: '#A7F3D0', pillText: '#047857',
    codeBg: '#ECFDF5', codeBorder: '#10B981', codeText: '#047857',
    btnBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', btnShadow: 'rgba(16, 185, 129, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    cardBorder: '#10B981', cardGlow: 'rgba(16, 185, 129, 0.15)'
  },
  { // Purple / Violet
    id: 'purple',
    pillBg: '#F3E8FF', pillBorder: '#E9D5FF', pillText: '#7C3AED',
    codeBg: '#F3E8FF', codeBorder: '#8B5CF6', codeText: '#6D28D9',
    btnBg: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', btnShadow: 'rgba(139, 92, 246, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    cardBorder: '#8B5CF6', cardGlow: 'rgba(139, 92, 246, 0.15)'
  },
  { // Electric Cyan / Teal
    id: 'cyan',
    pillBg: '#E0F2FE', pillBorder: '#BAE6FD', pillText: '#0284C7',
    codeBg: '#E0F2FE', codeBorder: '#06B6D4', codeText: '#0369A1',
    btnBg: 'linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)', btnShadow: 'rgba(6, 182, 212, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)',
    cardBorder: '#06B6D4', cardGlow: 'rgba(6, 182, 212, 0.15)'
  },
  { // Crimson Red
    id: 'red',
    pillBg: '#FEF2F2', pillBorder: '#FCA5A5', pillText: '#DC2626',
    codeBg: '#FEF2F2', codeBorder: '#EF4444', codeText: '#B91C1C',
    btnBg: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', btnShadow: 'rgba(239, 68, 68, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    cardBorder: '#EF4444', cardGlow: 'rgba(239, 68, 68, 0.15)'
  },
  { // Golden Yellow / Amber
    id: 'gold',
    pillBg: '#FEF9C3', pillBorder: '#FDE047', pillText: '#B45309',
    codeBg: '#FEF9C3', codeBorder: '#F59E0B', codeText: '#B45309',
    btnBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', btnShadow: 'rgba(245, 158, 11, 0.3)',
    popularBadgeBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    cardBorder: '#F59E0B', cardGlow: 'rgba(245, 158, 11, 0.15)'
  }
];

// Helper to get distinct color theme for a store
function getStoreColorPalette(store, index) {
  const sId = (store.id || '').toLowerCase();
  const sName = (store.name || '').toLowerCase();

  if (sId.includes('shein') || sName.includes('shein') || sId.includes('ulta')) return storeColorPalettes[0]; // Pink
  if (sId.includes('nike') || sId.includes('sephora') || sId.includes('lululemon')) return storeColorPalettes[4]; // Purple
  if (sId.includes('amazon') || sId.includes('temu') || sId.includes('homedepot')) return storeColorPalettes[2]; // Orange
  if (sId.includes('harborfreight') || sId.includes('kohls')) return storeColorPalettes[3]; // Green
  if (sId.includes('target') || sId.includes('walgreens') || sId.includes('doordash') || sId.includes('hm')) return storeColorPalettes[6]; // Red
  if (sId.includes('apple') || sId.includes('macys') || sId.includes('puma') || sId.includes('dell')) return storeColorPalettes[5]; // Cyan
  if (sId.includes('ebay') || sId.includes('aliexpress') || sId.includes('etsy') || sId.includes('expedia')) return storeColorPalettes[7]; // Gold
  if (sId.includes('adidas') || sId.includes('oldnavy') || sId.includes('hp') || sId.includes('booking')) return storeColorPalettes[1]; // Blue

  return storeColorPalettes[index % storeColorPalettes.length];
}

// Render Filtered Stores (Every Box Uses A Unique Distinct Color Palette)
function renderFilteredStores(stores) {
  const grid = document.getElementById('storeGrid');
  if (!grid) return;
  grid.innerHTML = '';

  if (!stores || stores.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
        <div style="font-size: 2.5rem; margin-bottom: 0.6rem;">🛍️</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #0F172A; margin-bottom: 0.4rem;">No merchants currently found in this category</div>
        <div style="font-size: 0.85rem; color: var(--sc-text-sub); margin-bottom: 1.2rem;">Try selecting '🔥 Trending Today' to view all top merchants and coupons.</div>
        <button class="sc-cat-chip active" style="padding: 0.5rem 1.2rem; display: inline-block;" onclick="filterStores('all')">View All Stores</button>
      </div>
    `;
    return;
  }

  stores.forEach((store, idx) => {
    const palette = getStoreColorPalette(store, idx);
    const card = document.createElement('div');

    const isPopular = idx % 3 === 0 || store.id === 'shein' || store.id === 'nike' || store.id === 'harborfreight';

    card.className = `sc-grid-card`;
    card.style.borderColor = isPopular ? palette.cardBorder : '#E2E8F0';
    if (isPopular) {
      card.style.boxShadow = `0 8px 25px ${palette.cardGlow}`;
    }
    card.onclick = () => openCouponModal(store.id);

    const firstCodeObj = (store.codes && store.codes.length > 0) ? store.codes[0] : { code: store.code || 'DEAL2026' };
    const codeVal = firstCodeObj.code;
    const cashbackTag = store.cashback ? `<span class="sc-cashback-badge-green">💵 ${store.cashback}</span>` : '';

    let popularBadge = isPopular ? `<div class="sc-popular-badge" style="background: ${palette.popularBadgeBg};">👑 MOST POPULAR</div>` : '';

    card.innerHTML = `
      ${popularBadge}
      <div class="sc-grid-card-head">
        <div class="sc-card-logo-square">
          <img src="${store.logo}" alt="${store.name}" onerror="this.src='https://via.placeholder.com/46?text=${encodeURIComponent(store.name)}'">
        </div>
        <div style="flex:1; overflow:hidden;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:4px;">
            <div class="sc-card-store-name">${store.name}</div>
            ${cashbackTag}
          </div>
          <div class="sc-card-health-line">✔ ${store.health || '98% Health'} • Verified Today</div>
        </div>
      </div>

      <div style="background: ${palette.pillBg}; border: 1px solid ${palette.pillBorder}; color: ${palette.pillText}; font-size: 1.2rem; font-weight: 900; padding: 8px 12px; border-radius: 12px; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
        <span>🏷️</span>
        <span>${store.discountTitle}</span>
      </div>

      <div class="sc-card-desc-text">
        ${store.discountDesc || `${store.discountTitle} at ${store.name}`}
      </div>

      <div style="background: ${palette.codeBg}; border: 1.5px dashed ${palette.codeBorder}; border-radius: 10px; padding: 7px 12px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
        <div style="font-family: monospace; font-weight: 800; font-size: 0.88rem; color: ${palette.codeText}; display: flex; align-items: center; gap: 6px;">
          <span>🎟️</span>
          <span>${codeVal}</span>
        </div>
        <button class="sc-copy-btn-icon" onclick="event.stopPropagation(); handleCopySingleCode('${codeVal}', '${store.name}')" title="Copy Code">
          📋
        </button>
      </div>

      <button style="background: ${palette.btnBg}; color: #FFFFFF; font-weight: 800; font-size: 0.88rem; padding: 10px 16px; border-radius: 99px; width: 100%; border: none; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 14px ${palette.btnShadow};" onclick="event.stopPropagation(); openCouponModal('${store.id}')">
        Get Code &rarr;
      </button>

      <div class="sc-card-corner-wave" style="background: radial-gradient(circle, ${palette.cardBorder} 0%, transparent 70%);"></div>
    `;

    grid.appendChild(card);
  });
}



// Open Coupon Modal displaying MULTIPLE CODES per company
function openCouponModal(storeId) {
  const store = storeData.find(s => s.id === storeId);
  if (!store) return;

  activeStore = store;

  document.getElementById('modalLogoImg').src = store.logo;
  document.getElementById('modalDiscountText').textContent = store.discountTitle;
  document.getElementById('modalDescText').textContent = store.discountDesc || `${store.discountTitle} at ${store.name}`;

  // Multiple Codes List Rendering
  const codesList = document.getElementById('modalCodesList');
  if (codesList) {
    codesList.innerHTML = '';
    const codes = store.codes && store.codes.length > 0 
      ? store.codes 
      : [{ title: store.discountTitle, code: store.code || 'SAVE10', desc: store.discountDesc }];

    document.getElementById('modalCodeCount').textContent = codes.length;

    codes.forEach((cItem, i) => {
      const codeRow = document.createElement('div');
      codeRow.className = 'sc-modal-code-item';
      codeRow.innerHTML = `
        <div class="sc-modal-code-info">
          <div class="sc-modal-code-title">${cItem.title}</div>
          <div class="sc-modal-code-val">💎 ${cItem.code}</div>
        </div>
        <button class="sc-code-copy-btn" onclick="handleCopySingleCode('${cItem.code}', '${store.name}')">
          Copy Code
        </button>
      `;
      codesList.appendChild(codeRow);
    });

    // Auto copy first code to clipboard
    navigator.clipboard.writeText(codes[0].code).catch(() => {});
  }

  const shopBtn = document.getElementById('modalShopBtn');
  shopBtn.textContent = `Shop at ${store.name}`;
  shopBtn.onclick = () => redirectToCompany(store.targetUrl);

  const modal = document.getElementById('couponModal');
  if (modal) modal.classList.add('active');
}

function closeCouponModal() {
  const modal = document.getElementById('couponModal');
  if (modal) modal.classList.remove('active');
}

// Create / Record live order entry for active logged-in user
function createOrderRecordForUser(storeObj, codeVal) {
  if (!activeUser) return;
  if (!activeUser.orders) activeUser.orders = [];

  const store = storeObj || activeStore || (storeData && storeData[0]) || { name: 'Merchant Store', logo: 'https://via.placeholder.com/40', targetUrl: '#' };
  const sName = store.name || 'Merchant Store';
  const cCode = codeVal || (store.codes && store.codes.length > 0 ? store.codes[0].code : 'DEAL2026');

  // Prevent immediate duplicate order
  const existingRecent = activeUser.orders.find(o => o.storeName === sName && o.code === cCode);
  if (!existingRecent) {
    const newOrd = {
      id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
      storeName: sName,
      logo: store.logo || 'https://via.placeholder.com/40',
      targetUrl: store.targetUrl || '#',
      code: cCode,
      discount: store.discountTitle || 'Special Discount',
      savedAmount: '$' + (12 + Math.floor(Math.random() * 32)) + '.50',
      status: '🟢 Verified & Completed',
      date: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    activeUser.orders.unshift(newOrd);
  }
}

// Copy single code & track under active user
function handleCopySingleCode(code, storeName) {
  const user = ensureActiveUserSession();
  navigator.clipboard.writeText(code).then(() => {
    metrics.codeCopies += 1;
    updateAnalyticsUI();

    if (user) {
      if (!user.copiedCodes) user.copiedCodes = [];
      if (!user.copiedCodes.includes(code)) {
        user.copiedCodes.push(code);
      }
      user.codesUsed = (user.codesUsed || 0) + 1;
      user.lastActive = 'Just now';
      createOrderRecordForUser(activeStore, code);
      saveUsersToStorage();
      addActivityLog(`Shopper ${user.name || user.id} copied code [${code}] for ${storeName || 'Store'}`);
    }
    showToast(`💎 Code '${code}' copied to clipboard!`);
  }).catch(() => {
    showToast(`💎 Code '${code}' copied!`);
  });
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const item = document.createElement('div');
  item.className = 'sc-toast-item';
  item.innerHTML = `<span>✨</span> <div>${msg}</div>`;
  container.appendChild(item);
  setTimeout(() => {
    item.style.animation = 'scToastIn 0.3s reverse forwards';
    setTimeout(() => item.remove(), 300);
  }, 2800);
}

function toggleNavMenu() {
  const modal = document.getElementById('navMenuModal');
  if (modal) {
    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
    } else {
      modal.classList.add('active');
    }
  }
}

function closeNavMenu() {
  const modal = document.getElementById('navMenuModal');
  if (modal) modal.classList.remove('active');
}

function setupModalGlobalEvents() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCouponModal();
      closeAuthModal();
      closeAdminDashboardModal();
      closeUserDetailModal();
      closeUserDashboardModal();
      closeStoresDirectory();
      closeNavMenu();
    }
  });

  const overlays = document.querySelectorAll('.sc-modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeCouponModal();
        closeAuthModal();
        closeAdminDashboardModal();
        closeUserDetailModal();
        closeUserDashboardModal();
        closeStoresDirectory();
        closeNavMenu();
      }
    });
  });
}

// ==========================================
// ALL STORES & COUPONS DIRECTORY (simplycodes.com/stores)
// ==========================================

let activeDirectoryAlpha = 'ALL';

function openStoresDirectory() {
  const modal = document.getElementById('allStoresModal');
  if (modal) modal.classList.add('active');
  renderStoresDirectory(storeData);
}

function closeStoresDirectory() {
  const modal = document.getElementById('allStoresModal');
  if (modal) modal.classList.remove('active');
}

function filterStoresDirectory() {
  const input = document.getElementById('directorySearchInput');
  const query = input ? input.value.toLowerCase().trim() : '';

  let list = storeData;
  if (activeDirectoryAlpha !== 'ALL') {
    list = list.filter(s => s.name.toUpperCase().startsWith(activeDirectoryAlpha));
  }

  if (query) {
    list = list.filter(s => {
      const mName = s.name.toLowerCase().includes(query);
      const mDomain = (s.domain || '').toLowerCase().includes(query);
      const mCodes = (s.codes || []).some(c => c.code.toLowerCase().includes(query) || c.title.toLowerCase().includes(query));
      return mName || mDomain || mCodes;
    });
  }

  renderStoresDirectory(list);
}

function filterStoresByAlpha(alpha) {
  activeDirectoryAlpha = alpha;
  const alphaBtns = document.querySelectorAll('[id^="alpha-"]');
  alphaBtns.forEach(btn => btn.classList.remove('active'));

  const activeBtn = document.getElementById(`alpha-${alpha}`);
  if (activeBtn) activeBtn.classList.add('active');

  filterStoresDirectory();
}

function renderStoresDirectory(stores) {
  const grid = document.getElementById('directoryStoresGrid');
  if (!grid) return;
  grid.innerHTML = '';

  if (!stores || stores.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #11171F; border: 1px solid var(--sc-border); border-radius: 14px; color: var(--sc-text-sub);">
        No stores found matching your search.
      </div>
    `;
    return;
  }

  stores.forEach(st => {
    const card = document.createElement('div');
    card.style.background = '#11171F';
    card.style.border = '1px solid var(--sc-border)';
    card.style.borderRadius = '14px';
    card.style.padding = '1.2rem';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '0.8rem';
    card.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';

    const codes = st.codes || [{ title: st.discountTitle, code: st.code || 'SAVE10', desc: st.discountDesc }];
    const cashback = st.cashback ? `<span class="sc-cashback-badge" style="font-size: 0.7rem;">💵 ${st.cashback}</span>` : '';

    let codesHtml = codes.map(c => `
      <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.5rem 0.75rem; border-radius: 8px;">
        <div>
          <div style="font-size: 0.8rem; font-weight: 700; color: #0F172A;">${c.title}</div>
          <div style="font-family: monospace; font-size: 0.82rem; font-weight: 800; color: var(--sc-neon-green);">💎 ${c.code}</div>
        </div>
        <button class="sc-admin-btn-save" style="font-size: 0.72rem; padding: 0.25rem 0.6rem;" onclick="handleCopySingleCode('${c.code}', '${st.name}')">
          Copy 📋
        </button>
      </div>
    `).join('');

    card.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.6rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${st.logo}" alt="${st.name}" style="width: 38px; height: 38px; object-fit: contain; background: #FFF; border-radius: 8px; padding: 3px;" onerror="this.src='https://via.placeholder.com/38'">
          <div>
            <strong style="color: #0F172A; font-size: 1rem; display: block;">${st.name}</strong>
            <span style="font-size: 0.75rem; color: var(--sc-text-muted);">${st.domain}</span>
          </div>
        </div>
        ${cashback}
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.4rem;">
        <div style="font-size: 0.75rem; font-weight: 800; color: var(--sc-neon-green); text-transform: uppercase;">
          Verified Coupons (${codes.length})
        </div>
        ${codesHtml}
      </div>

      <button class="sc-modal-shop-btn" style="padding: 0.55rem; font-size: 0.82rem; border-radius: 8px; margin-top: auto;" onclick="redirectToCompany('${st.targetUrl}')">
        Visit ${st.name} & Apply Deals ↗
      </button>
    `;

    grid.appendChild(card);
  });
}

// Open Official Company Website URL in New Tab (Target URL configured by Super Admin) & track shopping visit & order
function redirectToCompany(url) {
  if (url) {
    const user = ensureActiveUserSession();
    metrics.shopRedirects += 1;
    updateAnalyticsUI();

    if (user) {
      if (!user.shoppingVisits) user.shoppingVisits = [];
      const sName = activeStore ? activeStore.name : 'Merchant Store';
      user.shoppingVisits.unshift({
        storeName: sName,
        targetUrl: url,
        time: new Date().toLocaleTimeString()
      });
      user.codesUsed = (user.codesUsed || 0) + 1;
      user.lastActive = 'Just now';
      createOrderRecordForUser(activeStore, activeStore && activeStore.codes ? activeStore.codes[0].code : 'DEAL2026');
      saveUsersToStorage();
      addActivityLog(`Shopper ${user.name || user.id} clicked shop redirect for ${sName} → ${url}`);
    }

    window.open(url, '_blank');
  }
}

// ==========================================
// USER AUTHENTICATION & LOGIN / SIGN UP LOGIC
// ==========================================

function getAdminCredentials() {
  const savedUser = localStorage.getItem('simplycodes_admin_username');
  const savedPass = localStorage.getItem('simplycodes_admin_password');
  return {
    username: savedUser || 'superadmin',
    password: savedPass || 'superadmin123'
  };
}

function saveAdminCredentials(newUsername, newPassword) {
  localStorage.setItem('simplycodes_admin_username', newUsername);
  localStorage.setItem('simplycodes_admin_password', newPassword);
}

function openAuthModal() {
  if (isUserLoggedIn && activeUser && !isAdminLoggedIn) {
    openUserDashboardModal();
  } else if (isAdminLoggedIn) {
    openAdminDashboard();
  } else {
    showLoginView();
    document.getElementById('authModal').classList.add('active');
  }
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
}

function showForgotPasswordView() {
  const loginForm = document.getElementById('authLoginForm');
  const signupForm = document.getElementById('authSignupForm');
  const forgotForm = document.getElementById('authForgotForm');
  const tabsHeader = document.querySelector('.sc-auth-tabs');

  if (loginForm) loginForm.style.display = 'none';
  if (signupForm) signupForm.style.display = 'none';
  if (forgotForm) forgotForm.style.display = 'block';
  if (tabsHeader) tabsHeader.style.display = 'none';
}

function saveRememberedCredentials(username, password) {
  localStorage.setItem('codes4u_remembered_creds', JSON.stringify({
    username: username,
    password: password,
    remember: true
  }));
}

function clearRememberedCredentials() {
  localStorage.removeItem('codes4u_remembered_creds');
}

function loadRememberedCredentials() {
  const saved = localStorage.getItem('codes4u_remembered_creds');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data && data.remember) {
        const uInput = document.getElementById('loginUsername');
        const pInput = document.getElementById('loginPassword');
        const rCheck = document.getElementById('rememberPasswordCheck');

        if (uInput && data.username) uInput.value = data.username;
        if (pInput && data.password) pInput.value = data.password;
        if (rCheck) rCheck.checked = true;
      }
    } catch(e) {}
  }
}

function showLoginView() {
  const loginForm = document.getElementById('authLoginForm');
  const signupForm = document.getElementById('authSignupForm');
  const forgotForm = document.getElementById('authForgotForm');
  const tabsHeader = document.querySelector('.sc-auth-tabs');

  if (forgotForm) forgotForm.style.display = 'none';
  if (tabsHeader) tabsHeader.style.display = 'flex';
  switchAuthTab('login');
  loadRememberedCredentials();
}

function switchAuthTab(tab) {
  const loginTabBtn = document.getElementById('authTabLoginBtn');
  const signupTabBtn = document.getElementById('authTabSignupBtn');
  const loginForm = document.getElementById('authLoginForm');
  const signupForm = document.getElementById('authSignupForm');
  const forgotForm = document.getElementById('authForgotForm');
  const tabsHeader = document.querySelector('.sc-auth-tabs');

  if (tabsHeader) tabsHeader.style.display = 'flex';
  if (forgotForm) forgotForm.style.display = 'none';

  if (tab === 'login') {
    loginTabBtn.classList.add('active');
    signupTabBtn.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    signupTabBtn.classList.add('active');
    loginTabBtn.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  }
}

// Handle Log In Submit (Supports REST API Backend, User, Admin, and Super Admin)
async function handleUserLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('loginUsername').value.trim();
  const passwordInput = document.getElementById('loginPassword').value.trim();
  const rCheck = document.getElementById('rememberPasswordCheck');
  const err = document.getElementById('loginErrorMsg');
  const blockedErr = document.getElementById('loginBlockedMsg');

  if (err) err.style.display = 'none';
  if (blockedErr) blockedErr.style.display = 'none';

  if (rCheck && rCheck.checked) {
    saveRememberedCredentials(usernameInput, passwordInput);
  } else {
    clearRememberedCredentials();
  }

  // 1. Try Server REST API Authentication first
  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: usernameInput, password: passwordInput })
    });
    const result = await res.json();
    if (res.ok && result.success) {
      if (result.role === 'admin') {
        isAdminLoggedIn = true;
        localStorage.setItem('simplycodes_superadmin_session', 'true');
        closeAuthModal();
        openAdminDashboard();
        alert('🔑 Welcome Super Admin! Authenticated via REST API Server.');
        return;
      } else if (result.role === 'user' && result.user) {
        let matched = userLogins.find(u => u.id === result.user.id || u.name === result.user.name);
        if (!matched) {
          matched = { id: result.user.id, name: result.user.name, fullName: result.user.fullName, orders: [], copiedCodes: [], shoppingVisits: [], status: '🟢 Active' };
          userLogins.unshift(matched);
        }
        activeUser = matched;
        isUserLoggedIn = true;
        localStorage.setItem('simplycodes_user_session', JSON.stringify({ id: activeUser.id, name: activeUser.name }));
        closeAuthModal();
        updateUserAuthNavBtn();
        metrics.userLogins += 1;
        updateAnalyticsUI();
        alert(`Welcome back, ${activeUser.fullName || activeUser.name}!`);
        return;
      }
    } else if (res.status === 403) {
      if (blockedErr) blockedErr.style.display = 'block';
      return;
    }
  } catch(e) {}

  // 2. Local Fallback Verification
  const adminCreds = getAdminCredentials();
  if (
    usernameInput.toLowerCase() === adminCreds.username.toLowerCase() &&
    passwordInput === adminCreds.password
  ) {
    isAdminLoggedIn = true;
    localStorage.setItem('simplycodes_superadmin_session', 'true');
    closeAuthModal();
    openAdminDashboard();
    alert('🔑 Welcome Super Admin! Accessing 100% Full-Screen Control Center...');
    return;
  }

  const uLower = usernameInput.toLowerCase();
  let user = userLogins.find(u => u.name.toLowerCase() === uLower || u.id.toLowerCase() === uLower);

  if (user) {
    if (user.status && user.status.includes('Blocked')) {
      if (blockedErr) blockedErr.style.display = 'block';
      return;
    }
    activeUser = user;
  } else {
    if (err) {
      err.textContent = 'Account not found! Check your credentials or click Sign Up.';
      err.style.display = 'block';
    }
    return;
  }

  isUserLoggedIn = true;
  activeUser.lastActive = 'Just now';
  saveUsersToStorage();
  localStorage.setItem('simplycodes_user_session', JSON.stringify({ id: activeUser.id, name: activeUser.name }));

  closeAuthModal();
  updateUserAuthNavBtn();
  metrics.userLogins += 1;
  updateAnalyticsUI();
  alert(`Welcome back, ${activeUser.name}!`);
}

// Handle Forgot Password Reset
function handleForgotPassword(e) {
  e.preventDefault();
  const identity = document.getElementById('forgotUserIdentity').value.trim();
  const newPass = document.getElementById('forgotNewPassword').value.trim();
  const msg = document.getElementById('forgotSuccessMsg');

  if (!identity || !newPass) {
    alert('Please enter your Account Username/Email and new password.');
    return;
  }

  const adminCreds = getAdminCredentials();
  if (identity.toLowerCase() === adminCreds.username.toLowerCase() || identity.toLowerCase() === 'superadmin') {
    saveAdminCredentials(adminCreds.username, newPass);
    if (msg) {
      msg.textContent = '✅ Super Admin password updated successfully! Please log in with your new password.';
      msg.style.display = 'block';
    }
    setTimeout(() => {
      showLoginView();
      if (msg) msg.style.display = 'none';
    }, 2000);
    return;
  }

  // Check regular users
  let user = userLogins.find(u => u.name.toLowerCase() === identity.toLowerCase() || u.id.toLowerCase() === identity.toLowerCase());
  if (user) {
    if (msg) {
      msg.textContent = `✅ Password reset successful for user ${user.name}! You can now log in.`;
      msg.style.display = 'block';
    }
    setTimeout(() => {
      showLoginView();
      if (msg) msg.style.display = 'none';
    }, 2000);
  } else {
    alert('No matching User or Admin account found with that Username/Email.');
  }
}

// Handle Super Admin Password & Security Settings Update from Tab 4
function handleAdminPasswordChange(e) {
  e.preventDefault();
  const newUsername = document.getElementById('adminNewUsername').value.trim();
  const newPassword = document.getElementById('adminNewPassword').value.trim();
  const confirmPassword = document.getElementById('adminConfirmPassword').value.trim();

  if (!newUsername || !newPassword || !confirmPassword) {
    alert('Please fill in all fields!');
    return;
  }

  if (newPassword !== confirmPassword) {
    alert('Passwords do not match! Please re-type your new password.');
    return;
  }

  saveAdminCredentials(newUsername, newPassword);
  alert(`🔐 Super Admin credentials updated successfully!\n\nNew Username: ${newUsername}\nNew Password: ${newPassword}`);
}



// Handle Sign Up Submit (REST API Backend & Local Fallback)
async function handleUserSignup(e) {
  e.preventDefault();
  const nameInput = document.getElementById('signupName').value.trim();
  const emailInput = document.getElementById('signupEmail').value.trim();
  const passwordInput = document.getElementById('signupPassword').value.trim();
  const err = document.getElementById('signupErrorMsg');

  if (!emailInput || !nameInput || !passwordInput) {
    if (err) err.style.display = 'block';
    return;
  }
  if (err) err.style.display = 'none';

  // 1. Try REST API Backend Registration
  try {
    const res = await fetch(`${API_BASE}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailInput, name: nameInput, password: passwordInput })
    });
    const result = await res.json();
    if (res.ok && result.success && result.user) {
      let matched = userLogins.find(u => u.id === result.user.id || u.name === result.user.name);
      if (!matched) {
        matched = {
          id: result.user.id,
          name: result.user.name,
          fullName: result.user.fullName || nameInput,
          status: '🟢 Active',
          orders: [],
          copiedCodes: [],
          shoppingVisits: []
        };
        userLogins.unshift(matched);
      }
      activeUser = matched;
      isUserLoggedIn = true;
      localStorage.setItem('simplycodes_user_session', JSON.stringify({ id: activeUser.id, name: activeUser.name }));
      closeAuthModal();
      updateUserAuthNavBtn();
      metrics.userLogins += 1;
      updateAnalyticsUI();
      alert(`🎉 Account registered on secure server! Welcome, ${nameInput}.`);
      return;
    }
  } catch(e) {}

  // 2. Local Fallback
  let existing = userLogins.find(u => u.name.toLowerCase() === emailInput.toLowerCase());
  if (existing) {
    if (existing.status.includes('Blocked')) {
      alert('This account is currently blocked by Super Admin.');
      return;
    }
    activeUser = existing;
  } else {
    const newId = 'USR-' + Math.floor(1000 + Math.random() * 9000);
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);

    const newUser = {
      id: newId,
      name: emailInput,
      fullName: nameInput,
      ip: '192.168.1.' + Math.floor(Math.random() * 200 + 10),
      loginTime: nowStr,
      sessionStartMs: Date.now(),
      codesUsed: 0,
      status: '🟢 Active',
      lastActive: 'Just signed up',
      device: 'Web Browser',
      shoppingVisits: [],
      copiedCodes: [],
      orders: []
    };

    userLogins.unshift(newUser);
    saveUsersToStorage();
    activeUser = newUser;
    renderUserTable();
    addActivityLog(`✨ New User Registered: ${newId} (${emailInput})`);
  }

  isUserLoggedIn = true;
  localStorage.setItem('simplycodes_user_session', JSON.stringify({ id: activeUser.id, name: activeUser.name }));

  closeAuthModal();
  updateUserAuthNavBtn();
  metrics.userLogins += 1;
  updateAnalyticsUI();

  alert(`🎉 Account created successfully! Welcome, ${nameInput || emailInput}.`);
}

// Update Top Navigation Button UI
function updateUserAuthNavBtn() {
  const btn = document.getElementById('userAuthNavBtn');
  if (!btn) return;

  if (isAdminLoggedIn) {
    btn.innerHTML = `👑 Super Admin Panel`;
    btn.style.background = 'linear-gradient(135deg, #1D61E7, #0284C7)';
    btn.style.color = '#FFFFFF';
    btn.style.border = '1px solid #1D61E7';
    btn.onclick = () => openAdminDashboard();
  } else if (isUserLoggedIn && activeUser) {
    const displayName = activeUser.fullName || activeUser.name.split('@')[0];
    btn.innerHTML = `👤 ${displayName}`;
    btn.style.background = 'rgba(0, 230, 118, 0.15)';
    btn.style.color = 'var(--sc-neon-green)';
    btn.style.border = '1px solid var(--sc-neon-green)';
    btn.onclick = () => openUserDashboardModal();
  } else {
    btn.innerHTML = '👤 Log In / Sign Up';
    btn.style.background = 'linear-gradient(135deg, #00E676, #00C853)';
    btn.style.color = '#000000';
    btn.style.border = '1px solid #00E676';
    btn.onclick = () => openAuthModal();
  }
}

// Restore active session on load (Restores both Super Admin and User Logins permanently across refreshes)
function checkUserSession() {
  // 1. Check Super Admin Session
  const savedAdmin = localStorage.getItem('simplycodes_superadmin_session');
  if (savedAdmin === 'true') {
    isAdminLoggedIn = true;
  }

  // 2. Check Regular User Session
  const savedUser = localStorage.getItem('simplycodes_user_session');
  if (savedUser) {
    try {
      const parsed = JSON.parse(savedUser);
      let matched = userLogins.find(u => u.id === parsed.id || u.name === parsed.name);
      if (!matched && parsed.name) {
        matched = {
          id: parsed.id || ('USR-' + Math.floor(1000 + Math.random() * 9000)),
          name: parsed.name,
          fullName: parsed.fullName || parsed.name.split('@')[0],
          status: '🟢 Active',
          loginTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
          sessionStartMs: Date.now(),
          codesUsed: 0,
          orders: [],
          copiedCodes: [],
          shoppingVisits: []
        };
        userLogins.unshift(matched);
        saveUsersToStorage();
      }
      if (matched) {
        activeUser = matched;
        isUserLoggedIn = true;
      }
    } catch(e) {}
  }

  updateUserAuthNavBtn();
}

// Log out user
function logoutUser() {
  isUserLoggedIn = false;
  isAdminLoggedIn = false;
  activeUser = null;
  localStorage.removeItem('simplycodes_user_session');
  localStorage.removeItem('simplycodes_superadmin_session');
  updateUserAuthNavBtn();
  alert('🚪 You have logged out successfully.');
}

// ==========================================
// LOGGED-IN USER DASHBOARD & HISTORY LOGIC
// ==========================================

function openUserDashboardModal() {
  if (!activeUser) return;

  renderUserDashboard();
  switchUserTab('orders');
  const modal = document.getElementById('userDashboardModal');
  if (modal) modal.classList.add('active');
}

function closeUserDashboardModal() {
  const modal = document.getElementById('userDashboardModal');
  if (modal) modal.classList.remove('active');
}

function switchUserTab(tabName) {
  const tabs = ['orders', 'codes', 'visits', 'account'];
  tabs.forEach(t => {
    const btn = document.getElementById(`userTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const content = document.getElementById(`userTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) {
      if (t === tabName) btn.classList.add('active');
      else btn.classList.remove('active');
    }
    if (content) {
      if (t === tabName) content.style.display = 'block';
      else content.style.display = 'none';
    }
  });
}

function renderUserDashboard() {
  if (!activeUser) return;

  // Profile Header & Info
  const dName = document.getElementById('userDashName');
  const dEmail = document.getElementById('userDashEmail');
  const dBadge = document.getElementById('userDashBadge');

  const displayName = activeUser.fullName || activeUser.name.split('@')[0];
  if (dName) dName.textContent = `Hello, ${displayName} 👋`;
  if (dEmail) dEmail.textContent = `Email: ${activeUser.name} | User ID: ${activeUser.id}`;
  if (dBadge) dBadge.textContent = activeUser.status || '🟢 Verified Shopper';

  // Metrics Counters
  const orders = activeUser.orders || [];
  const codes = activeUser.copiedCodes || [];
  const visits = activeUser.shoppingVisits || [];

  let totalSavedNum = 0;
  orders.forEach(o => {
    if (o.savedAmount) {
      const num = parseFloat(o.savedAmount.replace(/[^0-9.]/g, ''));
      if (!isNaN(num)) totalSavedNum += num;
    }
  });

  const mOrders = document.getElementById('userDashTotalOrders');
  const mCodes = document.getElementById('userDashTotalCodes');
  const mSaved = document.getElementById('userDashTotalSaved');

  if (mOrders) mOrders.textContent = orders.length;
  if (mCodes) mCodes.textContent = codes.length;
  if (mSaved) mSaved.textContent = `$${totalSavedNum.toFixed(2)}`;

  // TAB 1: ORDERS LIST RENDERING
  const ordersContainer = document.getElementById('userOrdersList');
  if (ordersContainer) {
    ordersContainer.innerHTML = '';
    if (orders.length === 0) {
      ordersContainer.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🛒</div>
          <div style="font-size: 1.05rem; font-weight: 800; color: #0F172A; margin-bottom: 0.3rem;">No Orders Recorded Yet</div>
          <div style="font-size: 0.82rem; color: var(--sc-text-sub);">Copy a promo code or click 'Shop at Merchant' on any store to record your checkout!</div>
        </div>
      `;
    } else {
      orders.forEach(ord => {
        const item = document.createElement('div');
        item.className = 'sc-order-card';
        item.innerHTML = `
          <div class="sc-order-header">
            <div class="sc-order-store-info">
              <img src="${ord.logo}" alt="${ord.storeName}" class="sc-order-logo" onerror="this.src='https://via.placeholder.com/38'">
              <div>
                <div class="sc-order-title">${ord.storeName}</div>
                <div style="font-size: 0.75rem; color: var(--sc-text-muted);">Placed on: ${ord.date}</div>
              </div>
            </div>
            <span class="sc-order-id-tag">#${ord.id}</span>
          </div>

          <div class="sc-order-body">
            <div>
              <div class="sc-order-discount-pill">
                💎 Code: <span style="color: var(--sc-neon-green); font-family: monospace;">${ord.code}</span>
              </div>
              <div style="font-size: 0.82rem; color: var(--sc-text-sub); margin-top: 0.2rem;">
                ${ord.discount}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
              <span class="sc-order-saving-tag">💵 Saved ${ord.savedAmount}</span>
              <button class="sc-order-visit-btn" onclick="redirectToCompany('${ord.targetUrl}')">
                Re-visit Store ↗
              </button>
            </div>
          </div>
        `;
        ordersContainer.appendChild(item);
      });
    }
  }

  // TAB 2: COPIED CODES RENDERING
  const codesContainer = document.getElementById('userCodesList');
  if (codesContainer) {
    codesContainer.innerHTML = '';
    if (codes.length === 0) {
      codesContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; background: #11171F; border: 1px solid var(--sc-border); border-radius: 14px; color: var(--sc-text-sub);">
          No promo codes copied yet.
        </div>
      `;
    } else {
      codes.forEach(c => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.justifyContent = 'space-between';
        row.style.background = '#11171F';
        row.style.border = '1px solid var(--sc-border)';
        row.style.borderRadius = '10px';
        row.style.padding = '0.75rem 1rem';

        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <span style="font-family: monospace; font-size: 1rem; font-weight: 800; color: var(--sc-neon-green); background: rgba(0,230,118,0.12); padding: 0.25rem 0.65rem; border-radius: 6px; border: 1px solid rgba(0,230,118,0.3);">
              💎 ${c}
            </span>
            <span style="font-size: 0.82rem; color: var(--sc-text-sub);">Copied & Verified Code</span>
          </div>
          <button class="sc-admin-btn-save" style="font-size: 0.78rem; padding: 0.35rem 0.8rem;" onclick="handleCopySingleCode('${c}', 'Store')">
            Copy Again 📋
          </button>
        `;
        codesContainer.appendChild(row);
      });
    }
  }

  // TAB 3: VISITED STORES RENDERING
  const visitsContainer = document.getElementById('userVisitsList');
  if (visitsContainer) {
    visitsContainer.innerHTML = '';
    if (visits.length === 0) {
      visitsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; background: #11171F; border: 1px solid var(--sc-border); border-radius: 14px; color: var(--sc-text-sub);">
          No merchant stores visited yet.
        </div>
      `;
    } else {
      visits.forEach(v => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.justifyContent = 'space-between';
        row.style.background = '#F8FAFC';
        row.style.border = '1px solid #E2E8F0';
        row.style.borderRadius = '10px';
        row.style.padding = '0.75rem 1rem';

        row.innerHTML = `
          <div>
            <strong style="color: #0F172A; font-size: 0.92rem;">🛍️ ${v.storeName}</strong>
            <div style="font-size: 0.75rem; color: var(--sc-text-muted); margin-top: 0.1rem;">Redirect clicked at ${v.time}</div>
          </div>
          <a href="${v.targetUrl}" target="_blank" class="sc-admin-btn-save" style="font-size: 0.78rem; padding: 0.35rem 0.8rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;">
            Visit Store ↗
          </a>
        `;
        visitsContainer.appendChild(row);
      });
    }
  }

  // TAB 4: ACCOUNT DETAILS & SECURITY INPUTS
  const nameInput = document.getElementById('userProfileNameInput');
  const emailInput = document.getElementById('userProfileEmailInput');

  if (nameInput) nameInput.value = activeUser.fullName || activeUser.name.split('@')[0];
  if (emailInput) emailInput.value = activeUser.name;
}

function saveUserProfileDetails() {
  if (!activeUser) return;
  const nameInput = document.getElementById('userProfileNameInput');
  if (nameInput && nameInput.value.trim()) {
    activeUser.fullName = nameInput.value.trim();
    saveUsersToStorage();
    updateUserAuthNavBtn();
    renderUserDashboard();
    alert('✨ User profile updated successfully!');
  }
}

function handleUserPasswordChange(e) {
  e.preventDefault();
  const p1 = document.getElementById('userNewPassInput').value.trim();
  const p2 = document.getElementById('userConfirmPassInput').value.trim();

  if (!p1 || !p2) {
    alert('Please enter a new password!');
    return;
  }
  if (p1 !== p2) {
    alert('Passwords do not match!');
    return;
  }

  alert('🔒 Password updated successfully!');
  document.getElementById('userNewPassInput').value = '';
  document.getElementById('userConfirmPassInput').value = '';
}

function logoutUserFromDashboard() {
  closeUserDashboardModal();
  logoutUser();
}

// ==========================================
// SUPER ADMIN DASHBOARD LOGIC
// ==========================================

function openAdminDashboard() {
  loadUndoLogs();
  renderAdminStoreList();
  populateAdminCompanyDropdowns();
  renderUserTable();
  loadSubAdmins();
  updateAnalyticsUI();
  applySiteSettingsToDOM();
  renderUndoLogList();
  switchAdminTab('stores');
  document.getElementById('adminDashboardModal').classList.add('active');
}

function closeAdminDashboardModal() {
  document.getElementById('adminDashboardModal').classList.remove('active');
}

function switchAdminTab(tabName) {
  const tabs = document.querySelectorAll('#adminDashboardModal .sc-sidebar-item, #adminDashboardModal .sc-admin-tab-btn');
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById('adminTabAnalytics').style.display = 'none';
  document.getElementById('adminTabStores').style.display = 'none';
  if (document.getElementById('adminTabCodes')) {
    document.getElementById('adminTabCodes').style.display = 'none';
  }
  document.getElementById('adminTabUserlist').style.display = 'none';
  if (document.getElementById('adminTabSettings')) {
    document.getElementById('adminTabSettings').style.display = 'none';
  }
  if (document.getElementById('adminTabCsvhub')) {
    document.getElementById('adminTabCsvhub').style.display = 'none';
  }

  if (tabName === 'analytics') {
    if (tabs[0]) tabs[0].classList.add('active');
    document.getElementById('adminTabAnalytics').style.display = 'block';
  } else if (tabName === 'stores') {
    if (tabs[1]) tabs[1].classList.add('active');
    document.getElementById('adminTabStores').style.display = 'block';
    renderAdminStoreList();
  } else if (tabName === 'codes') {
    if (tabs[2]) tabs[2].classList.add('active');
    document.getElementById('adminTabCodes').style.display = 'block';
    renderAdminCodesList();
  } else if (tabName === 'userlist') {
    if (tabs[3]) tabs[3].classList.add('active');
    document.getElementById('adminTabUserlist').style.display = 'block';
  } else if (tabName === 'settings') {
    if (tabs[4]) tabs[4].classList.add('active');
    document.getElementById('adminTabSettings').style.display = 'block';
  } else if (tabName === 'csvhub') {
    if (tabs[5]) tabs[5].classList.add('active');
    document.getElementById('adminTabCsvhub').style.display = 'block';
  }
}

// Default Site Content & 100% Dynamic Settings Manager
const defaultSiteSettings = {
  brandName: 'Codes4U',
  topBadge: 'RETAILMENOT APP WEEK:',
  topText: 'Up to 50% OFF + 15% Cash Back at Top Brands Today!',
  pillTag: '✨ Introducing 100 Merchants Ranking',
  heroTitle: 'Codes that actually work.',
  heroSub: 'The only platform powered by real shoppers testing codes live at checkout. No expired junk, no fake deals.',
  stat1Val: '647,966', stat1Lbl: 'active codes',
  stat2Val: '98%', stat2Lbl: 'verification health',
  stat3Val: '2.9M+', stat3Lbl: 'shoppers testing',
  stat4Val: '$10+', stat4Lbl: 'average savings per checkout',

  whyTag: 'WHY CODES4U',
  whyTitle: 'We test 1M+ codes. Every. Single. Month.',
  whyDesc: 'Our engine tests codes against real cart checkouts 24/7. When a code works, we issue a Proof Packet with an auditable evidence chain.',
  feat1Title: '1. AI Automated Testing', feat1Badge: 'LIVE 24/7', feat1Desc: 'Continuous checkout cart simulation testing 100k+ codes per hour across major online retailers.',
  feat2Title: '2. Shopper Consensus', feat2Badge: 'VERIFIED', feat2Desc: 'Real community members confirming working codes and uploading receipt proofs in real-time.',
  feat3Title: '3. Code Health Score', feat3Badge: '0-100% SCORE', feat3Desc: 'Live reliability rating calculated from recent verification history, usage frequency, and success rates.',

  extTitle: 'Try Codes4U',
  extDesc: 'The lightest, privacy-first browser extension for Chrome, Safari, and mobile.',
  floatingTitle: 'Never pay full price again.',
  floatingSub: 'Install the official Codes4U extension.',
  appStoreUrl: 'https://apple.com',
  googlePlayUrl: 'https://google.com',
  chromeExtUrl: 'https://chrome.google.com'
};

let siteSettings = { ...defaultSiteSettings };

function loadSiteSettings() {
  const saved = localStorage.getItem('simplycodes_site_settings_v2');
  if (saved) {
    try { 
      siteSettings = Object.assign({}, defaultSiteSettings, JSON.parse(saved)); 
    } catch(e) {}
  }
  applySiteSettingsToDOM();
}

function applySiteSettingsToDOM() {
  // Brand & Top Banner
  const logo = document.getElementById('hpLogoBadge');
  const topBadge = document.getElementById('hpTopBadge');
  const topText = document.getElementById('hpTopText');
  const copy = document.getElementById('hpFooterCopy');

  if (logo) logo.textContent = siteSettings.brandName || 'Codes4U';
  if (topBadge) topBadge.textContent = siteSettings.topBadge || 'RETAILMENOT APP WEEK:';
  if (topText) topText.textContent = siteSettings.topText || '';
  if (copy) copy.innerHTML = `&copy; 2026 ${siteSettings.brandName || 'Codes4U'}`;
  document.title = `${siteSettings.brandName || 'Codes4U'} | Codes That Actually Work`;

  // Hero Section & Stats
  const p = document.getElementById('hpPillTag');
  const t = document.getElementById('hpHeroTitle');
  const s = document.getElementById('hpHeroSub');

  const v1 = document.getElementById('hpStat1Val');
  const l1 = document.getElementById('hpStat1Lbl');
  const v2 = document.getElementById('hpStat2Val');
  const l2 = document.getElementById('hpStat2Lbl');
  const v3 = document.getElementById('hpStat3Val');
  const l3 = document.getElementById('hpStat3Lbl');
  const v4 = document.getElementById('hpStat4Val');
  const l4 = document.getElementById('hpStat4Lbl');

  if (p) p.textContent = siteSettings.pillTag;
  if (t) t.innerHTML = (siteSettings.heroTitle || '').replace(/\n/g, '<br>');
  if (s) s.textContent = siteSettings.heroSub;

  if (v1) v1.textContent = siteSettings.stat1Val;
  if (l1) l1.textContent = siteSettings.stat1Lbl;
  if (v2) v2.textContent = siteSettings.stat2Val;
  if (l2) l2.textContent = siteSettings.stat2Lbl;
  if (v3) v3.textContent = siteSettings.stat3Val;
  if (l3) l3.textContent = siteSettings.stat3Lbl;
  if (v4) v4.textContent = siteSettings.stat4Val;
  if (l4) l4.textContent = siteSettings.stat4Lbl;

  // Why Engine & Feature Cards
  const whyTag = document.getElementById('hpWhyTag');
  const whyTitle = document.getElementById('hpWhyTitle');
  const whyDesc = document.getElementById('hpWhyDesc');
  if (whyTag) whyTag.textContent = siteSettings.whyTag || 'WHY CODES4U';
  if (whyTitle) whyTitle.innerHTML = (siteSettings.whyTitle || '').replace(/\n/g, '<br>');
  if (whyDesc) whyDesc.textContent = siteSettings.whyDesc || '';

  const f1T = document.getElementById('hpFeat1Title');
  const f1B = document.getElementById('hpFeat1Badge');
  const f1D = document.getElementById('hpFeat1Desc');
  if (f1T) f1T.textContent = siteSettings.feat1Title || '';
  if (f1B) f1B.textContent = siteSettings.feat1Badge || '';
  if (f1D) f1D.textContent = siteSettings.feat1Desc || '';

  const f2T = document.getElementById('hpFeat2Title');
  const f2B = document.getElementById('hpFeat2Badge');
  const f2D = document.getElementById('hpFeat2Desc');
  if (f2T) f2T.textContent = siteSettings.feat2Title || '';
  if (f2B) f2B.textContent = siteSettings.feat2Badge || '';
  if (f2D) f2D.textContent = siteSettings.feat2Desc || '';

  const f3T = document.getElementById('hpFeat3Title');
  const f3B = document.getElementById('hpFeat3Badge');
  const f3D = document.getElementById('hpFeat3Desc');
  if (f3T) f3T.textContent = siteSettings.feat3Title || '';
  if (f3B) f3B.textContent = siteSettings.feat3Badge || '';
  if (f3D) f3D.textContent = siteSettings.feat3Desc || '';

  // Extension & Download Links
  const extT = document.getElementById('hpExtTitle');
  const extD = document.getElementById('hpExtDesc');
  const floatT = document.getElementById('hpFloatingTitle');
  const floatS = document.getElementById('hpFloatingSub');
  if (extT) extT.textContent = siteSettings.extTitle || '';
  if (extD) extD.textContent = siteSettings.extDesc || '';
  if (floatT) floatT.textContent = siteSettings.floatingTitle || '';
  if (floatS) floatS.textContent = siteSettings.floatingSub || '';

  // Sync Form Inputs inside Super Admin Panel Tab 4
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  setEl('settingBrandName', siteSettings.brandName);
  setEl('settingTopBadge', siteSettings.topBadge);
  setEl('settingTopText', siteSettings.topText);
  setEl('settingPillTag', siteSettings.pillTag);
  setEl('settingHeroTitle', siteSettings.heroTitle);
  setEl('settingHeroSub', siteSettings.heroSub);
  setEl('settingStat1Val', siteSettings.stat1Val); setEl('settingStat1Lbl', siteSettings.stat1Lbl);
  setEl('settingStat2Val', siteSettings.stat2Val); setEl('settingStat2Lbl', siteSettings.stat2Lbl);
  setEl('settingStat3Val', siteSettings.stat3Val); setEl('settingStat3Lbl', siteSettings.stat3Lbl);
  setEl('settingStat4Val', siteSettings.stat4Val); setEl('settingStat4Lbl', siteSettings.stat4Lbl);

  setEl('settingWhyTag', siteSettings.whyTag);
  setEl('settingWhyTitle', siteSettings.whyTitle);
  setEl('settingWhyDesc', siteSettings.whyDesc);
  setEl('settingFeat1Title', siteSettings.feat1Title); setEl('settingFeat1Badge', siteSettings.feat1Badge); setEl('settingFeat1Desc', siteSettings.feat1Desc);
  setEl('settingFeat2Title', siteSettings.feat2Title); setEl('settingFeat2Badge', siteSettings.feat2Badge); setEl('settingFeat2Desc', siteSettings.feat2Desc);
  setEl('settingFeat3Title', siteSettings.feat3Title); setEl('settingFeat3Badge', siteSettings.feat3Badge); setEl('settingFeat3Desc', siteSettings.feat3Desc);

  setEl('settingExtTitle', siteSettings.extTitle);
  setEl('settingExtDesc', siteSettings.extDesc);
  setEl('settingFloatingTitle', siteSettings.floatingTitle);
  setEl('settingFloatingSub', siteSettings.floatingSub);
  setEl('settingAppStoreUrl', siteSettings.appStoreUrl);
  setEl('settingGooglePlayUrl', siteSettings.googlePlayUrl);
  setEl('settingChromeExtUrl', siteSettings.chromeExtUrl);
}

function saveSiteSettings() {
  const getVal = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };

  siteSettings.brandName = getVal('settingBrandName') || 'Codes4U';
  siteSettings.topBadge = getVal('settingTopBadge');
  siteSettings.topText = getVal('settingTopText');
  siteSettings.pillTag = getVal('settingPillTag');
  siteSettings.heroTitle = getVal('settingHeroTitle');
  siteSettings.heroSub = getVal('settingHeroSub');

  siteSettings.stat1Val = getVal('settingStat1Val'); siteSettings.stat1Lbl = getVal('settingStat1Lbl');
  siteSettings.stat2Val = getVal('settingStat2Val'); siteSettings.stat2Lbl = getVal('settingStat2Lbl');
  siteSettings.stat3Val = getVal('settingStat3Val'); siteSettings.stat3Lbl = getVal('settingStat3Lbl');
  siteSettings.stat4Val = getVal('settingStat4Val'); siteSettings.stat4Lbl = getVal('settingStat4Lbl');

  siteSettings.whyTag = getVal('settingWhyTag');
  siteSettings.whyTitle = getVal('settingWhyTitle');
  siteSettings.whyDesc = getVal('settingWhyDesc');
  siteSettings.feat1Title = getVal('settingFeat1Title'); siteSettings.feat1Badge = getVal('settingFeat1Badge'); siteSettings.feat1Desc = getVal('settingFeat1Desc');
  siteSettings.feat2Title = getVal('settingFeat2Title'); siteSettings.feat2Badge = getVal('settingFeat2Badge'); siteSettings.feat2Desc = getVal('settingFeat2Desc');
  siteSettings.feat3Title = getVal('settingFeat3Title'); siteSettings.feat3Badge = getVal('settingFeat3Badge'); siteSettings.feat3Desc = getVal('settingFeat3Desc');

  siteSettings.extTitle = getVal('settingExtTitle');
  siteSettings.extDesc = getVal('settingExtDesc');
  siteSettings.floatingTitle = getVal('settingFloatingTitle');
  siteSettings.floatingSub = getVal('settingFloatingSub');
  siteSettings.appStoreUrl = getVal('settingAppStoreUrl');
  siteSettings.googlePlayUrl = getVal('settingGooglePlayUrl');
  siteSettings.chromeExtUrl = getVal('settingChromeExtUrl');

  localStorage.setItem('simplycodes_site_settings_v2', JSON.stringify(siteSettings));
  applySiteSettingsToDOM();
  addActivityLog(`⚙️ Super Admin updated 100% Dynamic Site Content live.`);
  alert('✨ All website content & settings updated & published live!');
}

function resetSiteSettingsToDefault() {
  if (confirm('Are you sure you want to reset all site text and content to default values?')) {
    siteSettings = { ...defaultSiteSettings };
    localStorage.removeItem('simplycodes_site_settings_v2');
    applySiteSettingsToDOM();
    addActivityLog('🔄 Super Admin reset site settings to default content.');
    alert('Site content reset to default!');
  }
}

function resetStoresToDefault() {
  if (confirm('Are you sure you want to reset all merchant stores & codes data to initial defaults?')) {
    localStorage.removeItem('simplycodes_stores_data_v2');
    storeData = defaultStores;
    renderStoreCards();
    renderAdminStoreList();
    addActivityLog('🏪 Super Admin reset merchant store database.');
    alert('Merchant stores database reset successfully!');
  }
}

function resetUserLogsToDefault() {
  if (confirm('Are you sure you want to reset user accounts and login activity stream?')) {
    localStorage.removeItem('simplycodes_users_data_v3');
    userLogins = defaultUserLogins;
    renderUserTable();
    addActivityLog('👥 Super Admin reset user accounts database.');
    alert('User accounts database reset successfully!');
  }
}

function openExtLink(type) {
  let url = 'https://chrome.google.com';
  if (type === 'appstore') url = siteSettings.appStoreUrl || 'https://apple.com';
  if (type === 'googleplay') url = siteSettings.googlePlayUrl || 'https://google.com';
  if (type === 'chrome') url = siteSettings.chromeExtUrl || 'https://chrome.google.com';
  window.open(url, '_blank');
}

// Live Analytics Updater with Pulse Animations
function updateAnalyticsUI() {
  const v = document.getElementById('statActiveVisitors');
  const l = document.getElementById('statTotalLogins');
  const c = document.getElementById('statCodeCopies');
  const r = document.getElementById('statShopRedirects');

  const updateEl = (el, val) => {
    if (!el) return;
    const formatted = val.toLocaleString();
    if (el.textContent !== formatted) {
      el.textContent = formatted;
      el.classList.remove('sc-metric-updated');
      void el.offsetWidth; // trigger DOM reflow for animation restart
      el.classList.add('sc-metric-updated');
    }
  };

  updateEl(v, metrics.liveVisitors);
  updateEl(l, metrics.userLogins);
  updateEl(c, metrics.codeCopies);
  updateEl(r, metrics.shopRedirects);
}

function addActivityLog(text) {
  const stream = document.getElementById('adminActivityStream');
  if (!stream) return;
  const row = document.createElement('div');
  row.style.fontSize = '0.82rem';
  row.style.padding = '0.4rem 0.6rem';
  row.style.borderBottom = '1px solid #E2E8F0';
  row.style.color = '#0F172A';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '0.6rem';
  row.innerHTML = `<span style="color:#64748B; font-size:0.75rem; font-weight:700; flex-shrink:0;">[${new Date().toLocaleTimeString()}]</span> <div>${text}</div>`;
  stream.prepend(row);
  if (stream.children.length > 40) stream.lastElementChild.remove();
}

const liveCities = ['New York', 'Chicago', 'Los Angeles', 'Houston', 'London', 'Toronto', 'Sydney', 'Mumbai', 'San Francisco', 'Miami', 'Berlin', 'Tokyo', 'Dallas'];

function startLiveAnalyticsStream() {
  // Populate initial activity logs
  addActivityLog(`🟢 Live Real-Time Analytics Engine initialized.`);
  addActivityLog(`🛒 Shopper from <strong>New York</strong> copied code <span style="color:#059669; font-weight:800; font-family:monospace;">[SWISH30]</span> on Nike`);
  addActivityLog(`🚀 Visitor from <strong>Chicago</strong> clicked merchant checkout for Harbor Freight`);

  // Continuous 2.5s real-time live ticker
  setInterval(() => {
    // 1. Live visitors fluctuation (+/- 1 to 4)
    const visitorDelta = Math.floor(Math.random() * 7) - 3;
    metrics.liveVisitors = Math.max(1240, Math.min(1380, metrics.liveVisitors + visitorDelta));

    // 2. Coupon codes copied ticker (65% chance)
    if (Math.random() < 0.65) {
      metrics.codeCopies += Math.floor(Math.random() * 3) + 1;
    }

    // 3. Merchant redirect clicks ticker (50% chance)
    if (Math.random() < 0.50) {
      metrics.shopRedirects += Math.floor(Math.random() * 2) + 1;
    }

    // 4. Logins ticker (25% chance)
    if (Math.random() < 0.25) {
      metrics.userLogins += 1;
    }

    updateAnalyticsUI();

    // 5. Generate realistic live activity event
    if (Math.random() < 0.80 && storeData && storeData.length > 0) {
      const city = liveCities[Math.floor(Math.random() * liveCities.length)];
      const store = storeData[Math.floor(Math.random() * storeData.length)];
      const codeObj = (store.codes && store.codes.length > 0) ? store.codes[Math.floor(Math.random() * store.codes.length)] : { code: 'SAVE20' };
      const savedAmount = (10 + Math.floor(Math.random() * 40)) + '.00';

      const eventTypes = [
        `🛒 Shopper from <strong>${city}</strong> copied code <span style="color:#059669; font-weight:800; font-family:monospace;">[${codeObj.code}]</span> on ${store.name} (Saved $${savedAmount})`,
        `🚀 Visitor from <strong>${city}</strong> clicked merchant checkout for ${store.name}`,
        `💎 Verified deal <span style="color:#059669; font-weight:800; font-family:monospace;">[${codeObj.code}]</span> confirmed on ${store.name}`,
        `🟢 New shopper logged in from <strong>${city}</strong>`,
        `⚡ Cart verification check passed for ${store.name} (${store.health || '98% Health'})`
      ];

      const text = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      addActivityLog(text);
    }
  }, 2500);
}

// Render Admin Company & Multiple Codes Management List
function renderAdminStoreList(filterQuery = '') {
  const container = document.getElementById('adminStoreList');
  if (!container) return;
  container.innerHTML = '';

  const countHeader = document.getElementById('adminStoreCountHeader');
  if (countHeader) countHeader.textContent = storeData.length;

  const query = (filterQuery || '').toLowerCase().trim();
  const storesToRender = query 
    ? storeData.filter(s => s.name.toLowerCase().includes(query) || (s.domain || '').toLowerCase().includes(query) || (s.codes || []).some(c => (c.code || '').toLowerCase().includes(query)))
    : storeData;

  if (storesToRender.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; color: var(--sc-text-sub);">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
        <div style="font-size: 1rem; font-weight: 800; color: #0F172A; margin-bottom: 0.3rem;">No Merchant Companies Found</div>
        <div style="font-size: 0.82rem;">No stores matched your search query "${filterQuery}"</div>
      </div>
    `;
    return;
  }

  storesToRender.forEach(store => {
    const item = document.createElement('div');
    item.className = 'sc-admin-card';

    const codesArr = store.codes || [{ title: store.discountTitle, code: store.code || 'SAVE10', desc: '' }];

    const initials = store.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    const logoBg = store.name.toLowerCase().includes('harbor') ? '#CC1A1A' : 
                   (store.name.toLowerCase().includes('shein') ? '#000000' : 
                   (store.name.toLowerCase().includes('nike') ? '#111111' : '#1D61E7'));

    let codesHTML = codesArr.map((c, idx) => `
      <div style="display: grid; grid-template-columns: 1fr 1fr 34px; gap: 0.75rem; align-items: center; margin-bottom: 0.65rem;">
        <div class="sc-input-pill-box">
          <span style="color: #94A3B8; font-size: 0.9rem;">🏷️</span>
          <input type="text" class="sc-pill-input" value="${c.title}" placeholder="Discount Title" onchange="updateStoreCodeSubfield('${store.id}', ${idx}, 'title', this.value)">
          <span style="color: #94A3B8; font-size: 0.82rem; cursor: pointer;" title="Copy">📋</span>
        </div>
        <div class="sc-input-pill-box">
          <span style="color: #94A3B8; font-size: 0.9rem;">🏷️</span>
          <input type="text" class="sc-pill-input" style="font-family: monospace; color: #059669; font-weight: 800;" value="${c.code}" placeholder="Code String" onchange="updateStoreCodeSubfield('${store.id}', ${idx}, 'code', this.value)">
          <span style="color: #94A3B8; font-size: 0.82rem; cursor: pointer;" title="Copy">📋</span>
        </div>
        <button class="sc-code-delete-square" title="Delete Code" onclick="removeCodeFromStore('${store.id}', ${idx})">✕</button>
      </div>
    `).join('');

    item.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div style="width: 44px; height: 44px; border-radius: 10px; background: ${logoBg}; color: #FFFFFF; font-weight: 900; font-size: 1.15rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
            ${initials}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <strong style="font-size: 1.15rem; font-weight: 900; color: #0F172A;">${store.name}</strong>
              <span style="font-size: 0.75rem; color: #059669; background: #DCFCE7; padding: 2px 10px; border-radius: 99px; font-weight: 800;">
                ${codesArr.length} Promo Codes
              </span>
            </div>
          </div>
        </div>
        <button class="sc-company-delete-btn" onclick="deleteStore('${store.id}')">
          <span style="font-weight: 800;">🗑️</span> Delete Company
        </button>
      </div>

      <div style="margin-bottom: 1rem;">
        <label style="font-size: 0.82rem; font-weight: 700; color: #0F172A; display: block; margin-bottom: 0.4rem;">
          Redirect Website URL (Opens when user clicks 'Shop at ${store.name}')
        </label>
        <div class="sc-url-input-container">
          <span style="color: #64748B; font-size: 0.95rem;">🔗</span>
          <input type="text" class="sc-url-input-field" value="${store.targetUrl}" onchange="updateStoreField('${store.id}', 'targetUrl', this.value)">
        </div>
      </div>

      <div class="sc-dark-navy-codes-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="color: #60A5FA; font-family: monospace; font-size: 0.95rem; font-weight: 800;">&lt;/&gt;</span>
            <label style="font-size: 0.85rem; color: #FFFFFF; font-weight: 700;">Multiple Promo Codes for ${store.name}:</label>
          </div>
          <button class="sc-add-another-code-btn" onclick="addCodeToStore('${store.id}')">
            <span>+</span> Add Another Code
          </button>
        </div>
        ${codesHTML}
      </div>
    `;

    container.appendChild(item);
  });
}

// Update Store Fields
function updateStoreField(storeId, field, newValue) {
  const store = storeData.find(s => s.id === storeId);
  if (store) {
    store[field] = newValue.trim();
    saveStoresToStorage();
    renderStoreCards();
    addActivityLog(`Updated target URL for ${store.name} → ${newValue}`);
  }
}

function updateStoreCodeSubfield(storeId, codeIdx, field, newValue) {
  const store = storeData.find(s => s.id === storeId);
  if (store && store.codes && store.codes[codeIdx]) {
    store.codes[codeIdx][field] = newValue.trim();
    if (field === 'title' && codeIdx === 0) store.discountTitle = newValue.trim();
    saveStoresToStorage();
    renderStoreCards();
    renderAdminCodesList();
  }
}

function addCodeToStore(storeId) {
  switchAdminTab('codes');
  openAddCodeModal(storeId);
}

function removeCodeFromStore(storeId, codeIdx) {
  const store = storeData.find(s => s.id === storeId);
  if (store && store.codes && store.codes.length > 1) {
    const codeObj = JSON.parse(JSON.stringify(store.codes[codeIdx]));
    recordUndoableAction('CODE_DELETE', `Deleted Code [${codeObj.code}] from "${store.name}"`, { storeId, codeIdx, codeObj });
    store.codes.splice(codeIdx, 1);
    saveStoresToStorage();
    renderStoreCards();
    renderAdminStoreList();
    renderAdminCodesList();
    addActivityLog(`🗑️ Deleted promo code [${codeObj.code}] from ${store.name} (Undoable for 24h)`);
  } else {
    alert('Every company must have at least one promo code!');
  }
}

// ==========================================
// DEDICATED PROMO CODES & DEALS MANAGER (TAB 3)
// ==========================================

function populateAdminCompanyDropdowns() {
  const filterSelect = document.getElementById('adminCodesCompanyFilter');
  const addSelect = document.getElementById('newCodeStoreId');

  if (filterSelect) {
    const curVal = filterSelect.value || 'ALL';
    let optionsHTML = `<option value="ALL">All Merchant Companies (${storeData.length})</option>`;
    storeData.forEach(s => {
      optionsHTML += `<option value="${s.id}" ${s.id === curVal ? 'selected' : ''}>${s.name} (${(s.codes || []).length} codes)</option>`;
    });
    filterSelect.innerHTML = optionsHTML;
  }

  if (addSelect) {
    const curVal = addSelect.value;
    let optionsHTML = '';
    storeData.forEach(s => {
      optionsHTML += `<option value="${s.id}" ${s.id === curVal ? 'selected' : ''}>${s.name}</option>`;
    });
    addSelect.innerHTML = optionsHTML;
  }
}

function renderAdminCodesList() {
  const container = document.getElementById('adminCodesListContainer');
  if (!container) return;
  container.innerHTML = '';

  populateAdminCompanyDropdowns();

  const companyFilter = document.getElementById('adminCodesCompanyFilter') ? document.getElementById('adminCodesCompanyFilter').value : 'ALL';
  const query = document.getElementById('adminCodeSearchInput') ? document.getElementById('adminCodeSearchInput').value.toLowerCase().trim() : '';

  let allCodes = [];
  storeData.forEach(store => {
    if (companyFilter !== 'ALL' && store.id !== companyFilter) return;
    const codes = store.codes || [{ title: store.discountTitle, code: store.code || 'SAVE10', desc: '' }];
    codes.forEach((c, idx) => {
      allCodes.push({
        storeId: store.id,
        storeName: store.name,
        storeLogo: store.logo,
        codeIdx: idx,
        title: c.title,
        code: c.code,
        desc: c.desc || ''
      });
    });
  });

  if (query) {
    allCodes = allCodes.filter(c => 
      c.storeName.toLowerCase().includes(query) ||
      c.code.toLowerCase().includes(query) ||
      c.title.toLowerCase().includes(query)
    );
  }

  const countHeader = document.getElementById('adminCodesCountHeader');
  if (countHeader) countHeader.textContent = allCodes.length;

  if (allCodes.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; color: var(--sc-text-sub);">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">💎</div>
        <div style="font-size: 1rem; font-weight: 800; color: #0F172A; margin-bottom: 0.3rem;">No Promo Codes Found</div>
        <div style="font-size: 0.82rem;">No promo codes match your filter criteria.</div>
      </div>
    `;
    return;
  }

  allCodes.forEach(item => {
    const card = document.createElement('div');
    card.className = 'sc-admin-card';
    card.style.marginBottom = '0.8rem';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <img src="${item.storeLogo}" style="width: 24px; height: 24px; object-fit: contain; background: #FFF; border-radius: 4px; padding: 2px;" onerror="this.src='https://via.placeholder.com/24'">
          <strong style="color: #0F172A; font-size: 0.95rem;">${item.storeName}</strong>
          <span style="font-size: 0.72rem; color: var(--sc-neon-green); background: var(--sc-neon-green-bg); padding: 0.1rem 0.4rem; border-radius: 4px;">Code #${item.codeIdx + 1}</span>
        </div>
        <button class="sc-admin-btn-delete" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;" onclick="removeCodeFromStore('${item.storeId}', ${item.codeIdx})">
          🗑️ Delete Code
        </button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 0.6rem;">
        <div class="sc-admin-form-group" style="margin: 0;">
          <label style="font-size: 0.75rem;">Discount Title</label>
          <input type="text" class="sc-admin-input" value="${item.title}" onchange="updateStoreCodeSubfield('${item.storeId}', ${item.codeIdx}, 'title', this.value)">
        </div>
        <div class="sc-admin-form-group" style="margin: 0;">
          <label style="font-size: 0.75rem;">Promo Code String</label>
          <input type="text" class="sc-admin-input" style="font-family: monospace; color: var(--sc-neon-green); font-weight: 800;" value="${item.code}" onchange="updateStoreCodeSubfield('${item.storeId}', ${item.codeIdx}, 'code', this.value)">
        </div>
      </div>

      <div class="sc-admin-form-group" style="margin: 0;">
        <label style="font-size: 0.75rem;">Description / Details</label>
        <input type="text" class="sc-admin-input" value="${item.desc}" placeholder="Terms or description..." onchange="updateStoreCodeSubfield('${item.storeId}', ${item.codeIdx}, 'desc', this.value)">
      </div>
    `;

    container.appendChild(card);
  });
}

function openAddCodeModal(defaultStoreId) {
  populateAdminCompanyDropdowns();
  const form = document.getElementById('addCodeFormContainer');
  if (form) {
    form.style.display = 'block';
    if (defaultStoreId) {
      const select = document.getElementById('newCodeStoreId');
      if (select) select.value = defaultStoreId;
    }
  }
}

function closeAddCodeModal() {
  const form = document.getElementById('addCodeFormContainer');
  if (form) form.style.display = 'none';
}

function saveNewPromoCodeFromForm() {
  const storeId = document.getElementById('newCodeStoreId').value;
  const title = document.getElementById('newCodeTitle').value.trim();
  const code = document.getElementById('newCodeString').value.trim();
  const desc = document.getElementById('newCodeDesc').value.trim();

  if (!title || !code) {
    alert('Please enter Discount Title and Promo Code String!');
    return;
  }

  const store = storeData.find(s => s.id === storeId);
  if (store) {
    if (!store.codes) store.codes = [];
    store.codes.push({ title, code, desc: desc || `${title} at ${store.name}` });
    saveStoresToStorage();
    renderStoreCards();
    renderAdminStoreList();
    renderAdminCodesList();
    closeAddCodeModal();

    document.getElementById('newCodeTitle').value = '';
    document.getElementById('newCodeString').value = '';
    document.getElementById('newCodeDesc').value = '';
    addActivityLog(`Added new promo code [${code}] for ${store.name}`);
  }
}

// Add New Store Controls
function openAddStoreForm() {
  document.getElementById('addStoreFormContainer').style.display = 'block';
}

function closeAddStoreForm() {
  document.getElementById('addStoreFormContainer').style.display = 'none';
}

function saveNewStore() {
  const name = document.getElementById('newStoreName').value.trim();
  const domain = document.getElementById('newStoreDomain').value.trim();
  const targetUrl = document.getElementById('newTargetUrl').value.trim();
  const logo = document.getElementById('newStoreLogo').value.trim() || 'https://via.placeholder.com/40';

  if (!name || !targetUrl) {
    alert('Please enter Store Name and Redirect Website URL!');
    return;
  }

  const id = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const newObj = {
    id,
    name,
    domain: domain || `${id}.com`,
    health: '100% Health',
    discountTitle: '10% OFF',
    logo,
    targetUrl,
    codes: [
      { title: '10% OFF Storewide', code: 'PROMO10', desc: '10% discount on order' }
    ]
  };

  storeData.unshift(newObj);
  saveStoresToStorage();
  renderStoreCards();
  renderAdminStoreList();
  closeAddStoreForm();
  addActivityLog(`Added new company ${name} with redirect ${targetUrl}`);
}

function deleteStore(storeId) {
  const target = storeData.find(s => s.id === storeId);
  if (!target) return;
  if (confirm(`Are you sure you want to delete company "${target.name}"? (You can undo this within 24 hours)`)) {
    const snapshot = JSON.parse(JSON.stringify(target));
    recordUndoableAction('STORE_DELETE', `Deleted Company "${target.name}"`, snapshot);
    storeData = storeData.filter(s => s.id !== storeId);
    saveStoresToStorage();
    renderStoreCards();
    renderAdminStoreList();
    addActivityLog(`🗑️ Deleted company ${target.name} (Undoable for 24h)`);
  }
}

// ==========================================
// USER ACCOUNTS TABLE & DETAILED PROFILES LOGIC
// ==========================================

function filterActivityLogs(query = '') {
  const stream = document.getElementById('adminActivityStream');
  if (!stream) return;
  const rows = stream.querySelectorAll('div');
  const q = (query || document.getElementById('adminActivitySearchInput')?.value || '').toLowerCase().trim();
  rows.forEach(r => {
    if (!q || r.textContent.toLowerCase().includes(q)) {
      r.style.display = 'block';
    } else {
      r.style.display = 'none';
    }
  });
}

function filterSiteSettingsInputs(query = '') {
  const q = (query || document.getElementById('adminSettingsSearchInput')?.value || '').toLowerCase().trim();
  const sections = document.querySelectorAll('#adminTabSettings > div');
  sections.forEach(sec => {
    if (!q || sec.textContent.toLowerCase().includes(q)) {
      sec.style.display = 'block';
    } else {
      sec.style.display = 'none';
    }
  });
}

function renderUserTable(filterQuery = '') {
  const tbody = document.getElementById('adminUserTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const q = (filterQuery || document.getElementById('adminUserSearchInput')?.value || '').toLowerCase().trim();
  const usersToRender = q
    ? userLogins.filter(u => 
        u.id.toLowerCase().includes(q) ||
        u.name.toLowerCase().includes(q) ||
        (u.fullName || '').toLowerCase().includes(q) ||
        (u.ip || '').toLowerCase().includes(q) ||
        (u.device || '').toLowerCase().includes(q) ||
        (u.status || '').toLowerCase().includes(q)
      )
    : userLogins;

  if (usersToRender.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding:2rem; color:var(--sc-text-sub);">
          No user accounts found matching search.
        </td>
      </tr>
    `;
    return;
  }

  usersToRender.forEach(u => {
    const tr = document.createElement('tr');
    tr.className = 'sc-user-click-row';
    tr.onclick = (e) => {
      if (e.target.closest('button')) return;
      openUserDetailModal(u.id);
    };

    const isBlocked = u.status.includes('Blocked');

    tr.innerHTML = `
      <td><strong style="color:var(--sc-neon-green); cursor:pointer;">${u.id} 🔍</strong></td>
      <td>
        <div style="font-weight:700; color:#0F172A;">${u.name}</div>
        <div style="font-size:0.72rem; color:var(--sc-text-muted);">${u.device || 'Desktop Browser'}</div>
      </td>
      <td style="font-family:monospace; color:var(--sc-text-sub);">${u.ip}</td>
      <td><span style="color:var(--sc-neon-green); font-weight:800;">${u.codesUsed || 0}</span> codes</td>
      <td>
        <span style="padding:0.15rem 0.5rem; border-radius:99px; font-size:0.78rem; font-weight:800; background:${isBlocked ? 'rgba(239,68,68,0.15)' : 'rgba(0,230,118,0.15)'}; color:${isBlocked ? '#EF4444' : 'var(--sc-neon-green)'}">
          ${u.status}
        </span>
      </td>
      <td style="color:var(--sc-text-muted);">${u.lastActive}</td>
      <td>
        <div style="display:flex; gap:0.4rem;" onclick="event.stopPropagation()">
          <button class="sc-admin-btn-save" style="padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="openUserDetailModal('${u.id}')">👁️ Details</button>
          <button class="${isBlocked ? 'sc-admin-btn-save' : 'sc-admin-btn-block'}" style="padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="toggleBlockUser('${u.id}', event)">
            ${isBlocked ? '🟢 Unblock' : '🚫 Block'}
          </button>
          <button class="sc-admin-btn-delete" style="padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="deleteUser('${u.id}', event)">🗑️</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Open Detailed User Profile Modal (Shows login time, live session duration, shopping site visits, copied codes)
function openUserDetailModal(userId) {
  const u = userLogins.find(user => user.id === userId);
  if (!u) return;

  selectedUserId = userId;

  document.getElementById('userModalTitle').textContent = `User Profile: ${u.id}`;
  document.getElementById('userModalSub').textContent = `Email: ${u.name} | Live Session & Activity Audit`;
  
  const isBlocked = u.status.includes('Blocked');
  const badge = document.getElementById('userModalStatusBadge');
  badge.textContent = u.status;
  badge.style.background = isBlocked ? 'rgba(239,68,68,0.15)' : 'rgba(0,230,118,0.15)';
  badge.style.color = isBlocked ? '#EF4444' : 'var(--sc-neon-green)';

  document.getElementById('udLoginTime').textContent = u.loginTime || 'Today 21:05';
  document.getElementById('udIpDevice').innerHTML = `${u.ip}<br><span style="font-size:0.72rem; color:var(--sc-text-sub);">${u.device || 'Unknown Device'}</span>`;

  // Block button state
  const blockBtn = document.getElementById('udBlockBtn');
  if (blockBtn) {
    blockBtn.textContent = isBlocked ? '🟢 Unblock User' : '🚫 Block User';
    blockBtn.className = isBlocked ? 'sc-admin-btn-save' : 'sc-admin-btn-block';
  }

  // Shopping visits rendering (kitne site me shoping karne gya)
  const shoppingList = document.getElementById('udShoppingList');
  const visits = u.shoppingVisits || [];
  document.getElementById('udShoppingCount').textContent = visits.length;
  
  if (visits.length === 0) {
    shoppingList.innerHTML = `<div style="font-size:0.82rem; color:var(--sc-text-muted);">No shopping redirects clicked yet.</div>`;
  } else {
    shoppingList.innerHTML = visits.map(v => `
      <div style="display:flex; justify-content:space-between; align-items:center; background:#F8FAFC; padding:0.5rem 0.75rem; border-radius:8px; border:1px solid #E2E8F0;">
        <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <strong style="color:#0F172A; font-size:0.85rem;">🛍️ ${v.storeName}</strong>
          <a href="${v.targetUrl}" target="_blank" style="font-size:0.75rem; color:var(--sc-neon-green); text-decoration:underline;">${v.targetUrl}</a>
        </div>
        <span style="font-size:0.75rem; color:var(--sc-text-muted);">${v.time}</span>
      </div>
    `).join('');
  }

  // Copied codes rendering
  const codesList = document.getElementById('udCodesList');
  const codes = u.copiedCodes || [];
  document.getElementById('udCodesCount').textContent = codes.length;

  if (codes.length === 0) {
    codesList.innerHTML = `<div style="font-size:0.82rem; color:var(--sc-text-muted);">No codes copied yet.</div>`;
  } else {
    codesList.innerHTML = codes.map(c => `
      <span style="font-family:monospace; font-size:0.8rem; font-weight:800; color:var(--sc-neon-green); background:var(--sc-neon-green-bg); border:1px solid rgba(0,230,118,0.3); padding:0.2rem 0.6rem; border-radius:6px;">
        💎 ${c}
      </span>
    `).join('');
  }

  // Live session timer interval (kitni der live tha site par)
  updateLiveDurationDisplay(u);
  if (udTimerInterval) clearInterval(udTimerInterval);
  udTimerInterval = setInterval(() => {
    updateLiveDurationDisplay(u);
  }, 1000);

  document.getElementById('userDetailModal').classList.add('active');
}

function updateLiveDurationDisplay(u) {
  const elem = document.getElementById('udLiveDuration');
  if (!elem) return;
  const start = u.sessionStartMs || (Date.now() - 15 * 60 * 1000);
  const diffSec = Math.max(0, Math.floor((Date.now() - start) / 1000));
  const mins = Math.floor(diffSec / 60);
  const secs = diffSec % 60;
  elem.textContent = `${mins}m ${secs}s (Live Now)`;
}

function closeUserDetailModal() {
  if (udTimerInterval) clearInterval(udTimerInterval);
  document.getElementById('userDetailModal').classList.remove('active');
}

// User Control Actions: Block, Delete, Add
function toggleBlockUser(userId, event) {
  if (event) event.stopPropagation();
  const u = userLogins.find(user => user.id === userId);
  if (!u) return;

  const prevStatus = u.status;
  if (u.status.includes('Blocked')) {
    u.status = '🟢 Active';
    addActivityLog(`🟢 Super Admin unblocked user ${u.id} (${u.name})`);
  } else {
    u.status = '🔴 Blocked';
    addActivityLog(`🚫 Super Admin blocked user ${u.id} (${u.name})`);
  }

  recordUndoableAction('USER_BLOCK', `Changed Status for User "${u.name}" to ${u.status}`, { id: userId, previousStatus: prevStatus });
  saveUsersToStorage();
  renderUserTable();
  if (selectedUserId === userId && document.getElementById('userDetailModal').classList.contains('active')) {
    openUserDetailModal(userId);
  }
}

function toggleBlockSelectedUser() {
  if (selectedUserId) {
    toggleBlockUser(selectedUserId);
  }
}

function deleteUser(userId, event) {
  if (event) event.stopPropagation();
  const u = userLogins.find(user => user.id === userId);
  if (!u) return;

  if (confirm(`Are you sure you want to delete user ${u.id} (${u.name})? (You can undo this within 24 hours)`)) {
    const snapshot = JSON.parse(JSON.stringify(u));
    recordUndoableAction('USER_DELETE', `Deleted User Account "${u.name}" (${u.id})`, snapshot);
    userLogins = userLogins.filter(user => user.id !== userId);
    saveUsersToStorage();
    renderUserTable();
    addActivityLog(`🗑️ Super Admin deleted user account ${u.id} (${u.name}) (Undoable for 24h)`);
    if (selectedUserId === userId) {
      closeUserDetailModal();
    }
  }
}

function deleteSelectedUser() {
  if (selectedUserId) {
    deleteUser(selectedUserId);
  }
}

function openAddUserForm() {
  document.getElementById('addUserFormContainer').style.display = 'block';
}

function closeAddUserForm() {
  document.getElementById('addUserFormContainer').style.display = 'none';
}

function applyUserRolePermissions(role) {
  const pStores = document.getElementById('userPermStores');
  const pCodes = document.getElementById('userPermCodes');
  const pUsers = document.getElementById('userPermUsers');
  const pContent = document.getElementById('userPermContent');
  const pAnalytics = document.getElementById('userPermAnalytics');
  const pCsv = document.getElementById('userPermCsv');

  if (role === 'Admin') {
    if (pStores) pStores.checked = true;
    if (pCodes) pCodes.checked = true;
    if (pUsers) pUsers.checked = true;
    if (pContent) pContent.checked = true;
    if (pAnalytics) pAnalytics.checked = true;
    if (pCsv) pCsv.checked = true;
  } else if (role === 'Supervisor') {
    if (pStores) pStores.checked = true;
    if (pCodes) pCodes.checked = true;
    if (pUsers) pUsers.checked = true;
    if (pContent) pContent.checked = false;
    if (pAnalytics) pAnalytics.checked = true;
    if (pCsv) pCsv.checked = false;
  } else if (role === 'User') {
    if (pStores) pStores.checked = true;
    if (pCodes) pCodes.checked = true;
    if (pUsers) pUsers.checked = false;
    if (pContent) pContent.checked = false;
    if (pAnalytics) pAnalytics.checked = false;
    if (pCsv) pCsv.checked = false;
  }
}

function saveNewUser() {
  const email = document.getElementById('newUserEmail')?.value.trim();
  const username = document.getElementById('newUserName')?.value.trim();
  const password = document.getElementById('newUserPassword')?.value.trim();
  const role = document.getElementById('newUserRole')?.value || 'User';

  if (!email || !username || !password) {
    alert('Please enter Email Address, Username, and Login Password!');
    return;
  }

  const permissions = {
    stores: document.getElementById('userPermStores')?.checked || false,
    codes: document.getElementById('userPermCodes')?.checked || false,
    users: document.getElementById('userPermUsers')?.checked || false,
    content: document.getElementById('userPermContent')?.checked || false,
    analytics: document.getElementById('userPermAnalytics')?.checked || false,
    csv: document.getElementById('userPermCsv')?.checked || false
  };

  const newId = 'USR-' + Math.floor(1000 + Math.random() * 9000);
  const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);

  const newUser = {
    id: newId,
    name: email,
    username: username,
    role: role,
    permissions: permissions,
    ip: `192.168.1.${Math.floor(Math.random()*200)+10}`,
    loginTime: nowStr,
    sessionStartMs: Date.now(),
    codesUsed: 0,
    status: '🟢 Active',
    lastActive: 'Just created',
    device: 'Windows 11 / Chrome',
    shoppingVisits: [],
    copiedCodes: []
  };

  userLogins.unshift(newUser);
  saveUsersToStorage();
  renderUserTable();
  closeAddUserForm();

  if (document.getElementById('newUserEmail')) document.getElementById('newUserEmail').value = '';
  if (document.getElementById('newUserName')) document.getElementById('newUserName').value = '';
  if (document.getElementById('newUserPassword')) document.getElementById('newUserPassword').value = '';

  addActivityLog(`👥 Admin created new ${role} account [${username}] (${email})`);
  alert(`🎉 Account created successfully!\n\nUsername: ${username}\nEmail: ${email}\nRole: ${role}`);
}

/* ==========================================================================
   Page Modals & Interactive Logic (Proof Lab, Rewards Hub, Extension Tools)
   ========================================================================== */

// --- 1. Proof Lab Modal ---
function openProofLabModal() {
  const modal = document.getElementById('proofLabModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeProofLabModal() {
  const modal = document.getElementById('proofLabModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

let simInterval = null;
function runLiveCheckoutSimulation() {
  const simOutput = document.getElementById('simConsoleOutput');
  const simStoreSelect = document.getElementById('simStoreSelect');
  const simCodeInput = document.getElementById('simCodeInput');
  if (!simOutput) return;

  const storeName = simStoreSelect ? simStoreSelect.value : 'Nike.com';
  const code = simCodeInput && simCodeInput.value.trim() ? simCodeInput.value.trim().toUpperCase() : 'DEAL30';

  simOutput.innerHTML = `<span style="color: #64748b;">> Initializing Sandbox Environment for ${storeName}...</span><br>`;
  
  const steps = [
    { delay: 500, text: `> Connecting to ${storeName} cart session gateway...` },
    { delay: 1100, text: `> Injecting test payload [Coupon Code: <strong>${code}</strong>]...` },
    { delay: 1700, text: `> Intercepting cart total calculation response...` },
    { delay: 2300, text: `> HTTP 200 OK | Discount Verified: <span style="color:#10b981; font-weight:bold;">-$45.00 Applied Success!</span>` },
    { delay: 2900, text: `> Generating SHA-256 Proof Hash: <code style="color:#06b6d4;">${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}</code>` },
    { delay: 3500, text: `<span style="color:#10b981; font-weight:bold;">✔ SIMULATION COMPLETE: Code '${code}' is 100% Active & Verified Live.</span>` }
  ];

  if (simInterval) clearInterval(simInterval);

  steps.forEach(step => {
    setTimeout(() => {
      simOutput.innerHTML += `${step.text}<br>`;
      simOutput.scrollTop = simOutput.scrollHeight;
    }, step.delay);
  });
}

// --- 2. Rewards & Cash Back Hub Modal ---
function openRewardsHubModal() {
  const modal = document.getElementById('rewardsHubModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeRewardsHubModal() {
  const modal = document.getElementById('rewardsHubModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function calculateAnnualSavings() {
  const spendInput = document.getElementById('calcSpendInput');
  const rateSelect = document.getElementById('calcRateSelect');
  const resVal = document.getElementById('calcResultVal');
  const bonusVal = document.getElementById('calcBonusVal');

  if (!spendInput || !resVal) return;

  const monthlySpend = parseFloat(spendInput.value) || 0;
  const rate = parseFloat(rateSelect ? rateSelect.value : 0.08);

  const annualCashback = Math.round(monthlySpend * 12 * rate);
  const totalCoins = Math.round(monthlySpend * 12 * 10);

  resVal.textContent = `$${annualCashback.toLocaleString()}`;
  if (bonusVal) bonusVal.textContent = `${totalCoins.toLocaleString()} Coins`;
}

function claimDailyStreakBonus() {
  const btn = document.getElementById('claimStreakBtn');
  if (!btn) return;

  btn.disabled = true;
  btn.style.opacity = '0.7';
  btn.innerHTML = `✨ +250 Coins Claimed! Come back tomorrow`;

  showToastNotification('🎉 Daily Streak Claimed! 250 Coins added to your balance.');
}

// --- 3. Extension & Tools Hub Modal ---
function openToolsHubModal() {
  const modal = document.getElementById('toolsHubModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeToolsHubModal() {
  const modal = document.getElementById('toolsHubModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function submitCommunityCode(e) {
  if (e) e.preventDefault();

  const store = document.getElementById('subStoreName');
  const code = document.getElementById('subCodeVal');
  const desc = document.getElementById('subDescVal');

  if (!store || !store.value.trim() || !code || !code.value.trim()) {
    alert('Please enter both Store Name and Coupon Code!');
    return;
  }

  showToastNotification(`🚀 Thank you! '${code.value.trim().toUpperCase()}' for ${store.value.trim()} submitted for verification.`);
  
  store.value = '';
  code.value = '';
  if (desc) desc.value = '';
}

// Global modal close handlers on window click & escape key
window.addEventListener('click', function(event) {
  const proofModal = document.getElementById('proofLabModal');
  const rewardsModal = document.getElementById('rewardsHubModal');
  const toolsModal = document.getElementById('toolsHubModal');

  if (event.target === proofModal) closeProofLabModal();
  if (event.target === rewardsModal) closeRewardsHubModal();
  if (event.target === toolsModal) closeToolsHubModal();
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeProofLabModal();
    closeRewardsHubModal();
    closeToolsHubModal();
  }
});

// ==========================================
// SUB-ADMIN & GRANULAR PERMISSIONS LOGIC
// ==========================================

const defaultSubAdmins = [
  {
    id: 'ADM-101',
    username: 'superadmin',
    email: 'superadmin@codes4u.com',
    role: 'Super Admin',
    createdDate: '2026-09-01',
    permissions: {
      stores: true,
      codes: true,
      users: true,
      content: true,
      analytics: true,
      csv: true,
      reset: true
    }
  },
  {
    id: 'ADM-102',
    username: 'rahul_editor',
    email: 'rahul@codes4u.com',
    role: 'Editor',
    createdDate: '2026-09-15',
    permissions: {
      stores: true,
      codes: true,
      users: false,
      content: true,
      analytics: true,
      csv: false,
      reset: false
    }
  }
];

let subAdmins = [];

function loadSubAdmins() {
  const saved = localStorage.getItem('simplycodes_sub_admins_v1');
  if (saved) {
    try {
      subAdmins = JSON.parse(saved);
    } catch(e) {
      subAdmins = defaultSubAdmins;
    }
  } else {
    subAdmins = defaultSubAdmins;
  }
  renderSubAdminTable();
}

function saveSubAdminsToStorage() {
  localStorage.setItem('simplycodes_sub_admins_v1', JSON.stringify(subAdmins));
}

function openCreateSubAdminForm() {
  const form = document.getElementById('createSubAdminContainer');
  if (form) form.style.display = 'block';
}

function closeCreateSubAdminForm() {
  const form = document.getElementById('createSubAdminContainer');
  if (form) form.style.display = 'none';
}

function applyRolePresetPermissions(role) {
  const pStores = document.getElementById('permStores');
  const pCodes = document.getElementById('permCodes');
  const pUsers = document.getElementById('permUsers');
  const pContent = document.getElementById('permContent');
  const pAnalytics = document.getElementById('permAnalytics');
  const pCsv = document.getElementById('permCsv');
  const pReset = document.getElementById('permReset');

  if (role === 'Admin') {
    if (pStores) pStores.checked = true;
    if (pCodes) pCodes.checked = true;
    if (pUsers) pUsers.checked = true;
    if (pContent) pContent.checked = true;
    if (pAnalytics) pAnalytics.checked = true;
    if (pCsv) pCsv.checked = true;
    if (pReset) pReset.checked = false;
  } else if (role === 'Editor') {
    if (pStores) pStores.checked = true;
    if (pCodes) pCodes.checked = true;
    if (pUsers) pUsers.checked = false;
    if (pContent) pContent.checked = true;
    if (pAnalytics) pAnalytics.checked = true;
    if (pCsv) pCsv.checked = false;
    if (pReset) pReset.checked = false;
  } else if (role === 'Viewer') {
    if (pStores) pStores.checked = false;
    if (pCodes) pCodes.checked = false;
    if (pUsers) pUsers.checked = false;
    if (pContent) pContent.checked = false;
    if (pAnalytics) pAnalytics.checked = true;
    if (pCsv) pCsv.checked = false;
    if (pReset) pReset.checked = false;
  }
}

function saveNewSubAdmin() {
  const username = document.getElementById('subAdminUsername').value.trim();
  const email = document.getElementById('subAdminEmail').value.trim();
  const password = document.getElementById('subAdminPassword').value.trim();
  const role = document.getElementById('subAdminRole').value;

  if (!username || !email || !password) {
    alert('Please fill in Admin Username, Email, and Password!');
    return;
  }

  const permissions = {
    stores: document.getElementById('permStores').checked,
    codes: document.getElementById('permCodes').checked,
    users: document.getElementById('permUsers').checked,
    content: document.getElementById('permContent').checked,
    analytics: document.getElementById('permAnalytics').checked,
    csv: document.getElementById('permCsv').checked,
    reset: document.getElementById('permReset').checked
  };

  const newAdmin = {
    id: 'ADM-' + Math.floor(100 + Math.random() * 900),
    username,
    email,
    role,
    createdDate: new Date().toISOString().substring(0, 10),
    permissions
  };

  subAdmins.push(newAdmin);
  saveSubAdminsToStorage();
  renderSubAdminTable();
  closeCreateSubAdminForm();

  document.getElementById('subAdminUsername').value = '';
  document.getElementById('subAdminEmail').value = '';
  document.getElementById('subAdminPassword').value = '';

  addActivityLog(`👑 Super Admin created new sub-admin [${username}] with role ${role}`);
  alert(`🎉 Sub-Admin '${username}' created successfully with custom permissions!`);
}

function deleteSubAdmin(adminId) {
  const adm = subAdmins.find(a => a.id === adminId);
  if (!adm) return;

  if (adm.role === 'Super Admin') {
    alert('Cannot delete the primary Super Admin account!');
    return;
  }

  if (confirm(`Are you sure you want to delete sub-admin '${adm.username}'?`)) {
    subAdmins = subAdmins.filter(a => a.id !== adminId);
    saveSubAdminsToStorage();
    renderSubAdminTable();
    addActivityLog(`🗑️ Super Admin deleted sub-admin account ${adm.username}`);
  }
}

function renderSubAdminTable() {
  const tbody = document.getElementById('subAdminTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  subAdmins.forEach(a => {
    const tr = document.createElement('tr');

    const permTags = Object.keys(a.permissions)
      .filter(k => a.permissions[k])
      .map(k => `<span style="font-size:0.72rem; padding:2px 6px; border-radius:4px; background:#E0EDFF; color:#1D61E7; font-weight:700; margin-right:3px;">${k}</span>`)
      .join('');

    tr.innerHTML = `
      <td>
        <strong style="color:#0F172A;">${a.username}</strong>
        <div style="font-size:0.75rem; color:#64748B;">${a.email}</div>
      </td>
      <td>
        <span style="font-size:0.78rem; font-weight:800; padding:2px 8px; border-radius:99px; background:${a.role === 'Super Admin' ? '#FEF3C7' : '#F1F5F9'}; color:${a.role === 'Super Admin' ? '#D97706' : '#1D61E7'};">
          ${a.role}
        </span>
      </td>
      <td>${permTags || '<span style="font-size:0.75rem; color:#94A3B8;">No write permissions</span>'}</td>
      <td style="font-size:0.8rem; color:#64748B;">${a.createdDate}</td>
      <td>
        ${a.role === 'Super Admin' ? '<span style="font-size:0.75rem; color:#94A3B8;">System Owner</span>' : `<button class="sc-admin-btn-delete" style="font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="deleteSubAdmin('${a.id}')">🗑️ Remove</button>`}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleAdminNotificationsMenu(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('adminNotificationsMenu');
  const profMenu = document.getElementById('adminProfileMenu');
  if (profMenu) profMenu.style.display = 'none';

  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}

function toggleAdminProfileMenu(event) {
  if (event) event.stopPropagation();
  const profMenu = document.getElementById('adminProfileMenu');
  const notifMenu = document.getElementById('adminNotificationsMenu');
  if (notifMenu) notifMenu.style.display = 'none';

  if (profMenu) {
    profMenu.style.display = profMenu.style.display === 'block' ? 'none' : 'block';
  }
}

function clearAdminNotifications() {
  const dot = document.getElementById('adminBellDot');
  const cnt = document.getElementById('adminNotifCount');
  if (dot) dot.style.display = 'none';
  if (cnt) {
    cnt.textContent = '0 New';
    cnt.style.background = '#F1F5F9';
    cnt.style.color = '#64748B';
  }
  showToastNotification('🔔 All notifications marked as read.');
}

// Global click listener to close popups
window.addEventListener('click', function(event) {
  const notifMenu = document.getElementById('adminNotificationsMenu');
  const profMenu = document.getElementById('adminProfileMenu');
  if (notifMenu && !notifMenu.contains(event.target)) notifMenu.style.display = 'none';
  if (profMenu && !profMenu.contains(event.target)) profMenu.style.display = 'none';
});

// ========================================================
// CSV & EXCEL BULK UPLOAD AND DOWNLOAD ENGINE (TAB 6 HUB)
// ========================================================

// 1. Export Stores Data to CSV (Bulk Download)
function exportStoresToCSV() {
  if (!storeData || storeData.length === 0) {
    alert('No merchant stores available to export!');
    return;
  }

  const headers = ['ID', 'Company Name', 'Domain', 'Category', 'Health Score', 'Discount Title', 'Target Website URL', 'Cashback', 'Logo URL'];
  const rows = storeData.map(s => [
    `"${(s.id || '').replace(/"/g, '""')}"`,
    `"${(s.name || '').replace(/"/g, '""')}"`,
    `"${(s.domain || '').replace(/"/g, '""')}"`,
    `"${(s.category || '').replace(/"/g, '""')}"`,
    `"${(s.health || '').replace(/"/g, '""')}"`,
    `"${(s.discountTitle || '').replace(/"/g, '""')}"`,
    `"${(s.targetUrl || '').replace(/"/g, '""')}"`,
    `"${(s.cashback || '').replace(/"/g, '""')}"`,
    `"${(s.logo || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  triggerCSVDownload(csvContent, 'codes4u_merchants_export.csv');
  showToastNotification(`📥 Exported ${storeData.length} Merchant Companies to CSV!`);
}

// 2. Export All Promo Codes & Deals to CSV
function exportCodesToCSV() {
  let allCodes = [];
  storeData.forEach(s => {
    (s.codes || []).forEach(c => {
      allCodes.push({
        companyName: s.name,
        domain: s.domain,
        title: c.title,
        code: c.code,
        desc: c.desc || s.discountDesc || ''
      });
    });
  });

  if (allCodes.length === 0) {
    alert('No promo codes available to export!');
    return;
  }

  const headers = ['Company Name', 'Domain', 'Discount Title', 'Promo Code', 'Terms / Description'];
  const rows = allCodes.map(c => [
    `"${(c.companyName || '').replace(/"/g, '""')}"`,
    `"${(c.domain || '').replace(/"/g, '""')}"`,
    `"${(c.title || '').replace(/"/g, '""')}"`,
    `"${(c.code || '').replace(/"/g, '""')}"`,
    `"${(c.desc || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  triggerCSVDownload(csvContent, 'codes4u_promocodes_export.csv');
  showToastNotification(`📥 Exported ${allCodes.length} Promo Codes to CSV!`);
}

// 3. Export User Accounts & Logins to CSV
function exportUsersToCSV() {
  if (!userLogins || userLogins.length === 0) {
    alert('No user accounts available to export!');
    return;
  }

  const headers = ['User ID', 'Username / Email', 'Full Name', 'Login IP', 'Status', 'Codes Used', 'Last Active', 'Device'];
  const rows = userLogins.map(u => [
    `"${(u.id || '').replace(/"/g, '""')}"`,
    `"${(u.name || '').replace(/"/g, '""')}"`,
    `"${(u.fullName || '').replace(/"/g, '""')}"`,
    `"${(u.ip || '').replace(/"/g, '""')}"`,
    `"${(u.status || '').replace(/"/g, '""')}"`,
    `"${u.codesUsed || 0}"`,
    `"${(u.lastActive || '').replace(/"/g, '""')}"`,
    `"${(u.device || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  triggerCSVDownload(csvContent, 'codes4u_user_accounts_export.csv');
  showToastNotification(`📥 Exported ${userLogins.length} User Accounts to CSV!`);
}

// Helper: Download Blob as CSV File
function triggerCSVDownload(content, fileName) {
  const blob = new Blob(['\uFEFF' + content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 4. Download Pre-Formatted CSV Templates
function downloadCSVTemplate(type) {
  if (type === 'stores') {
    const template = `Company Name,Domain,Category,Target Website URL,Discount Title,Logo Image URL\nNike,nike.com,fashion,https://www.nike.com,30% OFF Clearance,https://cdn.svgporn.com/logos/nike.svg\nSHEIN,shein.com,fashion,https://www.shein.com,20% OFF Sitewide,https://cdn.svgporn.com/logos/shein.svg\nHarbor Freight,harborfreight.com,home,https://www.harborfreight.com,20% OFF Any Single Item,https://images.simplycodes.com/brand/harborfreight.com/logo.png`;
    triggerCSVDownload(template, 'sample_merchants_template.csv');
  } else if (type === 'codes') {
    const template = `Company Name,Promo Code String,Discount Title,Description Terms\nNike,SWISH30,30% OFF Clearance,Extra 30% off footwear & activewear\nSHEIN,SPRING20,20% OFF Sitewide,Valid on fashion orders over $49\nHarbor Freight,HFVIP20,20% OFF Single Item,Valid in-store and online`;
    triggerCSVDownload(template, 'sample_promocodes_template.csv');
  } else {
    const template = `Username Email,Full Name,Login Password,Role,Status\nrahul@gmail.com,Rahul Sharma,pass123,User,Active\npriya@yahoo.com,Priya Verma,pass456,Admin,Active\namit@codes4u.com,Amit Patel,pass789,Supervisor,Active`;
    triggerCSVDownload(template, 'sample_user_accounts_template.csv');
  }
  showToastNotification('📄 Downloaded sample CSV template!');
}

// Global variable holding active parsed CSV preview data
let currentParsedCSVData = null;

// 5. Handle CSV File Upload & Parsing
function handleCSVFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    const records = parseCSVString(text);

    if (records.length < 2) {
      alert('CSV file appears empty or missing headers!');
      return;
    }

    const headers = records[0].map(h => h.trim());
    const dataRows = records.slice(1).filter(r => r.length > 0 && r.some(cell => cell.trim() !== ''));

    currentParsedCSVData = {
      file: file,
      headers: headers,
      rows: dataRows
    };

    const fnEl = document.getElementById('csvFileName');
    const cntEl = document.getElementById('csvRecordCount');
    const container = document.getElementById('csvPreviewContainer');

    if (fnEl) fnEl.textContent = file.name;
    if (cntEl) cntEl.textContent = `${dataRows.length} valid rows ready for database import`;
    if (container) container.style.display = 'block';

    renderCSVPreviewTable(headers, dataRows);
  };
  reader.readAsText(file);
}

// Helper: Robust CSV parser handling quotes and commas
function parseCSVString(text) {
  const lines = text.split(/\r\n|\n/);
  const result = [];
  for (let line of lines) {
    if (!line.trim()) continue;
    const row = [];
    let insideQuotes = false;
    let entry = '';
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        row.push(entry.trim().replace(/^"|"$/g, ''));
        entry = '';
      } else {
        entry += char;
      }
    }
    row.push(entry.trim().replace(/^"|"$/g, ''));
    result.push(row);
  }
  return result;
}

// 6. Render Parsed CSV Preview Table
function renderCSVPreviewTable(headers, rows) {
  const thead = document.getElementById('csvPreviewThead');
  const tbody = document.getElementById('csvPreviewTbody');

  if (thead) {
    thead.innerHTML = `<tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
  }

  if (tbody) {
    tbody.innerHTML = '';
    const displayRows = rows.slice(0, 10);
    displayRows.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = r.map(c => `<td>${c || '-'}</td>`).join('');
      tbody.appendChild(tr);
    });

    if (rows.length > 10) {
      const infoTr = document.createElement('tr');
      infoTr.innerHTML = `<td colspan="${headers.length}" style="text-align: center; color: #64748B; font-weight: 700; font-size: 0.8rem; background: #F1F5F9;">... and ${rows.length - 10} more rows</td>`;
      tbody.appendChild(infoTr);
    }
  }
}

// 7. Confirm & Save Imported CSV Rows into Live Database
function confirmBulkImportToDatabase() {
  if (!currentParsedCSVData || !currentParsedCSVData.rows || currentParsedCSVData.rows.length === 0) {
    alert('No CSV data available to import!');
    return;
  }

  const category = document.getElementById('csvImportCategory').value;
  const rows = currentParsedCSVData.rows;
  let count = 0;

  if (category === 'stores') {
    rows.forEach(r => {
      const name = r[0] || 'New Store';
      const domain = r[1] || (name.toLowerCase().replace(/\s+/g, '') + '.com');
      const storeCategory = r[2] || 'top';
      const targetUrl = r[3] || `https://www.${domain}`;
      const discountTitle = r[4] || 'Special Deals & Promo Codes';
      const logo = r[5] || 'https://via.placeholder.com/80';

      const existingIndex = storeData.findIndex(s => (s.domain || '').toLowerCase() === domain.toLowerCase() || s.name.toLowerCase() === name.toLowerCase());

      if (existingIndex !== -1) {
        storeData[existingIndex].name = name;
        storeData[existingIndex].targetUrl = targetUrl;
        storeData[existingIndex].discountTitle = discountTitle;
        if (logo) storeData[existingIndex].logo = logo;
      } else {
        storeData.unshift({
          id: name.toLowerCase().replace(/[^a-z0-9]/g, ''),
          name: name,
          domain: domain,
          category: storeCategory,
          health: '98% Health',
          discountTitle: discountTitle,
          discountDesc: `Extra discounts at ${name}`,
          logo: logo,
          targetUrl: targetUrl,
          cashback: '5% Cash Back',
          codes: [
            { title: discountTitle, code: 'SAVE10', desc: 'Valid on sitewide purchase' }
          ]
        });
      }
      count++;
    });

    saveStoresToStorage();
    renderAdminStoreList();
    renderStoreCards();
    showToastNotification(`🎉 Successfully imported ${count} merchant companies into database!`);
  } else if (category === 'codes') {
    rows.forEach(r => {
      const companyName = r[0] || '';
      const code = r[1] || 'SAVE20';
      const title = r[2] || 'Promo Code Deal';
      const desc = r[3] || 'Valid on sitewide purchase';

      let targetStore = storeData.find(s => s.name.toLowerCase() === companyName.toLowerCase() || (s.domain || '').toLowerCase().includes(companyName.toLowerCase()));

      if (!targetStore && storeData.length > 0) {
        targetStore = storeData[0];
      }

      if (targetStore) {
        if (!targetStore.codes) targetStore.codes = [];
        targetStore.codes.unshift({ title, code, desc });
        count++;
      }
    });

    saveStoresToStorage();
    renderAdminCodesList();
    showToastNotification(`🎉 Successfully imported ${count} promo codes into database!`);
  } else if (category === 'users') {
    rows.forEach(r => {
      const name = r[1] || r[0] || `user_${Date.now()}`;
      const fullName = r[2] || name;

      userLogins.unshift({
        id: `USR-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name,
        fullName: fullName,
        ip: '192.168.1.100',
        loginTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
        sessionStartMs: Date.now(),
        codesUsed: 0,
        status: '🟢 Active',
        lastActive: 'Just now',
        device: 'Web / Standard User',
        shoppingVisits: [],
        copiedCodes: [],
        orders: []
      });
      count++;
    });

    saveUsersToStorage();
    renderUserTable();
    showToastNotification(`🎉 Successfully imported ${count} user accounts into database!`);
  }

  cancelCSVUpload();
}

// 8. Cancel CSV Upload & Reset Preview Container
function cancelCSVUpload() {
  currentParsedCSVData = null;
  const container = document.getElementById('csvPreviewContainer');
  const input = document.getElementById('csvFileInput');
  if (container) container.style.display = 'none';
  if (input) input.value = '';
}

// ========================================================
// 24-HOUR UNIVERSAL UNDO & ACTION HISTORY ENGINE
// ========================================================

let undoLogs = [];

function loadUndoLogs() {
  const saved = localStorage.getItem('codes4u_undo_logs_v1');
  if (saved) {
    try {
      undoLogs = JSON.parse(saved);
    } catch(e) {
      undoLogs = [];
    }
  }
}

function saveUndoLogs() {
  localStorage.setItem('codes4u_undo_logs_v1', JSON.stringify(undoLogs));
  renderUndoLogList();
}

// 1. Record an undoable action whenever admin deletes or edits anything
function recordUndoableAction(type, title, snapshot) {
  loadUndoLogs();
  const newLog = {
    id: 'UNDO-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    type: type, // 'STORE_DELETE', 'STORE_EDIT', 'CODE_DELETE', 'USER_DELETE', 'USER_BLOCK', 'SITE_SETTINGS'
    title: title,
    timestamp: Date.now(),
    formattedTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
    restored: false,
    snapshot: snapshot
  };

  undoLogs.unshift(newLog);
  if (undoLogs.length > 50) undoLogs = undoLogs.slice(0, 50);

  saveUndoLogs();
  showUndoToastNotification(newLog);
}

// 2. Toast Notification with 24-Hour Undo Button
function showUndoToastNotification(log) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const item = document.createElement('div');
  item.className = 'sc-toast-item';
  item.style.background = '#0F172A';
  item.style.border = '1px solid #38BDF8';
  item.style.color = '#FFFFFF';
  item.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
  item.style.padding = '0.75rem 1rem';
  item.style.borderRadius = '12px';
  item.style.display = 'flex';
  item.style.alignItems = 'center';
  item.style.justifyContent = 'space-between';
  item.style.gap = '1rem';
  item.style.maxWidth = '420px';

  item.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.6rem;">
      <span style="font-size: 1.2rem;">📝</span>
      <div>
        <div style="font-size: 0.82rem; font-weight: 800; color: #FFFFFF;">${log.title}</div>
        <div style="font-size: 0.72rem; color: #38BDF8;">Undo available for 24 hours</div>
      </div>
    </div>
    <button class="sc-admin-btn-save" style="font-size: 0.75rem; padding: 0.35rem 0.75rem; background: linear-gradient(135deg, #059669, #047857); flex-shrink: 0;" onclick="executeUndoAction('${log.id}', this)">
      ↩️ Undo
    </button>
  `;

  container.appendChild(item);

  setTimeout(() => {
    if (item && item.parentNode) {
      item.style.animation = 'scToastIn 0.3s reverse forwards';
      setTimeout(() => item.remove(), 300);
    }
  }, 7000);
}

// 3. Execute Undo Action
function executeUndoAction(logId, btnElement) {
  loadUndoLogs();
  const log = undoLogs.find(l => l.id === logId);
  if (!log) {
    alert('Action log not found!');
    return;
  }

  // Check 24-hour limit (86,400,000 milliseconds = 24 hours)
  const elapsedMs = Date.now() - log.timestamp;
  if (elapsedMs > 24 * 60 * 60 * 1000) {
    alert('⚠️ Time Limit Expired! This action occurred more than 24 hours ago and cannot be undone.');
    return;
  }

  if (log.restored) {
    alert('This action has already been undone!');
    return;
  }

  // Revert action based on type
  if (log.type === 'STORE_DELETE') {
    const existing = storeData.find(s => s.id === log.snapshot.id);
    if (!existing) {
      storeData.unshift(log.snapshot);
      saveStoresToStorage();
      renderStoreCards();
      renderAdminStoreList();
    }
  } else if (log.type === 'STORE_EDIT') {
    const store = storeData.find(s => s.id === log.snapshot.id);
    if (store) {
      Object.assign(store, log.snapshot);
      saveStoresToStorage();
      renderStoreCards();
      renderAdminStoreList();
    }
  } else if (log.type === 'CODE_DELETE') {
    const store = storeData.find(s => s.id === log.snapshot.storeId);
    if (store) {
      if (!store.codes) store.codes = [];
      store.codes.splice(log.snapshot.codeIdx, 0, log.snapshot.codeObj);
      saveStoresToStorage();
      renderStoreCards();
      renderAdminStoreList();
      renderAdminCodesList();
    }
  } else if (log.type === 'USER_DELETE') {
    const existing = userLogins.find(u => u.id === log.snapshot.id);
    if (!existing) {
      userLogins.unshift(log.snapshot);
      saveUsersToStorage();
      renderUserTable();
    }
  } else if (log.type === 'USER_BLOCK') {
    const user = userLogins.find(u => u.id === log.snapshot.id);
    if (user) {
      user.status = log.snapshot.previousStatus;
      saveUsersToStorage();
      renderUserTable();
    }
  } else if (log.type === 'SITE_SETTINGS') {
    siteSettings = { ...log.snapshot };
    localStorage.setItem('simplycodes_site_settings_v2', JSON.stringify(siteSettings));
    applySiteSettingsToDOM();
  }

  log.restored = true;
  saveUndoLogs();

  if (btnElement) {
    btnElement.textContent = '✅ Undone!';
    btnElement.disabled = true;
    btnElement.style.background = '#64748B';
  }

  showToast(`✅ Successfully Undone: ${log.title}!`);
  addActivityLog(`↩️ Admin UNDID action: ${log.title}`);
}

// 4. Render 24-Hour Undo Log List inside Dashboard
function renderUndoLogList() {
  loadUndoLogs();
  const container = document.getElementById('adminUndoLogList');
  if (!container) return;

  container.innerHTML = '';

  const validLogs = undoLogs.filter(l => (Date.now() - l.timestamp) <= 24 * 60 * 60 * 1000);

  if (validLogs.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 1.5rem; color: #64748B; font-size: 0.85rem;">
        No recent delete or edit actions in the last 24 hours.
      </div>
    `;
    return;
  }

  validLogs.forEach(log => {
    const elapsedMinutes = Math.floor((Date.now() - log.timestamp) / (60 * 1000));
    const hoursLeft = Math.floor((24 * 60 - elapsedMinutes) / 60);
    const minsLeft = (24 * 60 - elapsedMinutes) % 60;

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.justifyContent = 'space-between';
    row.style.background = '#F8FAFC';
    row.style.border = '1px solid #CBD5E1';
    row.style.borderRadius = '10px';
    row.style.padding = '0.65rem 0.85rem';

    const isUndone = log.restored;

    row.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <strong style="font-size: 0.88rem; color: #0F172A;">${log.title}</strong>
          ${isUndone ? '<span style="font-size: 0.72rem; color: #059669; background: #DCFCE7; padding: 1px 6px; border-radius: 99px; font-weight: 800;">Undone</span>' : ''}
        </div>
        <div style="font-size: 0.75rem; color: #64748B; margin-top: 2px;">
          🕒 ${log.formattedTime} (${elapsedMinutes < 1 ? 'Just now' : `${elapsedMinutes}m ago`}) • <span style="color: #0284C7; font-weight: 700;">⏱️ ${hoursLeft}h ${minsLeft}m left to undo</span>
        </div>
      </div>
      <button class="sc-admin-btn-save" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; ${isUndone ? 'background: #94A3B8; cursor: not-allowed;' : 'background: linear-gradient(135deg, #059669, #047857);'}" ${isUndone ? 'disabled' : ''} onclick="executeUndoAction('${log.id}', this)">
        ${isUndone ? '✅ Restored' : '↩️ Undo'}
      </button>
    `;

    container.appendChild(row);
  });
}

