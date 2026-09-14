import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Beef, Bird, Boxes, Coffee, CookingPot, Fish, Grape, Milk, Nut, PackageCheck, Ship, Sparkles, Wheat } from "lucide-react";

import logoAsset from "@/assets/fakhr-almadhaq-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "فخر المذاق | استيراد المواد الغذائية واللحوم" },
      { name: "description", content: "شركة فخر المذاق لاستيراد المواد الغذائية والمواشي واللحوم في ليبيا، مع تنوع واسع وجودة موثوقة." },
      { property: "og:title", content: "فخر المذاق | جودة تستحق الثقة" },
      { property: "og:description", content: "توريد واستيراد المواد الغذائية والمواشي واللحوم بمعايير عالية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const activities = [
  { icon: Wheat, title: "السلع التموينية والبقوليات", text: "تشكيلة أساسية تلبي احتياجات السوق بجودة موثوقة." },
  { icon: PackageCheck, title: "المعلبات الغذائية", text: "منتجات محفوظة ومنتقاة وفق مواصفات توريد دقيقة." },
  { icon: Nut, title: "المكسرات بأنواعها", text: "أصناف متنوعة مختارة من مصادر موثوقة." },
  { icon: CookingPot, title: "التوابل والبهارات", text: "نكهات أصيلة وتنوع يناسب الأذواق المختلفة." },
  { icon: Coffee, title: "المشروبات والعصائر", text: "إضافة إلى الشاي والبن والكاكاو بجميع أصنافها." },
  { icon: Milk, title: "الحليب ومنتجات الألبان", text: "منتجات غذائية ذات جودة وسلامة عالية." },
  { icon: Grape, title: "الفواكه والبيض", text: "فواكه مختارة وبيض مخصص للاستهلاك." },
  { icon: Beef, title: "المواشي الحية", text: "الأبقار والأغنام والإبل الحية لغرض الذبح." },
  { icon: Fish, title: "اللحوم والأسماك", text: "لحوم ودواجن وأسماك مجمدة ومبردة." },
  { icon: Bird, title: "حيوانات وطيور التربية", text: "استيراد الحيوانات الحية والطيور لغرض التربية." },
];

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="site-container relative grid min-h-[calc(100svh-76px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <Reveal className="order-2 lg:order-1">
            <div className="eyebrow"><Sparkles size={16} /> جودة تستحق الثقة</div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.45] text-primary-foreground sm:text-5xl lg:text-6xl">
              فخر المذاق
              <span className="mt-2 block text-gold">شريككم في الغذاء واللحوم</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-hero-muted sm:text-lg">
              شركة ليبية متخصصة في استيراد المواد الغذائية والمواشي واللحوم، نختار منتجاتنا بعناية ونبني شراكات راسخة لتلبية احتياجات السوق بكفاءة وثقة.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-7"><Link to="/contact">تواصل معنا <ArrowLeft /></Link></Button>
              <Button asChild variant="heroOutline" size="lg" className="h-12 px-7"><a href="#activities">استكشف مجالاتنا</a></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-hero-muted">
              <span className="flex items-center gap-2"><BadgeCheck className="text-gold" /> جودة موثوقة</span>
              <span className="flex items-center gap-2"><Ship className="text-gold" /> توريد متنوع</span>
              <span className="flex items-center gap-2"><Boxes className="text-gold" /> قطاعات متعددة</span>
            </div>
          </Reveal>

          <Reveal className="order-1 flex justify-center lg:order-2">
            <div className="logo-stage">
              <div className="logo-halo" />
              <img src={logoAsset.url} alt="فخر المذاق لاستيراد المواد الغذائية والمواشي واللحوم" className="hero-logo" />
            </div>
          </Reveal>
        </div>
        <div className="hero-edge" aria-hidden="true" />
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="section-kicker">من نحن</span>
            <h2 className="section-title">نصل الجودة إلى السوق الليبي</h2>
          </Reveal>
          <Reveal>
            <p className="text-lg leading-9 text-muted-foreground">
              تعمل فخر المذاق على ربط السوق بمصادر توريد موثوقة، عبر محفظة متكاملة تشمل السلع التموينية والمنتجات الغذائية واللحوم والمواشي. نلتزم بالوضوح في التعامل والدقة في الاختيار والاستمرارية في التوريد.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[["01", "اختيار دقيق"], ["02", "تنوع متكامل"], ["03", "علاقات موثوقة"]].map(([number, label]) => (
                <div className="value-item" key={number}><span>{number}</span><strong>{label}</strong></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="activities" className="activities-section py-20 sm:py-28">
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="section-kicker">مجالات أعمالنا</span>
            <h2 className="section-title">حلول توريد تغطي احتياجات متنوعة</h2>
            <p className="mt-4 leading-8 text-muted-foreground">نعمل عبر قطاعات غذائية وحيوانية متعددة ضمن منظومة توريد مرنة وموثوقة.</p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {activities.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="activity-card" key={title}>
                <div className="activity-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="activity-icon"><Icon /></div>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="site-container grid items-center gap-8 py-16 md:grid-cols-[1fr_auto]">
          <div><span className="text-sm font-semibold text-gold">شراكة تبدأ بثقة</span><h2 className="mt-3 text-3xl font-bold leading-snug text-primary-foreground">هل تبحث عن مورد يعتمد عليه؟</h2></div>
          <Button asChild size="lg" className="h-12 px-8"><Link to="/contact">ابدأ التواصل <ArrowLeft /></Link></Button>
        </div>
      </section>
    </>
  );
}