import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getRandomColor, RandomColorArray } from "./RandomColor";
import { getRandomNumber, labels, RandomNumberArray } from "./GetNumber";
import { option } from "./ChartConfig";

ChartJS.register(BarElement, LinearScale, CategoryScale, Tooltip);

export default function BarChart() {
  const data = {
    labels: labels,

    datasets: [
      {
        label: "Attendance",
        data: RandomNumberArray,
        backgroundColor: RandomColorArray,

        borderColor: RandomColorArray,
        borderWidth: 1,
      },
      {
        label: "Performance",
        data: RandomNumberArray,
        backgroundColor: RandomColorArray,
        borderColor: RandomColorArray,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar height={400} data={data} options={option} />
    </div>
  );
}
