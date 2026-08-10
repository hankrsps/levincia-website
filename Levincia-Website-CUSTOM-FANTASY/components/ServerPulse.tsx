"use client";
import { Activity, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

type Status = { online?: boolean; players?: number };
export default function ServerPulse(){
  const [status,setStatus]=useState<Status|null>(null);
  useEffect(()=>{
    if(!site.statusApi) return;
    fetch(site.statusApi,{cache:"no-store"}).then(r=>r.json()).then(setStatus).catch(()=>setStatus({online:false}));
  },[]);
  const configured=Boolean(site.statusApi);
  return <div className="status-grid">
    <div className="status-card"><Activity size={21}/><div><span>SERVER STATUS</span><strong>{configured ? (status?.online ? "ONLINE" : "OFFLINE") : "IN DEVELOPMENT"}</strong></div></div>
    <div className="status-card"><Users size={21}/><div><span>PLAYERS ONLINE</span><strong>{configured && typeof status?.players === "number" ? status.players : "—"}</strong></div></div>
  </div>
}
