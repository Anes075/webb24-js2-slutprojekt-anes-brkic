//inte färdig!

import { ItemCard } from "./ItemCard"

export function ProductPage(itemsArray){

    return(
        <div>
            <h2>Produkter</h2>
            {itemsArray.map(
                ({name, price, stock}) => <ItemCard key={name} name={name} price={price} stock={stock}/>
            )}
            <ItemCard/>

        </div>
    )
}