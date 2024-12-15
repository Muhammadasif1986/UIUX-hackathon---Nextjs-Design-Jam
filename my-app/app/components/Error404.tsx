import React from 'react'

export default function Error404() {
  return (
      <div className='flex justify-center items-center p-10 lg:p-20'>
    <div className='flex flex-col justify-center items-center gap-10  w-full md:-w-6/12 lg:w-4/12'>
      <h1 className='text-[#ff9f0d] text-6xl font-bold'>404</h1>
      <h2 className='text-xl font-bold text-center'>Oops! Look likes something going wrong</h2>
      <p className='text-gray-800 text-center '>Page Cannot be found! we’ll have it figured out in no time.
      Menwhile, cheek out these fresh ideas:</p>
      <button className='bg-[#ff9f0d] py-2 px-4 rounded-lg text-white'>Go to home</button>
    </div>
    </div>
  )
}
