import React from "react";
import CartButton from '../Cart/CartButton';
const MainHeader=()=>{
    return(
        <header>
            <h1>Redux Cart</h1>
            <nav>
                <ui>
                    <li>
                        <CartButton />
                    </li>
                </ui>
            </nav>
        </header>
    )
}
export default MainHeader;