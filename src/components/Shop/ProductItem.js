import React from "react";
import Card from'../UI/Card';
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem=(props)=>{
    const {title,price,description,id} = props;
    // const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();

    const addItemToCartHandler=()=>{
        // const newTotalQuantity = cart.totalQuantity + 1;
        // const updatedItems = cart.items.slice();//create a copy via slice to avoid mutations
        // const existingItem = updatedItems.find(item=>item.id === id);
        // if(existingItem){
        //     const updatedItem ={...existingItem};
        //     updatedItem.quantity++;
        //     updatedItem.price += price;
        //     const existingItemIndex = updatedItems.findIndex((item)=>item.id === id);
        //     updatedItem[existingItemIndex] = updatedItem;
        // }else{
        //     updatedItems.push({
        //         id:id,
        //         price:price,
        //         quantity:1,
        //         totalPrice:price,
        //         name:title,
        //     })
        // }
        // const newCart = {
        //     totalQuantity: newTotalQuantity,
        //     items: updatedItems
        // }
        // dispatch(cartActions.replaceCart(newCart));
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