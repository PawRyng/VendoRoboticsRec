import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { useLoaderData } from "react-router-dom";

//import elements
import BarChartElement from "../components/barChatElement";
import GoBackElement from "../components/goBackElement";
import TableSalesComponent from "../components/tableSalesComponent";


const BarChart = () => {
    const { salesData, title } = useLoaderData();  

  return( 
    <>
    
        <GoBackElement/>
        <div className="bar-container">
          <div className="bar-container__bar">
            {Object.keys(salesData).length > 0 && <BarChartElement data={salesData} title={title}/>}
          </div>
          <TableSalesComponent data={salesData} />
        </div>
    </>
    );
};

export default BarChart;
