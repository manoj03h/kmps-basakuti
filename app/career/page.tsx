'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Career = () => {

  const latestNews = [
    {
      title: "नई शिक्षा नीति को मिली, केन्द्रीय कैबिनेट की मंजूरी।",
      description: "Kolhan Model Public School which is going to be established this year 2024 under the directorship of …………………., This School is primarily focused to give quality education",
      link: "/latestNews/1",
      image: ""
    },
    {
      title: "नई शिक्षा नीति को मिली, केन्द्रीय कैबिनेट की मंजूरी।",
      description: "Kolhan Model Public School which is going to be established this year 2024 under the directorship of …………………., This School is primarily focused to give quality education",
      link: "/latestNews/2"
    },
    {
      title: "नई शिक्षा नीति को मिली, केन्द्रीय कैबिनेट की मंजूरी।",
      description: "Kolhan Model Public School which is going to be established this year 2024 under the directorship of …………………., This School is primarily focused to give quality education",
      link: "/latestNews/3"
    },
    {
      title: "नई शिक्षा नीति को मिली, केन्द्रीय कैबिनेट की मंजूरी।",
      description: "Kolhan Model Public School which is going to be established this year 2024 under the directorship of …………………., This School is primarily focused to give quality education",
      link: "/latestNews/4"
    },
  ]

  const latestNewsContent = latestNews.map((news, index) => (
    <div key={index} className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-center lg:w-[40%]">
      <h3 className="text-2xl font-bold mb-8 text-red-800">
        {news.title}
      </h3>
        <p className="mb-10">
          {news.description}
        </p>
      {/* <p className="text-lg mb-8">{news.description}</p> */}
    </div>
  ));

  return (
    <section className="relative flex flex-col justify-center items-center">
        <div className='grid place-content-center w-full h-[200px] bg-slate-300 mt-[80px]'>
            <p className='text-6xl font-black text-slate-800'>Career</p>
        </div>

        <div className="relative flex flex-col justify-center items-center">

            <h2 className="text-4xl leading-9 md:text-7xl md:leading-[1] lg:text-2xl xl:text-4xl font-black mb-8 text-green-800 mt-12">
                Requirements
            </h2>

            <div className="relative flex gap-2 justify-center py-16">
                <div className="relative flex flex-wrap gap-20 md:gap-32 lg:gap-14 justify-center items-center h-full px-20 md:flex-row md:items-center">
                    <div className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-left lg:w-full items-center">
                        <h3 className="text-3xl font-black mb-8 text-red-800">
                        Teachers Required <br/><span className='text-xl font-bold text-slate-700'>(for Pre-primary and primary classes)</span>
                        </h3>

                        <p className="mb-10">
                        Self Motivated and Passionate teachers needed for a high quality English Medium School
                        </p>

                        <ul className="mb-2">
                            <li><i className="fa fa-minus" aria-hidden="true"></i> 10+2 / Graduation in any qualification</li>
                            <li><i className="fa fa-minus" aria-hidden="true"></i> D.EI.ED / B.Ed / CTET Qualification</li>
                            <li><i className="fa fa-minus" aria-hidden="true"></i> Proficiency in spoken English</li>
                            <li><i className="fa fa-minus" aria-hidden="true"></i> Conversant with the Latest Teaching trends and use of Technology</li>
                        </ul>

                        <h4 className="mb-1">Important Dates</h4>
                        <ul className="mb-2">
                            <li><i className="fa fa-minus" aria-hidden="true"></i> Starting date for CV Submission <b>17-Jan-2024</b></li>
                            <li><i className="fa fa-minus" aria-hidden="true"></i> Last date for CV Submission <b>26-Jan-2024</b></li>
                            <li><i className="fa fa-minus" aria-hidden="true"></i> Date of Interview <b>26-Jan-2024</b></li>
                            <li> Sortlisted candidates will be called for the interview process on: <b>28-Jan-2024</b></li>
                        </ul>

                        <h4 className="mb-1 mt-10">
                            <i className="fa-solid fa-star-of-life">
                                &nbsp; 
                            </i>
                            <span className='mt-6 text-red-900'>
                                <b>
                                    {`*Note`}
                                </b>
                            </span>
                        </h4>

                        <ul className="mb-2">
                            <li className="pl-2">Interested Candidates may e-mail their detailed CV at <b>{"boipaisanjay108\\@gmail.com"}</b> or Whatsapp <b>{`(+91)-826-474-0590`}</b></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative flex gap-2 justify-center py-8">
                <div className="relative flex flex-wrap gap-20 md:gap-32 lg:gap-14 justify-center items-center h-full px-20 md:flex-row md:items-center">
                    <div className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-left lg:w-full items-center">
                        <h3 className="text-3xl font-black mb-8 text-red-800">
                        Admission notification <br/><span className='text-xl font-bold text-slate-700'>(for Session 2024-25)</span>
                        </h3>

                        <h3>Admission Open</h3>

                        <ul className="mb-2">
                            <li><i className="fa fa-minus" aria-hidden="true"></i> for classes - Nursery LKG, UKG, - Std: I, II, & III</li>
                        </ul>

                        <h4 className="mb-10">- Download Pdf for more details:</h4>

                        <a className="mt-10  px-10 py-4 bg-red-900 rounded-md text-white" href="images/pdf/notification/recruitment/recruitment_fot_teachers_jan_2024.pdf" download="admission_notice_jan_2024.pdf">Download PDF</a>

                    </div>
                </div>
            </div>
        </div>

  </section>
  )
}

export default Career
