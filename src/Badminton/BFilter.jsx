import React, { useState } from 'react'
import data from './BadmintonData.json'
function BFilter({setdata,toggle}) {
  const [CricketCategory, setCricketCategory] = useState([
    {
      name:'racket',
      isactive:false,
    },
    {
      name:'topwear',
      isactive:false,
    },
    {
      name:'bottomwear',
      isactive:false,
    },
    {
      name:'shoes',
      isactive:false,
    },
  
  ]);


  const ChangeCategory=(name)=>{
     let array = CricketCategory.filter((ele)=>{
       
      if(ele.name===name){
         ele.isactive=!ele.isactive;
       }
       return ele;
     })      
     setCricketCategory(array)
     let products = data.filter((element)=>{
       if(CricketCategory.some(ele=>ele.name==element.category && ele.isactive)){
         return element;
       }
     })
     if(products.length<1){
       setdata(data)
     }else{
      setdata(products)
     }
    }
  return (
    <div className='w-full text-left py-5  flex flex-col md:justify-center align-center sticky top-0 md:px-5  min-h-[100vh] md:min-h-[autoa] bg-white'>
<div>
<h1 className='font-bold text-xl mb-5'>CATEGORY </h1>
    {
      CricketCategory.map((ele)=>
      <div className='my-2 flex w-full items-center pr-5 justify-between'>
        <h1 className='font-semibold uppercase'>{ele.name}</h1>
        <input type="checkbox" className="w-[25px] checked:bg-blue-500 " checked={ele.isactive} onChange={()=>{
          ChangeCategory(ele.name)
        }} />
      </div>
      )
    }

</div>

<button onClick={()=>{
  toggle()
}} className='hidden md:block m-10 w-6/12 mx-auto bg-[#F3F5FF] py-3 text-[#405DF8] rounded md'>Close</button>

    </div>
    
  )
}

export default BFilter