import React from 'react';

export default function AboutPage(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center text-blue-600">
          About Our Speech Therapy Platform
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Welcome to our Speech Therapy Platform, a comprehensive solution designed to assist individuals 
          in improving their speech and language abilities. Our platform leverages the latest technologies 
          to provide personalized therapy plans, real-time communication with therapists, and interactive 
          tools for better outcomes.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-blue-600">Our Mission</h2>
        <p className="mt-4 text-gray-700">
          Our mission is to make speech therapy accessible and effective for everyone. We believe that 
          every individual deserves the opportunity to communicate clearly and confidently. Our platform 
          is designed to support therapists and patients in achieving this goal through structured therapy 
          sessions, progress tracking, and data-driven insights.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-blue-600">Why Choose Us?</h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✔️ AI-powered therapy recommendations tailored to individual needs.</li>
          <li>✔️ Secure and real-time communication with experienced therapists.</li>
          <li>✔️ Easy-to-use platform for both therapists and patients.</li>
          <li>✔️ Progress tracking and detailed reports for better insights.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-blue-600">Our Vision</h2>
        <p className="mt-4 text-gray-700">
          We envision a world where speech and language barriers no longer hold individuals back from 
          realizing their full potential. Our team is committed to constant innovation and delivering 
          tools that empower therapists and patients alike in their journey toward better communication.
        </p>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-blue-600">Meet Our Team</h3>
          <p className="mt-4 text-gray-700">
            Our team consists of experienced speech-language pathologists, software developers, and 
            researchers who are dedicated to improving speech therapy outcomes through technology.
          </p>
        </div>
      </div>
    </div>
  );
};
