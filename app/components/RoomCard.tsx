import Image from "next/image";

export default function RoomCard({ title, price, amenities, image, highlight }:{ title:string; price:string; amenities:string[]; image:string; highlight?:boolean }) {
  return (
    <div className={`bg-[#FEFAE0] rounded-3xl border border-[#e0e7ef] dark:border-[#333] shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 min-w-[320px] max-w-[340px] group hover:scale-105 hover:shadow-2xl hover:-rotate-x-6 hover:-rotate-y-3 hover:border-[#bfa76a] perspective-1000 ${highlight ? 'ring-4 ring-[#bfa76a] scale-105 z-10' : ''}`} style={{transformStyle:'preserve-3d'}}>
      <div className="w-full h-44 relative mb-5 rounded-2xl overflow-hidden shadow-md">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h2 className="text-xl font-extrabold mb-1 tracking-tight text-center" style={{ color: '#c0592d' }}>{title}</h2>
      <ul className="text-[#4b5563] dark:text-[#b8b09c] text-sm mb-2 list-none flex flex-col gap-1 text-center">
        {amenities.map((a, i) => <li key={i} className="before:content-['✓'] before:mr-2 before:text-[#2c5364] dark:before:text-[#bfa76a]">{a}</li>)}
      </ul>
    </div>
  );
}
