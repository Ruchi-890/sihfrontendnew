// components/FaqSection.tsx
import FaqItem from '@/app/homepage/faq_item'; // Ensure this path is correct

export default function FaqSection() {
  return (
    <section className="faq-section p-10">
      <h2 className="text-2xl font-bold mb-6">FAQs</h2>
      <FaqItem question="What is TherapyPro?" answer="TherapyPro is an online mental health platform." />
      <FaqItem question="How can I get started?" answer="Simply sign up and begin your journey." />
      <FaqItem question="Is TherapyPro free?" answer="We offer both free and premium plans to suit your needs." />
      <FaqItem question="Can I cancel my subscription?" answer="Yes, you can cancel your subscription anytime from your account settings." />
      {/* Add more FAQ items as needed */}
    </section>
  );
}
