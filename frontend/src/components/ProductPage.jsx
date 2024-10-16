//inte färdig!

import { ItemCard } from "./ItemCard"

export function ProductPage(){

    const url = "https://database-22220-default-rtdb.europe-west1.firebasedatabase.app/.json";

    async function search(){
        const response = await fetch(url);

        const json = await response.json();
        console.log(json);
    }

    search();
    
    return(
        <div>
            <h2>Produkter</h2>

            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>

        </div>
    )
}