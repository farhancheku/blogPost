
import React from 'react'

function Header() {

 return (

  <div className="flex">
   <div className="bg-[url('/src/assets/header-bg.png')] bg-cover bg-no-repeat w-[50%]"><div><div></div>Our Blog</div></div>
   <div className='bg-black w-[50%] p-[20px]'>
    <div className='w-[70%] px-[30px] py-[80px] '>
    <h1 className='font-bold text-white'>
     Diagnose Car Problems If You Don’t Know Much About Cars
    </h1>
    <p className='text-white'>
     We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.
    </p>
    </div>
   </div>
  </div>
 )
}

export default Header