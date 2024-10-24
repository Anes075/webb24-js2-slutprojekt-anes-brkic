export function ItemCard({cartCount, setCartCount, updateTotalSum, updateCartArray, shopItems, index, name, price, stock, image }) {

    //Varje kort visar sina namn, priser, antal och en köpknapp
    //Index används för att skilja mellan korten
    let itemId;

    function handleClick() {

        if (stock > 0) {                                           //När användaren klickar på en vara vars lager är mer än 0

            shopItems[index].stock = shopItems[index].stock - 1;   //Minskas den nuvarande lagret med 1

            itemId = Math.floor(Math.random() * 100000);

            updateCartArray({name,price,itemId});                         //Namnet och priset på varan
            updateTotalSum(price);                                 //Priset på varan läggs till i en array
            setCartCount(cartCount + 1);                           //Kundvagnens innehåll ökar med 1

        }
        else{
            //console.log('no more left');
        }
    }

    return (
        <div className="item-card">
            <img className="item-image" src={image}></img>
            <h3 className="item-name">{name}</h3>
            <h3 className="item-price">{price} kr</h3>
            <p className="item-stock">Lager: {stock}</p>
            <button className="item-buy" onClick={handleClick}>KÖP</button>
        </div>
    )
}