import React from "react";
import { useSelector } from "react-redux";
import CartItem from './CartItem';
import Card from '../UI/Card.js';

const Cart=(props)=>{
    const cartItems = useSelector(state=>state.cart.items)
    return(
        <Card>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item)=>(

            <CartItem
            key={item.id}
            item={{title:item.name,
                id:item.id,
                quantity:item.quantity,
                total:item.totalPrice,
                price:item.price}} 
            />
                ))}
            </ul>
        </Card>
    )
}
export default Cart