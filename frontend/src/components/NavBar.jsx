//inte färdig!
export function NavBar({ pageStatus, setPageStatus }) {

    //Navigeringsfält med 2 knapper, när man klickar på en
    //av dem ska den leda användaren til vald sida

    function handleProductClick() {
        if (pageStatus == 'cart') {
            setPageStatus('product');
        }
    }

    function handleCartClick() {
        if (pageStatus == 'product') {
            setPageStatus('cart');
        }
    }

    return (

        <div className="nav-bar">
            <button className="nav-bar-btn" onClick={handleProductClick}>Produkter</button>
            <button className="nav-bar-btn" onClick={handleCartClick}>Kundvagn</button>

            {/*<p className="shop-cart-counter">5</p>*/}
        </div>

    )
}