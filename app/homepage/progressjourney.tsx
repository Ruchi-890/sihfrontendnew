import Image from 'next/image';

// Images (adjust paths as necessary)
import diagnosisImg from '../../app/assets/diagnosis.png';
import psychologyImg from '../../app/assets/psychology.png';
import barChartImg from '../../app/assets/bar-chart.png';
// import VideoPlayer from './videoplayer';

export default function ProgressJourney() {
  return (
    <section className="progress-journey flex justify-around mt-10 w-full bg-blue-100 py-10 relative overflow-hidden">
      {/* Background bubbles for design */}
      <div className="absolute w-40 h-40 bg-blue-200 rounded-full opacity-50 -top-10 -left-10"></div>
      <div className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-40 -bottom-10 right-20"></div>
      <div className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-40 top-20 right-10"></div>

      <div className="step text-center relative">
        <div className="mb-2"> {/* Adjust this margin as needed */}
          <Image src={diagnosisImg} alt="Initial Diagnosis" width={80} height={80} className="relative left-4" />
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Initial Diagnosis</p>
      </div>

      <div className="step text-center relative">
        <div className="mb-2"> {/* Adjust this margin as needed */}
          <Image src={psychologyImg} alt="Personalized Therapy" width={80} height={80} className="relative left-4" />
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Personalized Therapy</p>
      </div>

      <div className="step text-center relative">
        <div className="mb-2"> {/* Adjust this margin as needed */}
          <Image src={barChartImg} alt="Improvement Progress" width={80} height={80} className="relative left-4" />
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Improvement Progress</p>
      </div>

      {/* <VideoPlayer 
        src="../../app/assets/SIHproject.mp4" 
        poster="../../app/assets/thumbnail_homepage_video.jpg"
      /> */}
    </section>
  );
}
