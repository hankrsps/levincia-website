"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Home","/"],["Download","/download"],["News","/news"],["Gallery","/gallery"],["Wiki","/wiki"],["Highscores","/highscores"],["Vote","/vote"],["Store","/store"]];
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Nav(){
 const [open,setOpen]=useState(false);
 return <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b12e8] backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
   <a href={`${base}/`} className="text-xl font-bold tracking-[.18em] gold-text">LEVINCIA</a>
   <div className="hidden gap-5 text-sm text-slate-300 lg:flex">{links.map(([n,h])=><a key={n} className="hover:text-[#e0b557]" href={`${base}${h}`}>{n}</a>)}</div>
   <button aria-label="Menu" className="lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="grid gap-1 border-t border-white/10 p-4 lg:hidden">{links.map(([n,h])=><a key={n} className="rounded px-3 py-2 hover:bg-white/5" href={`${base}${h}`}>{n}</a>)}</div>}
 </nav>
}
