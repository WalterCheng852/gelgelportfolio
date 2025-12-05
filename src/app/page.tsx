"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F9F7F2] selection:bg-latte selection:text-coffee">
      <Navbar />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="services" className="bg-warm-cream">
        <ServicesSection />
      </div>

      <div id="gallery" className="bg-white">
        <GallerySection />
      </div>

      <div id="booking" className="bg-[#F9F7F2]">
        <BookingSection />
      </div>

      <Footer />
    </main>
  );
}
