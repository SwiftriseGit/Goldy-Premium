import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32 pb-16 px-6 bg-linear-to-br from-[#f5efe6] to-[#e3dac9] dark:from-[#181818] dark:to-[#232323]">
      <Image
        src="/globe.svg"
        alt="Luxury Hotel Hero"
        width={100}
        height={100}
        className="mb-6 drop-shadow-lg"
        priority
      />
      <h1 className="text-5xl font-extrabold tracking-tight text-[#3a2c1a] dark:text-[#e3dac9] mb-4 text-center">
        Welcome to Luxury Hotel
      </h1>
      <p className="text-xl text-[#7c6f57] dark:text-[#b8b09c] text-center max-w-2xl mb-6">
        Discover elegance, comfort, and smart booking for your next unforgettable stay.
      </p>
       
    </section>
  );
}
