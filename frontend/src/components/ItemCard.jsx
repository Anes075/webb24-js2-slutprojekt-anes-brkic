export function ItemCard({updateTotalSum, updateCartArray, shopItems, index, name, price, stock, image}){

    let tempItem;

    function handleClick(){

        tempItem = {
            name: shopItems[index].name,
            price: shopItems[index].price
        }

        //console.log(tempItem);
        
        updateCartArray(tempItem);
        updateTotalSum(tempItem.price);
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