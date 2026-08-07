import { site } from "@/data/site";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Footer(){return <footer className="border-t border-white/10 bg-black/20"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"><div>© 2026 Levincia. All rights reserved.</div><div className="flex gap-5"><a href={site.discord}>Discord</a><a href={`${base}/staff/`}>Staff</a><a href={`${base}/contact/`}>Contact</a></div></div></footer>}
