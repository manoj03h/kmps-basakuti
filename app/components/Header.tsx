'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems: {title: string; path: string}[] = [
        { title: 'Home', path: '/' },
        { title: 'Events', path: '/events' },
        { title: 'Students', path: '/students' },
        { title: 'Parents', path: '/parents' },
        { title: 'Academic', path: '/academic' },
        { title: 'Career', path: '/career' },
        { title: 'Gallery', path: '/gallery' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ];

    const pathname = usePathname(); // Current route

    const handleNavBars = () => {
        return (
            <div
            className={`absolute top-full left-0 w-full min-h-full z-10 shadow-md py-4 bg-green-700 transform transition-all duration-1000 ease-in-out ${
                isMenuOpen ? 'translate-y-0 md:translate-y-0' : '-translate-y-full'
            } md:relative md:z-20 md:top-20 md:flex md:justify-end md:items-center md:bg-transparent md:py-0`}
            >
            <ul className="relative z-30 block px-0 py-0 h-full w-full md:flex md:gap-4 md:items-center md:justify-end">
                {navItems.map((item, index) => (
                <li key={index} className="relative z-30 h-full">
                    <Link
                    className={`relative z-30 grid place-items-center h-full p-2 rounded-md hover:bg-green-950 ${ pathname === item.path ? 'bg-yellow-500 text-white' : 'hover:bg-green-950'}`}
                    href={item.path}
                    >
                    {item.title}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        );
    }

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
                <FaBars className={`text-4xl font-[100px] absolute top-[2px] left-[50%] translate-x-[-50%] translate-y-[0px] transform transition-transform duration-200 ease-in-out ${isMenuOpen ? 'rotate-90 opacity-0' : 'opacity-100'}`}/>
                <FaTimes className={`text-4xl font-light absolute top-[2px] left-[50%] translate-x-[-50%] translate-y-[0px] transform transition-transform duration-200 ease-in-out ${isMenuOpen ? 'rotate-90 opacity-100' : 'opacity-0'}`}/>
                
            </section>
            <div className='absolute top-0 left-0 h-full w-full z-20 bg-green-800'></div>
            { handleNavBars() }
        </div>
    </section>
  )
}

export default Header
