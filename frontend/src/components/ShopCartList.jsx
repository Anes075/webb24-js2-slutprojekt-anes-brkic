export function ShopCartList({name, price}){
    return(
        <div className="shop-cart-list">
            <p>{name}: {price} kr</p>
        </div>
    )
}