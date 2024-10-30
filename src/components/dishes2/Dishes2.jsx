import React, { useContext } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import './Dishes.css'

const Dishes2 = (props) => {
      console.log(props.category);
      const { collection ,addToCart} = useContext(ShopContext);
      // console.log(typeof(collection));

      const windowScroll=()=>{
            window.scrollTo({
                  top:0,
                  behavior:'smooth',
            });
      };
      return (
            <div className='dis' id="disj">
                  {
                        collection.map((item, index) => {
                              if (item.category === props.category) {
                                    return (
                                          <div className='dishItem' id={item.id} key={item.id}>
                                                <div className='top'>
                                                      <Link to={`/product/${item.id}`}>
                                                      <img id="tim" src={item.img} onClick={windowScroll} />
                                                      </Link>
                                                      <button id='tbt' onClick={()=>{addToCart(item.id)}} >+</button>
                                                </div>
                                                <div className='down'>
                                                      <span id="">{item.title}</span>
                                                      <p>{item.desc}</p>
                                                      <h3>₹{item.price}</h3>
                                                </div>
                                          </div>
                                    )
                              }
                              else {
                                    return null;
                              }
                        })
                  }
            </div>
      )
}

export default Dishes2