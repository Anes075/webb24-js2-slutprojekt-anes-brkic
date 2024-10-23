import { ShopCartList } from "./ShopCartList";
import { TotalPrice } from "./TotalPrice";
import { Purchase } from './Purchase';
import { CartReset } from "./CartReset";
import { useState } from "react";

export function CartPage({setCartCount, cartArray, totalSumArray, setCartArray, setPageStatus, setTotalSumArray, setResetStock, shopItems, updateStock={updateStock}}){

    const [resetTotal, setResetTotal] = useState(0);
    let totalSum = resetTotal;
    

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

        <div>
        <Purchase  setCartCount={setCartCount} setTotalSumArray={setTotalSumArray} setCartArray={setCartArray} setPageStatus={setPageStatus} totalSum={totalSum} shopItems={shopItems} updateStock={updateStock}/>
        <CartReset setCartCount={setCartCount} setTotalSumArray={setTotalSumArray} setCartArray={setCartArray} setPageStatus={setPageStatus} totalSum={totalSum} setResetStock={setResetStock}/>
        </div>

        </div>
    )
}