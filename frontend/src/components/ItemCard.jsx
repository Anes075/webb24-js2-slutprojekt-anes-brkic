//Kanske behöver dubbellkolla

export function ItemCard(name, price, stock){
    return(
        <div className="item-card">
            {/*<img src={image}></img>*/}
            <h3>{name}</h3>
            <h3>{price}</h3>
            <p>{stock}</p>
            <button>KÖP</button>
        </div>
    )
}