"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEvents } from "@/lib/hooks";
import { CATEGORIES } from "@/lib/data";
import EventCard from "@/components/EventCard";
export default function Home(){
 const {events,loading}=useEvents();const [q,setQ]=useState("");
 return <>
 <section className="relative overflow-hidden bg-brand text-cream"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
  <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
   <h1 className="font-display text-5xl font-extrabold leading-tight md:text-6xl">Every great moment starts with a ticket.</h1>
   <p className="mt-4 max-w-md text-lg text-cream/80">Concerts, weddings, workshops and festivals across Pakistan. Find one, book in a minute.</p>
   <form action="/events" className="mt-8 flex max-w-md gap-2 rounded-full bg-cream p-1.5"><label className="sr-only" htmlFor="hq">Search events</label>
    <input id="hq" name="q" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search events or cities" className="flex-1 rounded-full bg-transparent px-4 text-ink outline-none"/>
    <button className="btn-a" aria-label="Search"><Search size={18}/>Search</button></form></motion.div>
  <div className="grid grid-cols-2 gap-3">{events.slice(0,4).map((e,i)=><motion.div key={e.id} initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:.2+i*.1}} className={i%2?"mt-8":""}><EventCard e={e}/></motion.div>)}</div></div></section>
 <section className="mx-auto max-w-7xl px-4 py-14"><h2 className="font-display text-3xl font-bold">Browse by category</h2>
  <div className="mt-6 flex flex-wrap gap-3">{CATEGORIES.map(c=><Link key={c} href={`/events?cat=${encodeURIComponent(c)}`} className="rounded-full border border-brand/30 bg-white px-4 py-2 font-medium hover:bg-brand hover:text-white">{c}</Link>)}</div></section>
 <section className="mx-auto max-w-7xl px-4"><div className="flex items-end justify-between"><h2 className="font-display text-3xl font-bold">Upcoming events</h2><Link href="/events" className="font-semibold text-brand">View all events</Link></div>
  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{loading?Array.from({length:6}).map((_,i)=><div key={i} className="skel h-72"/>):events.slice(0,6).map(e=><EventCard key={e.id} e={e}/>)}</div></section></>;
}
