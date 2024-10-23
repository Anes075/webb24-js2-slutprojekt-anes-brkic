export function ItemCard({cartCount, setCartCount, updateTotalSum, updateCartArray, shopItems, index, name, price, stock, image }) {

    //Varje kort visar sina namn, priser, antal och en köpknapp
    //Index används för att skilja mellan korten


    function handleClick() {

        if (stock > 0) {                                           //När användaren klickar på en vara vars lager är mer än 0

            shopItems[index].stock = shopItems[index].stock - 1;   //Minskas den nuvarande lagret med 1

            updateCartArray({name,price});                         //Namnet och priset på varan
            updateTotalSum(price);                                 //Priset på varan läggs till i en array
            setCartCount(cartCount + 1);                           //Kundvagnens innehåll ökar med 1

        }
        else{
            console.log('no more left');
        }
    }

    return (
        <div className="item-card">
            <img className="item-image" src={image}></img>
            <h3>{name}</h3>
            <h3>{price} kr</h3>
            <p>Lager: {stock}</p>
            <button className="buy" onClick={handleClick}>KÖP</button>
        </div>
    )
}