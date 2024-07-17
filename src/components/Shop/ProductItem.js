import React from "react";
import Card from'../UI/Card';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const ProductItem=(props)=>{
    const {title,price,description,id} = props;
    const dispatch = useDispatch();
    const addItemToCartHandler=()=>{
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,

        }));
    }

    return(
        <li>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div>
                    <button onClick={addItemToCartHandler}>Add To Cart</button>
                </div>
            </Card>
        </li>
    )
}
export default ProductItem;