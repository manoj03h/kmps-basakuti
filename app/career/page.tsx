'use client'
import React from 'react'

const Career = () => {

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
            <p className='text-6xl font-black text-slate-800'>Career</p>
        </div>

        <div className="relative flex flex-col justify-center items-center">

            <h2 className="text-center text-4xl leading-9 md:text-7xl md:leading-[1] lg:text-2xl xl:text-4xl font-black mb-8 text-green-800 mt-12">
                Requirements
            </h2>

            <div className="relative flex gap-2 justify-center py-16">
                <div className="relative flex flex-wrap gap-20 md:gap-32 lg:gap-14 justify-center items-center h-full px-20 lg:px-40 md:flex-row md:items-center">
                    <div className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-left lg:w-full items-center">
                        <h3 className="text-3xl text-center font-black mt-10 mb-20 text-red-800">
                            Required
                        </h3>

                        <p className='text-xl mb-6 font-bold'>
                        KOLHAN MODEL PUBLIC SCHOOL (KMPS) is inviting applications for the following 
positions. We are looking for motivated, skilled, and passionate individuals to join our 
school community. The available positions are:
                        </p>

                            
                            
                        <div className='mb-6'>
                            <dl>
                                <dt className='text-xl font-bold text-red-700'> Primary School Teachers </dt>
                                <dd>
                                    <ol className='pl-8'>
                                        <li className='pl-2 list-disc'>
                                            {"Bachelor's or Master's degree."}
                                        </li>

                                        <li className='pl-2 list-disc'>
                                            {"B.Ed. (Bachelor of Education) is mandatory."}
                                        </li>

                                        <li className='pl-2 list-disc'>
                                            Prior teaching experience at the primary school level will be preferred.
                                        </li>
                                    </ol>
                                </dd>
                            </dl>
                        </div>

                        <div className='mb-6'>
                            <dl>
                                <dt className='text-xl font-bold text-red-700'>School Nurse</dt>
                                <dd>
                                    <ol className='pl-8'>
                                        <li className='pl-2 list-disc'>
                                            Qualifications:
                                            <ol>
                                                <li className='pl-2 list-decimal'>
                                                    Diploma or Degree in Nursing from a recognized institution.
                                                </li>
                                                <li className='pl-2 list-decimal'>
                                                    Experience in a school environment is preferred. 
                                                </li>
                                            </ol>
                                        </li>

                                        <li className='pl-2 list-disc'>
                                            Responsibilities: 
                                            <ol>
                                                <li className='pl-2 list-decimal'>
                                                    Provide first aid and medical assistance to students and staff.
                                                </li>
                                                <li className='pl-2 list-decimal'>
                                                Maintain student health records and communicate with parents regarding health concerns. 
                                                </li>
                                                <li>
                                                    Ensure a clean and safe environment regarding student health.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </dd>
                            </dl>
                        </div>

                        <div className='mb-6'>
                            <dl>
                                <dt className='text-xl font-bold text-red-700'>Security Guard</dt>
                                <dd>
                                    <ol className='pl-8'>
                                        <li className='pl-2 list-disc'>
                                                {"Qualifications:"}
                                            <ol>
                                                <li className='pl-2 list-decimal'>
                                                    Prior experience in security roles, especially in an educational institution.
                                                </li>
                                            </ol>
                                        </li>

                                        <li className='pl-2 list-disc'>
                                            {"Responsibilities: "}
                                            <ol>
                                                <li className='pl-2 list-decimal'>
                                                    Ensure the safety and security of the school premises.
                                                </li>
                                                <li className='pl-2 list-decimal'>
                                                    Monitor visitor entry, supervise grounds, and assist with any emergency situations. 
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </dd>
                            </dl>
                        </div>

                        <div className='mb-6'>
                            <dl>
                                <dt className='text-xl font-bold text-red-700'>Cooks</dt>
                                <dd>
                                    <ol className='pl-8'>
                                        <li className='pl-2 list-disc'>
                                            Qualifications:
                                            <ol>
                                                <li className='pl-2 list-decimal'>
                                                    Experience in cooking meals for large groups. 
                                                </li>
                                                <li className='pl-2 list-decimal'>
                                                    Knowledge of hygiene, food safety practices, and nutrition.
                                                </li>
                                            </ol>
                                        </li>

                                        <li className='pl-2 list-disc'>
                                            Responsibilities: 
                                            <ol>
                                                <li className='pl-2 list-decimal'>
                                                    Ensure the safety and security of the school premises. 
                                                </li>
                                                <li className='pl-2 list-decimal'>
                                                    Maintain cleanliness and hygiene in the kitchen and storage areas.
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </dd>
                            </dl>
                        </div>

                        
                        <h4 className="mb-10">- Download Pdf for above details:</h4>

                        <a className="mt-10  px-10 py-4 bg-red-900 rounded-md text-white" href="images/notification/recruitments/vacancy.pdf" download="admission_notice_jan_2024.pdf">Download PDF</a>
                        

                        
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

export default Career
