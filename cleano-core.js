// =========================================================================
// CLEANO CORE JS - CENTRALIZED LOGIC & UI RENDERER (DESKTOP & MOBILE)
// =========================================================================

// =========================================================================
// 1. متغیرهای سراسری، توابع کمکی اعداد و دیتابیس محصولات
// =========================================================================
const bUrl = typeof BASE_URL !== 'undefined' ? BASE_URL : "../../";

window.getCleanPath = function(path) {
    let base = typeof BASE_URL !== 'undefined' ? BASE_URL : "";
    if (base === "./") base = ""; 
    return base + path;
};

window.toFaDigits = function(num) {
    if (num === null || num === undefined) return "";
    const fa = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return String(num).replace(/[0-9]/g, w => fa[+w]);
};

window.toEnDigits = function(str) {
    if (!str) return "";
    return String(str)
        .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
        .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
};

const catalogDB = [
    { id: "CL-017", title: "دستگیره فر", titleEn: "OVEN HANDLE COVER", ref: "CL-017", url: "set-fer/dastgire-fer/index.html", img: "set-fer/cover-dastgire-fer.webp", salesData: { pack1: "2", pack2: "50" } },
    { id: "CL-018", title: "دستکش فر", titleEn: "OVEN GLOVES", ref: "CL-018", url: "set-fer/dastkesh-fer/index.html", img: "set-fer/cover-dastkesh-fer.webp", salesData: { pack1: "2", pack2: "24" } },
    { id: "CL-016", title: "دستگیره آشپزخانه", titleEn: "POT HOLDER", ref: "CL-016", url: "set-parcheie/dastgire-ashpazkhane/index.html", img: "set-parcheie/cover-dastgire-ashpazkhane.webp", salesData: { pack1: "2", pack2: "12" } },
    { id: "CL-014", title: "دستگیره قابلمه", titleEn: "POT HOLDER", ref: "CL-014", url: "set-parcheie/dastgire-ghablame/index.html", img: "set-parcheie/cover-dastgire-ghablame.webp", salesData: { pack1: "2", pack2: "24" } },
    { id: "CL-023", title: "دم کن برنج", titleEn: "RICE COOKER", ref: "CL-023", url: "set-parcheie/damkon-berenj/index.html", img: "set-parcheie/cover-damkon-berenj.webp", salesData: { pack1: "1", pack2: "12" } },
    { id: "CL-021", title: "پیشبند آشپزخانه", titleEn: "APRON", ref: "CL-021", url: "set-parcheie/pishband/index.html", img: "set-parcheie/cover-pishband.webp", salesData: { pack1: "1", pack2: "24" } },
    { id: "CL-019", title: "نمگیر ظروف", titleEn: "DISH DRAINER", ref: "CL-019", url: "set-parcheie/namgir-zorof/index.html", img: "set-parcheie/cover-namgir-zorof.webp", salesData: { pack1: "1", pack2: "24" } },
    { id: "CL-001", title: "دستمال طرحدار آشپزخانه", titleEn: "PATTERNED KITCHEN NAPKIN", ref: "CL-001", url: "dastmal-ashpazkhane/dastmal-tarhdar-ashpazkhane/index.html", img: "dastmal-ashpazkhane/cover-dastmal-tarhdar-ashpazkhane.webp", salesData: { pack1: "4", pack2: "100" } },
    { id: "CL-002", title: "دستمال تنظیف دولایه", titleEn: "DOUBLE LAYER NAPKIN", ref: "CL-002", url: "dastmal-ashpazkhane/dastmal-tanzif-dolaie/index.html", img: "dastmal-ashpazkhane/cover-dastmal-tanzif-dolaie.webp", salesData: { pack1: "4", pack2: "100" } },
    { id: "CL-004", title: "دستمال میکروفایبر", titleEn: "MICROFIBER TOWEL", ref: "CL-004", url: "dastmal-ashpazkhane/dastmal-microfiber/index.html", img: "dastmal-ashpazkhane/cover-dastmal-microfiber.webp", salesData: { pack1: "3", pack2: "80" } },
    { id: "CL-005", title: "دستمال تک رنگ آشپزخانه", titleEn: "SINGLE COLOR KITCHEN NAPKIN", ref: "CL-005", url: "dastmal-ashpazkhane/dastmal-takrang-ashpazkhane/index.html", img: "dastmal-ashpazkhane/cover-dastmal-takrang-ashpazkhane.webp", salesData: { pack1: "4", pack2: "100" } },
    { id: "CL-006", title: "حوله آشپزخانه", titleEn: "KITCHEN TOWEL", ref: "CL-006", url: "dastmal-ashpazkhane/hole-ashpazkhane/index.html", img: "dastmal-ashpazkhane/cover-hole-ashpazkhane.webp", salesData: { pack1: "2", pack2: "50" } },
    { id: "CL-028", title: "دستمال حوله‌ای", titleEn: "TERRY TOWEL", ref: "CL-028", url: "dastmal-ashpazkhane/dastmal-holeie/index.html", img: "dastmal-ashpazkhane/cover-dastmal-holeie.webp", salesData: { pack1: "2", pack2: "40" } },
    { id: "CL-029", title: "دستمال نخ پنبه", titleEn: "COTTON TOWEL", ref: "CL-029", url: "dastmal-ashpazkhane/dastmal-nakh-panbe/index.html", img: "dastmal-ashpazkhane/cover-dastmal-nakh-panbe.webp", salesData: { pack1: "3", pack2: "80" } },
    { id: "CL-030", title: "دستمال وایت ویو", titleEn: "WHITE VIEW TOWEL", ref: "CL-030", url: "dastmal-ashpazkhane/dastmal-white-view/index.html", img: "dastmal-ashpazkhane/cover-dastmal-white-view.webp", salesData: { pack1: "1", pack2: "12" } },
    { id: "CL-010", title: "سفره دو نفره", titleEn: "TWOSOME TABLECLOTH", ref: "CL-010", url: "sofre/sofre-do-nafare/index.html", img: "sofre/cover-sofre-do-nafare.webp", salesData: { pack1: "1", pack2: "12" } },
    { id: "CL-011", title: "سفره چهار نفره", titleEn: "FOURSOME TABLECLOTH", ref: "CL-011", url: "sofre/sofre-chahar-nafare/index.html", img: "sofre/cover-sofre-chahar-nafare.webp", salesData: { pack1: "1", pack2: "12" } },
    { id: "CL-012", title: "سفره شش نفره", titleEn: "SIXSOME TABLECLOTH", ref: "CL-012", url: "sofre/sofre-shesh-nafare/index.html", img: "sofre/cover-sofre-shesh-nafare.webp", salesData: { pack1: "1", pack2: "12" } },
    { id: "CL-013", title: "سفره هشت نفره", titleEn: "EIGHTSOME TABLECLOTH", ref: "CL-013", url: "sofre/sofre-hasht-nafare/index.html", img: "sofre/cover-sofre-hasht-nafare.webp", salesData: { pack1: "1", pack2: "12" } },
    { id: "CL-007", title: "کیسه سبزی", titleEn: "VEGETABLE BAG", ref: "CL-007", url: "mahsolat-takmili/kise-sabzi/index.html", img: "mahsolat-takmili/cover-kise-sabzi.webp", salesData: { pack1: "2", pack2: "50" } },
    { id: "CL-009", title: "سفره نان", titleEn: "BREAD CLOTH", ref: "CL-009", url: "mahsolat-takmili/sofre-nan/index.html", img: "mahsolat-takmili/cover-sofre-nan.webp", salesData: { pack1: "1", pack2: "30" } },
    { id: "CL-020", title: "نمگیر میکروفایبر", titleEn: "MICROFIBER DISH DRAINER", ref: "CL-020", url: "mahsolat-takmili/namgir-microfiber/index.html", img: "mahsolat-takmili/cover-namgir-microfiber.webp", salesData: { pack1: "1", pack2: "24" } },
    { id: "CL-022", title: "پیشبند ضد آب و ضد لک", titleEn: "APRON WATERPROOF AND ANTI STAIN", ref: "CL-022", url: "mahsolat-takmili/pishband-zede-ab-va-zede-lak/index.html", img: "mahsolat-takmili/cover-pishband-zede-ab-va-zede-lak.webp", salesData: { pack1: "1", pack2: "12" } }
];

// همگام‌سازی خودکار دیتابیس با مقادیر ذخیره‌شده از فایل‌های HTML محصولات
window.syncCatalogWithHtmlMeta = function() {
    try {
        const metaStore = JSON.parse(localStorage.getItem('cleano_html_meta') || '{}');
        if (metaStore["CL-004"] && metaStore["CL-004"].titleEn === "MICROFIBER CLOTH") {
            metaStore["CL-004"].titleEn = "MICROFIBER TOWEL";
            localStorage.setItem('cleano_html_meta', JSON.stringify(metaStore));
        }
        const packStore = JSON.parse(localStorage.getItem('cleano_html_packs') || '{}');
        catalogDB.forEach(item => {
            if (metaStore[item.id]) {
                if (metaStore[item.id].titleEn) item.titleEn = metaStore[item.id].titleEn;
                if (metaStore[item.id].title) item.title = metaStore[item.id].title;
            }
            if (packStore[item.id]) {
                if (!item.salesData) item.salesData = {};
                if (packStore[item.id].pack1) item.salesData.pack1 = packStore[item.id].pack1;
                if (packStore[item.id].pack2) item.salesData.pack2 = packStore[item.id].pack2;
            }
        });
    } catch(e) {}
};
window.syncCatalogWithHtmlMeta();

let orderList = JSON.parse(localStorage.getItem('cleano_order_list')) || [];

const minimalCartSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;

window.getUnifiedHeaderHTML = function(isHomePage = false, isAllPage = false) {
    const homeHref = window.getCleanPath('index.html');
    const allHref = window.getCleanPath('all/index.html');
    return `
        <div class="header-left">
            <a href="${homeHref}" class="home-logo">CLEANO</a>
            <nav class="main-nav-links">
                <a href="${homeHref}" class="nav-link ${isHomePage ? 'active' : ''}">HOME</a>
                <a href="${allHref}" class="nav-link ${isAllPage ? 'active' : ''}">ALL</a>
            </nav>
        </div>
        <div class="header-right">
            <div class="search-wrapper">
                <input type="text" class="search-input" placeholder="جستجوی نام یا کد..." autocomplete="off" onkeyup="window.handleGlobalSearch(this)" onfocus="window.handleGlobalSearch(this)">
                <button class="header-icon-btn search-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <div class="global-search-dropdown"></div>
            </div>
            <button class="header-icon-btn cart-trigger" onclick="window.toggleCartModal()">
                ${minimalCartSVG}
                <span class="cart-count-badge" style="display:none;">۰</span>
            </button>
        </div>
    `;
};

window.toggleFooterLangMenu = function(e) {
    if (e) e.stopPropagation();
    const dropdown = e.currentTarget.closest('.footer-lang-dropdown');
    if (!dropdown) return;
    const isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.footer-lang-dropdown.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) dropdown.classList.add('open');
};

window.selectFooterLang = function(lang, e) {
    if (e) e.stopPropagation();
    const dropdown = e.currentTarget.closest('.footer-lang-dropdown');
    if (dropdown) dropdown.classList.remove('open');
};

window.getUnifiedFooterHTML = function() {
    const homeHref = window.getCleanPath('index.html');
    return `
        <div class="footer-content">
            <div class="footer-left">
                <a href="${homeHref}" class="footer-logo">CLEANO</a>
                <span class="footer-copyright">© 2026 Home Textile Catalog</span>
            </div>
            <div class="footer-right">
                <div class="footer-lang-dropdown">
                    <button type="button" class="footer-lang-trigger" onclick="window.toggleFooterLangMenu(event)" title="Language">
                        <span>FA</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                    <div class="footer-lang-menu" onclick="event.stopPropagation()">
                        <button type="button" class="footer-lang-option active" onclick="window.selectFooterLang('FA', event)">
                            <span>FA</span>
                            <span class="lang-native">فارسی</span>
                        </button>
                        <button type="button" class="footer-lang-option disabled" onclick="window.selectFooterLang('EN', event)">
                            <span>EN</span>
                            <span class="lang-native">English</span>
                        </button>
                        <button type="button" class="footer-lang-option disabled" onclick="window.selectFooterLang('AR', event)">
                            <span>AR</span>
                            <span class="lang-native">العربية</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

window.handleGlobalSearch = function(inputElement) {
    const rawQuery = inputElement.value.trim();
    const query = window.toEnDigits(rawQuery).toLowerCase();
    const wrapper = inputElement.closest('.search-wrapper');
    if (!wrapper) return;
    
    let dropdown = wrapper.querySelector('.global-search-dropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'global-search-dropdown';
        wrapper.appendChild(dropdown);
    }
    if (query.length < 1) { dropdown.style.display = 'none'; dropdown.innerHTML = ''; return; }

    window.syncCatalogWithHtmlMeta();

    const results = catalogDB.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.ref.toLowerCase().includes(query) || 
        (item.titleEn && item.titleEn.toLowerCase().includes(query))
    );

    if (results.length > 0) {
        let html = '';
        results.forEach(res => {
            const imgPath = window.getCleanPath(res.img);
            const linkPath = window.getCleanPath(res.url);
            const fallbackImg = window.getCleanPath('aks-page-aval/cat-set-parcheie.webp');
            html += `
                <a href="${linkPath}" class="g-search-item">
                    <img src="${imgPath}" alt="${res.title}" onerror="this.onerror=null; this.src='${fallbackImg}';">
                    <div class="g-search-info">
                        <span class="g-search-title">${res.title}</span>
                        <span class="g-search-ref">${res.ref}</span>
                    </div>
                </a>`;
        });
        dropdown.innerHTML = html;
    } else {
        dropdown.innerHTML = '<div class="g-search-empty">محصولی یافت نشد.</div>';
    }
    dropdown.style.display = 'block';
};

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-wrapper')) { 
        document.querySelectorAll('.global-search-dropdown').forEach(el => { el.style.display = 'none'; }); 
    }
    if (!event.target.closest('.footer-lang-dropdown')) {
        document.querySelectorAll('.footer-lang-dropdown.open').forEach(el => el.classList.remove('open'));
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.global-search-dropdown').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.footer-lang-dropdown.open').forEach(el => el.classList.remove('open'));
        const cartOverlay = document.getElementById('cart-overlay');
        if (cartOverlay && cartOverlay.classList.contains('active')) window.toggleCartModal();
        const printModal = document.getElementById('print-info-modal');
        if (printModal && printModal.classList.contains('active')) window.closePrintModal(null, true);
        const barcodePopup = document.getElementById('barcode-popup');
        if (barcodePopup && barcodePopup.classList.contains('active')) barcodePopup.classList.remove('active');
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) window.closeLightbox(null, true);
    } else if (typeof window.navAmorySlide === 'function' && document.getElementById('amory-main-img')) {
        if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
        if (e.key === 'ArrowRight') window.navAmorySlide(1);
        if (e.key === 'ArrowLeft') window.navAmorySlide(-1);
    }
});

// =========================================================================
// 2. سبد سفارش و موتور تولید فاکتور تک‌صفحه‌ای A4 (سیاه‌وسفید)
// =========================================================================
const cartDrawerHTML = `
<div class="cart-overlay" id="cart-overlay" onclick="window.toggleCartModal()">
    <div class="cart-modal" id="cart-modal" onclick="event.stopPropagation()">
        <div class="cart-header">
            <h3>سبد سفارش</h3>
            <button class="close-cart" onclick="window.toggleCartModal()">✕</button>
        </div>
        <div class="cart-items-container" id="cart-items-container"></div>
        <div class="cart-footer" id="cart-footer-box">
            <div class="cart-summary-bar" id="cart-summary-bar" style="display:none;">
                <button class="clear-cart-btn" id="clear-cart-btn" onclick="window.clearAllCart()" title="حذف تمام اقلام سبد">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
                <span class="cs-total-val" id="cs-total-cartons">مجموع: ۰ کارتن</span>
            </div>
            <button class="pill-download-btn" onclick="window.openPrintModal()" id="main-download-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                دریافت برگه سفارش
            </button>
        </div>
    </div>
</div>
<div id="print-info-modal" class="print-modal-overlay" onclick="window.closePrintModal(event)">
    <div class="print-modal" onclick="event.stopPropagation()">
        <h3>مشخصات سفارش‌دهنده</h3>
        <p>در صورت تمایل نام و شماره تماس را وارد کنید (در صورت خالی گذاشتن، جای آن در برگه سفارش خالی می‌ماند).</p>
        <input type="text" id="print-customer-name" placeholder="نام مشتری / فروشگاه (اختیاری)" autocomplete="off">
        <input type="text" id="print-customer-phone" placeholder="شماره تماس (اختیاری)" autocomplete="off">
        <div class="print-modal-actions">
            <button onclick="window.closePrintModal(event, true)" class="print-cancel-btn">انصراف</button>
            <button onclick="window.executeDirectPrint()" class="print-direct-btn">چاپ مستقیم</button>
            <button onclick="window.executeImageShare()" class="print-share-btn" id="share-image-btn">اشتراک‌گذاری</button>
            <button onclick="window.executeImageDownload()" class="print-confirm-btn" id="generate-image-btn">دانلود عکس برگه</button>
        </div>
    </div>
</div>`;

window.toggleCartModal = function() { 
    const overlay = document.getElementById('cart-overlay'); 
    if(overlay) {
        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active'); document.body.style.overflow = 'auto'; 
        } else {
            overlay.classList.add('active'); document.body.style.overflow = 'hidden'; window.updateCartUI();
        }
    }
};

window.updateQty = function(productId, change) {
    let itemIndex = orderList.findIndex(i => i.id === productId);
    if (itemIndex > -1) { 
        orderList[itemIndex].qty += change; 
        if (orderList[itemIndex].qty <= 0) orderList.splice(itemIndex, 1); 
    } 
    else if (change > 0) { orderList.push({ id: productId, qty: change }); }
    localStorage.setItem('cleano_order_list', JSON.stringify(orderList)); 
    window.updateCartUI();
};

window.setDirectCartQty = function(productId, rawVal) {
    let cleanNum = parseInt(window.toEnDigits(rawVal).replace(/[^0-9]/g, ''));
    if (isNaN(cleanNum) || cleanNum <= 0) {
        window.removeFromCart(productId);
        return;
    }
    let itemIndex = orderList.findIndex(i => i.id === productId);
    if (itemIndex > -1) {
        orderList[itemIndex].qty = cleanNum;
    } else {
        orderList.push({ id: productId, qty: cleanNum });
    }
    localStorage.setItem('cleano_order_list', JSON.stringify(orderList));
    window.updateCartUI();
};

window.removeFromCart = function(productId) {
    orderList = orderList.filter(i => i.id !== productId);
    localStorage.setItem('cleano_order_list', JSON.stringify(orderList));
    window.updateCartUI();
};

window.clearAllCart = function() {
    orderList = [];
    localStorage.setItem('cleano_order_list', JSON.stringify(orderList));
    window.updateCartUI();
};

window.addProductToCart = function(productId, qty = 1) { window.updateQty(productId, qty); };

window.changeCatQty = function(e, btn, dir) {
    e.preventDefault(); 
    e.stopPropagation();
    const box = btn.closest('.hover-add-action');
    if (!box) return;
    const input = box.querySelector('.pill-input');
    const numDisplay = box.querySelector('.cat-qty-num');
    let val = parseInt(input.value) || 1;
    val += dir; 
    if (val < 1) val = 1; 
    input.value = val;
    if (numDisplay) numDisplay.innerText = window.toFaDigits(val);
};

window.quickAddWithQty = function(e, productId, btn) {
    e.preventDefault(); 
    e.stopPropagation();
    const box = btn.closest('.hover-add-action');
    if (!box) return;
    const input = box.querySelector('.pill-input');
    const numDisplay = box.querySelector('.cat-qty-num');
    let qty = input ? (parseInt(input.value) || 1) : 1;
    
    window.addProductToCart(productId, qty);
    
    const textSpan = btn.querySelector('span') || btn;
    const originalText = textSpan.innerText;
    btn.classList.add('success-state'); 
    textSpan.innerText = 'افزوده شد ✓'; 
    
    setTimeout(() => { 
        btn.classList.remove('success-state'); 
        textSpan.innerText = originalText; 
        if (input) input.value = 1; 
        if (numDisplay) numDisplay.innerText = '۱';
    }, 1400);
};

window.handleSmartAdd = function(productId, btn, selectId) { 
    const input = document.getElementById(selectId); 
    const qty = input ? parseInt(input.value) : 1; 
    
    if (qty > 0) {
        window.updateQty(productId, qty); 
        
        const origText = btn.innerText; 
        btn.classList.add('success-state');
        btn.innerText = `افزوده شد ✓`; 
        
        setTimeout(() => { 
            btn.classList.remove('success-state');
            btn.innerText = origText; 
            if(input) input.value = 1; 
            const numDisplay = document.getElementById('amory-qty-num-display');
            if(numDisplay) numDisplay.value = '۱';
        }, 1600); 
    }
};

window.syncCategoryCardBadges = function() {
    document.querySelectorAll('.minimal-product-card').forEach(card => {
        const badge = card.querySelector('.product-ref-badge');
        if (!badge) return;
        const refCode = badge.getAttribute('data-ref') || badge.innerText.trim();
        badge.setAttribute('data-ref', refCode);
        const inCart = orderList.find(item => item.id === refCode);
        if (inCart && inCart.qty > 0) {
            badge.classList.add('in-cart-badge');
            badge.innerHTML = `<span class="in-cart-dot"></span><span>${refCode}</span>`;
        } else {
            badge.classList.remove('in-cart-badge');
            badge.innerText = refCode;
        }
    });
};

window.updateCartUI = function() {
    window.syncCatalogWithHtmlMeta();
    const container = document.getElementById('cart-items-container');
    const footerBox = document.getElementById('cart-footer-box');
    const summaryBar = document.getElementById('cart-summary-bar');
    const clearBtn = document.getElementById('clear-cart-btn');
    let totalDistinctItems = orderList.length;

    document.querySelectorAll('.cart-count-badge').forEach(b => {
        b.innerText = window.toFaDigits(totalDistinctItems);
        if(totalDistinctItems > 0) { b.style.setProperty('display', 'flex', 'important'); } 
        else { b.style.setProperty('display', 'none', 'important'); }
    });

    window.syncCategoryCardBadges();

    if(!container) return;

    let packStore = {};
    try { packStore = JSON.parse(localStorage.getItem('cleano_html_packs') || '{}'); } catch(e) {}

    const getCatName = (url) => { 
        if(url.startsWith('mahsolat-takmili/')) return 'محصولات تکمیلی'; 
        if(url.startsWith('set-fer/')) return 'ست فر'; 
        if(url.startsWith('set-parcheie/') || url.startsWith('set-parchei/')) return 'ست پارچه‌ای'; 
        if(url.startsWith('dastmal-ashpazkhane/')) return 'حوله و دستمال آشپزخانه'; 
        if(url.startsWith('sofre/')) return 'سفره‌های ژله‌ای'; 
        return 'سایر محصولات'; 
    };

    let groupedCatalog = {};
    catalogDB.forEach(p => {
        let cat = getCatName(p.url);
        if(!groupedCatalog[cat]) groupedCatalog[cat] = [];
        groupedCatalog[cat].push(p);
    });

    let html = '';
    let grandTotalCartons = 0; 

    for(let cat in groupedCatalog) {
        let catTotalCartons = 0;
        groupedCatalog[cat].forEach(p => {
            let cartItem = orderList.find(i => i.id === p.id);
            if(cartItem) {
                catTotalCartons += cartItem.qty;
                grandTotalCartons += cartItem.qty;
            }
        });

        if(catTotalCartons > 0) {
            html += `<div class="cart-cat-block"><div class="cart-cat-head"><span>${cat}</span></div>`;
            groupedCatalog[cat].forEach(p => {
                let cartItem = orderList.find(i => i.id === p.id);
                let qty = cartItem ? cartItem.qty : 0;
                
                if (qty > 0) {
                    let p1 = "", p2 = "";
                    if (typeof PRODUCT_DATA !== 'undefined' && PRODUCT_DATA.id === p.id && PRODUCT_DATA.salesData) {
                        p1 = String(window.toEnDigits(PRODUCT_DATA.salesData.pack1 || "")).replace(/[^0-9]/g, '');
                        p2 = String(window.toEnDigits(PRODUCT_DATA.salesData.pack2 || "")).replace(/[^0-9]/g, '');
                    } else if (packStore[p.id]) {
                        p1 = packStore[p.id].pack1;
                        p2 = packStore[p.id].pack2;
                    } else if (p.salesData) {
                        p1 = String(window.toEnDigits(p.salesData.pack1 || "")).replace(/[^0-9]/g, '');
                        p2 = String(window.toEnDigits(p.salesData.pack2 || "")).replace(/[^0-9]/g, '');
                    }

                    let unitsPerCarton = "";
                    if (p2 && p1) {
                        unitsPerCarton = `هر کارتن ${window.toFaDigits(p2)} بسته ${window.toFaDigits(p1)} عددی`;
                    } else if (p2) {
                        unitsPerCarton = `هر کارتن ${window.toFaDigits(p2)} بسته`;
                    }

                    const prodLink = window.getCleanPath(p.url);
                    const prodThumb = window.getCleanPath(p.img);

                    html += `
                    <div class="compact-cart-row">
                        <div class="cc-right-wrap">
                            <a href="${prodLink}"><img src="${prodThumb}" alt="${p.title}" class="cc-thumb"></a>
                            <div class="cc-info">
                                <a href="${prodLink}" class="cc-title">${p.title}</a>
                                <div class="cc-meta">
                                    <span class="cc-ref">${p.ref}</span>${unitsPerCarton ? `<span style="color:#e0e0e0; margin: 0 4px;">|</span><span class="cc-meta-units">${unitsPerCarton}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="cc-actions">
                            <div class="cc-qty-box">
                                <button class="cc-btn" onclick="window.updateQty('${p.id}', -1)">−</button>
                                <input type="text" class="cc-input" value="${window.toFaDigits(qty)}" onchange="window.setDirectCartQty('${p.id}', this.value)" onfocus="this.select()">
                                <button class="cc-btn" onclick="window.updateQty('${p.id}', 1)">+</button>
                            </div>
                            <button class="cc-remove" onclick="window.removeFromCart('${p.id}')" title="حذف">✕</button>
                        </div>
                    </div>`;
                }
            });
            html += `</div>`;
        }
    }

    const allCatalogLink = window.getCleanPath('all/index.html');
    if (totalDistinctItems === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <p class="cart-empty-text">سبد سفارش شما در حال حاضر خالی است.</p>
                <a href="${allCatalogLink}" class="cart-empty-cta">مشاهده کاتالوگ و انتخاب محصولات ←</a>
            </div>
        `;
        if(footerBox) footerBox.style.display = 'none';
        if(clearBtn) clearBtn.style.display = 'none';
    } else {
        container.innerHTML = html;
        if(footerBox) footerBox.style.display = 'flex';
        if(clearBtn) clearBtn.style.display = 'inline-flex';
        if(summaryBar) {
            summaryBar.style.display = 'flex';
            document.getElementById('cs-total-cartons').innerText = `مجموع: ${window.toFaDigits(grandTotalCartons)} کارتن`;
        }
    }
};

window.openPrintModal = function() {
    if (orderList.length === 0) return;
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay && cartOverlay.classList.contains('active')) {
        cartOverlay.classList.remove('active');
    }
    document.getElementById('print-info-modal').classList.add('active');
};
window.closePrintModal = function(e, force = false) {
    if (force || (e && e.target.id === 'print-info-modal')) {
        document.getElementById('print-info-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

function generateSinglePageA4Markup() {
    window.syncCatalogWithHtmlMeta();
    const today = new Date().toLocaleDateString('fa-IR');
    const validItems = orderList.filter(i => i.qty > 0);
    const itemCount = validItems.length;
    const totalCartons = validItems.reduce((sum, item) => sum + item.qty, 0);
    
    const cName = document.getElementById('print-customer-name') ? document.getElementById('print-customer-name').value.trim() : '';
    const cPhone = document.getElementById('print-customer-phone') ? document.getElementById('print-customer-phone').value.trim() : '';

    let packStore = {};
    try { packStore = JSON.parse(localStorage.getItem('cleano_html_packs') || '{}'); } catch(e) {}

    const getCatName = (url) => { 
        if(url.startsWith('mahsolat-takmili/')) return 'محصولات تکمیلی'; 
        if(url.startsWith('set-fer/')) return 'ست فر'; 
        if(url.startsWith('set-parcheie/') || url.startsWith('set-parchei/')) return 'ست پارچه‌ای'; 
        if(url.startsWith('dastmal-ashpazkhane/')) return 'حوله و دستمال آشپزخانه'; 
        if(url.startsWith('sofre/')) return 'سفره‌های ژله‌ای'; 
        return 'سایر محصولات'; 
    };

    const categoriesOrder = ['ست فر', 'ست پارچه‌ای', 'حوله و دستمال آشپزخانه', 'سفره‌های ژله‌ای', 'محصولات تکمیلی', 'سایر محصولات'];
    let groupedOrder = {};
    validItems.forEach(item => {
        const p = catalogDB.find(x => x.id === item.id);
        if (p) {
            const cat = getCatName(p.url);
            if (!groupedOrder[cat]) groupedOrder[cat] = [];
            groupedOrder[cat].push({ ...item, p: p });
        }
    });

    const activeCatCount = Object.keys(groupedOrder).length;

    let rowPad = "8.5px 4px";
    let catTopPad = "16px";
    let fontSize = "12.5px";
    let metaFontSize = "10.5px";
    if (itemCount > 16 || (itemCount + activeCatCount) > 21) {
        rowPad = "5px 4px";
        catTopPad = "10px";
        fontSize = "11.5px";
        metaFontSize = "10px";
    } else if (itemCount > 10) {
        rowPad = "6.5px 4px";
        catTopPad = "13px";
        fontSize = "12px";
        metaFontSize = "10.5px";
    }

    let rowsHtml = '';
    let isFirstCat = true;
    categoriesOrder.forEach(cat => {
        if (!groupedOrder[cat] || groupedOrder[cat].length === 0) return;

        const currentCatTopPad = isFirstCat ? "8px" : catTopPad;
        isFirstCat = false;

        rowsHtml += `
            <tr>
                <td colspan="3" style="padding: ${currentCatTopPad} 4px 4px; font-size: 10.5px; font-weight: 500; color: #555; border-bottom: 1px solid #ccc; letter-spacing: 0;">
                    ${cat}
                </td>
            </tr>
        `;

        groupedOrder[cat].forEach(item => {
            const p = item.p;
            let p1 = "", p2 = "";
            if (packStore[p.id] && packStore[p.id].pack2) {
                p1 = packStore[p.id].pack1 || (p.salesData ? p.salesData.pack1 : "1");
                p2 = packStore[p.id].pack2;
            } else if (p.salesData) {
                p1 = p.salesData.pack1 || "1";
                p2 = p.salesData.pack2 || "";
            }
            
            const cleanP1 = String(window.toEnDigits(p1)).replace(/[^0-9]/g, '') || "1";
            const cleanP2 = String(window.toEnDigits(p2)).replace(/[^0-9]/g, '') || "";
            const ctnCount = parseInt(cleanP2) || 0;
            const rowUnits = ctnCount * item.qty;

            const fullProductTitle = p.title.includes('کیلینو') ? p.title : `${p.title} کیلینو`;
            const packText = cleanP2 ? `هر کارتن ${window.toFaDigits(cleanP2)} بسته ${window.toFaDigits(cleanP1)} عددی` : '';

            rowsHtml += `
                <tr>
                    <td style="padding: ${rowPad}; text-align: right; width: 72%; letter-spacing: 0; line-height: 1.45;">
                        <div style="display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap;">
                            <span style="font-weight: 500; color: #111; font-size: ${fontSize};">${fullProductTitle}</span>
                            <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: ${metaFontSize}; font-weight: 400; color: #666; letter-spacing: 1px;">${p.ref}</span>
                            ${packText ? `<span style="color: #bbb; font-size: ${metaFontSize};">|</span><span style="font-size: ${metaFontSize}; color: #555; font-weight: 300;">${packText}</span>` : ''}
                        </div>
                    </td>
                    <td style="padding: ${rowPad}; text-align: center; font-weight: 500; color: #111; width: 14%; font-size: ${fontSize}; letter-spacing: 0; line-height: 1.45;">
                        ${window.toFaDigits(item.qty)} کارتن
                    </td>
                    <td style="padding: ${rowPad}; text-align: left; font-weight: 300; color: #555; width: 14%; font-size: ${metaFontSize}; letter-spacing: 0; line-height: 1.45;">
                        ${rowUnits > 0 ? window.toFaDigits(rowUnits) + ' بسته' : '—'}
                    </td>
                </tr>
            `;
        });
    });

    const customerBarHtml = (cName || cPhone) ? `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 9px 14px; margin-bottom: 12px; background-color: #f8f8f8; border-radius: 3px; font-size: 11.5px; letter-spacing: 0;">
            <div><span style="color: #666; font-weight: 300; margin-left: 6px;">سفارش‌دهنده:</span><strong style="color: #111; font-weight: 500;">${cName || '—'}</strong></div>
            <div><span style="color: #666; font-weight: 300; margin-left: 6px;">شماره تماس:</span><strong style="color: #111; font-weight: 500; direction: ltr; display: inline-block;">${cPhone ? window.toFaDigits(cPhone) : '—'}</strong></div>
        </div>
    ` : `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 2px 12px; margin-bottom: 10px; border-bottom: 1px solid #ddd; font-size: 11px; font-weight: 300; color: #666; letter-spacing: 0;">
            <div style="width: 52%;">سفارش‌دهنده:</div>
            <div style="width: 42%;">شماره تماس:</div>
        </div>
    `;

    return `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; color: #111; font-family: 'Vazirmatn', sans-serif; box-sizing: border-box; letter-spacing: 0;">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid #222; padding-bottom: 14px; margin-bottom: 12px;">
                    <div style="text-align: right; letter-spacing: 0;">
                        <div style="font-size: 16px; font-weight: 500; color: #111; letter-spacing: 0;">برگه سفارش محصولات</div>
                        <div style="font-size: 11px; font-weight: 300; color: #555; margin-top: 4px; letter-spacing: 0;">تاریخ: ${today}</div>
                    </div>
                    <div style="text-align: left; direction: ltr;">
                        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 600; color: #111; letter-spacing: 5px; line-height: 1;">CLEANO</div>
                        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; font-weight: 400; letter-spacing: 3px; color: #666; margin-top: 5px;">Home Textile Catalog</div>
                    </div>
                </div>

                ${customerBarHtml}

                <table style="width: 100%; border-collapse: collapse; text-align: right;">
                    <thead>
                        <tr style="border-bottom: 1px solid #333;">
                            <th style="padding: 7px 4px; text-align: right; font-weight: 400; font-size: 10.5px; color: #555; width: 72%; letter-spacing: 0;">شرح محصول و بسته‌بندی</th>
                            <th style="padding: 7px 4px; text-align: center; font-weight: 400; font-size: 10.5px; color: #555; width: 14%; letter-spacing: 0;">تعداد کارتن</th>
                            <th style="padding: 7px 4px; text-align: left; font-weight: 400; font-size: 10.5px; color: #555; width: 14%; letter-spacing: 0;">تعداد بسته</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>

                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; padding: 12px 4px; border-top: 1px solid #222; letter-spacing: 0;">
                    <span style="font-size: 12px; font-weight: 500; color: #111;">جمع کل سفارش</span>
                    <strong style="font-size: 14px; font-weight: 600; color: #111;">${window.toFaDigits(totalCartons)} کارتن</strong>
                </div>
            </div>

            <div style="text-align: center; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; font-weight: 400; letter-spacing: 2.5px; color: #666; padding-top: 10px; border-top: 1px solid #e0e0e0; margin-top: auto;">
                CLEANO — Home Textile Catalog
            </div>
        </div>
    `;
}

window.executeImageDownload = function() {
    const btn = document.getElementById('generate-image-btn');
    const originalText = btn.innerText;
    btn.innerText = 'در حال ساخت برگه...';
    btn.style.pointerEvents = 'none';

    if (typeof html2canvas === 'undefined') {
        let script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => buildAndDownloadA4Image(btn, originalText);
        script.onerror = () => {
            btn.innerText = originalText;
            btn.style.pointerEvents = 'auto';
            alert('برای دانلود عکس برگه، اتصال اینترنت خود را بررسی کنید یا از دکمه چاپ مستقیم (Save as PDF) استفاده نمایید.');
        };
        document.head.appendChild(script);
    } else {
        buildAndDownloadA4Image(btn, originalText);
    }
};

function buildAndDownloadA4Image(btn, originalText) {
    const captureBox = document.createElement('div');
    captureBox.id = 'cleano-a4-capture-box';
    captureBox.style.position = 'fixed';
    captureBox.style.top = '0';
    captureBox.style.left = '0';
    captureBox.style.zIndex = '-9999';
    captureBox.style.width = '794px';
    captureBox.style.height = '1123px';
    captureBox.style.backgroundColor = '#ffffff';
    captureBox.style.padding = '34px 46px';
    captureBox.style.boxSizing = 'border-box';
    captureBox.style.direction = 'rtl';
    
    captureBox.innerHTML = generateSinglePageA4Markup();
    document.body.appendChild(captureBox);

    let jalaliFileName = `سفارش-کیلینو.jpg`;
    try {
        const now = new Date();
        const parts = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(now);
        const day = window.toEnDigits((parts.find(p => p.type === 'day') || {}).value || '').trim();
        const month = ((parts.find(p => p.type === 'month') || {}).value || '').trim().replace(/\s+/g, '-');
        const year = window.toEnDigits((parts.find(p => p.type === 'year') || {}).value || '').trim();
        if (day && month && year) {
            jalaliFileName = `سفارش-کیلینو-${day}-${month}-${year}.jpg`;
        }
    } catch (e) {}

    setTimeout(() => {
        html2canvas(captureBox, {
            scale: 2,
            backgroundColor: "#ffffff",
            logging: false,
            onclone: (clonedDoc) => {
                clonedDoc.querySelectorAll('img').forEach(img => img.remove());
            }
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            const link = document.createElement('a');
            link.download = jalaliFileName;
            link.href = imgData;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            if (captureBox.parentNode) document.body.removeChild(captureBox);
            window.closePrintModal(null, true);
            btn.innerText = originalText;
            btn.style.pointerEvents = 'auto';
        }).catch(err => {
            console.error("Image Download Error:", err);
            if (captureBox.parentNode) document.body.removeChild(captureBox);
            btn.innerText = originalText;
            btn.style.pointerEvents = 'auto';
        });
    }, 120);
}

window.executeDirectPrint = function() {
    const printWin = window.open('', '_blank', 'width=850,height=950');
    if (!printWin) return;
    printWin.document.write(`
        <!DOCTYPE html>
        <html lang="fa" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>برگه سفارش کیلینو</title>
            <link href="https://v1.fontapi.ir/css/Vazirmatn" rel="stylesheet">
            <style>
                @page { size: A4 portrait; margin: 8mm 10mm; }
                html, body { margin: 0; padding: 0; background: #fff; color: #111; font-family: 'Vazirmatn', sans-serif; direction: rtl; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                .a4-print-wrapper { width: 100%; height: 277mm; max-height: 277mm; padding: 3mm 5mm; box-sizing: border-box; overflow: hidden; page-break-inside: avoid; page-break-after: avoid; }
            </style>
        </head>
        <body>
            <div class="a4-print-wrapper">${generateSinglePageA4Markup()}</div>
            <script>
                window.onload = function() { setTimeout(function(){ window.print(); window.close(); }, 350); };
            <\/script>
        </body>
        </html>
    `);
    printWin.document.close();
    window.closePrintModal(null, true);
};

// =========================================================================
// 3. رندر صفحه محصول تکی (Single Product Page - Level 3)
// =========================================================================
window.renderProductPage = function() {
    const root = document.getElementById('cleano-app-root');
    if (!root || typeof PRODUCT_DATA === 'undefined') return;
    const d = PRODUCT_DATA;
    
    window.amoryImages = d.images;
    window.amoryCurrentIdx = 0;

    const categoryData = {
        "dastmal-ashpazkhane": { catNameEn: "KITCHEN TOWELS & CLOTHS" },
        "set-parcheie": { catNameEn: "FABRIC SET" },
        "set-parchei": { catNameEn: "FABRIC SET" },
        "set-fer": { catNameEn: "OVEN SET" },
        "sofre": { catNameEn: "TABLECLOTHS" },
        "mahsolat-takmili": { catNameEn: "EXTRAS" }
    };
    
    const masterProduct = typeof catalogDB !== 'undefined' ? catalogDB.find(p => p.id === d.id) : null;
    let catKey = "all";
    if (masterProduct && masterProduct.url) {
        catKey = masterProduct.url.split('/')[0];
    } else if (d.category && d.category.link) {
        catKey = d.category.link.replace('../', '').replace('/index.html', '');
    }

    const catInfo = categoryData[catKey] || { catNameEn: "COLLECTION" };
    const headerCategoryEn = catInfo.catNameEn;

    const urlParams = new URLSearchParams(window.location.search);
    let cameFromAll = false;
    if (urlParams.get('from') === 'all') {
        cameFromAll = true;
        try { sessionStorage.setItem('cleano_nav_origin', 'all'); } catch(e) {}
    } else if (document.referrer && document.referrer.includes('/all/')) {
        cameFromAll = true;
    } else {
        try {
            if (sessionStorage.getItem('cleano_nav_origin') === 'all') cameFromAll = true;
        } catch(e) {}
    }

    const categoryPageLink = catKey !== "all" ? `${bUrl}${catKey}/index.html#filter-anchor` : `${bUrl}all/index.html`;
    const backTargetLink = cameFromAll ? `${bUrl}all/index.html` : categoryPageLink;
    const breadcrumbParentText = cameFromAll ? "ALL" : headerCategoryEn;
    const breadcrumbParentLink = cameFromAll ? `${bUrl}all/index.html` : categoryPageLink;

    const mainEnglishTitle = (d.titleEn && d.titleEn.trim() !== '') 
        ? d.titleEn.trim() 
        : ((masterProduct && masterProduct.titleEn) || headerCategoryEn);

    window.amoryImages.forEach(src => { const pre = new Image(); pre.src = src; });

    window.changeAmorySlide = function(idx) {
        if (window.amoryCurrentIdx === idx) return;
        window.amoryCurrentIdx = idx;
        const mainImg = document.getElementById('amory-main-img');
        if (!mainImg) return;

        document.querySelectorAll('.amory-nav-item').forEach((el, i) => {
            if(i === idx) el.classList.add('active');
            else el.classList.remove('active');
        });

        mainImg.style.opacity = '0';
        mainImg.style.transform = 'scale(1.02)';

        const nextSrc = window.amoryImages[idx];
        const tempImg = new Image();
        tempImg.src = nextSrc;

        setTimeout(() => {
            const revealNewImg = () => {
                mainImg.src = nextSrc;
                requestAnimationFrame(() => {
                    mainImg.style.opacity = '1';
                    mainImg.style.transform = 'scale(1)';
                });
            };
            if (tempImg.complete) revealNewImg();
            else tempImg.onload = revealNewImg;
        }, 220);
    };

    window.navAmorySlide = function(dir) {
        let newIdx = (window.amoryCurrentIdx + dir + window.amoryImages.length) % window.amoryImages.length;
        window.changeAmorySlide(newIdx);
    };
    
    window.changePageQtyNew = function(delta) {
        const input = document.getElementById('amory-qty-input');
        const numDisplay = document.getElementById('amory-qty-num-display');
        
        let currentVal = parseInt(input.value) || 1;
        let newVal = currentVal + delta;
        if(newVal < 1) newVal = 1;
        
        input.value = newVal;
        numDisplay.value = window.toFaDigits(newVal);
    };

    window.onDirectPageQtyInput = function(el) {
        const input = document.getElementById('amory-qty-input');
        let clean = parseInt(window.toEnDigits(el.value).replace(/[^0-9]/g, ''));
        if (isNaN(clean) || clean < 1) clean = 1;
        input.value = clean;
        el.value = window.toFaDigits(clean);
    };
    
    window.toggleInlineSpecs = function() {
        const wrapper = document.getElementById('inline-specs-wrapper');
        const icon = document.getElementById('specs-toggle-icon');
        if(wrapper.classList.contains('active')) {
            wrapper.classList.remove('active');
            icon.innerText = '+';
            icon.style.transform = 'rotate(0deg)';
        } else {
            wrapper.classList.add('active');
            icon.innerText = '−'; 
            icon.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                wrapper.scrollIntoView({behavior: "smooth", block: "nearest"});
            }, 300);
        }
    };
    
    window.openBarcodePopup = function() {
        document.getElementById('barcode-popup').classList.add('active');
    };

    let navHtml = '';
    for(let i = 0; i < d.images.length; i++) {
        navHtml += `<div class="amory-nav-item ${i === 0 ? 'active' : ''}" onclick="window.changeAmorySlide(${i})"></div>`;
    }

    let hlCartonNum = "12"; 
    let hlSize = ""; 
    let hlPackNum = "1";
    let hlColors = ""; 
    let hlCartonSize = ""; 
    let hlCartonWeight = ""; 
    
    if (d.salesData) {
        if(d.salesData.pack2) hlCartonNum = String(window.toEnDigits(d.salesData.pack2)).replace(/[^0-9]/g, '') || "12";
        if(d.salesData.size && d.salesData.size !== '-') hlSize = d.salesData.size;
        else if(d.salesData.boxSize && d.salesData.boxSize !== '-') hlSize = d.salesData.boxSize;
        if(d.salesData.pack1) hlPackNum = String(window.toEnDigits(d.salesData.pack1)).replace(/[^0-9]/g, '') || "1";
        if(d.salesData.colors && d.salesData.colors !== '-') hlColors = String(window.toEnDigits(d.salesData.colors)).replace(/[^0-9]/g, '') || d.salesData.colors;
        if(d.salesData.cartonSize && d.salesData.cartonSize !== '-') hlCartonSize = d.salesData.cartonSize.replace(/[a-zA-Z]/g, '').trim();
        if(d.salesData.cartonWeight && d.salesData.cartonWeight !== '-') hlCartonWeight = d.salesData.cartonWeight;
    }

    const faSizeText = hlSize.toLowerCase() === 'free size' ? 'فری‌سایز' : window.toFaDigits(hlSize.replace(/cm/ig, '').trim());

    let detailsListHtml = `
        <li class="imd-item">
            <span class="imd-lbl">تعداد در بسته</span>
            <span class="imd-val">${window.toFaDigits(hlPackNum)} عددی</span>
        </li>
        <li class="imd-item">
            <span class="imd-lbl">تعداد در کارتن</span>
            <span class="imd-val">${window.toFaDigits(hlCartonNum)} بسته</span>
        </li>
    `;
    if (hlSize) {
        detailsListHtml += `
        <li class="imd-item">
            <span class="imd-lbl">سایز محصول</span>
            <span class="imd-val">${faSizeText}</span>
        </li>`;
    }
    if (hlColors) {
        detailsListHtml += `
        <li class="imd-item">
            <span class="imd-lbl">تنوع رنگ / طرح</span>
            <span class="imd-val">${window.toFaDigits(hlColors)}</span>
        </li>`;
    }
    if (hlCartonSize) {
        detailsListHtml += `
        <li class="imd-item">
            <span class="imd-lbl">ابعاد کارتن</span>
            <span class="imd-val ltr-val">${window.toFaDigits(hlCartonSize)}</span>
        </li>`;
    }
    if (hlCartonWeight) {
        detailsListHtml += `
        <li class="imd-item">
            <span class="imd-lbl">وزن کارتن</span>
            <span class="imd-val">${window.toFaDigits(hlCartonWeight)}</span>
        </li>`;
    }

    const standardKeys = ['moq', 'pack1', 'pack2', 'colors', 'size', 'boxSize', 'cartonSize', 'cartonWeight', 'material'];
    if (d.salesData) {
        Object.keys(d.salesData).forEach(key => {
            if (!standardKeys.includes(key) && d.salesData[key] && d.salesData[key] !== '-') {
                detailsListHtml += `
                <li class="imd-item">
                    <span class="imd-lbl">${key}</span>
                    <span class="imd-val">${window.toFaDigits(d.salesData[key])}</span>
                </li>`;
            }
        });
    }
    if (Array.isArray(d.extraSpecs)) {
        d.extraSpecs.forEach(sp => {
            if (sp && sp.label && sp.value && sp.value !== '-') {
                detailsListHtml += `
                <li class="imd-item">
                    <span class="imd-lbl">${sp.label}</span>
                    <span class="imd-val">${window.toFaDigits(sp.value)}</span>
                </li>`;
            }
        });
    }

    try {
        let packStore = JSON.parse(localStorage.getItem('cleano_html_packs') || '{}');
        packStore[d.id] = { pack1: hlPackNum, pack2: hlCartonNum };
        localStorage.setItem('cleano_html_packs', JSON.stringify(packStore));

        let metaStore = JSON.parse(localStorage.getItem('cleano_html_meta') || '{}');
        metaStore[d.id] = { titleEn: mainEnglishTitle, title: d.title };
        localStorage.setItem('cleano_html_meta', JSON.stringify(metaStore));
        window.syncCatalogWithHtmlMeta();
    } catch(e) {}

    let barcodeId = d.id.replace('CL-', ''); 

    root.innerHTML = `
        <header class="wudo-header">
            <div class="wh-left">
                <a href="${bUrl}index.html" class="wudo-logo">CLEANO</a>
            </div>
            <div class="wh-right">
                <nav class="wudo-nav-links">
                    <a href="${bUrl}index.html">HOME</a>
                    <a href="${bUrl}all/index.html">ALL</a>
                </nav>
                <div class="wh-icons">
                    <div class="search-wrapper">
                        <input type="text" class="search-input" placeholder="جستجوی نام یا کد..." autocomplete="off" onkeyup="window.handleGlobalSearch(this)" onfocus="window.handleGlobalSearch(this)">
                        <button class="header-icon-btn search-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                        <div class="global-search-dropdown"></div>
                    </div>
                    <button class="wudo-icon-btn cart-trigger" onclick="window.toggleCartModal()">
                        ${minimalCartSVG}
                        <span class="cart-count-badge" id="wudo-cart-badge" style="display:none;">۰</span>
                    </button>
                </div>
            </div>
        </header>

        <div>
            <div class="amory-layout">
                <div class="amory-left">
                    <div class="amory-img-container">
                        <img id="amory-main-img" class="amory-main-img" src="${d.images[0]}" alt="${d.title}">
                    </div>
                    ${d.images.length > 1 ? `<button class="glass-element amory-arrow prev" onclick="window.navAmorySlide(-1)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>` : ''}
                    ${d.images.length > 1 ? `<button class="glass-element amory-arrow next" onclick="window.navAmorySlide(1)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>` : ''}
                    <div class="amory-nav">${navHtml}</div>
                    <button class="glass-element amory-zoom-btn" onclick="window.openLightbox()" title="بزرگ‌نمایی تصویر">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    </button>
                </div>

                <div class="amory-right">
                    <div class="amory-top-nav">
                        <div class="amory-breadcrumbs">
                            <a href="${bUrl}index.html">HOME</a>
                            <span class="sep">/</span>
                            <a href="${breadcrumbParentLink}">${breadcrumbParentText}</a>
                            <span class="sep">/</span>
                            <span class="current">${d.ref}</span>
                        </div>
                        <a href="${backTargetLink}" class="amory-back-btn">
                            BACK
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </div>

                    <div class="amory-title-group">
                        <h1 class="amory-en-title">${mainEnglishTitle}</h1>
                        <h2 class="amory-fa-subtitle">${d.title}</h2>
                        <span class="amory-ref">REF: ${d.ref}</span>
                    </div>

                    <div class="amory-action-row">
                        <div class="amory-qty-box">
                            <button class="amory-qty-btn" onclick="window.changePageQtyNew(-1)">−</button>
                            <div class="amory-qty-display">
                                <input type="text" id="amory-qty-num-display" class="amory-qty-num-input" value="۱" onchange="window.onDirectPageQtyInput(this)" onfocus="this.select()">
                                <span class="amory-qty-lbl" id="amory-qty-lbl-display">کارتن</span>
                            </div>
                            <input type="hidden" id="amory-qty-input" class="amory-qty-input" value="1">
                            <button class="amory-qty-btn" onclick="window.changePageQtyNew(1)">+</button>
                        </div>
                        <button class="amory-cart-btn" onclick="window.handleSmartAdd('${d.id}', this, 'amory-qty-input')">افزودن به سبد سفارش</button>
                    </div>

                    <button class="amory-more-btn" onclick="window.toggleInlineSpecs()">
                        <span class="amory-more-btn-text">جزئیات محصول</span>
                        <span id="specs-toggle-icon" class="amory-more-btn-icon">+</span>
                    </button>

                    <div id="inline-specs-wrapper" class="inline-specs-wrapper">
                        <p class="imd-desc">${d.description}</p>
                        <ul class="imd-list">
                            ${detailsListHtml}
                        </ul>
                        <button class="imd-barcode-trigger" id="barcode-trigger-btn" onclick="window.openBarcodePopup()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5V4h4M20 5V4h-4M4 19v1h4M20 19v1h-4M9 9h1v6H9zM12 9h1v6h-1zM15 9h1v6h-1z"></path></svg>
                            VIEW BARCODE
                        </button>
                    </div>
                </div>
            </div>

            <footer class="main-footer">${window.getUnifiedFooterHTML()}</footer>
        </div>

        <div class="barcode-popup-overlay" id="barcode-popup" onclick="this.classList.remove('active')">
            <div class="barcode-popup-content" onclick="event.stopPropagation()">
                <button class="barcode-popup-close" onclick="document.getElementById('barcode-popup').classList.remove('active')">✕</button>
                <img src="barcode-${barcodeId}.png" alt="Barcode ${d.id}" class="barcode-img-large" onerror="const btn=document.getElementById('barcode-trigger-btn'); if(btn) btn.style.display='none'; this.outerHTML='<span style=\\'font-family:Vazirmatn,sans-serif; font-size:11px; color:#999;\\'>تصویر بارکد ثبت نشده است</span>'">
                <div style="font-family:'Helvetica Neue',Arial,sans-serif; font-size:10px; color:#aaa; letter-spacing:3px; margin-top:15px; text-transform:uppercase;">${d.ref}</div>
            </div>
        </div>

        <div id="lightbox" onclick="window.closeLightbox(event)">
            <button class="lb-close" onclick="window.closeLightbox(event, true)">✕</button>
            <div class="lb-scroll-area" id="lb-scroll-area"></div>
        </div>
    `;

    setTimeout(() => {
        const hp = document.getElementById('cleano-header-placeholder');
        if(hp) hp.style.display = 'none';
        const fp = document.getElementById('cleano-footer-placeholder');
        if(fp) fp.style.display = 'none';
        document.querySelectorAll('.main-header:not(.wudo-header)').forEach(e => e.style.display = 'none');
        window.updateCartUI();
    }, 50);
};

// =========================================================================
// 4. رندر صفحات دسته‌بندی و صفحه All (Category Pages - Level 2)
// =========================================================================
window.renderCategoryPage = function() {
    const container = document.getElementById('catalog-container');
    if (!container) return; 
    if (typeof ACTIVE_CATEGORY === 'undefined' || typeof BASE_URL === 'undefined') return;

    window.syncCatalogWithHtmlMeta();

    try {
        sessionStorage.setItem('cleano_nav_origin', ACTIVE_CATEGORY === 'all' ? 'all' : 'category');
    } catch(e) {}

    const categoryData = {
        "dastmal-ashpazkhane": { catNameEn: "KITCHEN TOWELS & CLOTHS", bannerTitleEn: "KITCHEN TOWELS", faTitle: "حوله و دستمال آشپزخانه", desc: "A large set of highly absorbent and durable towels crafted for daily use.", heroImg: "../dastmal-ashpazkhane/cover-dastmal.webp" },
        "set-parcheie": { catNameEn: "FABRIC SET", bannerTitleEn: "CONTEMPORARY DESIGN", faTitle: "ست پارچه‌ای", desc: "A large set of beautiful & fully flexible home textiles. Lets you create your kitchen space quickly & easily.", heroImg: "../set-parcheie/cover-set-parcheie.webp" },
        "set-fer": { catNameEn: "OVEN SET", bannerTitleEn: "OVEN ESSENTIALS", faTitle: "ست فر", desc: "A perfect blend of heat resistance and elegant design for your daily baking needs.", heroImg: "../set-fer/cover-set-fer.webp" },
        "sofre": { catNameEn: "TABLECLOTHS", bannerTitleEn: "MODERN TABLECLOTHS", faTitle: "سفره‌های ژله‌ای", desc: "Easy to clean, beautifully patterned tablecloths that protect and enhance your dining area.", heroImg: "../sofre/cover-sofre.webp" },
        "mahsolat-takmili": { catNameEn: "EXTRAS", bannerTitleEn: "KITCHEN ACCESSORIES", faTitle: "محصولات تکمیلی", desc: "Discover our range of complementary kitchen accessories designed to make life easier.", heroImg: "../mahsolat-takmili/cover-takmili.webp" }
    };

    const catInfo = categoryData[ACTIVE_CATEGORY] || { catNameEn: "ALL PRODUCTS", bannerTitleEn: "ALL PRODUCTS", faTitle: "تمامی محصولات", desc: "Our premium collection.", heroImg: "" };

    let fullHTML = `
        <header class="main-header inner-header">
            ${window.getUnifiedHeaderHTML(false, ACTIVE_CATEGORY === 'all')}
        </header>

        <div class="cat-top-bar-nav">
            <div class="cat-breadcrumbs">
                <a href="../index.html">HOME</a>
                <span>/</span>
                <span class="current">${catInfo.catNameEn}</span>
            </div>
            <a href="../index.html" class="cat-back-link">
                BACK
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
        </div>
    `;

    if (ACTIVE_CATEGORY !== 'all') {
        fullHTML += `
        <div class="cat-hero-section reveal active"> 
            <div class="cat-hero-content">
                <img src="${catInfo.heroImg}" alt="${catInfo.bannerTitleEn}" class="cat-hero-bg-img" onerror="this.style.display='none'">
                <div class="cat-hero-text-area">
                    <h1 class="cat-hero-main-title">${catInfo.bannerTitleEn}</h1>
                    <p class="cat-hero-desc">${catInfo.desc}</p>
                </div>
            </div>
        </div>
        `;
    }

    fullHTML += `
        <div class="cat-filter-bar" id="filter-anchor" ${ACTIVE_CATEGORY === 'all' ? 'style="display:none;"' : ''}>
            <div class="cat-filter-links">
                <a href="../set-fer/index.html#filter-anchor" class="${ACTIVE_CATEGORY === 'set-fer' ? 'active' : ''}">ست فر</a>
                <a href="../set-parcheie/index.html#filter-anchor" class="${ACTIVE_CATEGORY === 'set-parcheie' ? 'active' : ''}">ست پارچه‌ای</a>
                <a href="../dastmal-ashpazkhane/index.html#filter-anchor" class="${ACTIVE_CATEGORY === 'dastmal-ashpazkhane' ? 'active' : ''}">حوله و دستمال آشپزخانه</a>
                <a href="../sofre/index.html#filter-anchor" class="${ACTIVE_CATEGORY === 'sofre' ? 'active' : ''}">سفره‌های ژله‌ای</a>
                <a href="../mahsolat-takmili/index.html#filter-anchor" class="${ACTIVE_CATEGORY === 'mahsolat-takmili' ? 'active' : ''}">محصولات تکمیلی</a>
            </div>
        </div>
        
        <div class="minimal-page-wrapper" style="padding-top: ${ACTIVE_CATEGORY === 'all' ? '15px' : '55px'};">
    `;

    const generateProductCard = (p) => {
        let enName = p.titleEn || "PRODUCT";
        const productHref = ACTIVE_CATEGORY === 'all' 
            ? `${BASE_URL}${p.url}?from=all` 
            : `${BASE_URL}${p.url}`;
        const addBtnLabel = window.innerWidth <= 900 ? "افزودن" : "افزودن به سبد سفارش";

        return `
            <div class="minimal-product-card reveal">
                <div class="minimal-card-img-wrapper">
                    <span class="product-ref-badge" data-ref="${p.ref}">${p.ref}</span>
                    <a href="${productHref}" class="card-link-block">
                        <img src="${BASE_URL}${p.img}" alt="${p.title}" class="minimal-card-img">
                    </a>
                    <button type="button" class="mobile-card-plus-btn" onclick="window.toggleMobileCardAdd(event, this)" aria-label="افزودن سریع">+</button>
                    <div class="hover-add-action" onclick="event.stopPropagation();">
                        <div class="cat-qty-control">
                            <button type="button" class="cat-qty-btn" onclick="window.changeCatQty(event, this, -1)">−</button>
                            <div class="cat-qty-label">
                                <span class="cat-qty-num">۱</span>
                                <span class="cat-qty-unit">کارتن</span>
                            </div>
                            <button type="button" class="cat-qty-btn" onclick="window.changeCatQty(event, this, 1)">+</button>
                        </div>
                        <button type="button" class="cat-add-trigger" onclick="window.quickAddWithQty(event, '${p.id}', this)">
                            <span>${addBtnLabel}</span>
                        </button>
                        <input type="hidden" class="pill-input" value="1">
                    </div>
                </div>
                <a href="${productHref}" class="minimal-card-info">
                    <span class="minimal-card-title-en">${enName}</span>
                    <span class="minimal-card-title-fa">${p.title}</span>
                    <span class="minimal-explore-link">Explore</span>
                </a>
            </div>
        `;
    };

    if (ACTIVE_CATEGORY === 'all') {
        const categoriesOrder = ["dastmal-ashpazkhane", "set-parcheie", "set-fer", "sofre", "mahsolat-takmili"];
        categoriesOrder.forEach(catKey => {
            const catProds = catalogDB.filter(p => p.url.startsWith(catKey + '/'));
            if (catProds.length > 0) {
                const info = categoryData[catKey];
                fullHTML += `
                    <div class="reveal all-cat-divider" style="margin-top: 35px; margin-bottom: 35px; display: flex; align-items: center; gap: 15px; width: 100%; direction: ltr;">
                        <h2 style="margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 3px; color: #1a1a1a; text-transform: uppercase;">${info.catNameEn}</h2>
                        <span style="font-family: 'Vazirmatn', sans-serif; font-size: 11px; font-weight: 400; color: #aaa;">${info.faTitle}</span>
                        <div class="divider-line" style="flex-grow: 1; height: 1px; background-color: #f0f0f0;"></div>
                    </div>
                    <div class="minimal-product-grid">
                `;
                catProds.forEach(p => fullHTML += generateProductCard(p));
                fullHTML += `</div>`;
            }
        });
    } else {
        const prods = catalogDB.filter(p => p.url.startsWith(ACTIVE_CATEGORY + '/'));
        fullHTML += `<div class="minimal-product-grid">`;
        prods.forEach(p => fullHTML += generateProductCard(p));
        fullHTML += `</div>`;
    }

    fullHTML += `
        </div>
        <footer class="main-footer inner-footer">${window.getUnifiedFooterHTML()}</footer>
    `;

    container.innerHTML = fullHTML;
    setTimeout(reveal, 60);
};

// =========================================================================
// 5. راه‌انداز مرکزی (Initialization) و مدیریت اسکرول هدر صفحه اول
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        document.body.insertAdjacentHTML('beforeend', cartDrawerHTML);

        const isProductPage = typeof PRODUCT_DATA !== 'undefined';
        const isCategoryPage = !!document.getElementById('catalog-container');
        const isHomePage = !isProductPage && !isCategoryPage;

        if (isProductPage) {
            window.renderProductPage();
        } else if (isCategoryPage) {
            window.renderCategoryPage();
        } else if (isHomePage) {
            const homeHeader = document.querySelector('.main-header');
            if (homeHeader) homeHeader.innerHTML = window.getUnifiedHeaderHTML(true, false);

            const homeFooter = document.querySelector('.main-footer');
            if (homeFooter) homeFooter.innerHTML = window.getUnifiedFooterHTML();

            const updateHomeHeaderState = function() {
                const hero = document.querySelector('.hero-section');
                const threshold = hero ? (hero.offsetHeight - 86) : (window.innerHeight - 86);
                if (window.scrollY < threshold) {
                    document.body.classList.add('home-on-hero');
                } else {
                    document.body.classList.remove('home-on-hero');
                }
                if (window.scrollY > 36) {
                    document.body.classList.add('scrolled-past-top');
                } else {
                    document.body.classList.remove('scrolled-past-top');
                }
            };

            const topBar = document.getElementById('topNotificationBar');
            if (topBar && topBar.style.display !== 'none') {
                document.body.classList.add('has-top-bar');
                const closeBtn = topBar.querySelector('.top-bar-close');
                if (closeBtn) {
                    closeBtn.onclick = function() {
                        topBar.style.display = 'none';
                        document.body.classList.remove('has-top-bar');
                    };
                }
            }

            updateHomeHeaderState();
            window.addEventListener('scroll', updateHomeHeaderState, { passive: true });
            window.addEventListener('resize', updateHomeHeaderState, { passive: true });

            const heroOrderBtn = document.querySelector('.hero-order-btn-glass');
            if (heroOrderBtn) {
                heroOrderBtn.removeAttribute('onclick');
                heroOrderBtn.href = window.getCleanPath('all/index.html');
            }

            document.querySelectorAll('.cg-card').forEach(card => card.classList.add('reveal'));
            setTimeout(reveal, 60);
        }
        
        setTimeout(window.updateCartUI, 60);
        
    } catch(err) {
        console.error("Cleano Init Error: ", err);
    }
});

// =========================================================================
// 6. توابع اسکرول، لایت‌باکس عکس و افکت‌ها
// =========================================================================
window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) { reveals[i].classList.add("active"); }
    }
}

window.openLightbox = function() {
    if(typeof window.amoryImages === 'undefined') return;
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lb-scroll-area').innerHTML = window.amoryImages.map((src, i) => `<img src="${src}" id="lb-img-${i}">`).join('');
    lightbox.style.display = 'block'; 
    setTimeout(() => { 
        lightbox.classList.add('active'); 
        const targetImg = document.getElementById('lb-img-' + window.amoryCurrentIdx);
        if(targetImg) targetImg.scrollIntoView({ behavior: 'auto', block: 'center' }); 
        document.body.style.overflow = 'hidden'; 
    }, 10);
};

window.closeLightbox = function(e, force = false) { 
    if (!force && e && e.target && e.target.tagName === 'IMG') return; 
    const l = document.getElementById('lightbox'); 
    if(l) { l.classList.remove('active'); document.body.style.overflow = 'auto'; setTimeout(() => l.style.display = 'none', 400); } 
};

// =========================================================================
// 7. امکانات اختصاصی موبایل (Touch Swipe، دکمه + کارت‌ها و اشتراک‌گذاری برگه)
// =========================================================================

window.toggleMobileCardAdd = function(e, btn) {
    e.preventDefault();
    e.stopPropagation();
    const wrapper = btn.closest('.minimal-card-img-wrapper');
    if (!wrapper) return;
    document.querySelectorAll('.minimal-card-img-wrapper.mobile-add-open').forEach(el => {
        if (el !== wrapper) el.classList.remove('mobile-add-open');
    });
    wrapper.classList.toggle('mobile-add-open');
};

const origQuickAdd = window.quickAddWithQty;
window.quickAddWithQty = function(e, productId, btn) {
    origQuickAdd(e, productId, btn);
    const wrapper = btn.closest('.minimal-card-img-wrapper');
    if (wrapper && wrapper.classList.contains('mobile-add-open')) {
        setTimeout(() => wrapper.classList.remove('mobile-add-open'), 1100);
    }
};

document.addEventListener('click', function(e) {
    if (!e.target.closest('.minimal-card-img-wrapper')) {
        document.querySelectorAll('.minimal-card-img-wrapper.mobile-add-open').forEach(el => el.classList.remove('mobile-add-open'));
    }
    const searchBtn = e.target.closest('.search-icon');
    if (searchBtn && window.innerWidth <= 900) {
        e.preventDefault();
        e.stopPropagation();
        const wrapper = searchBtn.closest('.search-wrapper');
        if (wrapper) {
            const isOpen = wrapper.classList.toggle('mobile-search-open');
            const input = wrapper.querySelector('.search-input');
            if (isOpen && input) setTimeout(() => input.focus(), 50);
        }
    } else if (!e.target.closest('.search-wrapper')) {
        document.querySelectorAll('.search-wrapper.mobile-search-open').forEach(el => el.classList.remove('mobile-search-open'));
    }
});

document.addEventListener('touchstart', function(e) {
    const gallery = e.target.closest('.amory-left');
    if (!gallery || e.target.closest('button')) return;
    window._touchStartX = e.changedTouches[0].screenX;
    window._touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    const gallery = e.target.closest('.amory-left');
    if (!gallery || typeof window._touchStartX !== 'number') return;
    const diffX = e.changedTouches[0].screenX - window._touchStartX;
    const diffY = e.changedTouches[0].screenY - window._touchStartY;
    window._touchStartX = null;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) window.navAmorySlide(1);
        else window.navAmorySlide(-1);
    }
}, { passive: true });

window.executeImageShare = function() {
    const btn = document.getElementById('share-image-btn');
    if (!btn) return;
    const originalText = btn.innerText;
    btn.innerText = 'در حال آماده‌سازی...';
    btn.style.pointerEvents = 'none';

    const runShare = () => {
        const captureBox = document.createElement('div');
        captureBox.style.cssText = 'position:fixed;top:0;left:0;z-index:-9999;width:794px;height:1123px;background:#fff;padding:34px 46px;box-sizing:border-box;direction:rtl;';
        captureBox.innerHTML = generateSinglePageA4Markup();
        document.body.appendChild(captureBox);

        let jalaliFileName = `سفارش-کیلینو.jpg`;
        try {
            const parts = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(new Date());
            const day = window.toEnDigits((parts.find(p => p.type === 'day') || {}).value || '').trim();
            const month = ((parts.find(p => p.type === 'month') || {}).value || '').trim().replace(/\s+/g, '-');
            const year = window.toEnDigits((parts.find(p => p.type === 'year') || {}).value || '').trim();
            if (day && month && year) jalaliFileName = `سفارش-کیلینو-${day}-${month}-${year}.jpg`;
        } catch (e) {}

        setTimeout(() => {
            html2canvas(captureBox, {
                scale: 2,
                backgroundColor: "#ffffff",
                logging: false,
                onclone: (clonedDoc) => clonedDoc.querySelectorAll('img').forEach(img => img.remove())
            }).then(canvas => {
                if (captureBox.parentNode) document.body.removeChild(captureBox);
                canvas.toBlob(async (blob) => {
                    btn.innerText = originalText;
                    btn.style.pointerEvents = 'auto';
                    if (!blob) return;
                    const file = new File([blob], jalaliFileName, { type: 'image/jpeg' });
                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        try {
                            await navigator.share({ files: [file], title: 'برگه سفارش کیلینو' });
                            window.closePrintModal(null, true);
                        } catch (err) {}
                    } else {
                        const link = document.createElement('a');
                        link.download = jalaliFileName;
                        link.href = URL.createObjectURL(blob);
                        link.click();
                        window.closePrintModal(null, true);
                    }
                }, 'image/jpeg', 0.95);
            });
        }, 120);
    };

    if (typeof html2canvas === 'undefined') {
        let script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = runShare;
        document.head.appendChild(script);
    } else {
        runShare();
    }
};

window.updateHeroBannerForDevice = function() {
    const heroImg = document.querySelector('.hero-section img');
    if (!heroImg) return;
    if (!heroImg.getAttribute('data-desktop-src')) {
        heroImg.setAttribute('data-desktop-src', heroImg.getAttribute('src'));
    }
    const desktopSrc = heroImg.getAttribute('data-desktop-src');
    const mobileSrc = desktopSrc.replace('banner-bala.webp', 'banner-bala-mobile.webp');

    if (window.innerWidth <= 900) {
        const testImg = new Image();
        testImg.onload = function() { heroImg.src = mobileSrc; };
        testImg.onerror = function() { heroImg.src = desktopSrc; };
        testImg.src = mobileSrc;
    } else {
        heroImg.src = desktopSrc;
    }
};
window.addEventListener('DOMContentLoaded', window.updateHeroBannerForDevice);
window.addEventListener('resize', window.updateHeroBannerForDevice, { passive: true });