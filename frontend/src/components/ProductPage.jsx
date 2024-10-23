import { ItemCard } from "./ItemCard"

export function ProductPage({cartCount, shopItems, updateCartArray, updateTotalSum, setCartCount, resetStock, setResetStock}){
    return(
        <div>
            <h2>Produkter</h2>
            {shopItems.map(
                ({name, price, stock, image , index}) => 
                <ItemCard cartCount={cartCount} setCartCount={setCartCount} updateTotalSum={updateTotalSum} updateCartArray={updateCartArray} shopItems={shopItems} index={index} key={name} name={name} price={price} stock={stock} image={image} resetStock={resetStock} setResetStock={setResetStock}/>
            )}
        </div>
    )
}