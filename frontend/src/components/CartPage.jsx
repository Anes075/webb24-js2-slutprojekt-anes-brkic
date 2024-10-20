import { ShopCartList } from "./ShopCartList";
import { TotalPrice } from "./TotalPrice";

export function CartPage({cartArray, totalSumArray}){

    let totalSum = 0;

    for(let i = 0; i< totalSumArray.length; i++){
        totalSum += totalSumArray[i];
    }

    return(
        <div>
        <h2>Cart Page</h2>
        {cartArray.map(
            ({name, price}) =>
            <ShopCartList name={name} price={price}/>
        )}
        <TotalPrice totalSum={totalSum}/>
        </div>
    )
}