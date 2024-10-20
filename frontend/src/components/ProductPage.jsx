import { ItemCard } from "./ItemCard"

export function ProductPage({shopItems, updateCartArray, updateTotalSum}){

    return(
        <div>
            <h2>Produkter</h2>
            {shopItems.map(
                ({name, price, stock, image , index}) => 
                <ItemCard updateTotalSum={updateTotalSum} updateCartArray={updateCartArray} shopItems={shopItems} index={index} key={name} name={name} price={price} stock={stock} image={image}/>
            )}
        </div>
    )
}