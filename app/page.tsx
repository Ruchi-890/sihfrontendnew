"use client";
import Hero from '@/components/home/hero';
import FaqSection from '@/components/home/faq_section';
import Features from "@/components/home/features"
//import BarChart from '@/components/Barchats';
import Footer from '@/components/ui/footer';
import { useEffect, useState } from 'react';

export default function Home() {

  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      const isAtBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;

      // Check if at the top or bottom of the page
      if (isAtTop || isAtBottom) {
        // Trigger the bounce effect
        setIsBouncing(true);
        
        // Remove bounce effect after a short delay
        setTimeout(() => {
          setIsBouncing(false);
        }, 500); // Match this duration with the CSS animation duration
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <main className={isBouncing ? 'bounce' : ''}>
      {/* <BarChart/> */}
        <Hero />
        <Features />
        <FaqSection />
        <Footer />
        {/* Add more sections here */}
      </main>
    </>
  );
}