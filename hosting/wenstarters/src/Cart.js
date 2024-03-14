import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { remove_from_cart,increment_function,decrement_function } from './Reducer'
import {useNavigate} from 'react-router-dom';
import Validation from './Validation';


function Cart(){

  const addtocartdata=useSelector((state)=>{
    
    return state.DataReducer.orderedData

  })

  const [value,setValue]=useState({
    table_no:'',
    cust_name:'',
    payment_mode:''
  })

  const [errors,setErrors]=useState({})

  function handleInput(event){
    const newObj={...value,[event.target.name]:event.target.value}
    setValue(newObj)
  }

  const navigate=useNavigate();

  const handleConfirmOrder = (event) => {

    event.preventDefault(); // Prevent default form submission
    
  // Perform validation
  const validationErrors = Validation(value);
  setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
    // If no errors, navigate to '/Order_placed'
      navigate('/Order_placed');
    }
  };

  const dispatch=useDispatch()

  const totalAmount = addtocartdata.reduce((total, item) => total + item.price, 0); 

  const Data=addtocartdata.map((item)=>{

    return (
      <div className='addtocart_card' key={item.index}>
        <div className='addtocart_card_image'>
          <img src={require(`./Image/${item.image}.jpg`)} className="addtocart_image" alt=""/>
        </div>
        <div className='addtocart_right_box'>
          <div className='addtocart_remove_button'>
            <i class="bi bi-trash remove_item_button" onClick={()=>dispatch(remove_from_cart({name:item.name}))}></i>
          </div>
          <h2 className="addtocart_name">{item.name}</h2>
          <div className="quantity_details"><span>{`${item.quantity} Nos. - Rs ${item.price}`}</span></div>
          <div className='order_button'>
            <div><button className="increasing_button" onClick={()=>dispatch(increment_function({name:item.name}))}>+</button></div>
            <div><button className="decreasing_button" onClick={()=>dispatch(decrement_function({name:item.name}))}>-</button></div>
          </div>
        </div>
      </div>
    )
  })
  return(
    <>
      {Data}
      {Data.length>0&&
      <div className="Customer_details">
        <form onSubmit={handleConfirmOrder}>
          <label>Table No.</label>
          <div><input type="text" name='table_no' className="table_no_input" placeholder="(Card placed in the center of the table)" onChange={handleInput}/>
          {errors.table_no && <p style={{color:'red'}}>{errors.table_no}</p>}</div><br/>
          <label>Customer Name</label>
          <div><input type="text" name='cust_name' className="table_no_input" placeholder='Enter your name' onChange={handleInput} />
          {errors.cust_name && <p style={{color:'red'}}>{errors.cust_name}</p>}</div><br/>
          <div><p>Total Amount: Rs {totalAmount}</p></div>
          <div>
            <label>Payment Mode</label>
              <div><input type="radio" id="cash" name="payment_mode" value="cash" checked={value.payment_mode === 'cash'} onChange={handleInput}/><label for="cash">Cash</label></div>
              <div><input type="radio" id="card" name="payment_mode" value="card" checked={value.payment_mode === 'card'} onChange={handleInput}/><label for="card">Card</label></div>
              <div><input type="radio" id="mobile_apps" name="pay_mode" value="mobile_apps" checked={value.payment_mode === 'mobile_apps'} onChange={handleInput}/><label htmlFor="mobile_apps">Mobile Apps</label></div>
              {errors.payment_mode && <p style={{ color: 'red' }}>{errors.payment_mode}</p>}
          </div>
          <div className='confirm_order_button'><button type="submit" className='confirm_order' onClick={handleConfirmOrder}>Confirm order</button></div>
        </form>
      </div>
      }
    </>
  )

}
export default Cart


