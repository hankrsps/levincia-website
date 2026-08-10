import {
  Crown,
  Shield,
  Sparkles,
  Users,
  Download,
  MessageCircle,
  Gift,
  Pickaxe,
} from "lucide-react";

import { news, site } from "@/data/site";

const features = [
  {
    title: "Custom Content",
    description:
      "Unique bosses, items and areas created specifically for the Levincia adventure.",
    image: "/images/feature-custom-content.jpg",
    Icon: Shield,
  },
  {
    title: "Active Community",
    description:
      "Join a growing community of players, events and development updates.",
    image: "/images/feature-community.jpg",
    Icon: Users,
  },
  {
    title: "Daily Content",
    description:
      "Rewards, events and challenges give you something new to chase every day.",
    image: "/images/feature-daily-content.jpg",
    Icon: Gift,
  },
  {
    title: "Custom Skilling",
    description:
      "Train your skills through custom locations, progression and rewards.",
    image: "/images/feature-skilling.jpg",
    Icon: Pickaxe,
  },
];

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section
        className="relative flex min-h-[780px] items-end justify-center overflow-hidden px-5 pb-20 pt-28 text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(3,7,12,.18), rgba(3,7,12,.55), rgba(3,7,12,.98)), url('/images/hero-levincia.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-bold tracking-[.42em] text-[#e1b85a]">
            ENTER THE REALM
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-tight text-white md:text-7xl">
            Your Adventure
            <span className="block gold-text">Begins Here</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Discover a fantasy world filled with custom bosses, progression,
            skilling, PvM and a community helping shape the future of Levincia.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/levincia-website/download/"
              className="flex items-center gap-2 rounded-md bg-[#d8aa45] px-7 py-4 font-bold text-black shadow-gold"
            >
              <Download size={19} />
              DOWNLOAD
            </a>

            <a
              href={site.discord}
              className="flex items-center gap-2 rounded-md border border-[#4da3ff66] bg-[#10213acc] px-7 py-4 font-bold text-white shadow-blue"
            >
              <MessageCircle size={19} />
              JOIN DISCORD
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold tracking-[.35em] text-[#d8aa45]">
            DISCOVER LEVINCIA
          </p>

          <h2 className="mt-3 text-4xl font-black gold-text">
            A World Built for Adventure
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, image, Icon }) => (
            <article
              key={title}
              className="glass overflow-hidden rounded-xl border border-white/10"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <Icon className="mb-4 text-[#d8aa45]" />

                <h3 className="text-xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMMUNITY BANNER */}
      <section
        className="relative border-y border-white/10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,7,12,.94), rgba(4,7,12,.60), rgba(4,7,12,.94)), url('/images/community-banner.jpg')",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 py-24 text-center">
          <Crown className="mx-auto text-[#d8aa45]" size={38} />

          <h2 className="mt-5 text-4xl font-black gold-text md:text-5xl">
            Built for Players, by Players
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Levincia is being shaped around its community. Your ideas,
            feedback and adventures help build the world.
          </p>

          <a
            href={site.discord}
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#d8aa4566] bg-black/40 px-7 py-4 font-bold text-white"
          >
            <MessageCircle size={19} />
            JOIN THE COMMUNITY
          </a>
        </div>
      </section>

      {/* NEWS */}
      <section className="border-b border-white/10 bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[.3em] text-[#d8aa45]">
                THE LATEST
              </p>

              <h2 className="mt-2 text-4xl font-black gold-text">
                News & Updates
              </h2>
            </div>

            <a
              href="/levincia-website/news/"
              className="text-sm text-[#76b8ff]"
            >
              View all →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {news.map((n) => (
              <article
                className="glass rounded-xl p-6"
                key={n.title}
              >
                <span className="text-xs font-bold tracking-wider text-[#4da3ff]">
                  {n.tag}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {n.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {n.date}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {n.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center">
        <Sparkles className="mx-auto text-[#d8aa45]" />

        <h2 className="mt-5 text-4xl font-black gold-text">
          Forge Your Legacy.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Enter Levincia, build your account and become part of a world
          that continues to grow.
        </p>

        <a
          href={site.discord}
          className="mt-8 inline-block rounded-md border border-[#d8aa4566] px-7 py-3 font-bold"
        >
          JOIN THE COMMUNITY
        </a>
      </section>

    </main>
  );
}
