import React from 'react'
import './Shop.css'
import ItemRounded from '../../components/rounded/ItemRounded'
import Dishes from '../../components/dishes/Dishes'
import { Ordw } from '../../components/ordew/Ordw'

const Shop = () => {
  return (
      <>
      <div className='hero' id='her'>
            <div className='content'>
                  <h1 id='hh2'>Order your favourite food here</h1>
                  <p id='hp'>Choose from a divers
                        e menu featuring a delectable array of dishes crafted with the 
                        finest ingrediants and culinary 
                        expertise. Our mission is to sat
                        isfy your craving and eleva
                        te your dining experience.
                        one delicious meal at a tim
                        e.</p>
                  <button id='hb'>View Menu</button>
            </div>
      </div>
      <div className='exp'> 
            <h2>Explore our menu</h2>
            <p>Choose from a divers
                  e menu featuring a delectable array o
                  f didhes crafted with the finest ingre
                  diants and culinary expertise. Our mi
                  ssion is to satisfy your craving and e
                  levate your dining experience.one del
                  icious meal at a time.</p>
      </div>
      <ItemRounded></ItemRounded>
      <Dishes></Dishes>
      <Ordw></Ordw>
      </>
  )
}

export default Shop