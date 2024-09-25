'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  // registerables
} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import React from "react";
// ChartJS.register(...registerables);


// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the data type for the dataset
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
}

// Define the options type for the chart
interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      position: 'top';
    };
    title: {
      display: boolean;
      text: string;
    };
  };
  scales: {
    x: {
      type: 'category'; // Register x-axis scale as 'category'
      min?: number;
      max?: number;
    };
    y: {
      min?: number;
      max?: number;
    };
  };
}

const LineChart: React.FC = () => {
  const data: ChartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sample Data",
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Data',
      },
    },
    scales: {
      x: {
        type: 'category', // Important: Define the x scale type as 'category'
      },
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
