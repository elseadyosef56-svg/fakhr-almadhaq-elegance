# موقع شركة فخر المذاق

موقع ثابت (HTML + CSS + JS) جاهز للنشر على GitHub Pages.

## ملفات النشر
- `index.html` — الصفحة الكاملة (الشعار مدمج داخل الملف)
- `style.css` — التصميم
- `script.js` — البيانات (الهاتف، البريد، العنوان، الأنشطة، البيانات التجارية) والتفاعل
- `.nojekyll` — لمنع معالجة Jekyll في GitHub Pages

## طريقة النشر
1. ارفع الملفات إلى المستودع على الفرع الرئيسي (main).
2. من Settings → Pages اختر: Source = Deploy from a branch، Branch = main، Folder = / (root).
3. احفظ وانتظر دقيقة، ثم افتح الرابط الظاهر في نفس الصفحة.

## تعديل البيانات
كل البيانات في أعلى ملف `script.js` ضمن المتغيرات `COMPANY` و`ACTIVITIES` و`BUSINESS`.
