import { NavBar } from "./NavBar";
import { ProductPage } from "./ProductPage"
import { CartPage } from "./CartPage"
import { CompletedPurchase } from "./CompletedPurchase"

export function App(){

    let pageStatus = 'product';

    return(
        <>
            <h1>Web store</h1>
            <NavBar/>

            {pageStatus == 'product' && <ProductPage/>}
            {pageStatus == 'cart' && <CartPage/>}
            {pageStatus == 'purchase' && <CompletedPurchase/>}
        </>
    )
}