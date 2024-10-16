import { NavBar } from "./NavBar";
import { ProductPage } from "./ProductPage"
import { CartPage } from "./CartPage"
import { CompletedPurchase } from "./CompletedPurchase"
import { fetchItems } from "../utils/fetchItems";

export function App({itemsArray}){

    let pageStatus = '';

    fetchItems();

    return(
        <main>
            <h1>Web store</h1>
            <NavBar/>

            {pageStatus == 'product' && <ProductPage itemsArray={itemsArray}/>}
            {pageStatus == 'cart' && <CartPage/>}
            {pageStatus == 'purchase' && <CompletedPurchase/>}
        </main>
    )
}