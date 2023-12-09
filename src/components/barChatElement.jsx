import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";




defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


const BarChartElement = ({data, title}) => {

  return(
        <Bar
        data={{
          labels: Object.entries(data).map(([date, products]) => date),
          datasets: [
            {
              label: "chocolate_1",
              data: Object.entries(data).map(([date, products]) => products.chocolate_1),
              backgroundColor: [
                "rgba(43, 255, 229, 0.8)",
                "rgba(250, 255, 19, 0.8)",
                "rgba(253, 255, 135, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "chocolate_2",
              data: Object.entries(data).map(([date, products]) => products.chocolate_2),
              backgroundColor: [
                "rgba(43, 255, 229, 0.8)",
                "rgba(250, 255, 19, 0.8)",
                "rgba(253, 255, 135, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "chocolate_3",
              data: Object.entries(data).map(([date, products]) => products.chocolate_3),
              backgroundColor: [
                "rgba(43, 255, 229, 0.8)",
                "rgba(250, 255, 19, 0.8)",
                "rgba(253, 255, 135, 0.8)",
              ],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: title,
            },
          },
        }}
        />)
    ;
};

export default BarChartElement;
