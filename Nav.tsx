"use client";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
const links = [["Home","/"],["Download","/download/"],["News","/news/"],["Gallery","/gallery/"],["Wiki","/wiki/"],["Highscores","/highscores/"],["Vote","/vote/"],["Store","/store/"]];
export default function Nav(){
 const [open,setOpen]=useState(false);
 return <nav className="site-nav">
  <div className="nav-inner">
   <a href="/" className="brand"><span className="brand-mark">L</span><span>LEVINCIA</span></a>
   <div className="nav-links">{links.map(([n,h])=><a key={n} href={h}>{n}</a>)}</div>
   <a href={site.discord} className="discord-pill"><MessageCircle size={17}/> Discord</a>
   <button aria-label="Menu" className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="mobile-menu">{links.map(([n,h])=><a key={n} onClick={()=>setOpen(false)} href={h}>{n}</a>)}<a href={site.discord}>Join Discord</a></div>}
 </nav>
}
