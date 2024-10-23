export function ShopCartList({ name, price }) {

    //Visar en lista på alla varor som finns i kundvagnen

    //Listan innehåller namn och pris för varje vara

    return (
        <div className="shop-cart-list">
            <p>{name}: {price} kr</p>
        </div>
    )
}