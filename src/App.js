import { Fragment, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import './App.css';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart'
import Products from './components/Shop/Products'
import Notifications from './components/UI/Notifications';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state=>state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart);
  const notification = useSelector(state=>state.ui.notification)

  useEffect(()=>{
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'Sending',
      message:'Sending cart Data!'
    }))
    const sendCartData =async ()=>{
     const response = await fetch(`https://expense-tracker-1c231-default-rtdb.firebaseio.com/cart.json`,
        {
          method: 'PUT',
          body : JSON.stringify(cart)
  
        }
      )
      if(!response.ok){
        throw new Error('Sending Cart Data is Failed.')
      }
      const responseData = await response.json();
      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!!',
        message:'Sending cart Data Successfully!'
      }))
    }
    if(isInitial){
      isInitial = false;
      return;
    }
    sendCartData().catch((error)=>{
      dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!!',
        message:'Sending cart Data Failed!'
      }))
    })
  },[cart,dispatch])
  return (
    <Fragment>
      {notification && <Notifications status={notification.status} title={notification.title} message={notification.message}/>}
   <Layout>
   {showCart && <Cart />}
   <Products />
   </Layout>
    </Fragment>
  );
}

export default App;
