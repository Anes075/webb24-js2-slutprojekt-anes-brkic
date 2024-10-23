export function Reset({totalSum}) {

    //Sidan laddas om
    //Användaren måste ha något i sin kundvagn

    function handleClick() {
        if (totalSum > 0) {
           // setCartArray([]);
           // setPageStatus('product');
           // setTotalSumArray([]);
           // setCartCount(0);
            window.location.reload();
        }
    }
    return (
        <button onClick={handleClick}>TÖM</button>
    )
}

//  setCartCount, setCartArray, setPageStatus, setTotalSumArray, 