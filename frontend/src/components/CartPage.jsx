import { ShopCartList } from "./ShopCartList";
import { TotalPrice } from "./TotalPrice";

export function CartPage({cartArray}){
    return(
        <div>
        <h2>Cart Page</h2>
        <ShopCartList/>
        <TotalPrice/>
        </div>
    )
}