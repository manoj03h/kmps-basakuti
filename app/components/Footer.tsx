import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid content-center text-white'>
        <section className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 justify-center px-10 py-10 bg-slate-800'>
          <div className=''>
            <p className='text-xl font-bold tracking-wide leading-relaxed mb-2'>
              Important Links
              <hr />
            </p>
            <ul>
              <li><Link className='block px-8 py-2 hover:text-yellow-500' href="/">Home</Link></li>
              <li><Link className="block px-8 py-2 hover:text-yellow-500" href="/LatestNews">Latest News</Link></li>
              <li><Link className="block px-8 py-2 hover:text-yellow-500" href="/gallery">Gallery</Link></li>
              <li><Link className="block px-8 py-2 hover:text-yellow-500" href="/career">Career</Link></li>
              <li><Link className="block px-8 py-2 hover:text-yellow-500" href="/about">About Us</Link></li>
              <li><Link className="block px-8 py-2 hover:text-yellow-500" href="/contact">Contact Us</Link></li>
            </ul>
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
              <hr />
            </p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0629337832765!2d86.21453097465135!3d22.8001318245938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e2e2c01d5049%3A0x224bb9bf64952f91!2sManoj%20IT%20Works!5e0!3m2!1sen!2sin!4v1703091826117!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className='border-0 '
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
            </iframe>
          </div>
          </div>
        </section>
        <section className='w-full text-center py-4 bg-slate-900'>
            Copyright 2025 | Designed By <span className='text-yellow-500'><a href="https://ufocube.com">UFOCube</a></span>
        </section>
    </div>
  )
}

export default Footer
