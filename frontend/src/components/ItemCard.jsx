import { useEffect } from "react";
import { useState } from "react";

export function ItemCard({resetStock, setResetStock, cartCount, setCartCount, updateTotalSum, updateCartArray, shopItems, index, name, price, stock, image}){

    let tempItem;
    let tempCount = 0;
    let tempStock = shopItems;
    const [currentStock, setCurrentStock] = useState(shopItems);

    if(resetStock == true){
        useEffect(() => {
        
        setResetStock(false);
        }, []);
    }

    function handleClick(){

        if(tempStock[index].stock != 0){
            
            tempStock[index].stock = tempStock[index].stock - 1;
            console.log(tempStock[index].stock , shopItems[index].stock);

            tempItem = {
                name: shopItems[index].name,
                price: shopItems[index].price
            }
    
            tempCount = cartCount + 1;
    
            //console.log(tempItem);
    
            updateCartArray(tempItem);
            updateTotalSum(tempItem.price);
            setCartCount(tempCount);

           // console.log(tempStock[index].stock);
        }
        if(tempStock[index].stock == 0){
            console.log('no more left');
        }
    }

    return(
        <div className="item-card">
            <img className="item-image" src={image}></img>
            <h3>{name}</h3>
            <h3>{price} kr</h3>
            <p>Lager: {tempStock[index].stock}</p>
            <button className="buy" onClick={handleClick}>KÖP</button>
        </div>
    )
}