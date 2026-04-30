import Image from "next/image";

export function AboutHero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center pt-32 pb-16 px-6 rounded-b-[2.5rem] shadow-2xl mb-14 relative overflow-hidden"
      style={{ minHeight: '400px' }}
    >
      <Image
        src="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="About Hero Background"
        fill
        className="object-cover object-center absolute inset-0 w-full h-full brightness-60 z-0"
        unoptimized
        priority
      />
       <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 text-center">About Luxury Hotel</h1>
        <p className="text-xl text-white text-center max-w-2xl mb-6">Experience the story, values, and people behind our world-class hospitality.</p>
      </div>
    </section>
  );
}

export function OurStory() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16 bg-[#FEFAE0] rounded-2xl shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
          <Image 
            src="https://images.unsplash.com/photo-1543726969-a1da85a6d334?q=80&w=1236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Story"
            width={400}
            height={320}
            className="rounded-2xl shadow-xl object-cover w-full max-w-xs md:max-w-sm"
            unoptimized
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Our Story</h2>
          <p className="text-lg text-[#283618] mb-2">Founded in 2026, Luxury Hotel was born from a passion for creating unforgettable experiences. Our journey began with a vision to blend timeless elegance with modern comfort, offering guests a sanctuary of relaxation and sophistication.</p>
          <p className="text-[#606C38]">From our humble beginnings to becoming a premier destination, our commitment to excellence and personalized service remains at the heart of everything we do.</p>
        </div>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
      <div className="bg-[#FEFAE0] rounded-2xl p-8 shadow">
        <h3 className="text-2xl font-bold text-[#C0582B] mb-2">Our Mission</h3>
        <p className="text-[#283618]">To deliver exceptional hospitality and create memorable stays for every guest, every time.</p>
      </div>
      <div className="bg-[#FEFAE0] rounded-2xl p-8 shadow">
        <h3 className="text-2xl font-bold text-[#C0582B] mb-2">Our Vision</h3>
        <p className="text-[#283618]">To be recognized as the leading luxury hotel, renowned for innovation, comfort, and heartfelt service.</p>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: "★",
            title: "Prime Location",
            desc: "Located in the heart of the city, offering easy access to top attractions and business hubs."
          },
          {
            icon: "★",
            title: "Personalized Service",
            desc: "Award-winning staff dedicated to making every stay unique and memorable."
          },
          {
            icon: "★",
            title: "Elegant Rooms & Suites",
            desc: "Modern amenities and luxurious comfort in every room and suite."
          },
          {
            icon: "★",
            title: "Exquisite Dining & Events",
            desc: "Gourmet cuisine and versatile event spaces for every occasion."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#FEFAE0] rounded-3xl border border-[#e0e7ef] shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 group hover:scale-105 hover:shadow-2xl hover:border-[#C0582B] hover:-rotate-x-3 hover:-rotate-y-1 perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="text-[#C0582B] text-4xl mb-3">{item.icon}</span>
            <span className="font-bold text-xl mb-2 text-[#C0582B]">{item.title}</span>
            <span className="text-[#606C38] text-base">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FacilitiesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Facilities</h2>
      <p className="text-lg text-[#283618] mb-8 max-w-3xl mx-auto text-center">
        Discover a range of premium facilities designed to enhance your stay. Whether you seek relaxation, wellness, or gourmet dining, our amenities provide the perfect blend of luxury and comfort for every guest.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Facility Card Example */}
        {[
          {
            img: "https://plus.unsplash.com/premium_photo-1687960116574-782d09070294?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Infinity Pool",
            desc: "Relax and unwind in our rooftop pool with city views."
          },
          {
            img: "https://images.unsplash.com/photo-1666813721996-42956e40788e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Luxury Spa",
            desc: "Indulge in rejuvenating treatments and massages."
          },
          {
            img: "https://plus.unsplash.com/premium_photo-1745341291467-8ee6065db258?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Gourmet Restaurant",
            desc: "Savor world-class cuisine in an elegant setting."
          },
          {
            img: "https://images.unsplash.com/photo-1542766788-a2f588f447ee?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Fitness Center",
            desc: "Stay active with state-of-the-art equipment and personal trainers."
          },
          {
            img: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Conference Hall",
            desc: "Host meetings and events in our fully equipped conference spaces."
          },
          {
            img: "https://plus.unsplash.com/premium_photo-1661962858430-6ff53091ec44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Valet Parking",
            desc: "Enjoy secure and convenient valet parking for all guests."
          }
        ].map((facility, i) => (
          <div
            key={i}
            className="bg-[#FEFAE0] rounded-3xl border border-[#e0e7ef] shadow-xl p-6 flex flex-col items-center transition-transform duration-300 group hover:scale-105 hover:shadow-2xl hover:border-[#C0582B] hover:-rotate-x-3 hover:-rotate-y-1 perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image src={facility.img} alt={facility.title} width={120} height={90} className="rounded-2xl mb-4 object-cover w-full h-28 shadow-lg group-hover:scale-105 transition-transform duration-300" unoptimized />
            <span className="font-bold text-xl mb-2 text-[#C0582B] text-center">{facility.title}</span>
            <span className="text-[#606C38] text-base text-center">{facility.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Meet Our Team</h2>
      <p className="text-lg text-[#283618] mb-8 max-w-3xl mx-auto text-center">
        Our dedicated team is the heart of Luxury Hotel. Each member brings a wealth of experience, passion, and a commitment to making your stay exceptional. From warm welcomes at the front desk to culinary masterpieces in our kitchen, our staff works together to create a seamless and memorable experience for every guest.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            img: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Alex Morgan",
            role: "General Manager"
          },
          {
            img: "https://plus.unsplash.com/premium_photo-1690296204289-14e517830d8e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Priya Singh",
            role: "Head Chef"
          },
          {
            img: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Liam Chen",
            role: "Guest Relations"
          }
        ].map((member, i) => (
          <div
            key={i}
            className="bg-[#FEFAE0] rounded-3xl border border-[#e0e7ef] shadow-xl p-6 flex flex-col items-center transition-transform duration-300 group hover:scale-105 hover:shadow-2xl hover:border-[#C0582B] hover:-rotate-x-3 hover:-rotate-y-1 perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image src={member.img} alt={member.name} width={100} height={100} className="rounded-full mb-4 object-cover w-24 h-24 shadow-lg group-hover:scale-105 transition-transform duration-300" unoptimized />
            <span className="font-bold text-xl mb-2 text-[#C0582B] text-center">{member.name}</span>
            <span className="text-[#606C38] text-base text-center">{member.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[#C0582B] mb-4">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#FEFAE0] rounded-2xl p-6 shadow flex flex-col items-center">
          <span className="text-[#C0582B] text-3xl mb-2">“</span>
          <p className="text-[#283618] text-base mb-2">The staff went above and beyond to make our stay special. Highly recommended! The attention to detail and warm hospitality made us feel truly valued. We will cherish the memories made here and look forward to returning soon.</p>
          <span className="text-[#606C38] text-sm">— Emily R.</span>
        </div>
        <div className="bg-[#FEFAE0] rounded-2xl p-6 shadow flex flex-col items-center">
          <span className="text-[#C0582B] text-3xl mb-2">“</span>
          <p className="text-[#283618] text-base mb-2">Beautiful rooms, delicious food, and a perfect location. We’ll be back! Every aspect of our stay exceeded expectations, from the luxurious bedding to the gourmet dining. The team made us feel like VIPs every day.</p>
          <span className="text-[#606C38] text-sm">— Daniel K.</span>
        </div>
        <div className="bg-[#FEFAE0] rounded-2xl p-6 shadow flex flex-col items-center">
          <span className="text-[#C0582B] text-3xl mb-2">“</span>
          <p className="text-[#283618] text-base mb-2">A truly luxurious experience from start to finish. Five stars! The spa, the pool, and the attentive service made our anniversary unforgettable. Thank you for making every moment so special.</p>
          <span className="text-[#606C38] text-sm">— Sophia L.</span>
        </div>
      </div>
    </section>
  );
}
