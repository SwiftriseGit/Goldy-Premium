export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5efe6] to-[#e3dac9] dark:from-[#181818] dark:to-[#232323]">
      <main className="w-full max-w-3xl flex flex-col items-center py-20 px-6 sm:px-12">
        <h1 className="text-4xl font-bold text-[#3a2c1a] dark:text-[#e3dac9] mb-6">Guest Reviews</h1>
        <p className="text-lg text-[#7c6f57] dark:text-[#b8b09c] mb-8 text-center">See what our guests say about their stay at Luxury Hotel.</p>
        <div className="flex flex-col gap-6 w-full">
          {/* Example Review */}
          <div className="bg-white/90 dark:bg-[#232323]/90 rounded-2xl shadow-lg p-6">
            <p className="text-[#3a2c1a] dark:text-[#e3dac9] mb-2">“A truly luxurious experience! The staff was attentive and the room was immaculate.”</p>
            <span className="text-[#7c6f57] dark:text-[#b8b09c] text-sm">— Alex, February 2026</span>
          </div>
        </div>
      </main>
    </div>
  );
}
