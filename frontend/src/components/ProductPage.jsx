import { ItemCard } from "./ItemCard"

export function ProductPage({shopItems, updateCartArray}){


    return(
        <div>
            <h2>Produkter</h2>
            {shopItems.map(
                ({name, price, stock, image , index}) => 
                <ItemCard updateCartArray={updateCartArray} shopItems={shopItems} index={index} key={name} name={name} price={price} stock={stock} image={image}/>
            )}
        </div>
    )
}