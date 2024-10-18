import { ItemCard } from "./ItemCard"

export function ProductPage({shopItems}){

    return(
        <div>
            <h2>Produkter</h2>
            {shopItems.map(
                ({name, price, stock, image}) => 
                <ItemCard key={name} name={name} price={price} stock={stock} image={image}/>
            )}
        </div>
    )
}