import React from 'react'
import featureadd from "../assets/feature.svg"

function BlogFeature() {
  return (
   <div className='bg-[#F5F5F5] p-20'>
    <div className='container mx-auto my-0 bg-white'>
     <div className='my-[30px] p-10 '>
      <div className='flex w-full'>
      <div>
     <img src={featureadd} alt='Blog'/>
      </div>
      <div className='w-full p-5 flex flex-col justify-between'>
       <div className='flex justify-between'>
        <div className='flex gap-10 text-[#939191]'>
        <p>Posted on October 6th 2021</p>
        <p>563 views</p>
        </div>
        <p className='text-[#FF6433] font-[500] text-[16px]'>FEATURED</p>
       </div>
       <div className='font-bold text-[40px]'>
       Should I Buy a New Car or Lease a New Car in 2021?
       </div>
       <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
       <div>
       <button>
       Read more
       </button>
       </div>
      </div>
      </div>
      </div>
     </div>
     </div>
  )
}

export default BlogFeature