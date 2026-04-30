"use client";
import HeroSection from "../components/Contact/HeroSection";
import ContactInfoAndForm from "../components/Contact/ContactInfoAndForm";
import MapSection from "../components/Contact/MapSection";
import QuickCTA from "../components/Contact/QuickCTA";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <HeroSection />
      <ContactInfoAndForm />
      <MapSection />
      <QuickCTA />
    </div>
  );
}
