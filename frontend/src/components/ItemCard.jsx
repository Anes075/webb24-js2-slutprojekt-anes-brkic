//Kanske behöver dubbellkolla

import { ItemName } from "./ItemName"
import { ItemPrice } from "./ItemPrice"
import { ItemSupplyCount } from "./ItemSupplyCount"
import { BuyItem } from "./BuyItem"
import { ItemImage } from "./ItemImage"

export function ItemCard(){
    return(
        <div className="item-card">
            <ItemImage/>
            <ItemName/>
            <ItemPrice/>
            <ItemSupplyCount/>
            <BuyItem/>
        </div>
    )
}