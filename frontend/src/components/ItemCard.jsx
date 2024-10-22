export function ItemCard({cartCount, setCartCount, updateTotalSum, updateCartArray, shopItems, index, name, price, stock, image}){

    let tempItem;
    let tempCount = 0;

    function handleClick(){

        tempItem = {
            name: shopItems[index].name,
            price: shopItems[index].price
        }

        tempCount = cartCount + 1;

        //console.log(tempItem);
        
        updateCartArray(tempItem);
        updateTotalSum(tempItem.price);
        setCartCount(tempCount);
    }

    return(
        <div className="item-card">
            <img className="item-image" src={image}></img>
            <h3>{name}</h3>
            <h3>{price} kr</h3>
            <p>Lager: {stock}</p>
            <button onClick={handleClick}>KÖP</button>
        </div>
    )
}