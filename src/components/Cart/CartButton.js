import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {uiActions} from "../../store/ui-slice";
const CartButton=()=>{
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state=>state.cart.totalQuantity)

    const toggleCarthandler=()=>{
        dispatch(uiActions.toggle())
    }
    return(
        <button onClick={toggleCarthandler}>
            <span>My Cart</span>
            <span>{totalQuantity}</span>
        </button>
    )
}
export default CartButton;