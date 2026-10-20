import { CartContext } from "@/contexts/CartContext";
import Image from "next/image";
import { useContext, useState } from "react";
export default function ProductCard({imageSrc,title,description,price,id}){
 const {addToCart}=useContext(CartContext);
 const [busy,setBusy]=useState(false);
 const [error,setError]=useState("");
 const handleAdd=async()=>{if(busy)return;setBusy(true);setError("");try{await addToCart(id)}catch(e){setError("Could not add to cart. Please try again.")}finally{setBusy(false)}};
 return <article className="flex h-full w-72 flex-col overflow-hidden rounded-3xl border border-[#ede1d0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
 <div className="relative h-48 overflow-hidden bg-[#f7eadd]">{imageSrc?<Image src={imageSrc} alt={title||"Pizza"} fill sizes="(max-width: 768px) 100vw, 288px" className="object-cover transition duration-500 hover:scale-105"/>:<div className="flex h-full items-center justify-center text-7xl">🍕</div>}</div>
 <div className="flex flex-1 flex-col p-5"><h3 className="text-xl font-extrabold text-[#203d2a]">{title}</h3><p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#687166]">{description}</p>
 <div className="mt-6 flex items-center justify-between gap-2"><span className="text-xl font-black text-[#203d2a]">{price}</span><button type="button" disabled={busy} onClick={handleAdd} className="rounded-full bg-[#d94f33] px-4 py-3 text-xs font-extrabold text-white transition hover:bg-[#b93e27] disabled:cursor-wait disabled:opacity-60">{busy?"Adding…":"+ Add to cart"}</button></div>{error&&<p role="alert" className="mt-2 text-xs text-red-700">{error}</p>}</div></article>
}