import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData=()=>{
    return async (dispatch) =>{
        const fetchData=async()=>{
            const response = await fetch(`https://expense-tracker-1c231-default-rtdb.firebaseio.com/cart.json`,
                {
                    method : 'GET',
                    body : JSON.stringify(cart),
                }
            );
            if(!response.ok){
                throw new Error('Could not fetch Cart data!!')
            }
            const data = await response.json();
            return data;
        };
        try{
           const cartData = await fetchData()
           dispatch(cartActions.replaceCart(cartData))
        }
        catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!!',
                message:'Fetching cart Data Failed!'
              }))
        }
    }
}
export const sendCartData =(cart)=>{
    return async(dispatch)=>{
        dispatch(
                uiActions.showNotification({
                status:'pending',
                title:'Sending',
                message:'Sending cart Data!'
              })
        );
        
            const sendRequest = async()=>{
                const response = await fetch(`https://expense-tracker-1c231-default-rtdb.firebaseio.com/cart.json`,
                   {
                     method: 'PUT',
                     body : JSON.stringify(cart)
             
                   }
                 )
                 if(!response.ok){
                   throw new Error('Sending Cart Data is Failed.')
                 }
            };
            
            try{
                await sendRequest()
                dispatch(uiActions.showNotification({
                   status:'success',
                   title:'Success!!',
                   message:'Sending cart Data Successfully!'
                 }))
            }catch(error){
                dispatch(uiActions.showNotification({
                    status:'error',
                    title:'Error!!',
                    message:'Sending cart Data Failed!'
                  }))
            }
        }

}