import { createFileRoute } from "@tanstack/react-router";
import { Building2, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | شركة فخر المذاق" },
      { name: "description", content: "تواصل مع شركة فخر المذاق في طرابلس عبر الهاتف أو واتساب أو البريد الإلكتروني." },
      { property: "og:title", content: "تواصل مع شركة فخر المذاق" },
      { property: "og:description", content: "بيانات التواصل والعنوان والبيانات التجارية لشركة فخر المذاق." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const subject = String(form.get("subject") ?? "استفسار جديد");
    const message = String(form.get("message") ?? "");
    const body = `الاسم: ${name}\nالهاتف: ${phone}\n\n${message}`;
    setSubmitted(true);
    window.location.href = `mailto:info@fakhr.almadhaq.ly?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <section className="page-hero">
        <div className="site-container py-20 sm:py-24">
          <Reveal className="max-w-3xl">
            <span className="eyebrow"><MessageCircle size={16} /> نحن قريبون منكم</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-snug text-primary-foreground sm:text-5xl">تواصل معنا</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-hero-muted">يسعدنا استقبال استفساراتكم وبحث فرص التعاون والشراكة. اختر وسيلة التواصل الأنسب وسنكون في خدمتكم.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="section-kicker">بيانات التواصل</span>
            <h2 className="section-title">نرحب بتواصلكم</h2>
            <div className="mt-8 grid gap-4">
              <ContactItem icon={Phone} title="الهاتف" value="0918932424" href="tel:0918932424" />
              <ContactItem icon={Mail} title="البريد الإلكتروني" value="info@fakhr.almadhaq.ly" href="mailto:info@fakhr.almadhaq.ly" ltr />
              <ContactItem icon={MapPin} title="العنوان" value="مكتب رقم 202، عمارة الصفوة، شارع الجرابة، طرابلس" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg"><a href="tel:0918932424"><Phone /> اتصال مباشر</a></Button>
              <Button asChild variant="whatsapp" size="lg"><a href="https://wa.me/218918932424" target="_blank" rel="noreferrer"><MessageCircle /> واتساب</a></Button>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-form-shell">
              <div className="mb-8"><span className="section-kicker">أرسل رسالة</span><h2 className="mt-2 text-2xl font-bold">كيف يمكننا مساعدتك؟</h2></div>
              {submitted && <div className="success-note"><CheckCircle2 /> تم تجهيز رسالتك في برنامج البريد.</div>}
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="الاسم الكامل"><Input id="name" name="name" required placeholder="اكتب اسمك" /></Field>
                  <Field id="phone" label="رقم الهاتف"><Input id="phone" name="phone" type="tel" required placeholder="09xxxxxxxx" dir="ltr" /></Field>
                </div>
                <Field id="subject" label="موضوع الرسالة"><Input id="subject" name="subject" required placeholder="موضوع تواصلك" /></Field>
                <Field id="message" label="الرسالة"><Textarea id="message" name="message" required placeholder="اكتب تفاصيل استفسارك هنا..." className="min-h-36" /></Field>
                <Button type="submit" size="lg" className="h-12 justify-self-start px-8"><Send /> إرسال الرسالة</Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="business-section py-16 sm:py-20">
        <div className="site-container">
          <Reveal className="mb-9"><span className="section-kicker">معلومات رسمية</span><h2 className="section-title">البيانات التجارية</h2></Reveal>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            <BusinessItem label="رقم الترخيص" value="05030202423691" />
            <BusinessItem label="رقم الترخيص" value="05030202423619" />
            <BusinessItem label="السجل التجاري" value="05030202423619" />
            <BusinessItem label="الغرفة التجارية" value="95" />
            <BusinessItem label="مكان الصدور" value="الزاوية" />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className="grid gap-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}

function ContactItem({ icon: Icon, title, value, href, ltr = false }: { icon: typeof Phone; title: string; value: string; href?: string; ltr?: boolean }) {
  const content = <span className="min-w-0"><small className="block text-xs text-muted-foreground">{title}</small><strong className="mt-1 block break-words text-sm font-semibold" dir={ltr ? "ltr" : "rtl"}>{value}</strong></span>;
  return <div className="contact-item"><span className="contact-icon"><Icon /></span>{href ? <a className="min-w-0 flex-1 hover:text-primary" href={href}>{content}</a> : content}</div>;
}

function BusinessItem({ label, value }: { label: string; value: string }) {
  return <Reveal className="business-item"><Building2 /><small>{label}</small><strong dir="ltr">{value}</strong></Reveal>;
}