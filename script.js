/* فخر المذاق - سكربت الموقع
   لتعديل البيانات لاحقًا: غيّر القيم في COMPANY والقوائم أدناه فقط. */

var COMPANY = {
  phone: "0918932323",
  email: "info@fakhr.almadhaq.ly",
  whatsapp: "218918932323",
  address: "مكتب رقم 202، عمارة الصفوة، شارع الجرابة، طرابلس"
};

var ACTIVITIES = [
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 22V9"/><path d="M12 9c0-3 2-5 4-6 0 3-1 5-4 6Z"/><path d="M12 9C12 6 10 4 8 3c0 3 1 5 4 6Z"/><path d="M12 15c0-3 2-4 4-5 0 3-1 4-4 5Z"/><path d="M12 15c0-3-2-4-4-5 0 3 1 4 4 5Z"/></svg>', title: "السلع التموينية والبقوليات", text: "تشكيلة أساسية تلبي احتياجات السوق بجودة موثوقة." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M6 8h12M6 16h12"/></svg>', title: "المعلبات الغذائية", text: "منتجات محفوظة ومنتقاة وفق مواصفات توريد دقيقة." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M8 4a4 4 0 0 1 4 4 4 4 0 0 0 4 4 4 4 0 0 1-4 8 4 4 0 0 1-4-4 4 4 0 0 0-4-4 4 4 0 0 1 4-8Z"/></svg>', title: "المكسرات بأنواعها", text: "أصناف متنوعة مختارة من مصادر موثوقة." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M14 4c0 2 2 3 3 3"/><path d="M17 7c0 7-4 13-9 13-2 0-3-1-3-3 0-5 5-10 12-10Z"/></svg>', title: "التوابل والبهارات", text: "نكهات أصيلة وتنوع يناسب الأذواق المختلفة." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z"/><path d="M16 9h2a2 2 0 1 1 0 4h-2"/><path d="M4 21h14"/></svg>', title: "المشروبات والعصائر", text: "إضافة إلى الشاي والبن والكاكاو بجميع أصنافها." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 3h10l-1 18H8L7 3Z"/><path d="M7.5 9h9"/></svg>', title: "الحليب ومنتجات الألبان", text: "منتجات غذائية ذات جودة وسلامة عالية." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="13" r="2.4"/><circle cx="15" cy="13" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M12 10V5c0-1 1-2 3-2"/></svg>', title: "الفواكه والبيض", text: "فواكه مختارة وبيض مخصص للاستهلاك." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7c2-1 3 1 3 3"/><path d="M20 7c-2-1-3 1-3 3"/><path d="M7 10h10v4a5 5 0 0 1-10 0v-4Z"/><path d="M10 15h.01M14 15h.01"/></svg>', title: "المواشي الحية", text: "الأبقار والأغنام والإبل الحية لغرض الذبح." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M3 12c3-5 8-6 12-4 2 1 4 3 6 4-2 1-4 3-6 4-4 2-9 1-12-4Z"/><path d="M7 12h.01"/><path d="M15 9l3 3-3 3"/></svg>', title: "اللحوم والأسماك", text: "لحوم ودواجن وأسماك مجمدة ومبردة." },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M16 6a2 2 0 1 1-2 2v0c0 4-3 8-8 8 2 2 5 3 8 3 5 0 8-4 8-9V6l-2-2-2 2Z"/><path d="M16 6h.01"/></svg>', title: "حيوانات وطيور التربية", text: "استيراد الحيوانات الحية والطيور لغرض التربية." }
];

var BUSINESS = [
  { label: "رقم الترخيص", value: "05030202423691" },
  { label: "رقم الترخيص", value: "05030202423619" },
  { label: "السجل التجاري", value: "05030202423619" },
  { label: "الغرفة التجارية", value: "95" },
  { label: "مكان الصدور", value: "الزاوية" },
  { label: "العنوان", value: COMPANY.address }
];

document.addEventListener("DOMContentLoaded", function () {
  renderActivities();
  renderBusiness();
  initMenu();
  initReveal();
  initForm();
});

function renderActivities() {
  var wrap = document.getElementById("cards");
  if (!wrap) return;
  ACTIVITIES.forEach(function (item, i) {
    var card = document.createElement("article");
    card.className = "card reveal";
    card.innerHTML =
      '<div class="num">' + String(i + 1).padStart(2, "0") + "</div>" +
      '<div class="ico">' + item.icon + "</div>" +
      "<h3></h3><p></p>";
    card.querySelector("h3").textContent = item.title;
    card.querySelector("p").textContent = item.text;
    wrap.appendChild(card);
  });
}

function renderBusiness() {
  var wrap = document.getElementById("biz");
  if (!wrap) return;
  BUSINESS.forEach(function (item) {
    var box = document.createElement("div");
    box.className = "reveal";
    box.innerHTML = "<small></small><strong></strong>";
    box.querySelector("small").textContent = item.label;
    box.querySelector("strong").textContent = item.value;
    wrap.appendChild(box);
  });
}

function initMenu() {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

function initReveal() {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
}

function initForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;
  var errorBox = document.getElementById("formError");
  var note = document.getElementById("formNote");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var subject = form.subject.value.trim();
    var message = form.message.value.trim();

    var error = "";
    if (name.length < 3) error = "يرجى إدخال الاسم الكامل.";
    else if (!/^[0-9+\-\s]{8,}$/.test(phone)) error = "يرجى إدخال رقم هاتف صحيح.";
    else if (subject.length < 3) error = "يرجى إدخال موضوع الرسالة.";
    else if (message.length < 10) error = "يرجى كتابة رسالة أوضح (10 أحرف على الأقل).";

    if (error) {
      errorBox.textContent = error;
      errorBox.hidden = false;
      note.hidden = true;
      return;
    }

    errorBox.hidden = true;
    note.hidden = false;

    var body =
      "الاسم: " + name + "\n" +
      "الهاتف: " + phone + "\n\n" +
      message;
    window.location.href =
      "mailto:" + COMPANY.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    form.reset();
  });
}
