"use client";
import Hero from '@/components/home/hero';
import FaqSection from '@/components/home/faq_section';
import Features from "@/components/home/features"
import BarChart from '@/components/Barchats';

export default function Home() {
  return (
    <>
      <main>
      <BarChart/>
        <Hero />
        <Features />
        <FaqSection />
        {/* Add more sections here */}
      </main>
    </>
  );
}