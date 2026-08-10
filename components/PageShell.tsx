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
  const heroImage = pageArt[title] ?? "/images/hero-levincia.jpg";

  const style = {
    "--page-art": `url('${heroImage}')`,
  } as CSSProperties;

  return (
    <main className="page-fantasy" style={style}>
      <section className="page-fantasy-hero">
        <div className="page-fantasy-overlay" />

        <div className="page-container page-fantasy-hero-content">
          <p className="page-fantasy-eyebrow">
            {eyebrow}
          </p>

          <h1 className="page-fantasy-title">
            {title}
          </h1>

          <p className="page-fantasy-subtitle">
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
