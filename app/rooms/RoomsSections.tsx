import Image from "next/image";

export function RoomsHero() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 pb-12 px-6 bg-[#FEFAE0] rounded-b-[2.5rem] shadow-2xl mb-14 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Rooms Hero Background"
        fill
        className="object-cover object-center absolute brightness-60 inset-0 w-full h-full z-0 blur- "
        unoptimized
        priority
      />
      
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#732824] mb-4 text-center">Our Rooms & Suites</h1>
        <p className="text-xl text-[#ffffff] text-center max-w-2xl mb-6">Discover comfort and elegance in every stay. Choose from our range of luxury accommodations designed for relaxation and style.</p>
      </div>
    </section>
  );
}

export function RoomListingSection() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Room Listings</h2>
      <p className="text-lg text-[#7c6f57] mb-8 text-center max-w-2xl mx-auto">Explore our selection of rooms and suites, each thoughtfully designed for your comfort and convenience. Whether you seek luxury, space, or family-friendly features, we have the perfect accommodation for your stay.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Example Room Card */}
        <div className="rounded-2xl shadow-lg bg-[#FEFAE0] border-[#bfa76a] p-6 flex flex-col items-center">
          <Image
            src="https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Deluxe Room"
            width={320}
            height={160}
            className="rounded-xl mb-4 object-cover  w-full h-40"
          />
          <h3 className="text-2xl font-semibold text-[#C0582B] mb-2">Deluxe Room</h3>
          <p className="text-[#7c6f57] mb-4">A spacious room with king-size bed, city view, and modern amenities.</p>
          <button className="rounded-lg bg-[#bfa76a] px-6 py-2 text-white font-semibold shadow hover:bg-[#a68a4d] transition-colors">Explore</button>
        </div>
        <div className="rounded-2xl shadow-lg bg-[#FEFAE0] border-[#bfa76a] p-6 flex flex-col items-center">
          <Image
            src="https://images.unsplash.com/photo-1680210851458-b7dc5685e06e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Executive Suite"
            width={320}
            height={160}
            className="rounded-xl mb-4 object-cover w-full h-40"
          />
          <h3 className="text-2xl font-semibold text-[#C0582B] mb-2">Executive Suite</h3>
          <p className="text-[#7c6f57] mb-4">Enjoy extra space, a separate living area, and premium amenities for a truly luxurious stay.</p>
          <button className="rounded-lg bg-[#bfa76a] px-6 py-2 text-white font-semibold shadow hover:bg-[#a68a4d] transition-colors">Explore</button>
        </div>
        <div className="rounded-2xl shadow-lg bg-[#FEFAE0] border-[#bfa76a] p-6 flex flex-col items-center">
          <Image
            src="https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Family Suite"
            width={320}
            height={160}
            className="rounded-xl mb-4 object-cover w-full h-40"
          />
          <h3 className="text-2xl font-semibold text-[#C0582B] mb-2">Family Suite</h3>
          <p className="text-[#7c6f57] mb-4">Perfect for families, featuring multiple beds, a lounge area, and kid-friendly amenities.</p>
          <button className="rounded-lg bg-[#bfa76a] px-6 py-2 text-white font-semibold shadow hover:bg-[#a68a4d] transition-colors">Explore</button>
        </div>
      </div>
    </section>
  );
}

export function PricingTable() {
  return (
    <section className="w-full max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Pricing Table</h2>
      <p className="text-lg text-[#7c6f57] mb-8 text-center max-w-2xl mx-auto">Find the best rates for your stay. Our pricing table helps you compare room types, features, and nightly rates so you can choose the perfect option for your needs and budget.</p>
      <div className="overflow-x-auto border rounded-xl shadow">
        <table className="min-w-full bg-[#fefae0] text-[#7c6f57] rounded-xl shadow">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-[#bfa76a] text-[#C0582B] text-left rounded-tl-xl">Room Type</th>
              <th className="py-3 px-6 bg-[#bfa76a] text-[#C0582B] text-left">Price/Night</th>
              <th className="py-3 px-6 bg-[#bfa76a] text-[#C0582B] text-left rounded-tr-xl">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6">Deluxe Room</td>
              <td className="py-3 px-6">$180</td>
              <td className="py-3 px-6">King bed, City view, Free Wi-Fi</td>
            </tr>
            <tr className="bg-[#f5efe6]">
              <td className="py-3 px-6">Executive Suite</td>
              <td className="py-3 px-6">$250</td>
              <td className="py-3 px-6">Living area, Premium amenities, Breakfast included</td>
            </tr>
            <tr>
              <td className="py-3 px-6">Family Suite</td>
              <td className="py-3 px-6">$300</td>
              <td className="py-3 px-6">Multiple beds, Lounge, Kid-friendly</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function RoomDetailsSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Room Details</h2>
      <p className="text-lg text-[#7c6f57] mb-8 text-center max-w-2xl mx-auto">Get a closer look at our rooms and suites. Each space is designed to provide comfort, style, and all the amenities you need for a relaxing and memorable stay.</p>
      <div className="bg-[#fefae0] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1680210851458-b7dc5685e06e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Deluxe Room"
            width={400}
            height={224}
            className="rounded-xl mb-4 object-cover w-full h-56"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-[#C0582B] mb-2">Deluxe Room</h3>
          <p className="text-[#7c6f57] mb-4">A spacious room with king-size bed, city view, and modern amenities. Enjoy complimentary breakfast, high-speed Wi-Fi, and 24/7 room service.</p>
          <ul className="list-disc pl-5 text-[#606C38] mb-4">
            <li>King-size bed</li>
            <li>Ensuite bathroom</li>
            <li>City view</li>
            <li>Complimentary breakfast</li>
            <li>Free Wi-Fi</li>
          </ul>
          <button className="rounded-lg bg-[#bfa76a] px-6 py-2 text-white font-semibold shadow hover:bg-[#a68a4d] transition-colors">Explore</button>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Testimonials</h2>
      <p className="text-lg text-[#7c6f57] mb-8 text-center max-w-2xl mx-auto">Hear from our guests! Read real experiences and reviews from visitors who enjoyed our hospitality, comfort, and exceptional service.</p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#FEFAE0] rounded-2xl p-6 shadow flex flex-col items-center">
          <span className="text-[#C0582B] text-3xl mb-2">“</span>
          <p className="text-[#283618] text-base mb-2">The rooms were spotless and the staff was incredibly attentive. We had a wonderful stay!</p>
          <span className="text-[#606C38] text-sm">— Emily R.</span>
        </div>
        <div className="bg-[#FEFAE0] rounded-2xl p-6 shadow flex flex-col items-center">
          <span className="text-[#C0582B] text-3xl mb-2">“</span>
          <p className="text-[#283618] text-base mb-2">Beautiful decor, comfortable beds, and a fantastic breakfast. Highly recommended!</p>
          <span className="text-[#606C38] text-sm">— Daniel K.</span>
        </div>
        <div className="bg-[#FEFAE0] rounded-2xl p-6 shadow flex flex-col items-center">
          <span className="text-[#C0582B] text-3xl mb-2">“</span>
          <p className="text-[#283618] text-base mb-2">A luxurious experience from start to finish. We’ll definitely return!</p>
          <span className="text-[#606C38] text-sm">— Sophia L.</span>
        </div>
      </div>
    </section>
  );
}
