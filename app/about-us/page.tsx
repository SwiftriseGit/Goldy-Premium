import PageWrapper from "../components/PageWrapper";

export default function AboutUs() {
  return (
    <PageWrapper>
      <section className="w-full max-w-3xl bg-white dark:bg-black rounded-2xl shadow-xl p-12 mt-12">
        <h1 className="text-5xl font-bold text-[#3e2c00] mb-8 text-center font-serif">About Us</h1>
        <p className="text-xl text-[#7c6f57] text-center font-serif">
          ClassicStay Hotel has been welcoming guests since 1926, blending tradition with modern amenities. Our mission is to provide a memorable experience with personalized service and attention to detail.
        </p>
      </section>
    </PageWrapper>
  );
}
