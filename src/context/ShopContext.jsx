import    react, { createContext, useEffect, useState } from 'react'
import collection from '../assets/collection';

//for using the all data we use ShopContext all over the component by using useContext
//import this inside the component
export const ShopContext = createContext(null);
function getdefaultcart (){
      let cartItems={};
      for(let i=0;i<collection.length;i++){
            cartItems[i]=0;
      }
      return cartItems;
}

//for using data all over the component we use ShopContextProvider// main jsx//
const ShopContextProvider = (props) => {
      const[cartItems,setcartItems]=useState(getdefaultcart())
      const[count,setCount]=useState(0);
      const[TotalPrice,SetTotalPrice]=useState(0);
      // console.log(cartItems);
      useEffect(()=>{
            let n=0;
            let t=0;
            for(let i=0;i<collection.length;i++){
                  if(cartItems[i]>0){
                        t=t+cartItems[i];
                        const itemInfo=collection.find((e)=> e.id===Number(i));
                        if(itemInfo){
                              n=n+(cartItems[i]*itemInfo.price);
                        }
                  }
            }
            setCount(t);
            SetTotalPrice(n);
      },[cartItems])
      const addToCart=(itemid)=>{
            setcartItems((prevItems)=>{
                  
                  const newItems={...prevItems};
                  let n=newItems[itemid];
                  n=n+1;
                  newItems[itemid]=(n);
                  // console.log(newItems)
                  return newItems;
            });
            console.log(cartItems);
      };
      const removeFromCart=(itemid)=>{
            setcartItems((previous)=>{
                  
                  let newItems={...previous};
                  let n=newItems[itemid];
                  if(n==0){
                        n=0;
                  }
                  else{
                        n=n-1;
                  }
                  newItems[itemid]=n;
                  return newItems;
            })
      }
      const removeItem=(itemid)=>{
            setcartItems((previous)=>{
                  let newItems={...previous}
                  newItems[itemid]=0;
                  return newItems;
            })
      }
      const ContextValue={collection,addToCart,cartItems,removeFromCart,removeItem,count,TotalPrice}
      console.log("rendered")
      return (
            <ShopContext.Provider value={ContextValue}>
                  {props.children}
            </ShopContext.Provider>
      )
}

export default ShopContextProvider;