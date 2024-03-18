import React from 'react'

function BlogHeader() {
  return (
   <>
   <div className='flex '>
    <div className="bg-[url('/src/assets/header-bg.png')] bg-cover bg-no-repeat w-[50%]" >
     <div className='flex items-center justify-center h-full'>
      <div className='font-bold text-white text-[64px]'>
      Our Blog
      </div>
     </div>
    </div>
    <div className='w-[50%]'>
     <div className='bg-black px-[30px] py-[200px] text-white'>
     <h1 className='font-bold text-[40px]'>
     Diagnose Car Problems If You Don’t Know Much About Cars
     </h1>
     <p className='text-[16px]'>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
    </div>
    </div>
    </div></>
  )
}

export default BlogHeader