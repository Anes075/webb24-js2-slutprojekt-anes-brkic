import { ItemCard } from "./ItemCard"

export function ProductPage({ cartCount, shopItems, updateCartArray, updateTotalSum, setCartCount}) {

    //Produkt sidan visar alla varor som kort

    return (
        <div>
        <h2 className="product-h2">Produkter</h2>
        <div className="item-list">
            {shopItems.map(
                ({ name, price, stock, image, index }) =>
                    <ItemCard cartCount={cartCount} setCartCount={setCartCount} updateTotalSum={updateTotalSum} updateCartArray={updateCartArray} shopItems={shopItems} index={index} key={name} name={name} price={price} stock={stock} image={image}/>
            )}
        </div>
        </div>
    )
}