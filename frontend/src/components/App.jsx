import { NavBar } from "./NavBar";
import { ProductPage } from "./ProductPage"
import { CartPage } from "./CartPage"
import { CompletedPurchase } from "./CompletedPurchase"
import { fetchItems } from "../utils/fetchItems";
import { useEffect, useState } from "react";

export function App() {

    const [shopItems, setShopitems] = useState([]);         //Lista på alla varor
    const [pageStatus, setPageStatus] = useState('');       //Status på sidan: product, cart eller purchase
    const [cartArray, setCartArray] = useState([]);         //Listar användarens kundvagn
    const [totalSumArray, setTotalSumArray] = useState([]); //Listar varornas pris som adderas ihop på Product Page
    const [cartCount, setCartCount] = useState(0);          //Visar hur många varor som användaren har i sin kundvagn

    const url = "https://database-22220-default-rtdb.europe-west1.firebasedatabase.app/.json";

    const header = {
        "Content-type": "application/json; charset=UTF-8"
    }

    useEffect(() => {
        fetchItems()                                        //Hämtar listan på varor från Firebase
            .then((itemsListArray) => {                     //och sätter hemsidans status till 'product'
                setShopitems(itemsListArray);
                setPageStatus('product');
            })
    }, []);

    function updateCartArray(newArray) {                    //Funktion som lägger till en vara i kundvagnen
        setCartArray(current => {
            currentArray = [...current];
            currentArray.push(newArray);
            return currentArray;
        })
        //console.log(cartArray);
    }

    function updateTotalSum(newPrice) {                     //Funktion som lägger alla varors priser i en array
        setTotalSumArray(current => {                       //Dessa priser adderas ihop till en totalsumma i Product page
            currentPrice = [...current];
            currentPrice.push(newPrice);
            return currentPrice;
        })
        //console.log(totalSumArray);
    }

    async function updateStock(newStock) {                  //Funktionen uppdaterar Firebase basen med den återstående
        const options = {                                   //lagret som finns kvar på sidan
            method: "PUT",
            body: JSON.stringify(newStock),
            headers: header
        }
        const response = await fetch(url, options);
    }

    return (
        <main>

            <h1 className="page-title">Web store</h1>
            <NavBar pageStatus={pageStatus} setPageStatus={setPageStatus} cartCount={cartCount} />

            {pageStatus == 'product' && <ProductPage cartCount={cartCount} setCartCount={setCartCount} updateTotalSum={updateTotalSum} updateCartArray={updateCartArray} shopItems={shopItems}/>}
            {pageStatus == 'cart' && <CartPage setCartCount={setCartCount} totalSumArray={totalSumArray} cartArray={cartArray} setCartArray={setCartArray} setPageStatus={setPageStatus} setTotalSumArray={setTotalSumArray} shopItems={shopItems} updateStock={updateStock}/>}
            {pageStatus == 'purchase' && <CompletedPurchase />}


        </main>
    )
}