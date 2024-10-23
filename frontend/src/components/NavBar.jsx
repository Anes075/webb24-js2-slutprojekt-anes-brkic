export function NavBar({ pageStatus, setPageStatus, cartCount }) {

    //Navigeringsfält med 2 knapper, när man klickar på en
    //av dem ska den leda användaren til vald sida

    function handleProductClick() {
        if (pageStatus == 'cart' || pageStatus == 'purchase') { 
            setPageStatus('product');                               //Sätter sidans status till 'product'
        }
    }

    function handleCartClick() {
        if (pageStatus == 'product' || pageStatus == 'purchase') {
            setPageStatus('cart');                                  //Sätter sidans status till 'Cart'
        }
    }

    return (

        <div className="nav-bar">
            <button className="nav-bar-btn" onClick={handleProductClick}>Produkter</button>
            <button className="nav-bar-btn" onClick={handleCartClick}>Kundvagn<p className="shop-cart-counter">{cartCount}</p></button>
        </div>

    )
}