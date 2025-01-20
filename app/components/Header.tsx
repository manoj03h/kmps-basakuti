'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

const openMenu =  () => {
    return setIsMenuOpen(!isMenuOpen);
}
  return (
    <section className='fixed z-50 w-full h-[80px] text-white p-0 shadow-sm'>
        <div className='relative md:relative top-0 left-0 z-10 w-full h-full bg-green-900 flex justify-between items-center px-10 py-0'>
            <Link 
                className='relative z-30 flex items-center gap-3'
                href="/" 
            >
                <div className='bg-white w-[50px] h-[50px] p-1 rounded-md'>
                    <Image
                        className='object-contain'
                        src="/images/logo/school_logo.png"
                        alt="KMPS Basakuti Logo"
                        width={50}
                        height={80}
                        priority
                    />
                </div>
                <p className='text-3xl'>KMPS</p>
            </Link>
            <section
                className='block relative z-30 p-5 cursor-pointer rounded-md border-2 md:hidden'
                onClick={openMenu}
            >
                <div className={`bg-white w-8 h-[3px] rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-10px] transform transition-transform duration-200 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[0.2px]' : ''}`}></div>
                <div className={`bg-white w-8 h-[3px] rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[0px] transform transition-opacity duration-200 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`bg-white w-8 h-[3px] rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[10px] transform transition-transform duration-200 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-0' : ''}`}></div>
            </section>
            <div className='absolute top-0 left-0 h-full w-full z-20 bg-green-800'></div>
            <div className={`absolute top-full left-0 w-full min-h-full z-10 shadow-md py-4 bg-green-700 transform transition-all duration-1000 ease-in-out ${ isMenuOpen ? 'translate-y-0 md:translate-y-0' : '-translate-y-full'} md:relative md:z-20 md:top-20 md:flex md:justify-end md:items-center md:bg-transparent md:py-0`}>
                <ul className='relative z-30 block px-0 py-0 h-full w-full borde md:flex md:gap-4 md:items-center md:justify-end'>
                    <li className='relative z-30 h-full'><Link className='relative z-30 grid place-items-center h-full p-2 hover:bg-green-950' href="/">Home</Link></li>
                    <li className='h-full'><Link className='grid place-items-center h-full p-2 hover:bg-green-950' href="/LatestNews">Latest News</Link></li>
                    <li className='h-full'><Link className='grid place-items-center h-full p-2 hover:bg-green-950' href="/articles">Articles</Link></li>
                    <li className='h-full'><Link className='grid place-items-center h-full p-2 hover:bg-green-950' href="/academics">{"Academic's"}</Link></li>
                    <li className='h-full'><Link className='grid place-items-center h-full p-2 hover:bg-green-950' href="/gallery">Gallery</Link></li>
                    <li className='h-full'><Link className='grid place-items-center h-full p-2 hover:bg-green-950' href="/career">Career</Link></li>
                    <li className='h-full'><Link className='grid place-items-center h-full p-2 hover:bg-green-950' href="/about">About Us</Link></li>
                    <li className='h-full'><Link className='grid place-items-center h-full p-2 hover:bg-green-950' href="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Header
