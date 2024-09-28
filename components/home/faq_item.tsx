// components/ui/FaqItem.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component for optimized loading
import ArrowDown from '../../app/assets/arrow_down.svg'; // Adjust path as necessary
import ArrowUp from '../../app/assets/arrow_up.svg'; // Adjust path as necessary

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAnswer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="faq-item mb-4 p-4 border rounded-lg shadow-md transition duration-300 ease-in-out w-[800px]"> {/* Set fixed width to 600px */}
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer}>
        <span className="faq-question text-lg font-bold">{question}</span>
        <Image
          src={isVisible ? ArrowUp : ArrowDown} // Use imported ArrowUp and ArrowDown
          alt={isVisible ? 'Collapse' : 'Expand'} // Adjust alt text for accessibility
          width={24} // Specify the width
          height={24} // Specify the height
        />
      </div>
      {isVisible && <p className="faq-answer mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}
