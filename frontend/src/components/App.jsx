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
    const [totalSumArray, setTotalSumArray] = useState([]);
    const [cartCount, setCartCount] = useState(0);

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
         //console.log(cartArray);
    }

    function updateTotalSum(newPrice){
        setTotalSumArray( current =>{
            currentPrice = [...current];
            currentPrice.push(newPrice);
            return currentPrice;
        })
        //console.log(totalSumArray);
    }


  // console.log(shopItems);

    return(
        <main>

            <h1>Web store</h1>
            <NavBar pageStatus={pageStatus} setPageStatus={setPageStatus} cartCount={cartCount}/>

            {pageStatus == 'product' && <ProductPage cartCount={cartCount} setCartCount={setCartCount} updateTotalSum={updateTotalSum} updateCartArray={updateCartArray} shopItems={shopItems}/>}
            {pageStatus == 'cart' && <CartPage setCartCount={setCartCount} totalSumArray={totalSumArray} cartArray={cartArray} setCartArray={setCartArray} setPageStatus={setPageStatus} setTotalSumArray={setTotalSumArray}/>}
            {pageStatus == 'purchase' && <CompletedPurchase/>}


        </main>
    )
}