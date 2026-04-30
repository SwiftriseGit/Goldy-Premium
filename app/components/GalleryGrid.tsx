import Image from "next/image";

export default function GalleryGrid({ images }:{ images:{src:string; alt:string;}[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-3xl border border-[#e0e7ef]    hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br from-white via-[#f3f4f6] to-[#e0e7ef] dark:from-[#232323] dark:via-[#232323] dark:to-[#1a1a1a] hover:-rotate-x-6 hover:-rotate-y-3 perspective-1000"
          style={{transformStyle:'preserve-3d'}}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={320}
            height={220}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            className="object-cover w-full h-44 group-hover:scale-110 transition-transform duration-300 rounded-3xl"
          />
          <div className="absolute inset-0   opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center rounded-3xl">
            <span className="text-white text-base font-bold mb-4 px-4 py-1   rounded-full">{img.alt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
