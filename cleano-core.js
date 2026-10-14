// =========================================================================
// CLEANO CORE JS - CENTRALIZED LOGIC & UI RENDERER
// =========================================================================

// =========================================================================
// 1. متغیرهای سراسری و دیتابیس محصولات
// =========================================================================
const bUrl = typeof BASE_URL !== 'undefined' ? BASE_URL : "../../";

window.getCleanPath = function(path) {
    let base = typeof BASE_URL !== 'undefined' ? BASE_URL : "";
    if (base === "./") base = ""; 
    return base + path;
};

const catalogDB = [
    { id: "CL-017", title: "دستگیره فر", ref: "CL-017", url: "set-fer/dastgire-fer/index.html", img: "set-fer/cover-dastgire-fer.webp", salesData: { pack2: "50 کارتن" } },
    { id: "CL-018", title: "دستکش فر", ref: "CL-018", url: "set-fer/dastkesh-fer/index.html", img: "set-fer/cover-dastkesh-fer.webp", salesData: { pack2: "40 کارتن" } },
    { id: "CL-016", title: "دستگیره آشپزخانه", ref: "CL-016", url: "set-parcheie/dastgire-ashpazkhane/index.html", img: "set-parcheie/cover-dastgire-ashpazkhane.webp", salesData: { pack2: "60 کارتن" } },
    { id: "CL-014", title: "دستگیره قابلمه", ref: "CL-014", url: "set-parcheie/dastgire-ghablame/index.html", img: "set-parcheie/cover-dastgire-ghablame.webp", salesData: { pack2: "60 کارتن" } },
    { id: "CL-023", title: "دم کن برنج", ref: "CL-023", url: "set-parcheie/damkon-berenj/index.html", img: "set-parcheie/cover-damkon-berenj.webp", salesData: { pack2: "12 کارتن" } },
    { id: "CL-021", title: "پیشبند آشپزخانه", ref: "CL-021", url: "set-parcheie/pishband/index.html", img: "set-parcheie/cover-pishband.webp", salesData: { pack2: "30 کارتن" } },
    { id: "CL-019", title: "نمگیر ظروف", ref: "CL-019", url: "set-parcheie/namgir-zorof/index.html", img: "set-parcheie/cover-namgir-zorof.webp", salesData: { pack2: "20 کارتن" } },
    { id: "CL-001", title: "دستمال طرحدار آشپزخانه", ref: "CL-001", url: "dastmal-ashpazkhane/dastmal-tarhdar-ashpazkhane/index.html", img: "dastmal-ashpazkhane/cover-dastmal-tarhdar-ashpazkhane.webp", salesData: { pack2: "100 کارتن" } },
    { id: "CL-002", title: "دستمال تنظیف دولایه", ref: "CL-002", url: "dastmal-ashpazkhane/dastmal-tanzif-dolaie/index.html", img: "dastmal-ashpazkhane/cover-dastmal-tanzif-dolaie.webp", salesData: { pack2: "100 کارتن" } },
    { id: "CL-004", title: "دستمال میکروفایبر", ref: "CL-004", url: "dastmal-ashpazkhane/dastmal-microfiber/index.html", img: "dastmal-ashpazkhane/cover-dastmal-microfiber.webp", salesData: { pack2: "80 کارتن" } },
    { id: "CL-005", title: "دستمال تک رنگ آشپزخانه", ref: "CL-005", url: "dastmal-ashpazkhane/dastmal-takrang-ashpazkhane/index.html", img: "dastmal-ashpazkhane/cover-dastmal-takrang-ashpazkhane.webp", salesData: { pack2: "100 کارتن" } },
    { id: "CL-006", title: "حوله آشپزخانه", ref: "CL-006", url: "dastmal-ashpazkhane/hole-ashpazkhane/index.html", img: "dastmal-ashpazkhane/cover-hole-ashpazkhane.webp", salesData: { pack2: "50 کارتن" } },
    { id: "CL-028", title: "دستمال حوله‌ای", ref: "CL-028", url: "dastmal-ashpazkhane/dastmal-holeie/index.html", img: "dastmal-ashpazkhane/cover-dastmal-holeie.webp", salesData: { pack2: "40 کارتن" } },
    { id: "CL-029", title: "دستمال نخ پنبه", ref: "CL-029", url: "dastmal-ashpazkhane/dastmal-nakh-panbe/index.html", img: "dastmal-ashpazkhane/cover-dastmal-nakh-panbe.webp", salesData: { pack2: "80 کارتن" } },
    { id: "CL-030", title: "دستمال وایت ویو", ref: "CL-030", url: "dastmal-ashpazkhane/dastmal-white-view/index.html", img: "dastmal-ashpazkhane/cover-dastmal-white-view.webp", salesData: { pack2: "80 کارتن" } },
    { id: "CL-010", title: "سفره دو نفره", ref: "CL-010", url: "sofre/sofre-do-nafare/index.html", img: "sofre/cover-sofre-do-nafare.webp", salesData: { pack2: "10 کارتن" } },
    { id: "CL-011", title: "سفره چهار نفره", ref: "CL-011", url: "sofre/sofre-chahar-nafare/index.html", img: "sofre/cover-sofre-chahar-nafare.webp", salesData: { pack2: "10 کارتن" } },
    { id: "CL-012", title: "سفره شش نفره", ref: "CL-012", url: "sofre/sofre-shesh-nafare/index.html", img: "sofre/cover-sofre-shesh-nafare.webp", salesData: { pack2: "8 کارتن" } },
    { id: "CL-013", title: "سفره هشت نفره", ref: "CL-013", url: "sofre/sofre-hasht-nafare/index.html", img: "sofre/cover-sofre-hasht-nafare.webp", salesData: { pack2: "8 کارتن" } },
    { id: "CL-007", title: "کیسه سبزی", ref: "CL-007", url: "mahsolat-takmili/kise-sabzi/index.html", img: "mahsolat-takmili/cover-kise-sabzi.webp", salesData: { pack2: "50 کارتن" } },
    { id: "CL-009", title: "سفره نان", ref: "CL-009", url: "mahsolat-takmili/sofre-nan/index.html", img: "mahsolat-takmili/cover-sofre-nan.webp", salesData: { pack2: "30 کارتن" } },
    { id: "CL-020", title: "نمگیر میکروفایبر", ref: "CL-020", url: "mahsolat-takmili/namgir-microfiber/index.html", img: "mahsolat-takmili/cover-namgir-microfiber.webp", salesData: { pack2: "20 کارتن" } },
    { id: "CL-022", title: "پیشبند ضد آب و ضد لک", ref: "CL-022", url: "mahsolat-takmili/pishband-zede-ab-va-zede-lak/index.html", img: "mahsolat-takmili/cover-pishband-zede-ab-va-zede-lak.webp", salesData: { pack2: "25 کارتن" } }
];

let orderList = JSON.parse(localStorage.getItem('cleano_order_list')) || [];

window.handleGlobalSearch = function(inputElement) {
    const query = inputElement.value.toLowerCase().trim();
    const wrapper = inputElement.closest('.search-wrapper');
    if (!wrapper) return;
    
    let dropdown = wrapper.querySelector('.global-search-dropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'global-search-dropdown';
        wrapper.appendChild(dropdown);
    }
    if (query.length < 2) { dropdown.style.display = 'none'; dropdown.innerHTML = ''; return; }

    const results = catalogDB.filter(item => item.title.toLowerCase().includes(query) || item.ref.toLowerCase().includes(query));
    if (results.length > 0) {
        let html = '';
        results.forEach(res => {
            const imgPath = window.getCleanPath(res.img);
            const linkPath = window.getCleanPath(res.url);
            const fallbackImg = window.getCleanPath('aks-page-aval/cat-set-parcheie.webp');
            html += `<a href="${linkPath}" class="g-search-item"><img src="${imgPath}" alt="${res.title}" onerror="this.onerror=null; this.src='${fallbackImg}';"><div class="g-search-info"><span class="g-search-title">${res.title}</span><span class="g-search-ref">${res.ref}</span></div></a>`;
        });
        dropdown.innerHTML = html;
    } else {
        dropdown.innerHTML = '<div class="g-search-empty">محصولی یافت نشد.</div>';
    }
    dropdown.style.display = 'block';
};

document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.search-wrapper');
    if (!isClickInside) { document.querySelectorAll('.global-search-dropdown').forEach(el => { el.style.display = 'none'; }); }
});

// =========================================================================
// 2. کدهای مربوط به سبد خرید و چاپ فاکتور (Modal UI)
// =========================================================================
const cartDrawerHTML = `
<style>
.global-search-dropdown{position:absolute;top:calc(100% + 10px);right:0;background:rgba(244,244,244,.85)!important;backdrop-filter:blur(12px)!important;-webkit-backdrop-filter:blur(12px)!important;width:280px;border-radius:8px;box-shadow:0 15px 40px rgba(0,0,0,.08);border:1px solid rgba(255,255,255,.6)!important;padding:10px;display:none;direction:rtl;z-index:10000;max-height:300px;overflow-y:auto}
.global-search-dropdown.active{display:block!important}
.g-search-item{display:flex;align-items:center;gap:15px;padding:10px;text-decoration:none;border-radius:6px;transition:.2s}
.g-search-item:hover{background:rgba(0,0,0,.03)}
.g-search-item img{width:40px;height:40px;border-radius:4px;object-fit:cover;mix-blend-mode:multiply}
.g-search-info{display:flex;flex-direction:column;text-align:right}
.g-search-title{font-family:'Vazirmatn',sans-serif;font-size:13px;font-weight:500;color:#1a1a1a;margin:0;transition: color 0.3s;}
.g-search-item:hover .g-search-title{color:var(--brand-green);}
.g-search-ref{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;color:#888;letter-spacing:1.5px;margin-top:3px;text-transform:uppercase}
.g-search-empty{font-family:'Vazirmatn',sans-serif;font-size:12px;color:#888;text-align:center;padding:20px 0}
.mega-menu{background:rgba(244,244,244,.85)!important;backdrop-filter:blur(15px)!important;-webkit-backdrop-filter:blur(15px)!important;border:1px solid rgba(255,255,255,.6)!important}
.cart-count-badge,.wudo-badge,#mobile-cart-badge{position:absolute;top:-5px!important;right:-8px!important;background-color:var(--brand-green)!important;color:#fff!important;font-size:9px!important;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif!important;font-weight:600!important;min-width:16px!important;height:16px!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:0 4px!important;box-sizing:border-box!important;border:1px solid var(--brand-green)!important;box-shadow:0 2px 5px rgba(0,0,0,.05)!important;transition:.3s}

/* استایل یکپارچه و شیشه‌ای پنجره سبد سفارش */
.cart-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,.45);z-index:10000;opacity:0;visibility:hidden;transition:.4s ease;backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);display:flex;justify-content:center;align-items:center}
.cart-overlay.active{opacity:1;visibility:visible}
.cart-modal{width:90%;max-width:480px;max-height:85vh;background:#fff;z-index:10001;border-radius:4px;box-shadow:0 30px 80px rgba(0,0,0,.1);border:1px solid rgba(0,0,0,.05);transform:translateY(25px) scale(.98);transition:all .4s cubic-bezier(.25,1,.5,1);display:flex;flex-direction:column;direction:rtl;overflow:hidden}
.cart-overlay.active .cart-modal{transform:translateY(0) scale(1)}

.cart-header{display:flex;justify-content:space-between;align-items:center;padding:30px 40px 20px;border-bottom:1px solid #f2f2f2}
.cart-header-right{display:flex;align-items:baseline;gap:12px}
.cart-header h3{margin:0;font-size:15px;font-weight:500;font-family:'Vazirmatn',sans-serif;color:#1a1a1a}
.clear-cart-btn{background:none;border:none;font-family:'Vazirmatn',sans-serif;font-size:10px;color:#aaa;cursor:pointer;padding:0;transition:.2s}
.clear-cart-btn:hover{color:#ff5252}
.close-cart{background:none;border:none;font-size:20px;color:#999;cursor:pointer;transition:.3s;display:flex;align-items:center;justify-content:center;padding:0}
.close-cart:hover{color:#1a1a1a;transform:rotate(90deg)}

/* اسکرول‌بار فوق‌العاده ظریف و مینیمال */
.cart-items-container{padding:25px 40px;overflow-y:auto;flex:1;scrollbar-width:thin;scrollbar-color:#e0e0e0 transparent}
.cart-items-container::-webkit-scrollbar{width:3px}
.cart-items-container::-webkit-scrollbar-track{background:transparent}
.cart-items-container::-webkit-scrollbar-thumb{background-color:#e0e0e0;border-radius:10px}

.cart-cat-block{border:none;margin-bottom:28px}
.cart-cat-block:last-child{margin-bottom:10px}
.cart-cat-head{background:transparent;padding:0 0 10px 0;border-bottom:1px solid #eaeaea;font-family:'Vazirmatn',sans-serif;font-size:11px;font-weight:500;color:#999;display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}

.compact-cart-row{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px dotted #eaeaea;transition:background .3s}
.compact-cart-row:last-child{border-bottom:none}
.cc-info{display:flex;flex-direction:column;gap:5px}
.cc-title{font-family:'Vazirmatn',sans-serif;font-size:13px;font-weight:400;color:#1a1a1a;margin:0;text-decoration:none;transition:color .2s}
.cc-title:hover{color:var(--brand-green)}
.cc-meta{display:flex;align-items:center;gap:8px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;color:#aaa;letter-spacing:1px;text-transform:uppercase}
.cc-meta-units{font-family:'Vazirmatn',sans-serif;font-size:10px;color:#888;font-weight:300;letter-spacing:0;direction:rtl}

.cc-actions{display:flex;align-items:center;gap:12px}
.cc-qty-box{display:flex;align-items:center;gap:6px;direction:ltr;background:#fafafa;border:1px solid #f0f0f0;border-radius:3px;padding:4px 8px}
.cc-btn{background:transparent;border:none;cursor:pointer;color:#777;display:flex;align-items:center;justify-content:center;transition:.2s;font-size:15px;padding:0;width:18px;height:18px}
.cc-btn:hover{color:var(--brand-green);}
.cc-input{width:28px;text-align:center;border:none;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;padding:0;pointer-events:none;background:transparent;color:#1a1a1a}
.cc-remove{background:none;border:none;color:#ccc;cursor:pointer;font-size:14px;opacity:.6;transition:all .2s ease;display:flex;align-items:center;justify-content:center;padding:4px}
.compact-cart-row:hover .cc-remove{opacity:1}
.cc-remove:hover{color:#ff5252}

/* بخش فوتر و خلاصه جمع کل سفارش */
.cart-footer{padding:20px 40px 30px;background:#fcfcfc;border-top:1px solid #f0f0f0;display:flex;flex-direction:column;gap:15px}
.cart-summary-bar{display:flex;justify-content:space-between;align-items:center;font-family:'Vazirmatn',sans-serif;font-size:12px;color:#666;padding:0 2px}
.cs-total-val{font-weight:600;color:#1a1a1a;font-size:13px}
.pill-download-btn{background:#f4f4f4;color:#1a1a1a;border:1px solid #eaeaea;border-radius:3px;padding:15px 40px;font-family:'Vazirmatn',sans-serif;font-size:12px;font-weight:500;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;justify-content:center;width:100%;box-shadow:0 4px 15px rgba(0,0,0,.02)}
.pill-download-btn:hover{background:var(--brand-green);border-color:var(--brand-green);color:#fff;transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,.05)}

.print-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,.45);z-index:20000;display:none;align-items:center;justify-content:center;backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);opacity:0;transition:opacity .4s ease}
.print-modal-overlay.active{display:flex;opacity:1}
.print-modal{background:#fff;width:90%;max-width:400px;border-radius:4px;padding:40px;box-shadow:0 25px 60px rgba(0,0,0,.12);border:1px solid rgba(0,0,0,.05);direction:rtl;transform:translateY(20px);transition:transform .4s ease;text-align:center}
.print-modal-overlay.active .print-modal{transform:translateY(0)}
.print-modal h3{margin:0 0 8px 0;font-weight:500;font-size:16px;color:var(--text-main);font-family:'Vazirmatn',sans-serif}
.print-modal p{font-size:12px;color:var(--text-muted);margin-bottom:25px;line-height:1.6}
.print-modal input[type="text"]{width:100%;padding:14px;background:#fafafa;border:1px solid #eaeaea;border-radius:3px;margin-bottom:12px;font-family:'Vazirmatn',sans-serif;font-size:12px;box-sizing:border-box;transition:.3s;color:var(--text-main)}
.print-modal input[type="text"]:focus{background:#fff;border-color:var(--brand-green);outline:none}
.print-checkbox-label{display:flex;align-items:center;justify-content:center;gap:8px;font-size:11px;color:#777;margin-bottom:30px;cursor:pointer;user-select:none}
.print-modal-actions{display:flex;gap:10px;margin-top:10px}
.print-modal-actions button{flex:1;padding:14px;border-radius:3px;font-family:'Vazirmatn',sans-serif;font-size:12px;cursor:pointer;font-weight:500;border:none;transition:.3s}
.print-cancel-btn{background:transparent;color:#888;border:1px solid transparent}
.print-cancel-btn:hover{background:#f9f9f9;color:#333;border-color:#eaeaea}
.print-confirm-btn{background:var(--brand-green);color:#fff}
.print-confirm-btn:hover{opacity:.8}
</style>
<div class="cart-overlay" id="cart-overlay" onclick="toggleCartModal()">
    <div class="cart-modal" id="cart-modal" onclick="event.stopPropagation()">
        <div class="cart-header">
            <div class="cart-header-right">
                <h3>سبد سفارش</h3>
                <button class="clear-cart-btn" id="clear-cart-btn" onclick="window.clearAllCart()" style="display:none;">(خالی کردن سبد)</button>
            </div>
            <button class="close-cart" onclick="toggleCartModal()">✕</button>
        </div>
        <div class="cart-items-container" id="cart-items-container"></div>
        <div class="cart-footer">
            <div class="cart-summary-bar" id="cart-summary-bar" style="display:none;">
                <span id="cs-items-count">0 عنوان کالا</span>
                <span class="cs-total-val" id="cs-total-cartons">مجموع: 0 کارتن</span>
            </div>
            <button class="pill-download-btn" onclick="openPrintModal()" id="main-download-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                دانلود فاکتور
            </button>
        </div>
    </div>
</div>
<div id="print-info-modal" class="print-modal-overlay" onclick="closePrintModal(event)">
    <div class="print-modal" onclick="event.stopPropagation()">
        <h3>ثبت اطلاعات فاکتور</h3>
        <p>نام مشتری را وارد کنید تا مستقیماً در فاکتور چاپ شود.</p>
        <input type="text" id="print-customer-name" placeholder="نام مشتری / فروشگاه" autocomplete="off">
        <input type="text" id="print-customer-phone" placeholder="شماره تماس (اختیاری)" autocomplete="off">
        <label class="print-checkbox-label">
            <input type="checkbox" id="print-skip-info" onchange="togglePrintInputs(this)">
            <span>ثبت بدون نام (فاکتور خام)</span>
        </label>
        <div class="print-modal-actions">
            <button onclick="closePrintModal(event, true)" class="print-cancel-btn">انصراف</button>
            <button onclick="executeImageDownload()" class="print-confirm-btn" id="generate-image-btn">تایید و دانلود</button>
        </div>
    </div>
</div>`;

const minimalCartSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;

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
    if (numDisplay) numDisplay.innerText = val;
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
        if (numDisplay) numDisplay.innerText = '1';
    }, 1500);
};
window.handleSmartAdd = function(productId, btn, selectId) { 
    const input = document.getElementById(selectId); 
    const qty = input ? parseInt(input.value) : 1; 
    
    if (qty > 0) {
        window.updateQty(productId, qty); 
        
        const origText = btn.innerText; 
        btn.style.backgroundColor = 'var(--brand-green)'; 
        btn.style.borderColor = 'var(--brand-green)'; 
        btn.style.color = '#fff'; 
        btn.style.pointerEvents = 'none'; 
        btn.innerText = `افزوده شد ✓`; 
        
        setTimeout(() => { 
            btn.style.backgroundColor = '#f4f4f4'; 
            btn.style.borderColor = '#eaeaea';
            btn.style.color = '#1a1a1a'; 
            btn.style.pointerEvents = 'auto'; 
            btn.innerText = origText; 
            if(input) input.value = 1; 
            const numDisplay = document.getElementById('amory-qty-num-display');
            if(numDisplay) numDisplay.innerText = '1';
        }, 2000); 
    }
};

window.updateCartUI = function() {
    const container = document.getElementById('cart-items-container');
    const dBtn = document.getElementById('main-download-btn');
    const summaryBar = document.getElementById('cart-summary-bar');
    const clearBtn = document.getElementById('clear-cart-btn');
    let totalDistinctItems = orderList.length;

    document.querySelectorAll('.cart-count-badge').forEach(b => {
        b.innerText = totalDistinctItems;
        if(totalDistinctItems > 0) { b.style.setProperty('display', 'flex', 'important'); } 
        else { b.style.setProperty('display', 'none', 'important'); }
    });

    if(!container) return;

    let packStore = {};
    try { packStore = JSON.parse(localStorage.getItem('cleano_html_packs') || '{}'); } catch(e) {}

    const getCatName = (url) => { 
        if(url.includes('mahsolat-takmili')) return 'محصولات تکمیلی'; 
        if(url.includes('set-fer')) return 'ست فر'; 
        if(url.includes('set-parcheie')) return 'ست پارچه‌ای'; 
        if(url.includes('dastmal-ashpazkhane')) return 'دستمال‌های آشپزخانه'; 
        if(url.includes('sofre')) return 'سفره‌های ژله‌ای'; 
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
            // حذف شمارنده کارتن دسته‌بندی از سمت چپ هدر
            html += `<div class="cart-cat-block"><div class="cart-cat-head"><span>${cat}</span></div>`;
            groupedCatalog[cat].forEach(p => {
                let cartItem = orderList.find(i => i.id === p.id);
                let qty = cartItem ? cartItem.qty : 0;
                
                if (qty > 0) {
                    let p1 = "", p2 = "";
                    if (typeof PRODUCT_DATA !== 'undefined' && PRODUCT_DATA.id === p.id && PRODUCT_DATA.salesData) {
                        p1 = String(PRODUCT_DATA.salesData.pack1 || "").replace(/[^0-9]/g, '');
                        p2 = String(PRODUCT_DATA.salesData.pack2 || "").replace(/[^0-9]/g, '');
                    } else if (packStore[p.id]) {
                        p1 = packStore[p.id].pack1;
                        p2 = packStore[p.id].pack2;
                    }

                    let unitsPerCarton = "";
                    if (p2 && p1) {
                        unitsPerCarton = `هر کارتن ${p2} بسته ${p1} تایی`;
                    } else if (p2) {
                        unitsPerCarton = `هر کارتن ${p2} بسته`;
                    }

                    const prodLink = window.getCleanPath(p.url);

                    html += `
                    <div class="compact-cart-row">
                        <div class="cc-info">
                            <a href="${prodLink}" class="cc-title">${p.title}</a>
                            <div class="cc-meta">
                                <span class="cc-ref">${p.ref}</span>${unitsPerCarton ? `<span style="color:#e0e0e0; margin: 0 4px;">|</span><span class="cc-meta-units">${unitsPerCarton}</span>` : ''}
                            </div>
                        </div>
                        <div class="cc-actions">
                            <div class="cc-qty-box">
                                <button class="cc-btn" onclick="window.updateQty('${p.id}', -1)">−</button>
                                <input type="text" class="cc-input" value="${qty}" readonly>
                                <button class="cc-btn" onclick="window.updateQty('${p.id}', 1)">+</button>
                            </div>
                            <button class="cc-remove" onclick="window.removeFromCart('${p.id}')" title="حذف از سبد">✕</button>
                        </div>
                    </div>`;
                }
            });
            html += `</div>`;
        }
    }

    container.innerHTML = html || '<div style="text-align:center; padding: 50px 0; color:#aaa; font-family:\'Vazirmatn\',sans-serif; font-size:12px;">سبد سفارش شما خالی است.</div>';
    
    if(totalDistinctItems === 0) { 
        if(dBtn) { dBtn.style.opacity = '0.5'; dBtn.style.pointerEvents = 'none'; }
        if(summaryBar) summaryBar.style.display = 'none';
        if(clearBtn) clearBtn.style.display = 'none';
    } else { 
        if(dBtn) { dBtn.style.opacity = '1'; dBtn.style.pointerEvents = 'auto'; }
        if(clearBtn) clearBtn.style.display = 'inline-block';
        if(summaryBar) {
            summaryBar.style.display = 'flex';
            document.getElementById('cs-items-count').innerText = `${totalDistinctItems} عنوان کالا`;
            document.getElementById('cs-total-cartons').innerText = `مجموع: ${grandTotalCartons} کارتن`;
        }
    }
};

window.openPrintModal = function() { if (orderList.length === 0) return; document.getElementById('print-info-modal').classList.add('active'); };
window.closePrintModal = function(e, force = false) { if (force || e.target.id === 'print-info-modal') document.getElementById('print-info-modal').classList.remove('active'); };
window.togglePrintInputs = function(checkbox) { const n = document.getElementById('print-customer-name'); const p = document.getElementById('print-customer-phone'); n.disabled = checkbox.checked; p.disabled = checkbox.checked; n.style.opacity = checkbox.checked ? '0.5' : '1'; p.style.opacity = checkbox.checked ? '0.5' : '1'; if(checkbox.checked){ n.value=''; p.value=''; } };

window.executeImageDownload = function() {
    const btn = document.getElementById('generate-image-btn');
    const originalText = btn.innerText;
    btn.innerText = 'در حال ساخت عکس...';
    btn.style.pointerEvents = 'none';

    if (typeof html2canvas === 'undefined') {
        let script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => buildAndDownloadA4Image(btn, originalText);
        document.head.appendChild(script);
    } else {
        buildAndDownloadA4Image(btn, originalText);
    }
};

function buildAndDownloadA4Image(btn, originalText) {
    const today = new Date().toLocaleDateString('fa-IR');
    const totalCartons = orderList.reduce((sum, item) => sum + item.qty, 0);
    const skipInfo = document.getElementById('print-skip-info').checked;
    const cName = skipInfo ? '' : document.getElementById('print-customer-name').value.trim();
    const cPhone = skipInfo ? '' : document.getElementById('print-customer-phone').value.trim();
    const nameDisplay = cName ? cName : `........................................`;
    const phoneDisplay = cPhone ? cPhone : `........................................`;

    let packStore = {};
    try { packStore = JSON.parse(localStorage.getItem('cleano_html_packs') || '{}'); } catch(e) {}

    const captureBox = document.createElement('div');
    captureBox.style.position = 'absolute'; captureBox.style.top = '0'; captureBox.style.left = '0'; captureBox.style.zIndex = '-9999';
    captureBox.style.width = '794px'; captureBox.style.minHeight = '1123px'; captureBox.style.backgroundColor = '#ffffff';
    captureBox.style.padding = '50px 60px'; captureBox.style.boxSizing = 'border-box'; captureBox.style.direction = 'rtl';
    captureBox.style.color = '#000000'; captureBox.style.display = 'flex'; captureBox.style.flexDirection = 'column'; captureBox.style.justifyContent = 'space-between'; 
    
    const getCatName = (url) => { 
        if(url.includes('mahsolat-takmili')) return 'محصولات تکمیلی'; 
        if(url.includes('set-fer')) return 'ست فر'; 
        if(url.includes('set-parcheie')) return 'ست پارچه‌ای'; 
        if(url.includes('dastmal-ashpazkhane')) return 'دستمال‌های آشپزخانه'; 
        if(url.includes('sofre')) return 'سفره‌های ژله‌ای'; 
        return 'سایر محصولات'; 
    };

    let groupedOrder = {};
    orderList.forEach(item => { 
        if(item.qty > 0) {
            const p = catalogDB.find(x => x.id === item.id); 
            if(p){ 
                let c = getCatName(p.url); 
                if(!groupedOrder[c]) groupedOrder[c]=[]; 
                groupedOrder[c].push({...item, p: p}); 
            } 
        }
    });

    let innerHtml = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 30px;">
                <div style="text-align: right; font-family: 'Vazirmatn', sans-serif;">
                    <div style="font-size: 16px; font-weight: 600; color: #000;">فرم سفارش محصولات</div>
                    <div style="font-size: 11px; color: #555; margin-top: 6px;">تاریخ: ${today}</div>
                </div>
                <div style="text-align: left; direction: ltr;">
                    <h1 style="margin:0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 32px; font-weight: 600; color: #000; letter-spacing: 5px;">CLEANO</h1>
                    <div style="font-family: Arial, sans-serif; font-size: 9px; letter-spacing: 4px; text-transform: uppercase; color: #555; margin-top: 5px;">Order Form</div>
                </div>
            </div>
            <div style="display:flex; justify-content:space-between; font-family: 'Vazirmatn', sans-serif; font-size: 12px; margin-bottom: 30px;">
                <div style="flex:1;"><span style="color: #666; margin-left: 8px;">سفارش دهنده:</span><span style="font-weight: 600; color: #000;">${nameDisplay}</span></div>
                <div style="flex:1; text-align: left;"><span style="color: #666; margin-left: 8px;">شماره تماس:</span><span style="font-weight: 600; color: #000; letter-spacing: 1px;">${phoneDisplay}</span></div>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-family: 'Vazirmatn', sans-serif; font-size: 12px; text-align: right;">
                <thead>
                    <tr style="border-bottom: 1px solid #000;">
                        <th style="padding: 10px 5px; font-weight: 600; width: 8%; color: #333;">ردیف</th>
                        <th style="padding: 10px 5px; font-weight: 600; width: 47%; color: #333;">شرح کالا</th>
                        <th style="padding: 10px 5px; font-weight: 600; width: 20%; font-family: Arial, sans-serif; letter-spacing: 1px; color: #333;">REF</th>
                        <th style="padding: 10px 5px; font-weight: 600; text-align: center; width: 25%; color: #333;">تعداد (کارتن)</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    let rowCount = 1;
    for (let cat in groupedOrder) {
        innerHtml += `<tr><td colspan="4" style="font-family: 'Vazirmatn', sans-serif; font-weight: 600; font-size: 10px; padding: 20px 5px 6px 5px; color: #000; letter-spacing: 0.5px;">${cat}</td></tr>`;
        groupedOrder[cat].forEach(item => {
            let p1 = "", p2 = "";
            if (packStore[item.p.id]) {
                p1 = packStore[item.p.id].pack1;
                p2 = packStore[item.p.id].pack2;
            }
            let packSub = (p2 && p1) ? `<span style="font-size:10px; color:#777; font-weight:300; margin-right:8px;">(هر کارتن ${p2} بسته ${p1} تایی)</span>` : '';

            innerHtml += `
                <tr style="border-bottom: 1px solid #f0f0f0;">
                    <td style="padding: 10px 5px; color: #666;">${rowCount}</td>
                    <td style="padding: 10px 5px; font-weight: 500; color: #000;">${item.p.title}${packSub}</td>
                    <td style="padding: 10px 5px; font-family: Arial, sans-serif; color: #666; letter-spacing: 1px;">${item.p.ref}</td>
                    <td style="padding: 10px 5px; text-align: center; font-weight: 600; font-size: 14px; color: #000;">${item.qty}</td>
                </tr>`;
            rowCount++;
        });
    }
    
    innerHtml += `
                </tbody>
            </table>
            <div style="margin-top: 20px; border-top: 2px solid #000; padding-top: 15px; display: flex; justify-content: space-between; align-items: center; font-family: 'Vazirmatn', sans-serif;">
                <div style="font-size: 14px; font-weight: 600; color: #000;">جمع کل سفارش:</div>
                <div style="font-size: 16px; font-weight: 700; color: #000;">${totalCartons} کارتن</div>
            </div>
        </div>
        <div style="flex-shrink: 0; margin-top: 60px;">
            <div style="display: flex; justify-content: space-between; font-family: 'Vazirmatn', sans-serif; font-size: 11px; margin-bottom: 20px;">
                <div style="width: 200px; text-align: center;"><div style="border-bottom: 1px solid #000; height: 30px; margin-bottom: 10px;"></div>مهر و امضای خریدار</div>
                <div style="width: 200px; text-align: center;"><div style="border-bottom: 1px solid #000; height: 30px; margin-bottom: 10px;"></div>تایید واحد فروش</div>
            </div>
            <div style="text-align: center; font-family: Arial, sans-serif; font-size: 8px; letter-spacing: 2px; color: #888; text-transform: uppercase;">Premium Home Textiles • Minimal Design • Timeless Quality</div>
        </div>
    `;
    
    captureBox.innerHTML = innerHtml;
    document.body.appendChild(captureBox);
    window.scrollTo(0, 0);

    setTimeout(() => {
        html2canvas(captureBox, { scale: 2, useCORS: true, backgroundColor: "#ffffff", scrollY: 0, scrollX: 0 }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            const link = document.createElement('a'); link.download = `سفارش-کیلینو-${Date.now()}.jpg`; link.href = imgData; link.click();
            document.body.removeChild(captureBox); window.closePrintModal(null, true); btn.innerText = originalText; btn.style.pointerEvents = 'auto';
        });
    }, 100);
}

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
        "dastmal-ashpazkhane": { catNameEn: "KITCHEN TOWELS & CLOTHS", bannerTitleEn: "KITCHEN TOWELS", faTitle: "حوله و دستمال آشپزخانه", desc: "A large set of highly absorbent and durable towels crafted for daily use.", heroImg: "../dastmal-ashpazkhane/cover-dastmal.webp", bgColor: "#f6f6f6" },
        "set-parcheie": { catNameEn: "FABRIC SET", bannerTitleEn: "CONTEMPORARY DESIGN", faTitle: "ست پارچه‌ای", desc: "A large set of beautiful & fully flexible home textiles. Lets you create your kitchen space quickly & easily.", heroImg: "../set-parcheie/cover-set-parcheie.webp", bgColor: "#f6f6f6" },
        "set-fer": { catNameEn: "OVEN SET", bannerTitleEn: "OVEN ESSENTIALS", faTitle: "ست فر", desc: "A perfect blend of heat resistance and elegant design for your daily baking needs.", heroImg: "../set-fer/cover-set-fer.webp", bgColor: "#f6f6f6" },
        "sofre": { catNameEn: "TABLECLOTHS", bannerTitleEn: "MODERN TABLECLOTHS", faTitle: "سفره‌های ژله‌ای", desc: "Easy to clean, beautifully patterned tablecloths that protect and enhance your dining area.", heroImg: "../sofre/cover-sofre.webp", bgColor: "#f6f6f6" },
        "mahsolat-takmili": { catNameEn: "EXTRAS", bannerTitleEn: "KITCHEN ACCESSORIES", faTitle: "محصولات تکمیلی", desc: "Discover our range of complementary kitchen accessories designed to make life easier.", heroImg: "../mahsolat-takmili/cover-takmili.webp", bgColor: "#f6f6f6" }
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
    const catLink = catKey !== "all" ? `${bUrl}${catKey}/index.html#filter-anchor` : `${bUrl}all/index.html#filter-anchor`;

    const mainEnglishTitle = d.titleEn || headerCategoryEn;
    
    const amoryStyles = `<style>
        body{background-color:#fff;margin:0;padding:0}
        
        .wudo-header{position:absolute;top:0;left:0;width:100%;height:100px;background:0 0;z-index:9999;display:block;box-sizing:border-box;direction:ltr;pointer-events:none}
        .wudo-header *{pointer-events:auto}
        .wh-left{position:fixed;top:0;left:0;width:50%;height:100px;padding-left:80px;display:flex;align-items:center;box-sizing:border-box;}
        .wudo-logo{font-size:16px;letter-spacing:5px;font-weight:600;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1a1a1a;text-decoration:none;transition: color 0.3s;}
        .wudo-logo:hover{color:var(--brand-green);}
        .wh-right{position:absolute;top:0;right:0;width:50%;height:100px;padding:0 80px 0 40px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;}
        .wudo-nav-links{display:flex;gap:30px}
        .wudo-nav-links a{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;color:#1a1a1a;text-transform:uppercase;letter-spacing:2px;text-decoration:none;font-weight:600;transition:.3s}
        .wudo-nav-links a:hover{color:var(--brand-green);}
        .wh-icons{display:flex;gap:15px;align-items:center}
        .wudo-icon-btn{background:0 0;border:none;color:#1a1a1a;cursor:pointer;display:flex;align-items:center;position:relative;padding:5px;transition:.3s}
        .wudo-icon-btn:hover{color:var(--brand-green);}
        
        .amory-layout{display:flex;width:100%;min-height:100vh;direction:ltr}
        .amory-left{position:relative;width:50%;height:100vh;background-color:var(--bg-img);overflow:hidden;position:sticky;top:0}
        .amory-img-container{width:100%;height:100%;position:absolute;top:0;left:0}
        .amory-main-img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;transition:opacity .5s ease-in-out}
        .amory-nav{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:20;background:rgba(255,255,255,.4);backdrop-filter:blur(8px);padding:10px 16px;border-radius:30px}
        .amory-nav-item{width:6px;height:6px;border-radius:50%;background-color:rgba(26,26,26,.2);cursor:pointer;transition:all .3s ease}
        .amory-nav-item:hover{background-color:rgba(26,26,26,.6)}
        .amory-nav-item.active{width:18px;border-radius:3px;background-color:var(--brand-green);}
        .glass-element{background:rgba(255,255,255,.4);backdrop-filter:blur(10px);color:#1a1a1a;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:.3s;border:none}
        .glass-element:hover{background:rgba(255,255,255,.8); color:var(--brand-green);}
        .amory-arrow{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:4px;z-index:15}
        .amory-arrow.prev{left:30px}
        .amory-arrow.next{right:30px}
        .amory-zoom-btn{position:absolute;bottom:40px;right:40px;width:40px;height:40px;border-radius:4px;z-index:25}
        
        .amory-right{width:50%;min-height:100vh;padding:130px 60px 100px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;direction:ltr;background-color:#fff}
        .amory-top-nav{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:500px;margin-bottom:120px}
        .amory-back-btn{display:flex;align-items:center;gap:8px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;color:#1a1a1a;text-transform:uppercase;letter-spacing:2px;text-decoration:none;transition:.3s}
        .amory-back-btn:hover{color:var(--brand-green); transform:translateX(-5px)}
        .amory-breadcrumbs{display:flex;align-items:center;gap:8px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:9px;font-weight:500;color:#aaa;text-transform:uppercase;letter-spacing:1px}
        .amory-breadcrumbs a{color:#aaa;text-decoration:none;transition:.3s}
        .amory-breadcrumbs a:hover{color:var(--brand-green);}
        .amory-breadcrumbs .sep{color:#ddd}
        .amory-breadcrumbs .current{color:#1a1a1a;font-weight:600}
        
        .amory-title-group{display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:50px;width:100%}
        .amory-en-title{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:26px;font-weight:600;color:#1a1a1a;margin:0 0 10px 0;letter-spacing:6px;text-transform:uppercase}
        .amory-fa-subtitle{font-family:'Vazirmatn',sans-serif;font-size:12px;font-weight:300;color:#888;margin:0 0 15px 0;letter-spacing:1px;direction:rtl;}
        .amory-ref{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;color:#bbb;letter-spacing:3px;display:inline-block;text-transform:uppercase;}
        
        .amory-text-specs{display:flex;align-items:center;justify-content:center;gap:30px;margin-bottom:50px;width:100%;max-width:440px;border-top:1px solid #f9f9f9;border-bottom:1px solid #f9f9f9;padding:20px 0;}
        .ats-item{display:flex;align-items:baseline;gap:6px}
        .ats-lbl{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:8px;font-weight:600;color:#aaa;text-transform:uppercase;letter-spacing:2px}
        .ats-val{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:500;color:#1a1a1a;letter-spacing:1px}
        
        .amory-action-row{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:20px;width:100%;max-width:440px}
        
        .amory-qty-box{display:flex;align-items:center;background:#fafafa;border:1px solid #efefef;height:52px;padding:0 14px;border-radius:3px;width:140px;justify-content:space-between;box-sizing:border-box;transition:border-color 0.3s;}
        .amory-qty-box:hover{border-color:#ddd;}
        .amory-qty-btn{background:0 0;border:none;font-size:16px;color:#555;cursor:pointer;transition:.2s;display:flex;align-items:center;justify-content:center;width:24px;height:100%;padding:0;}
        .amory-qty-btn:hover{color:var(--brand-green);}
        .amory-qty-display{display:flex;align-items:center;gap:5px;direction:rtl;pointer-events:none;user-select:none;}
        .amory-qty-num{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;color:#1a1a1a;line-height:1;}
        .amory-qty-lbl{font-family:'Vazirmatn',sans-serif;font-size:11px;font-weight:400;color:#888;letter-spacing:0;line-height:1;}
        .amory-qty-input{display:none;}
        
        .amory-cart-btn{background:#f4f4f4;color:#1a1a1a;border:1px solid #eaeaea;height:52px;padding:0 30px;border-radius:3px;font-family:'Vazirmatn',sans-serif;font-size:12px;font-weight:500;letter-spacing:0;cursor:pointer;transition:all .3s ease;flex:1;text-align:center;box-shadow:0 4px 15px rgba(0,0,0,.02)}
        .amory-cart-btn:hover{background:var(--brand-green);border-color:var(--brand-green);color:#fff;box-shadow:0 8px 25px rgba(0,0,0,.05);transform:translateY(-2px)}
        
        .amory-more-btn{background:0 0;border:none;padding:15px 0;width:100%;max-width:440px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:.3s;border-bottom:1px solid #eaeaea;margin-top:10px;direction:rtl;}
        .amory-more-btn-text{font-family:'Vazirmatn',sans-serif;font-size:11px;font-weight:400;color:#666;transition:.3s;letter-spacing:0;}
        .amory-more-btn-icon{font-family:'Helvetica Neue',Arial,sans-serif;font-size:18px;font-weight:300;color:#999;transition:.3s;line-height:1;}
        .amory-more-btn:hover .amory-more-btn-text, .amory-more-btn:hover .amory-more-btn-icon{color:var(--brand-green);}

        .inline-specs-wrapper { width: 100%; max-width: 440px; max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.6s ease, opacity 0.5s ease, padding 0.5s ease; direction: rtl; text-align: right; }
        .inline-specs-wrapper.active { max-height: 800px; opacity: 1; padding-top: 25px; padding-bottom: 20px; }
        
        .imd-desc { font-family: 'Vazirmatn', sans-serif; font-size: 11px; font-weight: 300; color: #666; line-height: 2.2; margin: 0 0 25px 0; text-align: justify; }
        
        .imd-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .imd-item { display: flex; align-items: baseline; justify-content: space-between; font-family: 'Vazirmatn', sans-serif; font-size: 11px; border-bottom: 1px dotted #eaeaea; padding-bottom: 6px;}
        .imd-item:last-child { border-bottom: none; }
        
        .imd-lbl { color: #888; font-weight: 300; }
        .imd-val { color: #1a1a1a; font-weight: 500; }
        .imd-val.ltr { direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;}
        
        .imd-barcode-trigger { display: inline-flex; align-items: center; gap: 8px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 9px; font-weight: 600; letter-spacing: 3px; color: #999; text-transform: uppercase; cursor: pointer; transition: 0.3s; background: none; border: none; padding: 0; margin-top: 30px;}
        .imd-barcode-trigger:hover { color: #1a1a1a; }
        .imd-barcode-trigger svg { width: 14px; height: 14px; }

        .barcode-popup-overlay { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.45); z-index:20000; display:flex; justify-content:center; align-items:center; opacity:0; visibility:hidden; transition:.3s ease; backdrop-filter:blur(15px); -webkit-backdrop-filter:blur(15px); }
        .barcode-popup-overlay.active { opacity:1; visibility:visible; }
        .barcode-popup-content { background:#fff; padding:40px; border-radius:4px; box-shadow:0 25px 60px rgba(0,0,0,0.12); border:1px solid rgba(0,0,0,0.05); text-align:center; transform:scale(0.95); transition:.3s ease; position:relative; }
        .barcode-popup-overlay.active .barcode-popup-content { transform:scale(1); }
        .barcode-popup-close { position:absolute; top:10px; right:10px; background:none; border:none; font-size:20px; cursor:pointer; color:#999; }
        .barcode-popup-close:hover { color:#1a1a1a; }
        .barcode-img-large { width:180px; height:auto; mix-blend-mode:multiply; display:block; margin-top:10px;}

        .main-footer{position:relative;z-index:10;width:100%;background-color:#fff;border-top:1px solid #eaeaea;padding:30px 80px;box-sizing:border-box;direction:ltr; margin-top: auto;}
        .main-footer .footer-content{display:flex;justify-content:space-between;align-items:center;width:100%}
        .main-footer .footer-left{display:flex;align-items:baseline;gap:10px}
        .main-footer .footer-logo{font-size:11px;font-weight:600;letter-spacing:3px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1a1a1a;transition: color 0.3s;}
        .main-footer .footer-logo:hover{color:var(--brand-green);}
        .main-footer .footer-copyright{font-size:10px;color:#aaa;font-family:sans-serif;letter-spacing:.5px;font-weight:300}
        .main-footer .footer-right{display:flex;align-items:center;gap:20px}
        .main-footer .footer-link{font-size:10px;color:#aaa;text-decoration:none;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:1.5px;transition:color .3s ease;font-weight:500}
        .main-footer .footer-link:hover{color:var(--brand-green);}
        
        #lightbox{display:none;position:fixed;inset:0;z-index:99999;background:rgba(255,255,255,.98);opacity:0;transition:.3s}
        #lightbox.active{opacity:1}
        .lb-close{position:absolute;top:30px;right:30px;background:0 0;border:none;font-size:24px;cursor:pointer;color:#1a1a1a;z-index:10000;transition: color 0.3s;}
        .lb-close:hover{color:var(--brand-green);}
        .lb-scroll-area{height:100vh;overflow-y:auto;display:flex;flex-direction:column;align-items:center;padding:50px 0;gap:50px;scroll-behavior:smooth}
        .lb-scroll-area img{max-width:90vw;max-height:90vh;object-fit:contain}
        
        @media (max-width:992px){
            .amory-layout{flex-direction:column;direction:ltr}
            .amory-left{width:100%;height:70vh;position:relative}
            .amory-right{width:100%;padding:60px 20px;min-height:auto}
            .wudo-header{position:absolute!important;padding:20px 40px!important;display:flex!important;height:auto!important;}
            .wh-left{position:relative!important;width:50%!important;height:auto!important;padding:0!important;}
            .wh-right{position:relative!important;width:50%!important;height:auto!important;padding:0!important;justify-content:flex-end;}
            .wudo-nav-links{display:none!important}
            .amory-top-nav{margin-bottom:60px;max-width:100%}
            .amory-text-specs{flex-wrap:wrap;gap:15px}
            .amory-action-row{max-width:100%}
            .main-footer .footer-content{flex-direction:column;gap:20px;text-align:center}
        }
        </style>
    `;

    window.changeAmorySlide = function(idx) {
        window.amoryCurrentIdx = idx;
        const mainImg = document.getElementById('amory-main-img');
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = window.amoryImages[window.amoryCurrentIdx];
            mainImg.style.opacity = '1';
        }, 250);
        document.querySelectorAll('.amory-nav-item').forEach((el, i) => {
            if(i === idx) el.classList.add('active');
            else el.classList.remove('active');
        });
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
        numDisplay.innerText = newVal;
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
    let hlCartonText = "12"; 
    let hlSize = "Free Size"; 
    let hlPackNum = "1";
    let hlPackText = "1 pcs"; 
    let hlColors = "6"; 
    let hlCartonSize = "-"; 
    let hlCartonWeight = "-"; 
    
    if (d.salesData) {
        if(d.salesData.pack2) {
            hlCartonNum = d.salesData.pack2.replace(/[^0-9]/g, '');
            hlCartonText = hlCartonNum; 
        }
        if(d.salesData.size) {
            hlSize = d.salesData.size; 
        } else if(d.salesData.boxSize) {
            hlSize = d.salesData.boxSize; 
        }
        if(d.salesData.pack1) {
            hlPackNum = d.salesData.pack1.replace(/[^0-9]/g, '');
            hlPackText = hlPackNum + " pcs"; 
        }
        if(d.salesData.colors) {
            let colorNum = d.salesData.colors.replace(/[^0-9]/g, '');
            hlColors = colorNum; 
        }
        if(d.salesData.cartonSize) {
            hlCartonSize = d.salesData.cartonSize.replace(/[a-zA-Z]/g, '').trim();
        }
        if(d.salesData.cartonWeight) hlCartonWeight = d.salesData.cartonWeight;
    }

    // ذخیره خودکار تعداد در کارتن و تعداد در بسته از HTML محصول برای استفاده در سبد خرید
    try {
        let packStore = JSON.parse(localStorage.getItem('cleano_html_packs') || '{}');
        packStore[d.id] = { pack1: hlPackNum, pack2: hlCartonNum };
        localStorage.setItem('cleano_html_packs', JSON.stringify(packStore));
    } catch(e) {}

    let barcodeId = d.id.replace('CL-', ''); 
    
    let footerHtml = `
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-left">
                    <span class="footer-logo">CLEANO</span>
                    <span class="footer-copyright">© 2026 HOME TEXTILE CATALOG</span>
                </div>
                <div class="footer-right">
                    <a href="${bUrl}about/index.html" class="footer-link">PREMIUM QUALITY</a>
                    <span class="footer-separator"></span>
                    <a href="${bUrl}about/index.html" class="footer-link">TIMELESS DESIGN</a>
                    <span class="footer-separator"></span>
                    <a href="${bUrl}about/index.html" class="footer-link">ABOUT US</a>
                </div>
            </div>
        </footer>
    `;

    root.innerHTML = amoryStyles + `
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
                        <input type="text" class="search-input" placeholder="Search..." autocomplete="off" onkeyup="window.handleGlobalSearch(this)" onfocus="window.handleGlobalSearch(this)">
                        <button class="header-icon-btn search-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </div>
                    <button class="wudo-icon-btn cart-trigger" onclick="window.toggleCartModal()">
                        ${minimalCartSVG}
                        <span class="cart-count-badge" id="wudo-cart-badge" style="display:none;">0</span>
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
                    <button class="glass-element amory-zoom-btn" onclick="window.openLightbox()" title="نمایش تمام‌صفحه">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    </button>
                </div>

                <div class="amory-right">
                    <div class="amory-top-nav">
                        <div class="amory-breadcrumbs">
                            <a href="${bUrl}index.html">HOME</a>
                            <span class="sep">/</span>
                            <a href="${catLink}">${headerCategoryEn}</a>
                            <span class="sep">/</span>
                            <span class="current">${d.ref}</span>
                        </div>
                        <a href="${catLink}" class="amory-back-btn">
                            BACK
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 5"></polyline></svg>
                        </a>
                    </div>

                    <div class="amory-title-group">
                        <h1 class="amory-en-title">${mainEnglishTitle}</h1>
                        <h2 class="amory-fa-subtitle">${d.title}</h2>
                        <span class="amory-ref">REF: ${d.ref}</span>
                    </div>

                    <div class="amory-text-specs">
                        <div class="ats-item">
                            <span class="ats-lbl">PER CARTON</span>
                            <span class="ats-val">${hlCartonNum}</span>
                        </div>
                        <div class="ats-item">
                            <span class="ats-lbl">PCS PER PACK</span>
                            <span class="ats-val">${hlPackNum}</span>
                        </div>
                        <div class="ats-item">
                            <span class="ats-lbl">SIZE</span>
                            <span class="ats-val" style="direction:ltr; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; text-transform:none;">${hlSize}</span>
                        </div>
                    </div>

                    <div class="amory-action-row">
                        <div class="amory-qty-box">
                            <button class="amory-qty-btn" onclick="window.changePageQtyNew(-1)">−</button>
                            <div class="amory-qty-display">
                                <span class="amory-qty-num" id="amory-qty-num-display">1</span>
                                <span class="amory-qty-lbl" id="amory-qty-lbl-display">کارتن</span>
                            </div>
                            <input type="hidden" id="amory-qty-input" class="amory-qty-input" value="1">
                            <button class="amory-qty-btn" onclick="window.changePageQtyNew(1)">+</button>
                        </div>
                        <button class="amory-cart-btn" onclick="window.handleSmartAdd('${d.id}', this, 'amory-qty-input')">افزودن به سبد خرید</button>
                    </div>

                    <button class="amory-more-btn" onclick="window.toggleInlineSpecs()">
                        <span class="amory-more-btn-text">جزئیات محصول</span>
                        <span id="specs-toggle-icon" class="amory-more-btn-icon">+</span>
                    </button>

                    <div id="inline-specs-wrapper" class="inline-specs-wrapper">
                        
                        <p class="imd-desc">${d.description}</p>

                        <ul class="imd-list">
                            <li class="imd-item">
                                <span class="imd-lbl">بسته‌بندی اصلی</span>
                                <span class="imd-val ltr">${hlPackText}</span>
                            </li>
                            <li class="imd-item">
                                <span class="imd-lbl">تعداد در کارتن</span>
                                <span class="imd-val ltr">${hlCartonText}</span>
                            </li>
                            <li class="imd-item">
                                <span class="imd-lbl">سایز محصول</span>
                                <span class="imd-val ltr">${hlSize}</span>
                            </li>
                            <li class="imd-item">
                                <span class="imd-lbl">تنوع رنگ / طرح</span>
                                <span class="imd-val ltr">${hlColors}</span>
                            </li>
                            <li class="imd-item">
                                <span class="imd-lbl">ابعاد کارتن <span style="font-family: Arial; font-size: 8px;">(L×W×H)</span></span>
                                <span class="imd-val ltr">${hlCartonSize}</span>
                            </li>
                            <li class="imd-item">
                                <span class="imd-lbl">وزن کارتن</span>
                                <span class="imd-val ltr">${hlCartonWeight}</span>
                            </li>
                        </ul>

                        <button class="imd-barcode-trigger" onclick="window.openBarcodePopup()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5V4h4M20 5V4h-4M4 19v1h4M20 19v1h-4M9 9h1v6H9zM12 9h1v6h-1zM15 9h1v6h-1z"></path></svg>
                            VIEW BARCODE
                        </button>
                    </div>
                </div>
            </div>

            ${footerHtml}

        </div>

        <div class="barcode-popup-overlay" id="barcode-popup" onclick="this.classList.remove('active')">
            <div class="barcode-popup-content" onclick="event.stopPropagation()">
                <button class="barcode-popup-close" onclick="document.getElementById('barcode-popup').classList.remove('active')">✕</button>
                <img src="barcode-${barcodeId}.png" alt="Barcode ${d.id}" class="barcode-img-large" onerror="this.outerHTML='<span style=\\'font-family:Arial; font-size:12px; color:#aaa;\\'>NO BARCODE IMAGE FOUND</span>'">
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
        
        document.querySelectorAll('.search-input').forEach(input => {
            input.addEventListener('keyup', function() { window.handleGlobalSearch(this); });
            input.addEventListener('focus', function() { window.handleGlobalSearch(this); });
        });
        
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
    if (typeof catalogDB === 'undefined') return;

    const categoryData = {
        "dastmal-ashpazkhane": { catNameEn: "KITCHEN TOWELS & CLOTHS", bannerTitleEn: "KITCHEN TOWELS", faTitle: "حوله و دستمال آشپزخانه", desc: "A large set of highly absorbent and durable towels crafted for daily use.", heroImg: "../dastmal-ashpazkhane/cover-dastmal.webp", bgColor: "#f6f6f6" },
        "set-parcheie": { catNameEn: "FABRIC SET", bannerTitleEn: "CONTEMPORARY DESIGN", faTitle: "ست پارچه‌ای", desc: "A large set of beautiful & fully flexible home textiles. Lets you create your kitchen space quickly & easily.", heroImg: "../set-parcheie/cover-set-parcheie.webp", bgColor: "#f6f6f6" },
        "set-fer": { catNameEn: "OVEN SET", bannerTitleEn: "OVEN ESSENTIALS", faTitle: "ست فر", desc: "A perfect blend of heat resistance and elegant design for your daily baking needs.", heroImg: "../set-fer/cover-set-fer.webp", bgColor: "#f6f6f6" },
        "sofre": { catNameEn: "TABLECLOTHS", bannerTitleEn: "MODERN TABLECLOTHS", faTitle: "سفره‌های ژله‌ای", desc: "Easy to clean, beautifully patterned tablecloths that protect and enhance your dining area.", heroImg: "../sofre/cover-sofre.webp", bgColor: "#f6f6f6" },
        "mahsolat-takmili": { catNameEn: "EXTRAS", bannerTitleEn: "KITCHEN ACCESSORIES", faTitle: "محصولات تکمیلی", desc: "Discover our range of complementary kitchen accessories designed to make life easier.", heroImg: "../mahsolat-takmili/cover-takmili.webp", bgColor: "#f6f6f6" }
    };

    const productEnNames = {
        "دم کن برنج": "RICE COOKER COVER",
        "دستگیره فر": "OVEN HANDLE COVER",
        "دستکش فر": "OVEN MITTS",
        "دستگیره آشپزخانه": "KITCHEN POT HOLDER",
        "دستگیره قابلمه": "POT HOLDERS",
        "پیشبند آشپزخانه": "KITCHEN APRON",
        "نمگیر ظروف": "DISH DRYING MAT",
        "دستمال طرحدار آشپزخانه": "PATTERNED TOWEL",
        "دستمال تنظیف دولایه": "DOUBLE-LAYER CLOTH",
        "دستمال میکروفایبر": "MICROFIBER CLOTH",
        "دستمال تک رنگ آشپزخانه": "SOLID COLOR TOWEL",
        "حوله آشپزخانه": "KITCHEN TOWEL",
        "دستمال حوله‌ای": "TERRY TOWEL",
        "دستمال نخ پنبه": "COTTON TOWEL",
        "دستمال وایت ویو": "WHITE VIEW TOWEL",
        "سفره دو نفره": "2-SEATER TABLECLOTH",
        "سفره چهار نفره": "4-SEATER TABLECLOTH",
        "سفره شش نفره": "6-SEATER TABLECLOTH",
        "سفره هشت نفره": "8-SEATER TABLECLOTH",
        "کیسه سبزی": "VEGETABLE BAG",
        "سفره نان": "BREAD CLOTH",
        "نمگیر میکروفایبر": "MICROFIBER DRYING MAT",
        "پیشبند ضد آب و ضد لک": "WATERPROOF APRON"
    };

    const catInfo = categoryData[ACTIVE_CATEGORY] || { catNameEn: "ALL PRODUCTS", bannerTitleEn: "ALL PRODUCTS", faTitle: "تمامی محصولات", desc: "Our premium collection.", heroImg: "", bgColor: "#f6f6f6" };

    // استایل‌های جدید، کاملاً مینیمال، خلوت و هماهنگ با صفحه سوم
const catActionStyles = `<style>
        .minimal-card-img-wrapper .hover-add-action {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 0 15px !important;
            height: 48px !important;
            background: rgba(255, 255, 255, 0.45) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.6) !important;
            direction: ltr !important;
            cursor: default !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
        }
        .cat-qty-control {
            display: flex;
            align-items: center;
            gap: 8px;
            direction: ltr;
        }
        .cat-qty-btn {
            background: transparent;
            border: none;
            color: #1a1a1a;
            font-size: 15px;
            width: 20px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: opacity 0.2s ease;
            padding: 0;
            user-select: none;
        }
        .cat-qty-btn:hover {
            opacity: 0.6;
        }
        .cat-qty-label {
            display: flex;
            align-items: baseline;
            gap: 4px;
            direction: rtl;
            user-select: none;
            pointer-events: none;
        }
        .cat-qty-num {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 13px;
            font-weight: 600;
            color: #1a1a1a;
            line-height: 1;
        }
        .cat-qty-unit {
            font-family: 'Vazirmatn', sans-serif;
            font-size: 10px;
            font-weight: 400;
            color: #555;
            letter-spacing: 0;
            line-height: 1;
        }
        .cat-add-trigger {
            background: transparent;
            border: none;
            font-family: 'Vazirmatn', sans-serif;
            font-size: 11px;
            font-weight: 500;
            color: #1a1a1a;
            letter-spacing: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.2s ease;
            padding: 0;
            white-space: nowrap;
        }
        .cat-add-trigger:hover {
            opacity: 0.6;
        }
        .cat-add-trigger.success-state {
            color: var(--brand-green) !important;
            pointer-events: none;
        }
    </style>`;

    let fullHTML = catActionStyles;

    fullHTML += `
    <header class="main-header inner-header" ${ACTIVE_CATEGORY === 'all' ? 'style="position: relative; background: #fff; border-bottom: 1px solid rgba(0,0,0,0.03);"' : ''}>
        <div class="header-left">
            <a href="../index.html" class="home-logo">CLEANO</a>
            <nav class="main-nav-links">
                <a href="../index.html" class="nav-link">HOME</a>
                <a href="../all/index.html" class="nav-link">ALL</a>
            </nav>
        </div>
        <div class="header-right">
            <div class="search-wrapper">
                <input type="text" class="search-input" placeholder="Search..." autocomplete="off">
                <button class="header-icon-btn search-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
            </div>
            <span class="header-divider"></span>
            <button class="header-icon-btn cart-trigger" onclick="toggleCartModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span class="cart-count-badge" id="header-cart-badge" style="display:none;">0</span>
            </button>
        </div>
    </header>
    `;

    fullHTML += `
        <div style="max-width: 1300px; margin: 0 auto; padding: 110px 80px 20px 80px; display: flex; justify-content: space-between; align-items: center; direction: ltr;">
            <div style="display:flex; align-items:center; gap:8px; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:9px; font-weight:500; color:#aaa; text-transform:uppercase; letter-spacing:1px;">
                <a href="../index.html" style="color:#aaa; text-decoration:none; transition:.3s;" onmouseover="this.style.color='var(--brand-green)'" onmouseout="this.style.color='#aaa'">HOME</a>
                <span style="color:#ddd;">/</span>
                <span style="color:#1a1a1a; font-weight:600;">${catInfo.catNameEn}</span>
            </div>
            <a href="../index.html" style="display:flex; align-items:center; gap:8px; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:10px; font-weight:600; color:#1a1a1a; text-transform:uppercase; letter-spacing:2px; text-decoration:none; transition:.3s;" onmouseover="this.style.color='var(--brand-green)'; this.querySelector('svg').style.transform='translateX(-5px)'" onmouseout="this.style.color='#1a1a1a'; this.querySelector('svg').style.transform='translateX(0)'">
                BACK
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.3s;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 5"></polyline></svg>
            </a>
        </div>
    `;

    if (ACTIVE_CATEGORY !== 'all') {
        fullHTML += `
        <div class="cat-hero-section" style="padding-top: 0;"> 
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
            <div class="cat-filter-dropdown">
                FILTER <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </div>
        
        <div class="minimal-page-wrapper" style="padding-top: ${ACTIVE_CATEGORY === 'all' ? '0' : '60px'};">
    `;

    const generateProductCard = (p, namesDict) => {
        let enName = namesDict[p.title] || "PRODUCT";
        return `
            <div class="minimal-product-card">
                <div class="minimal-card-img-wrapper">
                    <span class="product-ref-badge">${p.ref}</span>
                    <a href="${BASE_URL}${p.url}" class="card-link-block">
                        <img src="${BASE_URL}${p.img}" alt="${p.title}" class="minimal-card-img">
                    </a>
                    <div class="hover-add-action" onclick="event.stopPropagation();">
                        <div class="cat-qty-control">
                            <button type="button" class="cat-qty-btn" onclick="window.changeCatQty(event, this, -1)">−</button>
                            <div class="cat-qty-label">
                                <span class="cat-qty-num">1</span>
                                <span class="cat-qty-unit">کارتن</span>
                            </div>
                            <button type="button" class="cat-qty-btn" onclick="window.changeCatQty(event, this, 1)">+</button>
                        </div>
                        <button type="button" class="cat-add-trigger" onclick="window.quickAddWithQty(event, '${p.id}', this)">
                            <span>افزودن به سبد خرید</span>
                        </button>
                        <input type="hidden" class="pill-input" value="1">
                    </div>
                </div>
                <a href="${BASE_URL}${p.url}" class="minimal-card-info" style="text-decoration: none;">
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
                    <div style="margin-top: 40px; margin-bottom: 40px; display: flex; align-items: center; gap: 15px; width: 100%;">
                        <h2 style="margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 3px; color: #1a1a1a; text-transform: uppercase;">${info.catNameEn}</h2>
                        <span style="font-family: 'Vazirmatn', sans-serif; font-size: 11px; font-weight: 400; color: #aaa;">${info.faTitle}</span>
                        <div style="flex-grow: 1; height: 1px; background-color: #f0f0f0;"></div>
                    </div>
                    <div class="minimal-product-grid">
                `;
                catProds.forEach(p => fullHTML += generateProductCard(p, productEnNames));
                fullHTML += `</div>`;
            }
        });
    } else {
        const prods = catalogDB.filter(p => p.url.startsWith(ACTIVE_CATEGORY + '/'));
        fullHTML += `<div class="minimal-product-grid">`;
        prods.forEach(p => fullHTML += generateProductCard(p, productEnNames));
        fullHTML += `</div>`;
    }

    fullHTML += `</div>`; 

    fullHTML += `
    <footer class="main-footer inner-footer">
        <div class="footer-content">
            <div class="footer-left">
                <span class="footer-logo">CLEANO</span>
                <span class="footer-copyright">© 2026 HOME TEXTILE CATALOG</span>
            </div>
            <div class="footer-right">
                <a href="../about/index.html" class="footer-link">PREMIUM QUALITY</a>
                <span class="footer-separator"></span>
                <a href="../about/index.html" class="footer-link">TIMELESS DESIGN</a>
                <span class="footer-separator"></span>
                <a href="../about/index.html" class="footer-link">ABOUT US</a>
            </div>
        </div>
    </footer>
    `;

    container.innerHTML = fullHTML;
};

// =========================================================================
// 5. توابع راه‌انداز (Initialization) و رویدادهای عمومی
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        document.body.insertAdjacentHTML('beforeend', cartDrawerHTML);
        
        document.querySelectorAll('.cart-trigger').forEach(btn => {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span class="cart-count-badge" style="display:none;">0</span>
            `;
        });

        document.querySelectorAll('.search-input').forEach(input => {
            input.addEventListener('keyup', function() { window.handleGlobalSearch(this); });
            input.addEventListener('focus', function() { window.handleGlobalSearch(this); });
        });

        // رندر صفحه محصول تکی
        if(typeof PRODUCT_DATA !== 'undefined') window.renderProductPage();
        
        // رندر صفحه دسته‌بندی و ALL
        if(document.getElementById('catalog-container')) window.renderCategoryPage();
        
        setTimeout(window.updateCartUI, 100);
        
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
        if (elementTop < windowHeight - 100) { reveals[i].classList.add("active"); }
    }
}
reveal();

window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) section.scrollIntoView({ behavior: 'smooth' });
};

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