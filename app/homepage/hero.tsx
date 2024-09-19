// /components/Hero.tsx
import ProgressJourney from '@/app/homepage/progressjourney';

export default function Hero() {
  return (
    <section className="hero flex flex-col items-center text-center p-10 bg-blue-100 min-h-[400px]">
      <div className="hero-content">
        <h1 className="text-4xl font-bold text-black">Streamline Your Speech-Language Therapy</h1>
        <p className="mt-4 text-lg text-gray-700">Experience how therapists and supervisors collaborate in real-time to offer personalized therapy sessions.</p>
        <button className="btn-demo mt-6 px-6 py-2 bg-black text-white hover:bg-gray-800 rounded-md">
          Try Therapy Simulation
        </button>
      </div>
      {/* Progress Journey Section */}
      <ProgressJourney />
    </section>
  );
}


