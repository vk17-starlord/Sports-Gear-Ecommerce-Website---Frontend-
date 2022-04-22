import React from 'react'
import logo from '../assets/logo.svg';
import {
  Link
} from "react-router-dom";
function Header() {
  return (
    <div class="fixed top-0 left-0 right-0 z-10 bg-white p-2 ">
        <div className="container w-10/12 h-[10vh] flex items-center  m-auto justify-between">
              <img src={logo} alt="logo" className='w-[150px]' />
           <Link to="/SignUp">
           <button className="md:hidden cta bg-[#405DF8] text-[#fff] rounded-md px-10 hover:bg-black py-3">Get Started</button>
         
           </Link>
           <button className='menu hidden md:block'><i class='text-2xl bx bx-menu'></i></button>

        </div>

        
    </div>
  )
}

export default Header