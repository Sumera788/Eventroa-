"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function Footer(){
 const [em,setEm]=useState("");const [msg,setMsg]=useState("");
 async function sub(e:React.FormEvent){e.preventDefault();
  if(supabase){const {error}=await supabase.from("newsletter").insert({email:em});setMsg(error?"Could not subscribe. Try again.":"Subscribed. Welcome aboard!");}
  else setMsg("Subscribed (demo mode).");setEm("");}
 return <footer className="mt-20 bg-ink text-cream"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
  <div><p className="font-display text-2xl font-bold">Eventora</p><p className="mt-2 text-cream/70">Discover. Book. Enjoy.</p></div>
  <ul className="space-y-1">{[["/faq","FAQ"],["/privacy","Privacy Policy"],["/contact","Contact"],["/blog","Blog"]].map(([h,t])=><li key={h}><Link href={h} className="hover:text-accent">{t}</Link></li>)}</ul>
  <form onSubmit={sub} className="space-y-2"><label htmlFor="nl" className="font-semibold">Get event updates</label>
   <div className="flex gap-2"><input id="nl" type="email" required value={em} onChange={e=>setEm(e.target.value)} className="inp text-ink" placeholder="you@email.com"/><button className="btn-a">Subscribe</button></div>
   <p role="status" className="text-sm text-accent">{msg}</p></form></div></footer>;
}
