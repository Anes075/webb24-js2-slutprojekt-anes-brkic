export function CartReset({setCartCount, setCartArray, setPageStatus, setTotalSumArray}){

    function handleClick(){
        setCartArray([]);
        setPageStatus('product');
        setTotalSumArray([]);
        setCartCount(0);
    }
    return(
        <button onClick={handleClick}>TÖM</button>
    )
}