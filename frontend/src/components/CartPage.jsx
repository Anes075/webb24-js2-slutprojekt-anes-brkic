import { ShopCartList } from "./ShopCartList";
import { TotalPrice } from "./TotalPrice";
import { Purchase } from './Purchase';
import { Reset } from "./Reset";

export function CartPage({ setCartCount, cartArray, totalSumArray, setCartArray, setPageStatus, setTotalSumArray, shopItems, updateStock = { updateStock } }) {

    let totalSum = 0;                                           //totalSum återställs till 0 varje gång product page renderas  

    for (let i = 0; i < totalSumArray.length; i++) {
        totalSum += totalSumArray[i];                           //totalSum adderar ihop alla priser till en total summa
    }

    return (
        <div>
            <h2>Cart Page</h2>
            {cartArray.map(
                ({ name, price }) =>
                    <ShopCartList name={name} price={price} />
            )}
            <TotalPrice totalSum={totalSum} />

            <div>
                <Purchase setCartCount={setCartCount} setTotalSumArray={setTotalSumArray} setCartArray={setCartArray} setPageStatus={setPageStatus} totalSum={totalSum} shopItems={shopItems} updateStock={updateStock} />
                <Reset    setCartCount={setCartCount} setTotalSumArray={setTotalSumArray} setCartArray={setCartArray} setPageStatus={setPageStatus} totalSum={totalSum}/>
            </div>

        </div>
    )
}