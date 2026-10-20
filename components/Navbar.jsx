import { useContext, useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiFullPizza } from "react-icons/gi";
import { CartContext } from "@/contexts/CartContext";

export default function Navbar() {
  const { getItemCount, showCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const links = [{href:"/",label:"Home"},{href:"/speisekarte",label:"Menu"},{href:"/contact",label:"Contact"}];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadcc9] bg-[#fffaf1]/95 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tight text-[#203d2a]" onClick={()=>setOpen(false)}><GiFullPizza className="text-[#d94f33]" size={33}/> FORNO<span className="text-[#d94f33]">.</span></Link>
        <div className="hidden items-center gap-9 md:flex">{links.map(link=><Link key={link.href} href={link.href} className="text-sm font-bold uppercase tracking-wider text-[#344535] transition hover:text-[#d94f33]">{link.label}</Link>)}</div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={showCart} aria-label={`Open cart with ${getItemCount()} items`} className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#e3d4bd] bg-white text-[#203d2a] transition hover:border-[#d94f33] hover:text-[#d94f33]"><AiOutlineShoppingCart size={23}/><span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d94f33] px-1 text-xs font-bold text-white">{getItemCount()}</span></button>
          <button type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)} className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border border-[#e3d4bd] md:hidden"><span className="h-0.5 w-5 bg-[#203d2a]"/><span className="h-0.5 w-5 bg-[#203d2a]"/><span className="h-0.5 w-5 bg-[#203d2a]"/></button>
        </div>
      </nav>
      {open && <div className="border-t border-[#eadcc9] bg-[#fffaf1] p-5 md:hidden">{links.map(link=><Link key={link.href} href={link.href} onClick={()=>setOpen(false)} className="block rounded-xl px-4 py-3 font-semibold text-[#203d2a] hover:bg-[#f5ebd9]">{link.label}</Link>)}</div>}
    </header>
  );
}