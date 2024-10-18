import { NavBar } from "./NavBar";
import { ProductPage } from "./ProductPage"
import { CartPage } from "./CartPage"
import { CompletedPurchase } from "./CompletedPurchase"
import { fetchItems } from "../utils/fetchItems";
import { useEffect, useState } from "react";

export function App(){

    const [shopItems, setShopitems] = useState([]);
    const [pageStatus, setPageStatus] = useState('');
    const [cartArray, setCartArray ] = useState([]);

    useEffect(()=>{
        fetchItems()
        .then((itemsListArray)=>{
            setShopitems(itemsListArray);
            setPageStatus('product');
        })
    }, []);

    function updateCartArray(newArray){
        setCartArray( current =>{
            currentArray = [...current];
            currentArray.push(newArray);
            return currentArray;
        })
        // console.log(cartArray);
    }

  // console.log(shopItems);

    return(
        <main>

            <h1>Web store</h1>
            <NavBar pageStatus={pageStatus} setPageStatus={setPageStatus}/>

            {pageStatus == 'product' && <ProductPage updateCartArray={updateCartArray} shopItems={shopItems}/>}
            {pageStatus == 'cart' && <CartPage/>}
            {pageStatus == 'purchase' && <CompletedPurchase/>}


        </main>
    )
}