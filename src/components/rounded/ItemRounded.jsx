import React from 'react'
import './ItemRounded.css'
import item from '../../assets/rounded'
const ItemRounded = () => {
  // console.log(item)
  // item.map((it)=>{
  //   console.log(it.text);
  // })
  return (
    <div className='container'>
      {
        item.map((it,ind)=>{
          return(
            <div className='contItem' id={it.id} key={it.id}>
              <img id="cim" src={it.img} />
              <span id="cit">{it.text}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemRounded