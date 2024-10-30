import React from 'react'
import collection from '../../assets/collection'
import './Dish.css'
import { Link } from 'react-router-dom'
const Dishes = () => {
      const windowScroll=()=>{
            window.scrollTo({
                  top:0,
                  behavior:'smooth',
            });
      };
      return (
            <>
                  <h2 id="heading">Top dishes near you</h2>
                  <div className='dis'>
                        {
                              collection.map((item, index) => {
                                    return (
                                          <div className='dishItem' id={item.id} key={item.id}>
                                                <div className='top'>
                                                      <Link to={`product/${item.id}`}><img id="tim" src={item.img} onClick={windowScroll} /></Link>
                                                      <button id='tbt'>+</button>
                                                </div>
                                                <div className='down'>
                                                      <span id="">{item.title}</span>
                                                      <p>{item.desc}</p>
                                                      <h3>₹{item.price}</h3>
                                                </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </>
      )
}

export default Dishes