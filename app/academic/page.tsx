'use client'
import React from 'react'
import Image from 'next/image'

const Academic = () => {

  // const latestNewsContent = latestNews.map((news, index) => (
  //   <div key={index} className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-center lg:w-[40%]">
  //     <h3 className="text-2xl font-bold mb-8 text-red-800">
  //       {news.title}
  //     </h3>
  //       <p className="mb-10">
  //         {news.description}
  //       </p>
  //     {/* <p className="text-lg mb-8">{news.description}</p> */}
  //   </div>
  // ));

  return (
    <section className="relative flex flex-col justify-center items-center">
        <div className='grid place-content-center w-full h-[200px] bg-slate-300 mt-[80px]'>
            <p className='text-6xl font-black text-slate-800'>Academic</p>
        </div>

        <div className="relative flex flex-col justify-center items-center">

            <h2 className="text-center text-4xl leading-9 md:text-7xl md:leading-[1] lg:text-2xl xl:text-4xl font-black mb-8 text-green-800 mt-12">
                Academic Information
            </h2>

            <div className="relative flex gap-2 justify-center py-16">
                <div className="relative flex flex-wrap gap-20 md:gap-32 lg:gap-14 justify-center items-center h-full px-20 lg:px-40 md:flex-row md:items-center">
                    <div className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-left lg:w-full items-center">
                        <h3 className="text-3xl text-center font-black mt-10 mb-20 text-red-800">
                            Our Fee Structure
                        </h3>
                        <Image
                            className="object-contain w-full"
                            src="/images/academics/fee_structure.jpg"
                            alt="Fee Structure"
                            width={600}
                            height={300}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="relative flex gap-2 justify-center py-8">
                <div className="relative flex flex-wrap gap-20 md:gap-32 lg:gap-14 justify-center items-center h-full px-20 md:flex-row md:items-center">
                    <div className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-left lg:w-full items-center">
                        <h3 className="text-3xl font-black mb-8 text-red-800">
                        Admission notification <br/><span className='text-xl font-bold text-slate-700'>(for Session 2024-25)</span>
                        </h3>

                        <h3>Admission Open</h3>

                        <ul className="mb-2">
                            <li><i className="fa fa-minus" aria-hidden="true"></i> for classes - Nursery LKG, UKG, - Std: I, II, & III</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>

  </section>
  )
}

export default Academic
