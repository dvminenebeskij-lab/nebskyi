import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, Rule } from "@/components/Reveal";
import { ArchLines, CursorLight } from "@/components/Atmosphere";
import { GlassMonolith } from "@/components/GlassMonolith";
import heroImage from "@/assets/hero-azure.jpg";
import paperTexture from "@/assets/texture-paper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nebskyi — агенство розробки сайтів" },
      {
        name: "description",
        content:
          "Nebskyi — нове агенство розробки сайтів: дизайн, розробка та підтримка. Дивіться приклади робіт і напишіть нам.",
      },
      { property: "og:title", content: "Nebskyi — агенство розробки сайтів" },
      {
        property: "og:description",
        content: "Дизайн, розробка та підтримка сайтів. Приклади робіт і зв'язок з агенством.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Сайти для ресторанів",
    body: "Меню, бронювання столиків, доставка та контакти — все, що потрібно ресторану.",
  },
  {
    n: "02",
    title: "Сайти для сервісів",
    body: "Запис на послуги, тарифи, калькулятори, форми зворотного зв'язку.",
  },
  {
    n: "03",
    title: "Сайти для агенцій",
    body: "Портфоліо, послуги, кейси та сторінка контактів для вашої агенції.",
  },
  {
    n: "04",
    title: "Сайти для бізнесів",
    body: "Від магазинів до виробництв: зрозумілі сайти, які допомагають продавати.",
  },
  {
    n: "05",
    title: "Дизайн",
    body: "Малюємо кожну сторінку під ваш бренд. Без готових шаблонів.",
  },
  {
    n: "06",
    title: "Розробка",
    body: "Чистий код, швидке завантаження, зручний вигляд на телефоні та комп'ютері.",
  },
  {
    n: "07",
    title: "Підтримка",
    body: "Оновлюємо тексти, додаємо сторінки, стежимо за роботою сайту.",
  },
];

const works = [
  {
    name: "Aster",
    kind: "Концепт · кав'ярня",
    note: "Меню, галерея та бронювання столика",
  },
  {
    name: "Linea",
    kind: "Концепт · дизайн інтер'єрів",
    note: "Портфоліо проєктів і сторінка послуг",
  },
  {
    name: "Marin",
    kind: "Концепт · магазин",
    note: "Каталог товарів і швидке оформлення",
  },
  {
    name: "Orbit",
    kind: "Концепт · сервіс",
    note: "Головна сторінка з тарифами й формою",
  },
];

const steps = [
  { t: "Розмова", d: "Уточнюємо задачу, ціну, терміни та всі деталі." },
  { t: "Розробка", d: "Клієнт чекає, а ми робимо сайт." },
  { t: "Перевірка", d: "Показуємо сайт, обговорюємо, виправляємо, якщо треба." },
  { t: "Запуск", d: "Все добре — вмикаємо сайт." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <CursorLight />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-border bg-background/85 py-4 backdrop-blur-xl"
            : "border-b border-transparent py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6">
          <a href="#top" className="font-display text-xl tracking-[0.28em] uppercase">
            Nebskyi
          </a>
          <nav className="hidden items-center gap-10 text-sm md:flex">
            <a href="#services" className="link-quiet">
              Послуги
            </a>
            <a href="#work" className="link-quiet">
              Роботи
            </a>
            <a href="#process" className="link-quiet">
              Процес
            </a>
          </nav>
          <a
            href="#contact"
            className="group relative overflow-hidden border border-azure/60 px-5 py-2.5 text-xs tracking-[0.2em] text-azure uppercase transition-colors duration-500"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-ink-deep">
              Написати
            </span>
            <span className="absolute inset-0 -translate-y-full bg-azure transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={heroImage}
          alt="М'яке блакитне світло на темній поверхні"
          width={1408}
          height={1008}
          className="drifting absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <ArchLines className="opacity-70" />
        <GlassMonolith
          className="right-[6vw] top-1/2 hidden h-[clamp(240px,34vh,380px)] w-[clamp(96px,9vw,150px)] -translate-y-[62%] opacity-90 md:block"
          style={{ ["--mono-half" as string]: "clamp(48px,4.5vw,75px)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ink-deep)_75%,transparent)_0%,transparent_35%,color-mix(in_oklab,var(--ink-deep)_95%,transparent)_100%)]" />

        <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-20">
          <Reveal delay={100} variant="fade">
            <span className="font-mono text-[11px] tracking-[0.32em] text-azure uppercase">
              Агенство розробки сайтів · 2026
            </span>
          </Reveal>
          <Reveal delay={260} variant="mask" duration={1700}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.9rem,8vw,7rem)] leading-[0.94] tracking-[-0.02em]">
              Робимо сайти
              <br />
              <span className="italic text-azure-gradient">для вашого бізнесу</span>
            </h1>
          </Reveal>
          <Reveal delay={480} variant="unblur">
            <p className="mt-10 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Nebskyi — нове агенство. Ми робимо сайти для ресторанів, сервісів, агенцій та інших
              бізнесів: від структури до запуску.
            </p>
          </Reveal>
          <Reveal delay={640} variant="fade" className="mt-14">
            <Rule delay={700} />
            <div className="grid grid-cols-2 gap-8 pt-6 md:grid-cols-4">
              {[
                ["2026", "рік заснування"],
                ["4", "власні роботи"],
                ["1-3 сек", "завантаження сайту"],
                ["1 день", "відповідь на запит"],
              ].map(([v, l], i) => (
                <Reveal key={l} variant="settle" delay={820 + i * 130}>
                  <div className="font-display text-3xl text-azure-soft md:text-4xl">{v}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                    {l}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border py-5">
        <div className="marquee-track flex w-max gap-14 font-display text-2xl whitespace-nowrap text-muted-foreground/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-14">
              {["Aster", "Linea", "Marin", "Orbit", "Дизайн", "Розробка", "Підтримка"].map(
                (b) => (
                  <span key={b} className="flex items-center gap-14">
                    {b}
                    <span className="h-1 w-1 rounded-full bg-azure" />
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Manifest */}
      <section className="relative mx-auto max-w-[1240px] px-6 py-32">
        <ArchLines className="opacity-40" />
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="drift-left">
            <p className="font-mono text-[11px] tracking-[0.28em] text-azure uppercase">
              Про агенство
            </p>
          </Reveal>
          <div>
            <Reveal delay={120} variant="unblur" duration={1600}>
              <p className="font-display text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.25]">
                Ми заснували Nebskyi у 2026 році. Клієнтських проєктів ще немає — усе, що ви
                бачите нижче, ми зробили самі, щоб показати рівень роботи.{" "}
                <span className="text-muted-foreground">
                  Тому зараз беремо перші замовлення й приділяємо кожному багато уваги.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-[1240px] px-6 pb-32">
        <Reveal variant="mask" duration={1500}>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)]">Що ми робимо</h2>
        </Reveal>
        <div className="mt-14">
          {services.map((s, i) => (
            <div key={s.n}>
              <Rule delay={i * 80} />
              <Reveal delay={i * 90} variant={i % 2 === 0 ? "drift-left" : "drift-right"}>
                <div className="group grid gap-6 py-9 transition-colors duration-500 md:grid-cols-[80px_1fr_1fr]">
                  <span className="font-mono text-xs text-azure transition-opacity duration-700 group-hover:opacity-60">
                    {s.n}
                  </span>
                  <h3 className="font-display text-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground transition-colors duration-700 group-hover:text-foreground/80">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
          <Rule />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-32">
        <img
          src={paperTexture}
          alt=""
          aria-hidden
          loading="lazy"
          width={1200}
          height={800}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.035] mix-blend-screen"
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <Reveal variant="settle">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)]">Наші роботи</h2>
          </Reveal>
          <Reveal delay={140} variant="fade">
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Це власні проєкти агенства, зроблені для портфоліо — на них видно, як ми працюємо з
              дизайном, структурою та швидкістю.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            {works.map((w, i) => (
              <Reveal key={w.name} delay={i * 160} variant="lift" className="h-full">
                <article className="group relative h-full overflow-hidden bg-background p-10 transition-colors duration-700 hover:bg-card md:p-14">
                  <span className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-700 group-hover:opacity-100 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--azure)_10%,transparent),transparent)]" />
                  <span className="font-mono text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
                    {w.kind}
                  </span>
                  <h3 className="mt-6 font-display text-4xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 md:text-5xl">
                    {w.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{w.note}</p>
                  <span className="mt-10 block h-px w-0 bg-azure transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-[1240px] px-6 pb-32">
        <Reveal variant="drift-left">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)]">Як ми працюємо</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 180} variant="unblur">
              <div className="group relative pt-8">
                <span className="absolute top-0 left-0 h-2 w-2 rotate-45 bg-azure transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[135deg]" />
                <h3 className="font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border py-32">
        <ArchLines className="opacity-50" />
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal variant="fade">
            <p className="font-mono text-[11px] tracking-[0.28em] text-azure uppercase">
              Приймаємо нові проєкти
            </p>
          </Reveal>
          <Reveal delay={160} variant="mask" duration={1700}>
            <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,5.6rem)] leading-[1]">
              Розкажіть
              <br />
              <span className="italic text-muted-foreground">про свій проєкт</span>
            </h2>
          </Reveal>
          <Reveal delay={340} variant="drift-right">
            <a
              href="mailto:dvminenebeskij@gmail.com"
              className="group mt-14 inline-flex items-center gap-5 border-b border-azure/40 pb-3 font-display text-2xl transition-colors duration-500 hover:border-azure md:text-3xl"
            >
              dvminenebeskij@gmail.com
              <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                →
              </span>
            </a>
          </Reveal>
          <Reveal delay={460} variant="fade">
            <p className="mt-10 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Напишіть кілька слів про задачу — відповімо протягом дня й запропонуємо час для
              розмови.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span className="font-mono tracking-[0.22em] uppercase">Nebskyi · Агенство</span>
          <span>© {new Date().getFullYear()} Усі права захищені</span>
        </div>
      </footer>
    </div>
  );
}
