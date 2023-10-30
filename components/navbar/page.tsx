"use client"
import { useState } from 'react';
import Image from 'next/image';
import open from '@/public/menu.svg'
import close from '@/public/close.svg'
import cart from "@/public/cart-outline.svg"
import Link from 'next/link';


const NavBar = () => {
  const [navbar, SetNavbar] = useState(false);

  return (
    <nav className='w-full fixed top-0 left-0 '>
        <div className='md:flex bg-white shadow-md justify-between py-4 md:px-10 px-7'>
            <div className='flex items-center font-bold text-3xl text-zinc-400 mr-4 font-[poppins] '>
                LOGO
            </div>
            <div className='flex items-center absolute right-[150px] md:right-[380px] top-4  hover:-translate-y-0.5 ease-in duration-500 cursor-pointer'>
                <Image src={cart} alt='cart' width={30} height={30}  />
                <h5 className='absolute bottom-4 -right-2 bg-red-400 rounded-2xl px-[5px] py-[0px] shadow-md font-medium text-white'>2</h5>
            </div>
            <div className='absolute right-2 top-4 cursor-pointer md:hidden text-xl text-white font-[poppins] transition-all ease-in duration-500'>
                <button className='rounded-md hover:bg-gray-200 hover:bg-opacity-10 ' onClick={() => SetNavbar(!navbar)}>
                    {(navbar ? (<Image src={close} alt='open' width={30} height={30}/>) : (<Image src={open} alt='close' height={30} width={30}/>))}
                </button>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 md:z-auto z-[-1] md:static font-[poppins] left-0 w-full md:w-auto md:pl-0  transition-all ease-in duration-200 ${navbar ? "top-20 opacity-100" : "hidden"}`}>
                <li className='md:absolute md:ml-8 text-xl left-[120px] md:my-0 my-5 '>
                <Link href="/" className='text-black font-[poppins] font-semibold  text-2xl font-sans hover:text-gray-500 duration-300 ease-in transition-colors  active:border-y-2 border-spacing-y-12 active:text-gray-200 '>Home</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-5'>
                    <Link href="/Contact" className='text-black font-[poppins] font-semibold  text-2xl font-sans hover:text-gray-500 duration-300 ease-in transition-colors  active:border-y-2 border-spacing-y-12 active:text-gray-200 '>Contact Us</Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-5'>
                    <Link href="/About" className='text-black text-2xl font-[poppins] font-semibold  font-sans hover:text-gray-500 duration-300 ease-in transition-colors  active:border-y-2 border-spacing-y-12 active:text-gray-200 '>About Us</Link>
                </li>
            </ul>
        </div>
    </nav>
      
  );
};

export default NavBar;
