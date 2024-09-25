'use client';
import { Line } from 'react-chartjs-2';

// Define the types for milestones and progress data
interface Milestone {
  id: number;
  description: string;
}

interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
}

interface ProgressData {
  labels: string[];
  datasets: Dataset[];
  milestones: Milestone[];
}

export default function PatientProgressTracking({ progressData }: { progressData: ProgressData }) {
  // Extracting labels and datasets for the Line chart
  const chartData = {
    labels: progressData.labels,
    datasets: progressData.datasets,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
      <h3 className="text-lg font-semibold mb-4">Patient Progress Tracking</h3>

      {/* Progress Chart */}
      <div className="mb-6">
        <h4 className="text-md mb-2">Progress Chart</h4>
        <Line data={chartData} />
      </div>

      {/* Milestones Achieved */}
      <div>
        <h4 className="text-md font-semibold mb-2">Milestones & Achievements</h4>
        <ul className="list-disc pl-5">
          {progressData.milestones.map((milestone: Milestone) => (
            <li key={milestone.id} className="text-gray-600">
              {milestone.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
