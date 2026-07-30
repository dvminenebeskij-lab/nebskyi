import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, Rule } from "@/components/Reveal";
import heroImage from "@/assets/hero-monolith.jpg";
import paperTexture from "@/assets/texture-paper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ОБСИДИАН — студия разработки премиальных сайтов" },
      {
        name: "description",
        content:
          "Проектируем и разрабатываем сайты для брендов, которым важна форма: стратегия, дизайн, инженерия, сопровождение.",
      },
      { property: "og:title", content: "ОБСИДИАН — студия разработки премиальных сайтов" },
      {
        property: "og:description",
        content: "Стратегия, дизайн и инженерия сайтов для брендов с характером.",
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
    title: "Стратегия и структура",
    body: "Разбираем продукт, аудиторию и рынок. Собираем смысл до того, как появится первая линия макета.",
  },
  {
    n: "02",
    title: "Дизайн интерфейса",
    body: "Типографика, ритм, свет. Каждый экран рисуем вручную — без шаблонов и готовых блоков.",
  },
  {
    n: "03",
    title: "Разработка",
    body: "Чистый код, скорость 90+, анимации на уровне продуктовых студий. Без конструкторов.",
  },
  {
    n: "04",
    title: "Сопровождение",
    body: "Развиваем сайт после запуска: аналитика, A/B, новые разделы, поддержка контента.",
  },
];

const works = [
  { name: "Nordveil", kind: "Ювелирный дом", year: "2026", note: "Каталог и бутик-опыт" },
  { name: "Aurea Capital", kind: "Инвестиции", year: "2025", note: "Корпоративный сайт" },
  { name: "Château Mira", kind: "Отель 5★", year: "2025", note: "Сайт и бронирование" },
  { name: "Verre", kind: "Архитектура", year: "2024", note: "Портфолио-платформа" },
];

const steps = [
  { t: "Знакомство", d: "45 минут разговора о задаче, сроках и бюджете." },
  { t: "Исследование", d: "Аналитика, смыслы, структура и прототип." },
  { t: "Дизайн", d: "Визуальный язык и все экраны в макете." },
  { t: "Сборка", d: "Разработка, анимации, наполнение, запуск." },
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-border bg-background/85 py-4 backdrop-blur-xl"
            : "border-b border-transparent py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6">
          <a href="#top" className="font-display text-xl tracking-[0.28em] uppercase">
            Обсидиан
          </a>
          <nav className="hidden items-center gap-10 text-sm md:flex">
            <a href="#services" className="link-quiet">
              Услуги
            </a>
            <a href="#work" className="link-quiet">
              Работы
            </a>
            <a href="#process" className="link-quiet">
              Процесс
            </a>
          </nav>
          <a
            href="#contact"
            className="group relative overflow-hidden border border-brass/60 px-5 py-2.5 text-xs tracking-[0.2em] text-brass uppercase transition-colors duration-500"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-ink-deep">
              Обсудить
            </span>
            <span className="absolute inset-0 -translate-y-full bg-brass transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Полированная чёрная плита в тёплом свете"
          width={1408}
          height={1008}
          className="drifting absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ink-deep)_75%,transparent)_0%,transparent_35%,color-mix(in_oklab,var(--ink-deep)_95%,transparent)_100%)]" />

        <div className="relative mx-auto w-full max-w-[1240px] px-6 pb-20">
          <Reveal delay={100}>
            <span className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
              Студия веб-разработки · с 2016 года
            </span>
          </Reveal>
          <Reveal delay={260}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.9rem,8vw,7rem)] leading-[0.94] tracking-[-0.02em]">
              Сайты, которые
              <br />
              <span className="italic text-brass-gradient">носят как вещь</span>
            </h1>
          </Reveal>
          <Reveal delay={420}>
            <p className="mt-10 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Мы делаем немного проектов в год. Каждый — вручную, от смысла до последнего
              миллисекундного перехода.
            </p>
          </Reveal>
          <Reveal delay={560} className="mt-14">
            <Rule delay={700} />
            <div className="grid grid-cols-2 gap-8 pt-6 md:grid-cols-4">
              {[
                ["68", "проектов"],
                ["10", "лет практики"],
                ["94", "средний PageSpeed"],
                ["6", "клиентов в год"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl text-brass-soft">{v}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                    {l}
                  </div>
                </div>
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
              {["Nordveil", "Aurea Capital", "Château Mira", "Verre", "Solis", "Мануфактура №9"].map(
                (b) => (
                  <span key={b} className="flex items-center gap-14">
                    {b}
                    <span className="h-1 w-1 rounded-full bg-brass" />
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Manifest */}
      <section className="mx-auto max-w-[1240px] px-6 py-32">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
              О студии
            </p>
          </Reveal>
          <div>
            <Reveal delay={120}>
              <p className="font-display text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.25]">
                Сайт — это не страница. Это первое рукопожатие бренда: вес шрифта, тишина
                между блоками, скорость отклика.{" "}
                <span className="text-muted-foreground">
                  Мы работаем маленькой командой и берём ровно столько, сколько можем сделать
                  безупречно.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-[1240px] px-6 pb-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)]">Что мы делаем</h2>
        </Reveal>
        <div className="mt-14">
          {services.map((s, i) => (
            <div key={s.n}>
              <Rule delay={i * 80} />
              <Reveal delay={i * 90}>
                <div className="group grid gap-6 py-9 transition-colors duration-500 md:grid-cols-[80px_1fr_1fr]">
                  <span className="font-mono text-xs text-brass">{s.n}</span>
                  <h3 className="font-display text-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
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
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)]">Избранные работы</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            {works.map((w, i) => (
              <Reveal key={w.name} delay={i * 120}>
                <article className="group relative h-full overflow-hidden bg-background p-10 transition-colors duration-700 hover:bg-card md:p-14">
                  <span className="font-mono text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
                    {w.kind} · {w.year}
                  </span>
                  <h3 className="mt-6 font-display text-4xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 md:text-5xl">
                    {w.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{w.note}</p>
                  <span className="mt-10 block h-px w-0 bg-brass transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-[1240px] px-6 pb-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)]">Как проходит работа</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 140}>
              <div className="relative pt-8">
                <span className="absolute top-0 left-0 h-2 w-2 rotate-45 bg-brass" />
                <h3 className="font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border py-32">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
              Свободны с сентября
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,5.6rem)] leading-[1]">
              Расскажите
              <br />
              <span className="italic text-muted-foreground">о вашем проекте</span>
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <a
              href="mailto:studio@obsidian.ru"
              className="group mt-14 inline-flex items-center gap-5 border-b border-brass/40 pb-3 font-display text-2xl transition-colors duration-500 hover:border-brass md:text-3xl"
            >
              studio@obsidian.ru
              <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                →
              </span>
            </a>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-10 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Или напишите в Telegram — ответим в течение дня и предложим время для звонка.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span className="font-mono tracking-[0.22em] uppercase">Обсидиан · Москва</span>
          <span>© {new Date().getFullYear()} Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}
