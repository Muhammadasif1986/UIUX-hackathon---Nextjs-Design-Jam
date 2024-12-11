
import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";
import { Great_Vibes } from "next/font/google";
import unsplash4 from "../../public/unsplash4.png"
import unsplash5 from "../../public/unsplash5.png"
import unsplash6 from "../../public/unsplash6.png"
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    }); 

const Cart2 = () => {
  return (
    <section className="bg-black text-white px-6 py-8 lg:py-36 ">
      <div className="container w-10/12 mx-auto h-auto lg:h-[500px] flex flex-wrap lg:flex-nowrap items-center gap-6">
       
    
        <div className="flex flex-col gap-2 w-full h-auto lg:h-[500px]  bg-center rounded-lg bg-cover border-[1px]">
          
            <div className='flex justify-start gap-2 h-auto lg:h-[230px] w-full border-[1px]'>
            <div className='w-8/12 h-auto flex items-baseline '>
            <Image
              src={unsplash6}
              alt="Image"
            /></div>
          <div className='w-4/12 h-auto  mt-20'>
            <Image 
              src={unsplash5}
              alt="Image"
            /></div> 
            </div>

            <div className='flex justify-center items-start gap-2 h-auto w-full'>
            <div className='w-4/12 h-[200px]'>
            <Image 
              src={unsplash4}
              alt="Image"
            /></div> 
            <div className='w-4/12'>
            <Image 
              src={unsplash6}
              alt="Image"
            /></div> 
            
             <div className='w-4/12'>
            <Image 
              src={unsplash4}
              alt="Image"
            />
             <div className=''>
            <Image 
              src={unsplash5}
              alt="Image"
            /></div>

            </div>
            </div> 
        </div>



        <div className="lg:w-full lg:ml-10">
        <div className={Vibes.className}><p className="text-orange-400 text-2xl">Why Choose us</p></div>
          
          <h2 className="text-4xl font-bold mt-4">
            <span className="text-orange-400">Ex</span>ta ordinary taste <br />
            And Experienced
          </h2>
          <p className="text-gray-400 text-sm mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Una, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
<div className='flex justify-start items-center gap-6 mt-8'>
          <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center bg-[#ff9f0d] h-16 w-16'>
            <div><Image src="/Vector13.png" alt='Image' width={40}  height={40}/></div>
          </div>
          <p className='text-white text-sm mt-2'>Fast Food</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center bg-[#ff9f0d] h-16 w-16'>
            <div><Image src="/Vector12.png" alt='Image' width={20}  height={20}/></div>
          </div>
          <p className='text-white text-sm mt-2'>Dinner</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center bg-[#ff9f0d] h-16 w-16'>
            <div><Image src="/Vector11.png" alt='Image' width={40}  height={40}/></div>
          </div>
          <p className='text-white text-sm mt-2'>Lunch</p>
      </div>
</div>
          <div className="flex justify-between items-center h-16 w-[250px] bg-white mt-8">
          <div className='h-16 w-2 bg-[#ff9f0d]'></div>
          <p className='text-xl text-[#ff9f0d]'>30+</p>
          <p className='flex flex-col justify-center items-center text-xs text-black'>years of <br /> <span className='text-base font-semibold mr-8'>Experince</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart2;
