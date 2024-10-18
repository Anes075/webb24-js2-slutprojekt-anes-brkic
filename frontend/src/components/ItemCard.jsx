export function ItemCard({name, price, stock, image}){

    function handleClick(event){
        console.log('click');
        console.log(event.target);
    }

    return(
        <div className="item-card">
            <img className="item-image" src={image}></img>
            <h3>{name}</h3>
            <h3>{price} kr</h3>
            <p>Lager: {stock}</p>
            <button onClick={handleClick}>KÖP</button>
        </div>
    )
}