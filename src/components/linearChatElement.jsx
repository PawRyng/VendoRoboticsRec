import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";





defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


const LinearChartElement = ({data, title}) => {
  return(
    <Line
    data={{
      labels: data.map((data) => data.timestamp),
      datasets: [
        {
          label: "Temperatura",
          data: data.map((data) => data.temperature),
          backgroundColor: "#064FF0",
          borderColor: "#064FF0",
        }
      ],
    }}
    options={{
      elements: {
        line: {
          tension: 0,
        },
      },
      plugins: {
        title: {
          text: title,
        },
      },
    }}
  />)
    ;
};

export default LinearChartElement;
