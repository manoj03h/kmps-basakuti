'use client'
import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    const gallery = [
        {
          name: "Image 1",
          location: "/images/gallery/img1.jpeg",
        },
        {
          name: "Image 2",
          location: "/images/gallery/img2.jpeg",
        },
        {
          name: "Image 3",
          location: "/images/gallery/img3.jpeg",
        },
      ]

      const galleryContent = gallery.map((item, index) => (
            <div key={index} className="w-full border-2 border-white rounded-md text-center md:w-[40%] lg:w-[30%]">
              <Image 
                className="object-contain w-full rounded-md"
                alt={item.name}
                src={item.location}
                width={300}
                height={200}
              />
              <h3 className="text-2xl font-bold my-8">
                {item.name}
              </h3>
              {/* <a
                className="bg-green-800 px-8 md:px-10 lg:px-8 xl:px-20 py-4 rounded-md text-white mt-8 text-sm md:text-md lg:text-lg hover:bg-green-900"
                href=""
              >
                Know More
              </a> */}
            </div>
          ));

  return (
    <section className="relative w-full min-h-[400px]">
        <div className="relative flex flex-col justify-center items-center w-full h-full bg-white">
        
        <div className="relative flex gap-2 justify-center flex-wrap">
            <div className="relative flex flex-wrap gap-10 md:gap-10 lg:gap-8 justify-center items-center h-full px-20 py-10 md:flex-row md:items-center">
            <div className="w-full">
                {/* <p className="text-xl font-bold">Information abut School</p> */}
                <h2 className="mt-24 text-6xl font-black text-green-800">Gallery</h2>
            </div>
            {galleryContent}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Gallery
