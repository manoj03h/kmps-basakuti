'use client'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="relative flex flex-col justify-center items-start">
        <div className='grid place-content-center w-full h-[200px] bg-slate-300 mt-[80px]'>
            <p className='text-6xl font-black text-slate-800'>About Us</p>
        </div>
        <div className="relative flex flex-col justify-center items-center w-full h-full bg-white">
            <div className="relative flex gap-2 justify-center py-16">
                <div className="relative flex flex-col  flex-wrap gap-6 lg:gap-8 justify-center items-start h-full px-20 md:py-10 md:items-center">
                    <div className="grid place-items-center w-full h-full md:w-[90%] xl:w-full">
                        <Image
                            className="object-contain w-full lg:w-full"
                            src="/images/gallery/img3.jpeg"
                            alt="KMPS School Image"
                            width={500}
                            height={250}
                        />
                    </div>
                    <div className="w-full lg:w-[50%] flex flex-col justify-start items-start text-center lg:text-left lg:items-start">
                        <h2 className="text-4xl leading-9 md:text-7xl md:leading-[1] lg:text-3xl xl:text-6xl font-black mb-8 text-green-800">
                        Objectives of Kolhan Model Public School
                        </h2>
                        <h3 className="text-2xl lg:text-lg xl:text-2xl font-bold mb-8">
                            Quality Education to Students
                        </h3>
                        <p className="text-lg lg:text-sm xl:text-lg mb-8">
                         KMPS provides a quality education that meets standard curriculum requirements while incorporating elements of tribal knowledge and wisdom. This includes developing culturally relevant teaching materials and pedagogies that resonate with students.
                        </p>

                        <h3 className="text-2xl lg:text-lg xl:text-2xl font-bold mb-8">
                            Holistic Development of Students
                        </h3>
                        <p className="text-lg lg:text-sm xl:text-lg mb-8">
                        KMPS provides a well-rounded education that focuses not only on academic excellence but also on the holistic development of students, including physical fitness, emotional well-being, and character development.
                        </p>

                        <h3 className="text-2xl lg:text-lg xl:text-2xl font-bold mb-8">
                            Language preservation
                        </h3>
                        <p className="text-lg lg:text-sm xl:text-lg mb-8">
                        KMPS promotes the use and preservation of tribal languages alongside the official language, fostering pride in linguistic heritage and facilitating communication within the community.
                        </p>
                        <h3 className="text-2xl lg:text-lg xl:text-2xl font-bold mb-8">
                            Cultural Connection & Preservation of Cultural Identity
                        </h3>
                        <p className="text-lg lg:text-sm xl:text-lg mb-8">
                        KMPS preserves and promotes the rich cultural heritage of tribal communities by incorporating traditional art, language, and customs into the curriculum. Integrate tribal values, traditions, and practices into the school curriculum and activities, allowing students to connect with their cultural roots and develop a strong sense of identity. To provide opportunities to students for extra-curricular activities moving towards Centre of Excellence in sports etc. To help students acquire skills particularly those oriented to employment including self-employment. To strive to achieve the best academic standards, and excellence in sports and extra-curricular activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* <hr className='border-2 border-slate-600 w-full'/> */}
        <div className="w-full flex flex-col justify-center items-center text-center pt-16 pb-12 px-20 lg:px-40 bg-slate-50">
            <h2 className="text-4xl leading-9 md:text-7xl md:leading-[1] lg:text-3xl xl:text-6xl font-black mb-8 text-green-800">
                Vision of Kolhan Model Public School
            </h2>
            <p className="text-lg lg:text-sm xl:text-lg mb-8">
            To become a center of excellence for education, renowned for its holistic approach that blends academic rigor, cultural preservation, and community development. Strive for educational excellence that goes beyond academic achievements, encompassing the development of critical thinking, creativity, and a lifelong love for learning among students To empower future generations with knowledge, skills, and confidence to lead their communities towards sustainable prosperity while upholding their cultural values and traditions.
            </p>
        </div>
  </section>
  )
}

export default About
