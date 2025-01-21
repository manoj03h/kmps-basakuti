"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const navItems: {title: string; path: string}[] = [
    { title: 'Home', path: '/' },
    { title: 'Events', path: '/events' },
    { title: 'students', path: '/students' },
    { title: 'parents', path: '/parents' },
    { title: 'Academic', path: '/academic' },
    { title: 'Career', path: '/career' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const pathname = usePathname(); // Current route


  const handleFooterNav = () => {
    return (
        <ul className="relative z-30 block px-0 py-0 h-full w-full md:flex md:flex-col md:gap-0 md:items-left md:justify-start">
            {navItems.map((item, index) => (
            
            <li key={index}><Link className={`block px-8 py-1 hover:text-green-500 ${ pathname === item.path ? 'text-yellow-500' : 'hover:bg-green-500500'}`} href={item.path}>{item.title}</Link></li>
            ))}
        </ul>
    );
  }

  return (
    <div className='grid content-center text-white'>
        <section className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 justify-center px-10 py-10 bg-slate-800'>
          <div className=''>
            <p className='text-xl font-bold tracking-wide leading-relaxed mb-6'>
              Important Links
              <hr />
            </p>
            { handleFooterNav() }
          </div>

            <div className='min-w-[200px] max-w-[600px]'>
              <p className='text-xl font-bold tracking-wide leading-relaxed mb-6'>
                About our School
                <hr />
              </p>
              <p className=' pl-4'>
              This School is primarily focused to give quality education to our young stydents of our state Jharkhand, and empower them with all the necessary requirements, so that they can develop themselves in any field of career building….
              </p>
            </div>

          <div>
          <div className=' mb-4'>
            <p className='text-xl font-bold tracking-wide leading-relaxed mb-2'>
              Location
              <div className='border-b-2' />
            </p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.562875268067!2d85.72278048558394!3d22.632792977787457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f587000b7f0d27%3A0x8fa67e55e7545815!2sKolhan%20Model%20Public%20school!5e0!3m2!1sen!2sin!4v1737142871645!5m2!1sen!2sin" 
                width="100%"
                height="260px"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          </div>
        </section>
        <section className='w-full text-center py-4 bg-slate-900'>
            Copyright 2025 | Designed By <span className='text-green-500 hover:text-yellow-400'><a href="https://ufocube.com"><b>UFOC</b>ube</a></span>
        </section>
    </div>
  )
}

export default Footer
