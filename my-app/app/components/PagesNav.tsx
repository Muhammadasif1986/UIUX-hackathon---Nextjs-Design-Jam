import React from 'react'
import Link from "next/link"
import {
      Sheet,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet"
   
    export default function PagesNav() {
      return (
        <div>
          <Sheet>
  <SheetTrigger>Pages</SheetTrigger>
  <SheetContent>
    <SheetHeader  className='w-full h-auto bg-[#0d0d0d] to-70% text-white'>
      <SheetTitle className='text-2xl pb-3'>Our Pages</SheetTitle>
      <SheetDescription>
        <ul className="text-slate-100 list-disc border-[1px] border-[#ff9f0d] text-lg space-y-1 px-10 py-4 rounded-xl shadow-lg">
            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/"><span className='text-[#ff9f0d] font-semibold text-xl'>H</span>ome</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/menu"><span className='text-[#ff9f0d] font-semibold text-xl '>O</span>urMenu</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/blog"><span className='text-[#ff9f0d] font-semibold text-xl'>B</span>logList </Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/about"><span className='text-[#ff9f0d] font-semibold text-xl'>A</span>boutUs</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/shop"><span className='text-[#ff9f0d] font-semibold text-xl'>O</span>urShop</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/contact"><span className='text-[#ff9f0d] font-semibold text-xl'>C</span>heckOut</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/ourChef"><span className='text-[#ff9f0d] font-semibold text-xl'>O</span>urChef</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/faq"><span className='text-[#ff9f0d] font-semibold text-xl'>F</span>AQpage</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/signup"><span className='text-[#ff9f0d] font-semibold text-xl'>S</span>ignUp</Link></li>

            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/error404"><span className='text-[#ff9f0d] font-semibold text-xl'>E</span>rror404</Link></li>
            <li className='hover:bg-slate-800 hover:rounded-xl p-2'><Link href="/cart"><span className='text-[#ff9f0d] font-semibold text-xl'>S</span>hoppingCart</Link></li>

        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    
        </div>
      )
    }
    
