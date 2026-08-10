import type { CSSProperties, ReactNode } from "react";

const pageArt: Record<string, string> = {
  Download: "/images/feature-daily-content.jpg",
  Gallery: "/images/hero-levincia.jpg",
  Highscores: "/images/feature-community.jpg",
  News: "/images/community-banner.jpg",
  Staff: "/images/feature-community.jpg",
  Store: "/images/feature-custom-content.jpg",
  Vote: "/images/feature-daily-content.jpg",
  Wiki: "/images/feature-skilling.jpg",
  Contact: "/images/community-banner.jpg",
};

export default function PageShell({
  title,
  subtitle,
  eyebrow = "LEVINCIA",
  children,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  const heroImage =
    pageArt[title] ?? "/images/hero-levincia.jpg";

  const style = {
    "--page-art": `url('${heroImage}')`,
  } as CSSProperties;

  return (
    <main className="fantasy-page page-wrap" style={style}>

      <section className="fantasy-page-hero">

        <div className="page-hero-art" />

        <div className="page-hero-shade" />

        <div className="page-glow" />

        <div className="page-container page-hero-copy">

          <p className="eyebrow">
            {eyebrow}
          </p>

          <h1 className="gold-text">
            {title}
          </h1>

          <p className="page-subtitle">
            {subtitle}
          </p>

        </div>

      </section>

      <section className="page-fantasy-body">

        <div className="page-fantasy-watermark" />

        <div className="page-container page-content">
          {children}
        </div>

      </section>

    </main>
  );
}
