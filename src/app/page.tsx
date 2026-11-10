"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsCounter from "@/components/StatsCounter";
import Solutions from "@/components/Solutions";
import TaxCalculator from "@/components/TaxCalculator";
import Segments from "@/components/Segments";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Sticky Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Trust Segments Bar */}
      <TrustBar />

      {/* Key Numbers / Stats Counter */}
      <StatsCounter />

      {/* Solutions Cards */}
      <Solutions onOpenModal={handleOpenModal} />

      {/* Interactive Tax Credit Calculator */}
      <TaxCalculator />

      {/* Industry Segments Detail */}
      <Segments onOpenModal={handleOpenModal} />

      {/* 5-Step Process Timeline */}
      <ProcessTimeline />

      {/* Differentials & Comparison Table */}
      <WhyUs />

      {/* Verified Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Final Conversion CTA Banner */}
      <CtaBanner onOpenModal={handleOpenModal} />

      {/* Footer with Legal Disclaimers */}
      <Footer />

      {/* Lead Generation Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />
    </main>
  );
}

