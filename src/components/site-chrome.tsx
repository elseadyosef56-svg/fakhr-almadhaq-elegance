import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/fakhr-almadhaq-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="brand-link min-w-0" aria-label="فخر المذاق - الرئيسية">
          <img className="brand-mark shrink-0" src={logoAsset.url} alt="شعار فخر المذاق" />
          <span className="min-w-0">
            <strong className="block truncate text-lg font-bold">فخر المذاق</strong>
            <small className="hidden text-xs text-muted-foreground sm:block">لاستيراد المواد الغذائية والمواشي واللحوم</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="التنقل الرئيسي">
          <Link to="/" className="nav-link" activeOptions={{ exact: true }} activeProps={{ className: "nav-link nav-link-active" }}>
            الرئيسية
          </Link>
          <Link to="/contact" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
            تواصل معنا
          </Link>
          <Button asChild variant="default" size="lg">
            <a href="tel:0918932424">اتصل بنا</a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav className="mobile-nav lg:hidden" aria-label="التنقل المحمول">
          <div className="site-container grid gap-2 py-4">
            <Link to="/" className="mobile-nav-link">الرئيسية</Link>
            <Link to="/contact" className="mobile-nav-link">تواصل معنا</Link>
            <Button asChild className="mt-2 w-full" size="lg"><a href="tel:0918932424">اتصل بنا الآن</a></Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img className="brand-mark" src={logoAsset.url} alt="" />
            <strong className="text-xl text-primary-foreground">فخر المذاق</strong>
          </div>
          <p className="max-w-md text-sm leading-7 text-footer-muted">
            شريك موثوق في توريد واستيراد المواد الغذائية والمواشي واللحوم، بمعايير تليق بثقة عملائنا.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">روابط سريعة</h2>
          <div className="grid gap-3 text-sm text-footer-muted">
            <Link to="/" className="footer-link">الرئيسية</Link>
            <Link to="/contact" className="footer-link">تواصل معنا</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">بيانات التواصل</h2>
          <div className="grid gap-3 text-sm text-footer-muted" dir="ltr">
            <a className="footer-link text-right" href="tel:0918932424">0918932424</a>
            <a className="footer-link text-right" href="mailto:info@fakhr.almadhaq.ly">info@fakhr.almadhaq.ly</a>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-line py-5 text-center text-xs text-footer-muted">
        © 2026 شركة فخر المذاق. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}