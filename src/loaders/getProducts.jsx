import axios from "axios";
export async function loader() {

  let title = "";

  //pobieranie danych 
  let salesData = await axios.get(import.meta.env.VITE_APP_PRODUCTS_URL).then(function (response) {
        if(response.status === 200){
            title = `Wykres Słupkowy (${response.data[0].saleTimestamp.split(" ")[0]} - ${response.data[response.data.length - 1].saleTimestamp.split(" ")[0]})`
            return response.data
        }
      })
      .catch(function (error) {
        console.log(error);
      });;


  //formatowanie danych
  function organizeTotalPricesByDayAndProduct(data){
    const totalPricesByDayAndProduct = {};
    data.forEach((sale) => {
      const saleDate = sale.saleTimestamp.split(' ')[0];
      const productKey = sale.productName;
      if (!totalPricesByDayAndProduct[saleDate]) {
        totalPricesByDayAndProduct[saleDate] = {};
      }
  
      if (!totalPricesByDayAndProduct[saleDate][productKey] ) {
        totalPricesByDayAndProduct[saleDate][productKey] = 0;
      }
      totalPricesByDayAndProduct[saleDate][productKey] += sale.price;
    });
  
    return totalPricesByDayAndProduct;
  }
  salesData = organizeTotalPricesByDayAndProduct(salesData)

  //edycja tytułu

  return { salesData, title };
}