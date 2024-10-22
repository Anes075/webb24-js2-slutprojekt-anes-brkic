export function Purchase({setCartCount, setCartArray, setPageStatus, setTotalSumArray}){

    function handleClick(){
        setCartArray([]);
        setPageStatus('purchase');
        setTotalSumArray([]);
        setCartCount(0);
    }
    return(
        <button onClick={handleClick}>BETALA</button>
    )
}