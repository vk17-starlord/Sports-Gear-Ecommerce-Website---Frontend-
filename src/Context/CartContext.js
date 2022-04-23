import React, {useState } from 'react'

export const CartContext = React.createContext()
export const CartUpdateContext = React.createContext()
export const CartDeleteContext = React.createContext()
 
function CartProvider({children}) {  
    const [cart, setcart] = useState([]);
    
    const RemoveElement = (id)=>{
      let products = cart.filter((ele)=>{
        if(ele.id!==id){
          return ele;
        }
      })
      console.log(id)
      setcart(products)
    }
    const UpdateCart=(element)=>{
          let exist = cart.some(ele => ele.id === element.id);
        if(!exist)
        {
          setcart([...cart,element])
          return true 
        }else{
           return false
        }   

}
    return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={UpdateCart}>
          <CartDeleteContext.Provider value={RemoveElement}>
                     {children}
          </CartDeleteContext.Provider>
     </CartUpdateContext.Provider>
    </CartContext.Provider>
      )
    }
    
    export default CartProvider;
