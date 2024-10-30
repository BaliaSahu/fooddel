import React, { useContext,createContext } from "react"
import './ShopCategory.css'
import veg from '../../assets/VEG.jpg'
import nonveg from '../../assets/NON-VEG.jpg'
import ice from '../../assets/ICE.jpg'
import { ShopContext } from "../../Context/ShopContext"
import Dishes2 from "../../components/dishes2/Dishes2"


const ShopCategory = (props) => {
  const {collection}=useContext(ShopContext);
  // console.log(collection[0].category,"-000");
  // console.log(props.category)
  return (
    <div className=''>
      <div className='ShopCategory'>
        <div className='hero categp' id='her'>
          <div className='content'>
            <h1 id='hh2'>Order your favourite food here</h1>
            <p id='hp'>Choose from a diverse menu featuring a delectable array of didhes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience.one delicious meal at a time.</p>
            <button id='hb'>View Menu</button>
          </div>
        </div>
        <div className='exp'>
          <h2>Explore our menu</h2>
          <p>Choose from a diverse menu featuring a delectable array of didhes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience.one delicious meal at a time.            </p>
        </div>
      </div>
      <div className="dishhes">
        <Dishes2 category={props.category}>
        </Dishes2>
      </div>
    </div>
  )
}

export default ShopCategory