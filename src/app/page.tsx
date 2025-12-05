"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingModal from "@/components/BookingModal";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F9F7F2] selection:bg-latte selection:text-coffee">
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      <div id="hero">
        <HeroSection onBookClick={() => setIsModalOpen(true)} />
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

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
