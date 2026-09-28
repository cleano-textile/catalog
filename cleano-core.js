// =========================================================================
// 1. متغیرهای سراسری و دیتابیس
// =========================================================================
const bUrl = typeof BASE_URL !== 'undefined' ? BASE_URL : "../../";
const catalogDB = [
    { id: "CL-017", title: "دستگیره فر", ref: "CL-017", url: `${bUrl}set-fer/dastgire-fer/index.html`, img: `${bUrl}set-fer/cover-dastgire-fer.webp` },
    { id: "CL-018", title: "دستکش فر", ref: "CL-018", url: `${bUrl}set-fer/dastkesh-fer/index.html`, img: `${bUrl}set-fer/cover-dastkesh-fer.webp` },
    { id: "CL-016", title: "دستگیره آشپزخانه", ref: "CL-016", url: `${bUrl}set-parcheie/dastgire-ashpazkhane/index.html`, img: `${bUrl}set-parcheie/cover-dastgire-ashpazkhane.webp` },
    { id: "CL-014", title: "دستگیره قابلمه", ref: "CL-014", url: `${bUrl}set-parcheie/dastgire-ghablame/index.html`, img: `${bUrl}set-parcheie/cover-dastgire-ghablame.webp` },
    { id: "CL-023", title: "دم کن برنج", ref: "CL-023", url: `${bUrl}set-parcheie/damkon-berenj/index.html`, img: `${bUrl}set-parcheie/cover-damkon-berenj.webp` },
    { id: "CL-021", title: "پیشبند آشپزخانه", ref: "CL-021", url: `${bUrl}set-parcheie/pishband/index.html`, img: `${bUrl}set-parcheie/cover-pishband.webp` },
    { id: "CL-019", title: "نمگیر ظروف", ref: "CL-019", url: `${bUrl}set-parcheie/namgir-zorof/index.html`, img: `${bUrl}set-parcheie/cover-namgir-zorof.webp` },
    { id: "CL-001", title: "دستمال طرحدار آشپزخانه", ref: "CL-001", url: `${bUrl}dastmal-ashpazkhane/dastmal-tarhdar-ashpazkhane/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-dastmal-tarhdar-ashpazkhane.webp` },
    { id: "CL-002", title: "دستمال تنظیف دولایه", ref: "CL-002", url: `${bUrl}dastmal-ashpazkhane/dastmal-tanzif-dolaie/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-dastmal-tanzif-dolaie.webp` },
    { id: "CL-004", title: "دستمال میکروفایبر", ref: "CL-004", url: `${bUrl}dastmal-ashpazkhane/dastmal-microfiber/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-dastmal-microfiber.webp` },
    { id: "CL-005", title: "دستمال تک رنگ آشپزخانه", ref: "CL-005", url: `${bUrl}dastmal-ashpazkhane/dastmal-takrang-ashpazkhane/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-dastmal-takrang-ashpazkhane.webp` },
    { id: "CL-006", title: "حوله آشپزخانه", ref: "CL-006", url: `${bUrl}dastmal-ashpazkhane/hole-ashpazkhane/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-hole-ashpazkhane.webp` },
    { id: "CL-028", title: "دستمال حوله‌ای", ref: "CL-028", url: `${bUrl}dastmal-ashpazkhane/dastmal-holeie/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-dastmal-holeie.webp` },
    { id: "CL-029", title: "دستمال نخ پنبه", ref: "CL-029", url: `${bUrl}dastmal-ashpazkhane/dastmal-nakh-panbe/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-dastmal-nakh-panbe.webp` },
    { id: "CL-030", title: "دستمال وایت ویو", ref: "CL-030", url: `${bUrl}dastmal-ashpazkhane/dastmal-white-view/index.html`, img: `${bUrl}dastmal-ashpazkhane/cover-dastmal-white-view.webp` },
    { id: "CL-010", title: "سفره دو نفره", ref: "CL-010", url: `${bUrl}sofre/sofre-do-nafare/index.html`, img: `${bUrl}sofre/cover-sofre-do-nafare.webp` },
    { id: "CL-011", title: "سفره چهار نفره", ref: "CL-011", url: `${bUrl}sofre/sofre-chahar-nafare/index.html`, img: `${bUrl}sofre/cover-sofre-chahar-nafare.webp` },
    { id: "CL-012", title: "سفره شش نفره", ref: "CL-012", url: `${bUrl}sofre/sofre-shesh-nafare/index.html`, img: `${bUrl}sofre/cover-sofre-shesh-nafare.webp` },
    { id: "CL-013", title: "سفره هشت نفره", ref: "CL-013", url: `${bUrl}sofre/sofre-hasht-nafare/index.html`, img: `${bUrl}sofre/cover-sofre-hasht-nafare.webp` },
    { id: "CL-007", title: "کیسه سبزی", ref: "CL-007", url: `${bUrl}mahsolat-takmili/kise-sabzi/index.html`, img: `${bUrl}mahsolat-takmili/cover-kise-sabzi.webp` },
    { id: "CL-009", title: "سفره نان", ref: "CL-009", url: `${bUrl}mahsolat-takmili/sofre-nan/index.html`, img: `${bUrl}mahsolat-takmili/cover-sofre-nan.webp` },
    { id: "CL-020", title: "نمگیر میکروفایبر", ref: "CL-020", url: `${bUrl}mahsolat-takmili/namgir-microfiber/index.html`, img: `${bUrl}mahsolat-takmili/cover-namgir-microfiber.webp` },
    { id: "CL-022", title: "پیشبند ضد آب و ضد لک", ref: "CL-022", url: `${bUrl}mahsolat-takmili/pishband-zede-ab-va-zede-lak/index.html`, img: `${bUrl}mahsolat-takmili/cover-pishband-zede-ab-va-zede-lak.webp` }
];
let orderList = JSON.parse(localStorage.getItem('cleano_order_list')) || [];
let currentSlideIdx = 0;

// =========================================================================
// 2. قالب‌های HTML (اضافه شدن منوی موبایل)
// =========================================================================
const cleanoHeaderHTML = `
<header>
    <div class="logo-box">
        <a href="${bUrl}index.html" class="logo">CLEΛNO</a>
        <div class="nav-links">
            <div class="mega-wrapper mega-trigger">
                <a href="#">New</a>
                <div class="mega-menu">
                    <div class="mega-container">
                        <div class="mega-text">
                            <span class="mega-subtitle">Latest Collection</span>
                            <h2 class="mega-title">کالکشن جدید</h2>
                            <p class="mega-desc">نسل جدید محصولات پارچه‌ای با طراحی مینیمال و کیفیت پایدار برای آشپزخانه شما.</p>
                            <a href="${bUrl}set-parcheie/index.html" class="mega-link">مشاهده مجموعه</a>
                        </div>
                        <div class="mega-images">
                            <a href="${bUrl}set-parcheie/index.html" class="mega-card">
                                <div class="mega-img-box"><img src="${bUrl}aks-page-aval/cat-set-parchei.webp" alt="ست پارچه‌ای"></div>
                                <div class="mega-card-info" style="margin-top: 10px;"><h4 class="mega-card-title">ست پارچه‌ای</h4><span class="mega-card-ref">New Arrival</span></div>
                            </a>
                            <a href="${bUrl}set-fer/index.html" class="mega-card">
                                <div class="mega-img-box"><img src="${bUrl}aks-page-aval/cat-set-fer.webp" alt="ست فر"></div>
                                <div class="mega-card-info" style="margin-top: 10px;"><h4 class="mega-card-title">ست فر</h4><span class="mega-card-ref">Bestseller</span></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="${bUrl}about/index.html">About</a>
            <a href="javascript:void(0)" class="order-btn" onclick="toggleCartDrawer()">
                لیست سفارش <span class="cart-badge" id="header-cart-badge" style="display:none;">0</span>
            </a>
        </div>
    </div>
    <div class="nav-links">
        <a href="#" style="font-weight: 500;">EN</a>
    </div>
</header>
<div class="sub-nav">
    <a href="${bUrl}all.html" id="nav-all">All</a>
    <a href="${bUrl}dastmal-ashpazkhane/index.html" id="nav-dastmal">دستمال‌های آشپزخانه</a>
    <a href="${bUrl}set-parcheie/index.html" id="nav-set-parchei">ست پارچه‌ای</a>
    <a href="${bUrl}set-fer/index.html" id="nav-set-fer">ست فر</a>
    <a href="${bUrl}sofre/index.html" id="nav-sofre">سفره</a>
    <a href="${bUrl}mahsolat-takmili/index.html" id="nav-takmili">محصولات تکمیلی</a>
</div>
`;

const cleanoFooterHTML = `
<footer style="border-top: 1px solid var(--border-color); padding-top: 60px;">
    <div style="text-align: center; margin-bottom: 40px; padding: 0 20px;">
        <span style="font-size: 11px; color: var(--text-muted); letter-spacing: 4px; text-transform: uppercase; display: block; margin-bottom: 15px;">CLEANO Home Textile</span>
        <p style="font-size: 13px; color: var(--text-muted); font-weight: 300; line-height: 2; max-width: 500px; margin: 0 auto;">
            کاتالوگ دیجیتال محصولات پارچه‌ای مینیمال.<br>خلق زیبایی، اصالت و دوام برای قلب خانه‌ی شما.
        </p>
    </div>
    <div class="giant-logo">CLEΛNO</div>
</footer>
`;

// HTML منوی شیشه‌ای اپلیکیشنی پایین صفحه
const mobileNavHTML = `
<div class="mobile-bottom-nav">
    <a href="${bUrl}index.html" class="mb-nav-item">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>خانه</span>
    </a>
    <a href="${bUrl}all.html" class="mb-nav-item">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>محصولات</span>
    </a>
    <a href="javascript:void(0)" class="mb-nav-item" onclick="toggleCartDrawer()">
        <div class="mb-cart-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span class="mb-cart-badge" id="mobile-cart-badge" style="display:none;">0</span>
        </div>
        <span>سفارش</span>
    </a>
</div>
`;

const cartDrawerHTML = `
<style>
.print-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 10000; display: none; align-items: center; justify-content: center; backdrop-filter: blur(4px); opacity: 0; transition: opacity 0.3s ease; }
.print-modal-overlay.active { display: flex; opacity: 1; }
.print-modal { background: #fff; width: 90%; max-width: 420px; border-radius: 20px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); direction: rtl; transform: translateY(20px); transition: transform 0.3s ease; }
.print-modal-overlay.active .print-modal { transform: translateY(0); }
.print-modal h3 { margin: 0 0 10px 0; font-weight: 500; font-size: 18px; color: var(--text-main); }
.print-modal p { font-size: 13px; color: var(--text-muted); margin-bottom: 25px; line-height: 1.6; }
.print-modal input[type="text"] { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 12px; margin-bottom: 15px; font-family: 'Vazirmatn', sans-serif; font-size: 14px; box-sizing: border-box; transition: 0.3s; }
.print-modal input[type="text"]:focus { border-color: var(--brand-green); outline: none; }
.print-checkbox-label { display: flex; align-items: center; gap: 10px; font-size: 13px; color: #555; margin-bottom: 30px; cursor: pointer; user-select: none; }
.print-modal-actions { display: flex; gap: 10px; }
.print-modal-actions button { flex: 1; padding: 12px; border-radius: 12px; font-family: 'Vazirmatn', sans-serif; font-size: 14px; cursor: pointer; font-weight: 500; border: none; }
.print-cancel-btn { background: #f5f5f5; color: #555; }
.print-confirm-btn { background: var(--text-main); color: #fff; }
.minimal-download-btn { background: #fff; color: #1a1a1a; border: 1px solid #ddd; border-radius: 12px; padding: 12px 20px; font-family: 'Vazirmatn', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; justify-content: center; min-width: 140px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
.minimal-download-btn:hover { background: #f9f9f9; border-color: #aaa; transform: translateY(-1px); }

/* استایل‌های چک‌لیست مستر */
.cart-cat-block { margin-bottom: 15px; border: 1px solid #eee; border-radius: 16px; overflow: hidden; }
.cart-cat-head { background: #fdfdfd; padding: 12px 15px; font-size: 13px; font-weight: 600; color: #444; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
.compact-cart-row { display: flex; align-items: center; justify-content: space-between; padding: 15px; border-bottom: 1px solid #f9f9f9; background: #fff; transition: background 0.3s; }
.compact-cart-row:last-child { border-bottom: none; }
.compact-cart-row.selected { background-color: #f6fcf8; }

.cc-info { display: flex; flex-direction: column; gap: 4px; }
.cc-title-link { text-decoration: none; color: #1a1a1a; transition: color 0.2s; outline: none; }
.cc-title-link:hover { color: var(--brand-green); }
.cc-title { font-size: 13px; font-weight: 500; margin: 0; }
.cc-ref { font-size: 10px; color: #888; font-family: sans-serif; letter-spacing: 1px; }

.cc-actions { display: flex; align-items: center; gap: 12px; }
.cc-qty-box { display: flex; align-items: center; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; direction: ltr; background: #fff; transition: border-color 0.3s; }
.compact-cart-row.selected .cc-qty-box { border-color: #a3d9b4; }
.cc-btn { background: #fff; border: none; width: 28px; height: 28px; cursor: pointer; color: #555; display: flex; align-items: center; justify-content: center; transition: 0.2s; font-size: 16px; }
.cc-btn:hover { background: #f0f0f0; color: #000; }
.cc-input { width: 26px; text-align: center; border: none; border-left: 1px solid #eaeaea; border-right: 1px solid #eaeaea; font-size: 13px; font-weight: 600; padding: 0; pointer-events: none; background: transparent; color: #1a1a1a; }

.cc-remove { background: none; border: none; color: #ddd; cursor: pointer; padding: 5px; font-size: 16px; opacity: 0.4; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; }
.cc-remove:hover { color: #ff5252; opacity: 1; transform: scale(1.1); }
</style>

<div class="cart-overlay" id="cart-overlay" onclick="toggleCartDrawer()"></div>
<div class="cart-drawer" id="cart-drawer">
    <div class="cart-header" style="border-bottom: 1px solid #eee; padding-bottom: 15px;">
        <h3 style="font-size: 16px; font-weight: 600; color: var(--text-main);">چک‌لیست کاتالوگ</h3>
        <button class="close-cart" onclick="toggleCartDrawer()">✕</button>
    </div>
    <div class="cart-items-container" id="cart-items-container" style="padding: 20px; overflow-y: auto; max-height: calc(100vh - 150px);"></div>
    <div class="cart-footer" style="display: flex; justify-content: center; padding: 20px; border-top: 1px solid #eee; background: #fff; position: sticky; bottom: 0; z-index: 10;">
        <button class="minimal-download-btn" onclick="openPrintModal()" id="main-download-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            دریافت عکس سفارش
        </button>
    </div>
</div>

<div id="print-info-modal" class="print-modal-overlay" onclick="closePrintModal(event)">
    <div class="print-modal" onclick="event.stopPropagation()">
        <h3>صدور فرم سفارش</h3>
        <p>در صورت تمایل، نام مشتری را وارد کنید تا مستقیماً در فرم ثبت شود.</p>
        <input type="text" id="print-customer-name" placeholder="نام مشتری / فروشگاه" autocomplete="off">
        <input type="text" id="print-customer-phone" placeholder="شماره تماس (اختیاری)" autocomplete="off">
        <label class="print-checkbox-label">
            <input type="checkbox" id="print-skip-info" onchange="togglePrintInputs(this)">
            <span>ثبت بدون نام (فرم خام)</span>
        </label>
        <div class="print-modal-actions">
            <button onclick="closePrintModal(event, true)" class="print-cancel-btn">انصراف</button>
            <button onclick="executeImageDownload()" class="print-confirm-btn" id="generate-image-btn">دانلود عکس سفارش</button>
        </div>
    </div>
</div>
`;

// =========================================================================
// 3. موتور رندر صفحه محصول
// =========================================================================
function renderProductPage() {
    const root = document.getElementById('cleano-app-root');
    if (!root || typeof PRODUCT_DATA === 'undefined') return;
    const d = PRODUCT_DATA;
    window.productSlides = d.images.map(src => ({ src: src }));
    let specsHtml = d.specs.map(s => `<li><span class="spec-label">${s.label}:</span><span class="spec-value">${s.value}</span></li>`).join('');
    let maintHtml = d.maintenance.map(m => `<li><span class="spec-label">${m.label}:</span><span class="spec-value">${m.value}</span></li>`).join('');

    root.innerHTML = `
        <div class="product-container">
            <div class="info-col">
                <div class="breadcrumb"><a href="${d.category.link}">${d.category.name}</a> <span class="separator">/</span> ${d.title}</div>
                <div class="title-section"><h1 class="product-title">${d.title}</h1><div class="ref-wrapper"><span class="product-ref">REF: ${d.ref}</span></div></div>
                <p class="product-desc">${d.description}</p>
                <div class="size-section">
                    <ul class="size-list">
                        <li class="size-row"><span>حداقل سفارش (MOQ)</span><span>${d.salesData.moq}</span></li>
                        <li class="size-row"><span>بسته‌بندی اولیه</span><span>${d.salesData.pack1}</span></li>
                        <li class="size-row"><span>بسته‌بندی اصلی</span><span>${d.salesData.pack2}</span></li>
                        <li class="size-row"><span>رنگ‌بندی و تنوع</span><span>${d.salesData.colors}</span></li>
                        <li class="size-row"><span>ابعاد کارتن</span><span>${d.salesData.boxSize}</span></li>
                    </ul>
                </div>
                <div class="action-row">
                    <button class="add-btn" onclick="handleSmartAdd('${d.id}', this)">افزودن به لیست سفارش</button>
                    <div class="page-qty-controls">
                        <button class="page-qty-btn" onclick="changePageQty(-1)">−</button>
                        <input type="text" id="page-qty-input" class="page-qty-input" value="1" readonly>
                        <button class="page-qty-btn" onclick="changePageQty(1)">+</button>
                    </div>
                </div>
                <div class="accordion-wrapper">
                    <div class="accordion-item"><div class="accordion-header"><span>مشخصات فنی و متریال</span><span class="acc-icon">+</span></div><div class="accordion-content"><ul class="spec-list">${specsHtml}</ul><p>${d.specsText}</p></div></div>
                    <div class="accordion-item"><div class="accordion-header"><span>نگهداری و دوام</span><span class="acc-icon">+</span></div><div class="accordion-content"><ul class="spec-list">${maintHtml}</ul><p>${d.maintenanceText}</p></div></div>
                </div>
            </div>
            <div class="gallery-col" id="gallery-container">
                <div class="click-zone zone-right" onclick="changeSlide(1)"></div><div class="click-zone zone-left" onclick="changeSlide(-1)"></div>
                <img id="main-slider-img" src="${d.images[0]}" onclick="openLightbox()">
                <div class="slider-counter"><span id="current-slide">1</span> / <span id="total-slides">${d.images.length}</span></div>
            </div>
        </div>
        <div id="lightbox"><button class="lb-close" onclick="closeLightbox()">✕</button><div class="lb-scroll-area" id="lb-scroll-area"></div></div>
    `;

    // اضافه کردن قابلیت Swipe لمسی برای عکس‌های محصول در موبایل
    setTimeout(() => {
        const gc = document.getElementById('gallery-container');
        if(gc) {
            let touchstartX = 0, touchendX = 0;
            gc.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; }, {passive: true});
            gc.addEventListener('touchend', e => { 
                touchendX = e.changedTouches[0].screenX; 
                if (touchendX < touchstartX - 40) changeSlide(1); // ورق زدن به چپ
                if (touchendX > touchstartX + 40) changeSlide(-1); // ورق زدن به راست
            }, {passive: true});
        }
    }, 100);
}

// =========================================================================
// 4. راه‌اندازی و Bind کردن ایونت‌ها
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const hp = document.getElementById('cleano-header-placeholder'); if(hp) hp.innerHTML = cleanoHeaderHTML;
    const fp = document.getElementById('cleano-footer-placeholder'); if(fp) fp.innerHTML = cleanoFooterHTML;
    document.body.insertAdjacentHTML('beforeend', cartDrawerHTML);
    document.body.insertAdjacentHTML('beforeend', mobileNavHTML); // تزریق منوی موبایل
    renderProductPage();
    if(typeof ACTIVE_CATEGORY !== 'undefined') { const al = document.getElementById('nav-' + ACTIVE_CATEGORY); if(al) al.classList.add('active'); }
    updateCartUI();

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            document.querySelectorAll('.accordion-header').forEach(other => { if (other !== this) { other.nextElementSibling.style.maxHeight = null; other.querySelector('.acc-icon').innerText = "+"; } });
            let content = this.nextElementSibling; let icon = this.querySelector('.acc-icon');
            if (content.style.maxHeight) { content.style.maxHeight = null; icon.innerText = "+"; } 
            else { content.style.maxHeight = content.scrollHeight + "px"; icon.innerText = "−"; }
        });
    });
});

// =========================================================================
// 5. توابع گلوبال
// =========================================================================
window.changeSlide = function(dir) {
    if(typeof window.productSlides === 'undefined') return;
    currentSlideIdx = (currentSlideIdx + dir + window.productSlides.length) % window.productSlides.length;
    const mainImg = document.getElementById('main-slider-img');
    if(!mainImg) return;
    mainImg.style.opacity = 0;
    setTimeout(() => { mainImg.src = window.productSlides[currentSlideIdx].src; document.getElementById('current-slide').innerText = currentSlideIdx + 1; mainImg.style.opacity = 1; }, 250);
};

window.openLightbox = function() {
    if(typeof window.productSlides === 'undefined') return;
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lb-scroll-area').innerHTML = window.productSlides.map((slide, i) => `<img src="${slide.src}" id="lb-img-${i}">`).join('');
    lightbox.style.display = 'block'; setTimeout(() => { lightbox.classList.add('active'); document.getElementById('lb-img-' + currentSlideIdx)?.scrollIntoView({ block: 'center' }); document.body.style.overflow = 'hidden'; }, 10);
};

window.closeLightbox = function() { const l = document.getElementById('lightbox'); if(l) { l.classList.remove('active'); document.body.style.overflow = 'auto'; setTimeout(() => l.style.display = 'none', 400); } };
window.toggleCartDrawer = function() { const drawer = document.getElementById('cart-drawer'); const overlay = document.getElementById('cart-overlay'); if (drawer.classList.contains('open')) { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = 'auto'; } else { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; updateCartUI(); } };

window.updateQty = function(productId, change) {
    let itemIndex = orderList.findIndex(i => i.id === productId);
    if (itemIndex > -1) { 
        orderList[itemIndex].qty += change; 
        if (orderList[itemIndex].qty <= 0) orderList.splice(itemIndex, 1); 
    } 
    else if (change > 0) { orderList.push({ id: productId, qty: change }); }
    
    localStorage.setItem('cleano_order_list', JSON.stringify(orderList)); 
    updateCartUI();
};

window.removeFromCart = function(productId) {
    orderList = orderList.filter(i => i.id !== productId);
    localStorage.setItem('cleano_order_list', JSON.stringify(orderList));
    updateCartUI();
};

window.addProductToCart = function(productId, qty = 1) { window.updateQty(productId, qty); };

window.updateCartUI = function() {
    const container = document.getElementById('cart-items-container');
    const badge = document.getElementById('header-cart-badge');
    const mobileBadge = document.getElementById('mobile-cart-badge'); // اتصال عدد سبد به منوی موبایل
    const dBtn = document.getElementById('main-download-btn');
    if(!container) return;

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
    for(let cat in groupedCatalog) {
        let catTotal = 0;
        groupedCatalog[cat].forEach(p => {
            let cartItem = orderList.find(i => i.id === p.id);
            if(cartItem) catTotal += cartItem.qty;
        });

        html += `
        <div class="cart-cat-block">
            <div class="cart-cat-head">
                <span>${cat}</span>
                <span style="color:#888; font-weight:400; font-size:10px;">${catTotal > 0 ? catTotal + ' کارتن' : ''}</span>
            </div>
        `;
        
        groupedCatalog[cat].forEach(p => {
            let cartItem = orderList.find(i => i.id === p.id);
            let qty = cartItem ? cartItem.qty : 0;
            let isSelected = qty > 0 ? 'selected' : '';
            let removeStyle = qty > 0 ? '' : 'visibility: hidden; opacity: 0; pointer-events: none; width: 0; padding: 0;';

            html += `
            <div class="compact-cart-row ${isSelected}">
                <div class="cc-info">
                    <a href="${p.url}" target="_blank" class="cc-title-link" title="مشاهده صفحه محصول">
                        <h4 class="cc-title">${p.title}</h4>
                    </a>
                    <span class="cc-ref">${p.ref}</span>
                </div>
                <div class="cc-actions">
                    <div class="cc-qty-box">
                        <button class="cc-btn" onclick="updateQty('${p.id}', -1)">−</button>
                        <input type="text" class="cc-input" value="${qty}" readonly>
                        <button class="cc-btn" onclick="updateQty('${p.id}', 1)">+</button>
                    </div>
                    <button class="cc-remove" style="${removeStyle}" onclick="removeFromCart('${p.id}')" title="حذف">✕</button>
                </div>
            </div>
            `;
        });
        html += `</div>`;
    }

    container.innerHTML = html;

    let totalItems = orderList.length; 
    if(totalItems === 0) {
        if(dBtn) dBtn.style.opacity = '0.5';
        if(badge) badge.style.display = 'none';
        if(mobileBadge) mobileBadge.style.display = 'none';
    } else {
        if(dBtn) dBtn.style.opacity = '1';
        if(badge) { badge.innerText = totalItems; badge.style.display = 'flex'; }
        if(mobileBadge) { mobileBadge.innerText = totalItems; mobileBadge.style.display = 'flex'; }
    }
};

window.changePageQty = function(dir) { const input = document.getElementById('page-qty-input'); if(input) { let v = parseInt(input.value) || 1; v += dir; input.value = v < 1 ? 1 : v; } };
window.handleSmartAdd = function(productId, btn) { const input = document.getElementById('page-qty-input'); const qty = input ? parseInt(input.value) : 1; window.updateQty(productId, qty); const origText = btn.innerText; btn.style.backgroundColor = 'var(--brand-green)'; btn.style.color = '#fff'; btn.style.pointerEvents = 'none'; btn.innerText = `✓ اضافه شد`; setTimeout(() => { btn.style.backgroundColor = ''; btn.style.color = ''; btn.style.pointerEvents = 'auto'; btn.innerText = origText; if(input) input.value = 1; }, 2000); };
window.openPrintModal = function() { if (orderList.length === 0) return; document.getElementById('print-info-modal').classList.add('active'); };
window.closePrintModal = function(e, force = false) { if (force || e.target.id === 'print-info-modal') document.getElementById('print-info-modal').classList.remove('active'); };
window.togglePrintInputs = function(checkbox) { const n = document.getElementById('print-customer-name'); const p = document.getElementById('print-customer-phone'); n.disabled = checkbox.checked; p.disabled = checkbox.checked; n.style.opacity = checkbox.checked ? '0.5' : '1'; p.style.opacity = checkbox.checked ? '0.5' : '1'; if(checkbox.checked){ n.value=''; p.value=''; } };

// =========================================================================
// موتور تولید عکس فاکتور
// =========================================================================
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
    
    const nameDisplay = cName ? `<span style="font-weight:600; color:#1a1a1a;">${cName}</span>` : `<span style="display:inline-block; width:150px; border-bottom:1px dashed #aaa;"></span>`;
    const phoneDisplay = cPhone ? `<span style="font-weight:600; color:#1a1a1a; letter-spacing:1px;">${cPhone}</span>` : `<span style="display:inline-block; width:150px; border-bottom:1px dashed #aaa;"></span>`;

    const captureBox = document.createElement('div');
    captureBox.style.position = 'absolute'; 
    captureBox.style.top = '0';
    captureBox.style.left = '0'; 
    captureBox.style.zIndex = '-9999';
    captureBox.style.width = '794px'; 
    captureBox.style.height = '1123px';
    captureBox.style.background = '#ffffff';
    captureBox.style.padding = '30px 40px'; 
    captureBox.style.boxSizing = 'border-box';
    captureBox.style.direction = 'rtl';
    captureBox.style.fontFamily = "'Vazirmatn', Arial, sans-serif";
    captureBox.style.color = '#1a1a1a'; 
    captureBox.style.display = 'flex';
    captureBox.style.flexDirection = 'column';
    captureBox.style.justifyContent = 'space-between';
    
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
        <div style="flex: 1;">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid #1a1a1a; padding-bottom:10px; margin-bottom:15px; flex-direction:row-reverse;">
                <div style="text-align:left;">
                    <h1 style="margin:0; font-family:Arial, sans-serif; font-size:28px; letter-spacing:2px; font-weight:700; color:#1a1a1a;">CLEΛNO</h1>
                    <p style="margin:2px 0 0 0; font-size:8px; color:#555; letter-spacing:2px; text-transform:uppercase;">Home Textile Collection</p>
                </div>
                <div style="text-align:right;">
                    <h2 style="margin:0 0 4px 0; font-size:16px; font-weight:600; color:#1a1a1a;">فرم سفارش محصولات</h2>
                    <div style="font-size:10px; color:#555;">تاریخ درخواست: ${today}</div>
                </div>
            </div>
            
            <div style="display:flex; justify-content:space-between; font-size:11px; color:#1a1a1a; margin-bottom:15px; padding:0 5px;">
                <div style="flex:1;">نام مشتری / فروشگاه: ${nameDisplay}</div>
                <div style="flex:1;">شماره تماس: ${phoneDisplay}</div>
            </div>
            
            <table style="width:100%; border-collapse:collapse; font-size:11px; color:#1a1a1a;">
                <thead>
                    <tr>
                        <th style="border-bottom:1px solid #1a1a1a; padding:4px 8px; text-align:right; font-weight:600; width:8%;">ردیف</th>
                        <th style="border-bottom:1px solid #1a1a1a; padding:4px 8px; text-align:right; font-weight:600; width:42%;">شرح کالا</th>
                        <th style="border-bottom:1px solid #1a1a1a; padding:4px 8px; text-align:right; font-weight:600; width:25%;">کد سفارش (REF)</th>
                        <th style="border-bottom:1px solid #1a1a1a; padding:4px 8px; text-align:center; font-weight:600; width:25%;">تعداد (کارتن)</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    let rowCount = 1;
    for (let cat in groupedOrder) {
        innerHtml += `<tr><td colspan="4" style="font-weight:700; font-size:10px; padding:6px 8px 3px 8px; border-bottom:1px solid #eaeaea; color:#1a1a1a;">${cat}</td></tr>`;
        groupedOrder[cat].forEach(item => {
            innerHtml += `
                <tr>
                    <td style="border-bottom:1px solid #f5f5f5; padding:3px 8px; color:#555;">${rowCount}</td>
                    <td style="border-bottom:1px solid #f5f5f5; padding:3px 8px; font-weight:500; color:#1a1a1a;">${item.p.title}</td>
                    <td style="border-bottom:1px solid #f5f5f5; padding:3px 8px; font-family:sans-serif; letter-spacing:1px; color:#555;">${item.p.ref}</td>
                    <td style="border-bottom:1px solid #f5f5f5; padding:3px 8px; text-align:center; font-size:13px; font-weight:600; color:#1a1a1a;">${item.qty}</td>
                </tr>`;
            rowCount++;
        });
    }
    
    innerHtml += `
                    <tr>
                        <td colspan="3" style="font-weight:600; font-size:12px; border-bottom:1px solid #1a1a1a; border-top:1px solid #1a1a1a; padding:6px 10px; text-align:left; padding-left:20px; color:#1a1a1a;">جمع کل کارتن‌های انتخابی:</td>
                        <td style="font-weight:700; font-size:13px; border-bottom:1px solid #1a1a1a; border-top:1px solid #1a1a1a; padding:6px 10px; text-align:center; color:#1a1a1a;">${totalCartons} کارتن</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div style="flex-shrink:0;">
            <div style="text-align:justify; line-height:1.5; margin-bottom:15px; padding:6px 10px; border-right:2px solid #1a1a1a; font-size:9px; color:#555; background:#fafafa;">
                <strong>توجه:</strong> این سند صرفاً جهت بررسی اولیه صادر شده است. قیمت نهایی و شرایط، پس از بررسی موجودی و تایید توسط پخش‌کننده مشخص می‌گردد.
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; padding:0 20px; color:#1a1a1a;">
                <div style="width:150px; text-align:center;"><div style="border-bottom:1px solid #1a1a1a; height:25px; margin-bottom:6px;"></div><div style="font-size:9px; font-weight:600;">مهر و امضای خریدار</div></div>
                <div style="width:150px; text-align:center;"><div style="border-bottom:1px solid #1a1a1a; height:25px; margin-bottom:6px;"></div><div style="font-size:9px; font-weight:600;">تایید کننده</div></div>
            </div>
            <div style="text-align:center; border-top:1px solid #eaeaea; padding-top:8px; font-size:8px; letter-spacing:1px; color:#888; font-weight:500;">
                CLEANO HOME TEXTILE COLLECTION &nbsp;|&nbsp; PREMIUM QUALITY &nbsp;|&nbsp; MINIMAL DESIGN
            </div>
        </div>
    `;
    
    captureBox.innerHTML = innerHtml;
    document.body.appendChild(captureBox);
    window.scrollTo(0, 0);

    setTimeout(() => {
        html2canvas(captureBox, { 
            scale: 2, 
            useCORS: true, 
            backgroundColor: "#ffffff",
            scrollY: 0,
            scrollX: 0,
            windowWidth: 794,
            windowHeight: 1123
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            const link = document.createElement('a');
            link.download = `سفارش-کیلینو-${Date.now()}.jpg`;
            link.href = imgData;
            link.click();
            
            document.body.removeChild(captureBox);
            closePrintModal(null, true);
            btn.innerText = originalText;
            btn.style.pointerEvents = 'auto';
        });
    }, 100);
}