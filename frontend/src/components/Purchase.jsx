export function Purchase({ setCartCount, setCartArray, setPageStatus, setTotalSumArray, totalSum, shopItems, updateStock }) {

    //Återställer kundvagnen, totalsumman och kundvagnen
    //Visar statuset 'purchase' vilket renderar purchase sidan

    //Sidan skickar en PUT request till Firebase där databasen uppdateras
    //med allt lager som återstår efter att användaren har köpt sina varor

    //Användaren måste ha något i sin kundvagn innan dem kan köpa

    function handleClick() {
        if (totalSum != 0) {
            setCartArray([]);
            setPageStatus('purchase');
            setTotalSumArray([]);
            setCartCount(0);
            updateStock(shopItems);
        }
    }
    return (
        <button className="cart-purchase" onClick={handleClick}>BETALA</button>
    )
}