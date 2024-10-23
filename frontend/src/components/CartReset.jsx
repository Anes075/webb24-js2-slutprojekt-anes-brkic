export function CartReset({setCartCount, setCartArray, setPageStatus, setTotalSumArray, totalSum, setResetStock}){

    function handleClick(){
        if(totalSum != 0){
        setResetStock(true);
        setCartArray([]);
        setPageStatus('product');
        setTotalSumArray([]);
        setCartCount(0);
        }
    }
    return(
        <button onClick={handleClick}>TÖM</button>
    )
}