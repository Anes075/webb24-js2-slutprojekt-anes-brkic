export function Purchase({setCartCount, setCartArray, setPageStatus, setTotalSumArray, totalSum, shopItems, updateStock}){

    function handleClick(){
        if(totalSum != 0){
        setCartArray([]);
        setPageStatus('purchase');
        setTotalSumArray([]);
        setCartCount(0);
      //console.log(shopItems);
        updateStock(shopItems);
        }
    }
    return(
        <button onClick={handleClick}>BETALA</button>
    )
}