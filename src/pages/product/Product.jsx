import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
import star from '../../assets/star.svg'
import './Product.css'
import Dishes2 from '../../components/dishes2/Dishes2';

const Product = (props) => {
  const { collection,addToCart } = useContext(ShopContext)
  const { productid } = useParams();
  // console.log(productid);
  // console.log(collection)
  let item = collection.filter((prod) => prod.id === Number(productid))
  item = item[0]
  console.log(item)
  return (
    <div className='all'>
      <div className='product'>
        <div className='img'>
          <img id='img' src={item.img} />
        </div>
        <div className='productDetails'>
          <p>|| {item.title} ||</p>
          <p>{item.category}</p>
          <p>₹{item.price}</p>
          <div className='five'>
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>
          <span>{item.desc}</span>
          <button id="order" onClick={()=>addToCart(item.id)}>Add Now</button>
        </div>
      </div>
      <div className='related'>
        <div id='rlt'>Related food items <hr /></div>
        <Dishes2 category={item.category}></Dishes2>
      </div>
    </div>
  )
}

export default Product