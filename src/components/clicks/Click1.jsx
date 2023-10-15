import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Click1 = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        // padding: 20,
      },
    },
  };

  return (
    <div className="min-w-[90%]  rounded-b-lg shadow-md mx-5 bg-white px-3">
      <div className="p-2" style={{ width: "50%", height: "50%" }}>
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </div>
  );
};

export default Click1;
