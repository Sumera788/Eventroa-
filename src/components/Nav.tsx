"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useUser } from "@/lib/hooks";
import { supabase } from "@/lib/supabase";
const L=[["/events","Explore"],["/categories","Categories"],["/blog","Blog"],["/about","About"],["/contact","Contact"]];
export default function Nav(){
 const [o,setO]=useState(false);const {user}=useUser();
 return <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3" aria-label="Main">
   <Link href="/" className="flex items-center gap-2 font-display text-2xl font-extrabold text-brand"><Sparkles className="text-accent"/>Eve<span className="text-accent">tora</span></Link>
   <ul className="hidden items-center gap-6 md:flex">{L.map(([h,t])=><li key={h}><Link href={h} className="font-medium hover:text-brand">{t}</Link></li>)}
    {user?<><li><Link href="/my-bookings" className="font-medium">My Bookings</Link></li><li><Link href="/dashboard" className="font-medium">Dashboard</Link></li>
     <li><button className="btn-o" onClick={async()=>{await supabase?.auth.signOut();location.href="/"}}>Logout</button></li></>
    :<><li><Link href="/login" className="font-medium">Login</Link></li><li><Link href="/signup" className="btn-p">Sign up</Link></li></>}</ul>
   <button className="md:hidden" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></nav>
  {o&&<div className="flex flex-col gap-3 border-t border-ink/10 p-4 md:hidden" onClick={()=>setO(false)}>
   {[...L,["/my-bookings","My Bookings"],["/dashboard","Dashboard"],["/login","Login"],["/signup","Sign up"]].map(([h,t])=><Link key={h} href={h}>{t}</Link>)}</div>}
 </header>;
}
