import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from './Context/CartContext';
import MainMenu from './Store/MainMenu';

function Cart() {

 
 let bag = useContext(CartContext) 
  const [total, settotal] = useState(0);
 const CalcBill = ()=>{
     let sum = 0 ;     
    bag.forEach((ele)=>{
        sum +=ele.price;
    }) 
    settotal(sum)
 }

 useEffect(() => {
     CalcBill()
 }, [bag]);

   return (
    <div>
  <MainMenu/>
   <div className="grid w-10/12 grid-cols-[7fr_5fr] mx-auto">
       <div className="col-1 min-h-screen py-5 px-2 md:min-h-[auto]">
              <h1 className='text-2xl text-left pb-5 font-semibold'>Shopping Cart</h1>
              <h2 className='opacity-20 text-xl text-left font-medium'>Billing Details</h2>
              <div className="grid grid-cols-2 gap-1 ">
              
              <div className="input mt-[12px]">
<p className='text-left text-[16px] mb-2'>Enter You Name</p>
  <input type="name" name="name"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
 </div>            
 <div className="input mt-[12px]">
<p className='text-left text-[16px] mb-2'>Enter You Name</p>
  <input type="email" name="email"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="JohnDoe@mail.com" />   
 </div>            

 <div className="input mt-[12px] col-span-2">
<p className='text-left text-[16px] mb-2'>Enter You Mobile Number</p>
  <input type="tel" name="tel"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
 </div>            

              </div>


              <h2 className='opacity-20 text-xl text-left font-medium mt-[3vh]'>Address Details</h2>
              <div className="grid grid-cols-2 gap-2">
              
              <div className="input mt-[12px]">
              <p className='text-left text-[16px] mb-2'>Enter Your Address</p>
    <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="1"
      placeholder="124 , ABC Street "
    ></textarea>
           </div>            
 <div className="input mt-[12px]">
<p className='text-left text-[16px] mb-2'>Enter Your State</p>
  <input type="name" name="name"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
 </div>            

 <div className="input mt-[12px] ">
<p className='text-left text-[16px] mb-2'>Enter Your City</p>
  <input type="name" name="name"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
 </div>            

 <div className="input mt-[12px] ">
<p className='text-left text-[16px] mb-2'>Enter Your Zip Code</p>
  <input type="name" name="name"  className="mt-1 px-3 py-4  border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />   
 </div>            

              </div>

 
       </div>
       <div className="col-1  my-5 min-h-screen py-5 px-5  md:min-h-[auto]">
            <div className="w-8/12 rounded-lg p-5 bg-white mx-auto">
            <h1 className='text-2xl text-left pb-5 font-semibold'>Order Summary</h1>
       
       {
             bag.map((ele,index)=>
                <div key={index} className='w-full my-5 grid grid-cols-[3fr_10fr]' >
                    <div className="col-1">
                        <img src={ele.thumbnail} className="max-w-12/12" alt="" />
                    </div>
                    <div className="col-1 flex flex-col justify-between text-left px-2">
                    <h2 className='font-semibold text-left text-[16px] md:text-[16px]  uppercase'>{ele.name.length>35?ele.name.slice(0,35).concat('..'):ele.name}</h2>
                    <h4 className='text-left mt-1 text-[14px] font-semibold opacity-50 mb-2 uppercase'>{ele.category}</h4>
                    <div className="flex items-center justify-between w-full ">
                    <h4 className='text-left text-[14px] font-semibold opacity-70 mb-2 uppercase'>Price - ₹ {ele.price}</h4>
                    <button className ="lg:text-sm  w-6/12 py-2 mx-2 text-[#FF0000] rounded-md    font-semibold text-[15px] px-2 max-w-[36px] h-[36px] flex items-center justify-center rounded-full cta md:text-sm md:px-2 bg-[#FFF3F3]  hover:bg-[#FF0000] hover:text-[#FFF3F3]  "><i class='bx bxs-trash text-[18px]'></i></button>
                    </div>        
                     </div>
                </div>    
            )
        }
 {
     bag.length>0 ?   
     <div className="bill my-7 text-left pr-4">
     <h1 className='font-semibold my-3 text-[18]'>Total - <span className='opacity-50 font-medium'> ₹  {total} </span></h1>
     <h1 className='font-semibold my-3  text-[18]'>Shipping - <span className='opacity-50 font-medium'> ₹  {101} </span></h1>
     <h1 className='font-semibold my-3  text-[18]'>GST - <span className='opacity-50 font-medium'> ₹  {99} </span></h1>

     <h1 className='font-semibold my-3  text-left text-[#405DF8] text-[20px]'>Grand Total  - <span className=' font-medium'> ₹  {total+99+101} /- </span></h1> 
     <button className="w-full cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3"> Place My Order <i class='bx bxs-gift text-xl align-top mx-2' ></i> </button>
         
     </div> : 
         <div>
        
             <img src="https://cdn.dribbble.com/users/324185/screenshots/15805709/media/98798b7662d8a4b21cb66ad4bd430b48.jpg?compress=1&resize=800x600&vertical=top" alt="" />
            <h1 className='font-semibold my-3 '>You're Cart Is Empty</h1>
         </div>
 }
  
            </div>
       </div>

   </div>

    </div>
  )
}

export default Cart