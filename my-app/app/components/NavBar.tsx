import React from 'react'
import { Search } from 'lucide-react';
export default function NavBar() {
  return (
      <div className='flex justify-center'>
    <nav className='flex flex-col justify-center items-center w-10/12 h-auto pt-2 bg-black font-[Poppins] '>
<div className='flex justify-center w-1/12 h-auto'> 
<p className='text-orange-500'>Food</p>
<p className='text-white'>tuck</p>
</div>
<div className='flex justify-between items-center bg-orange-200 w-full pb-2 text-sm mt-2'>
<ul className='flex justify-between items-center text-sm w-4/12 h-auto'>
<li className='text-white'>Home</li>
<li className='text-white'>Menu</li>
<li className='text-white'>Blog</li>
<li className='text-white'>About</li>
<li className='text-white'>Shop</li>
<li className='text-white'>Contact</li>
</ul>

<div 
className='flex justify-between items-center w-3/12 h-12 bg-transparent border-[1px] border-[#ff9f0d] text-white rounded-[27px] px-4'> Search
<p className='text-white' ><Search /></p>
</div>
<div>

</div>
</div>
    </nav>
    </div>
  )
}
