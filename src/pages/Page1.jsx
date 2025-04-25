import React from 'react'
import Page1Bottom from '../components/Page1Bottom'
import TiltTitle from '../components/TiltTitle'

const Page1 = () => {

   const handleMouseMove = (e) => {
   console.log(e.clientX)
   }

  return (
    <div  onMouseMove={(e)=>{
      handleMouseMove(e)
    }}  className='h-screen  bg-white p-7 ' > 
    <div id='page1-in' className=' relative w-full h-full ' >
    <img className=' relative rounded-4xl bg-cover shadow-xl shadow-gray-800 ' src="https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_3106,h_1482,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg" alt="" />

        <TiltTitle/>
      <Page1Bottom/>

    </div>
      
 
    </div>
  )
}

export default Page1