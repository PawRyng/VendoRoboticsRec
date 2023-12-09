
import axios from "axios";
export async function loader() {
  let title = ""
  let tempData = await axios.get(import.meta.env.VITE_APP_TEMPERATURE_URL)
  .then(function (response) {
    if(response.status === 200){
        title = `Wykres Liniowy (${response.data[0].timestamp.split(" ")[0]} - ${response.data[response.data.length - 1].timestamp.split(" ")[0]})`
        return response.data
    }
  })
  .catch(function (error) {
    console.log(error);
  });

      return { tempData, title };

}