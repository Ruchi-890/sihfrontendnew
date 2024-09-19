// components/ui/FaqItem.tsx
'use client';
import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleAnswer = () => {
    setIsVisible(!isVisible);
  };

  return (

    <div className="faq-item mb-4">
          <button onClick={toggleAnswer} className="faq-question text-lg font-bold">
            {question}
          </button>
          {isVisible && <p className="faq-answer mt-2 text-gray-600">{answer}</p>}
        </div>

    // <div className="faq-item border p-4 rounded-lg my-2">
    //   <div 
    //     className="faq-question flex justify-between items-center cursor-pointer" 
    //     onClick={() => setOpen(!open)}
    //   >
    //     <p className="text-lg">{question}</p>
    //     <button className="text-lg" aria-label={open ? "Collapse" : "Expand"}>
    //       {open ? '-' : '+'}
    //     </button>
    //   </div>
    //   {open && <div className="faq-answer mt-2 text-gray-600">{answer}</div>}
    // </div>
  );
}
