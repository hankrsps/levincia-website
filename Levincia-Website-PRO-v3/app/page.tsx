import { Crown, Shield, Sparkles, Download, MessageCircle, ArrowRight, Sword, Gem, Trophy, ScrollText } from "lucide-react";
import { features, news, site } from "@/data/site";
import ServerPulse from "@/components/ServerPulse";

export default function Home(){return <main>
 <section className="home-hero">
  <div className="hero-shade"/><div className="hero-particles"/><div className="hero-content">
   <img className="hero-logo" src="/images/levincia-logo.png" alt="Levincia" />
   <p className="hero-kicker">A NEW 317 ADVENTURE</p>
   <p className="hero-copy">A dark-fantasy RuneScape private server experience focused on progression, community and memorable content.</p>
   <div className="hero-actions"><a className="btn btn-gold" href="/download/"><Download size={19}/> PLAY LEVINCIA</a><a className="btn btn-blue" href={site.discord}><MessageCircle size={19}/> JOIN DISCORD</a></div>
   <ServerPulse/>
  </div>
 </section>

 <section className="section"><div className="section-head"><div><p className="eyebrow">THE WORLD OF LEVINCIA</p><h2>Built for the next adventure.</h2></div><p>Classic foundations, modern presentation and a community-first direction.</p></div>
  <div className="feature-grid">{features.map((f,i)=>{const Icon=[Sword,Gem,Trophy,ScrollText][i];return <article className="feature-card" key={f.title}><div className="feature-icon"><Icon/></div><h3>{f.title}</h3><p>{f.body}</p></article>})}</div>
 </section>

 <section className="showcase-section"><div className="showcase-copy"><p className="eyebrow">THE LEVINCIA LAUNCHER</p><h2>One click away from your next journey.</h2><p>The launcher is being built to handle automatic updates, news, settings and one-click game launch while matching the website’s dark blue and gold identity.</p><a className="text-link" href="/download/">VIEW DOWNLOAD PAGE <ArrowRight size={17}/></a></div><div className="showcase-frame"><img src="/images/launcher-showcase.png" alt="Levincia launcher concept"/></div></section>

 <section className="section news-section"><div className="section-head"><div><p className="eyebrow">LATEST FROM LEVINCIA</p><h2>News & Development</h2></div><a className="text-link" href="/news/">ALL NEWS <ArrowRight size={17}/></a></div><div className="news-grid">{news.map(n=><article className="news-card" key={n.title}><span>{n.tag}</span><h3>{n.title}</h3><time>{n.date}</time><p>{n.body}</p></article>)}</div></section>

 <section className="community-cta"><div><Sparkles/><p className="eyebrow">JOIN THE COMMUNITY</p><h2>Help shape what Levincia becomes.</h2><p>Follow development, share feedback, meet other players and be there for every milestone.</p></div><a className="btn btn-gold" href={site.discord}><MessageCircle size={19}/> JOIN DISCORD</a></section>
 </main>}
