import React from "react";






const TableSalesComponent = ({data}) => {
  return(
    <table>
        <thead>
            <tr>
                <td>Dzień</td>
                <td>chocolate_1</td>
                <td>chocolate_2</td>
                <td>chocolate_3</td>
            </tr>
            {Object.entries(data).map(([date, products]) => 
                (
                    <tr>
                        <td>{date}</td>
                        <td>{products.chocolate_1 != undefined ? products.chocolate_1 : 0}</td>
                        <td>{products.chocolate_2 != undefined ? products.chocolate_2 : 0}</td>
                        <td>{products.chocolate_3 != undefined ? products.chocolate_3 : 0}</td>
                    </tr> 
                )
            )}
        </thead>
        {}

    </table>
    )
    ;
};

export default TableSalesComponent;
