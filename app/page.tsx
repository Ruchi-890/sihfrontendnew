"use client";
import Image from "next/image";
import AppBar from '@/components/ui/appbar';
import Hero from '@/app/homepage/hero';
import FaqSection from '@/app/homepage/faq_section';
import Features from "./homepage/features";

export default function Home() {
  return (
    <>
      <AppBar />
      <main>
        <Hero />
        <Features />
        <FaqSection />
        {/* Add more sections here */}
      </main>
    </>
  );
}