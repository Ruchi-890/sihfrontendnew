// /components/Hero.tsx
import ProgressJourney from '@/components/home/progressjourney';


export default function Hero() {
  return (
    <section className="hero flex flex-col items-center text-center p-10 bg-blue-100 pt-28"> {/* Adjusted padding-top */}
      <div className="hero-content w-full max-w-6xl">
        {/* Flex container for the heading and account image */}
        <div className="flex items-center justify-between">
          {/* Main Heading in the center */}
          <h1 className="text-4xl font-bold text-black flex-grow text-center">
            Streamline Your Speech-Language Therapy
          </h1>
        </div>

        <p className="mt-4 text-lg text-gray-700">
          Experience how therapists and supervisors collaborate in real-time to offer personalized therapy sessions.
        </p>
        <button className="btn-demo mt-6 px-6 py-2 bg-black text-white hover:bg-gray-800 rounded-md">
          Try Therapy Simulation
        </button>
      </div>
      {/* Progress Journey Section */}
      <ProgressJourney />
    </section>
  );
}



