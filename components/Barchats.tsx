import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sample Data",
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const, // TypeScript expects specific values, 'top' is correct here
      },
      title: {
        display: true,
        text: 'Custom Chart Example',
      },
    },
    scales: {
      x: {
        max: 100,
      },
      y: {
        max: 100,
      },
    },
  };
  

  return (
    <div style={{ maxWidth: "800px", maxHeight: "600px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default BarChart;
