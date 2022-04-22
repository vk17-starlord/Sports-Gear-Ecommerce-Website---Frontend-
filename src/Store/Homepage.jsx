import React from 'react'
import { useHistory } from "react-router-dom";
import Banner from './Banner';
import { Carousel } from 'react-responsive-carousel';
import MainMenu from './MainMenu';
function Homepage() {
  let history = useHistory();  

    if(localStorage.getItem('email')==null && localStorage.getItem('password')==null){
             history.push('/Landingpage')
    } 
    return (
    <div className='Homepage'>
    <MainMenu/>
    <Banner/>
 
    <div className="Trend w-10/12 mx-auto mt-[5vh]">
      <h3 className='text-black opacity-50 font-semibold text-left text-xl'>Cricket</h3>
      <h1 className='text-left font-bold text-3xl'>Fever</h1>
      <Carousel>

      </Carousel>
    </div>


    </div>
  )
}

export default Homepage