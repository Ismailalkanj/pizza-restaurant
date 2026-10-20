import Link from "next/link";
import { GiFullPizza } from "react-icons/gi";
import "react-multi-carousel/lib/styles.css";
import CategoriesCarousel from "./CategoriesCarousel";
import PizzaCarousel from "./PizzaCarousel";

export default function ProductList(){
  return <main className="pizza-site">
    <section className="relative overflow-hidden bg-[#fff7e9] pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute -right-20 top-16 h-80 w-80 rounded-full border-[50px] border-[#f3e7d3] opacity-70 sm:h-[32rem] sm:w-[32rem]"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="max-w-2xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f3e4ce] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#a5442d]"><span className="h-2 w-2 rounded-full bg-[#d94f33]"/> Freshly made with love</span>
          <h1 className="text-5xl font-black leading-[1.06] tracking-[-0.055em] text-[#203d2a] sm:text-6xl lg:text-7xl">A little slice of <span className="italic text-[#d94f33]">happiness.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#596556]">Golden, crispy crust. Fresh ingredients. Big Italian flavour. Find your new favourite pizza, made for sharing (or not).</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/speisekarte" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d94f33] px-7 text-sm font-extrabold text-white shadow-lg shadow-[#d94f33]/20 transition hover:bg-[#b93e27] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d94f33]">Explore our menu →</Link>
            <a href="#favorites" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c7bda6] px-7 text-sm font-extrabold text-[#203d2a] transition hover:bg-[#f1e7d7]">See our favourites</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 text-sm font-semibold text-[#596556]"><span>✓ Fresh ingredients</span><span>✓ Made to order</span><span>✓ Seriously good pizza</span></div>
        </div>
        <div aria-label="Illustration of a fresh pizza" className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center rounded-full bg-[#f7ddac] shadow-[0_30px_90px_rgba(91,54,24,.13)]">
          <div className="absolute inset-5 rounded-full border-2 border-dashed border-[#e8bd7f]"/>
          <GiFullPizza className="rotate-[-17deg] text-[#d94f33] drop-shadow-2xl" style={{width:"72%",height:"72%"}}/>
          <div className="absolute bottom-8 right-0 rotate-6 rounded-xl bg-white px-5 py-3 text-center shadow-xl"><span className="block text-xs font-bold uppercase tracking-widest text-[#8b806c]">Made fresh</span><span className="text-xl font-black text-[#203d2a]">Every day ✨</span></div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-6 text-center"><span className="text-xs font-black uppercase tracking-[.25em] text-[#c44c31]">Something for everyone</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#203d2a] sm:text-4xl">Browse our menu</h2><p className="mt-3 text-[#667064]">Explore delicious choices for every craving.</p></div>
      <CategoriesCarousel/>
    </section>
    <section id="favorites" className="bg-[#fbf3e7] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><span className="text-xs font-black uppercase tracking-[.25em] text-[#c44c31]">Customer favourites</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#203d2a] sm:text-4xl">Love at first bite</h2></div><Link href="/speisekarte" className="font-bold text-[#b9432b] hover:underline">View full menu →</Link></div><PizzaCarousel/></div>
    </section>
    <section className="mx-auto max-w-5xl px-5 py-20 text-center"><span className="text-xs font-black uppercase tracking-[.25em] text-[#c44c31]">Good food. Good mood.</span><h2 className="mt-4 text-4xl font-black tracking-tight text-[#203d2a]">Your next pizza night starts here.</h2><p className="mx-auto mt-4 max-w-xl text-[#596556]">Choose your favourites, add them to your cart, and make tonight delicious.</p><Link href="/speisekarte" className="mt-8 inline-flex rounded-full bg-[#203d2a] px-8 py-4 font-extrabold text-white transition hover:bg-[#365d40]">Order your favourites →</Link></section>
  </main>
}