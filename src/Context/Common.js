import React, { useContext, useState } from 'react'

const CommonContext = React.createContext()

 function Common({children}) {
  const products = [{
    id:1,
    
  
  }]
  return (
    <CommonContext.Provider products = {products}>
        {children}
    </CommonContext.Provider>
  )
}

export default Common