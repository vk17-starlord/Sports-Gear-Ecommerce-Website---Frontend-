import React, {useState } from 'react'

export const CartContext = React.createContext()
export const CartUpdateContext = React.createContext()
 
function CartProvider({children}) {  
    const [cart, setcart] = useState([]);
     
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
          {children}
     </CartUpdateContext.Provider>
    </CartContext.Provider>
      )
    }
    
    export default CartProvider;
