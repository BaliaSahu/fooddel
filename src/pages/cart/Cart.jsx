import React, { useContext, useState } from 'react'
import './Cart.css'
import { ShopContext } from '../../Context/ShopContext'

const Cart = () => {
  const { collection, addToCart, removeFromCart, removeItem, cartItems, count, TotalPrice } = useContext(ShopContext);
  let cItems = {};

  return (
    <div className='al'>
      <div id='fi'>Food Items</div>
      <div className='headd'>
        <div>Food</div>
        <div>Food Name</div>
        <div>price per/</div>
        <div>Number of items</div>
        <div>Total Price</div>
        <div>Action</div>
      </div>
      {
        <div className='allCartItems'>
          {

            collection.map((it, ind) => {
              if (cartItems[it.id] > 0) {
                return (
                  <div className='ittems' key={ind}>
                    <div id="imge">
                      <img src={it.img} />
                    </div>
                    <div id="tilt">
                      <p>{it.title}</p>
                    </div>
                    <div id="price">
                      ₹{it.price}
                    </div>
                    <div id="quant">
                      <button onClick={() => { addToCart(it.id) }}>+</button>
                      <button>{cartItems[it.id]}</button>
                      <button onClick={() => { removeFromCart(it.id) }}>-</button>
                    </div>
                    <div id="toPrice">
                      ₹{cartItems[it.id] * it.price}
                    </div>
                    <div id="rem">
                      <button onClick={() => { removeItem(it.id) }}>Remove</button>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      }

      <div className='orderss'>
        <div className='to'> 
          --`|| Total Order ||--
        </div>
        <div className='lr'>
          <div className='l'>
            <p>Total number of products -</p>
            <p>Total price -</p>
            <p>Shipping fee -</p>
            <p>Gst / -</p>
          </div>
          <div className='r'>
            <p>₹{count}</p>
            <p>₹{TotalPrice}</p>
            <p>₹{0}</p>
            <p>₹{0}</p>
          </div>
        </div>
        <div className='lasytt'>
          <hr />
          <div className='last'>
            <p>Total Amount -</p>
            <p>₹{TotalPrice}</p>
          </div>
        </div>
        <div>
          <button id='on'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cart