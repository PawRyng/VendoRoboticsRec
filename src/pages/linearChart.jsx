import { useLoaderData } from "react-router-dom";


import LinearChartElement from "../components/linearChatElement";
import GoBackElement from "../components/goBackElement"

const LinearChart = () => {
    const { tempData, title } = useLoaderData();
    return (
      <>
        <GoBackElement/>
        <main className="linear-chart-container">
          {tempData.length > 0 && <LinearChartElement data={tempData} title={title}/>}
        </main>
      </>
    );
  };
  
export default LinearChart;
