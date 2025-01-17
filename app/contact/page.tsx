'use client'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-start ">
        <div className='grid place-content-center w-full h-[200px] bg-slate-300 mt-[80px]'>
            <p className='text-6xl font-black text-slate-800'>Contact Us</p>
        </div>
        <section className="w-full flex justify-center gap-10 items-center">
            <div className="w-full flex justify-between items-start gap-20 flex-wrap px-20 py-10 mb-10">
                <div className="col-md-5 col-sm-12 w-[50%]">
                    <h2 className='text-3xl font-black text-slate-600'>School Location</h2>
                    <br/>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.562875268067!2d85.72278048558394!3d22.632792977787457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f587000b7f0d27%3A0x8fa67e55e7545815!2sKolhan%20Model%20Public%20school!5e0!3m2!1sen!2sin!4v1737142871645!5m2!1sen!2sin" 
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="col-md-6 col-sm-12 pl-2 mb-4 w-[40%]">
                <h2 className='text-3xl font-black text-slate-600'>Contact Details:</h2>
                    <br/>
                    <table className='mt-10'>
                        <tr className='flex'>
                            <th className='text-xl text-left pr-4'>Contact Us: </th>
                            <td className=''>
                                +91 7488363377 <b>(<i>Shri Rajendra Bodra</i> - Principal)</b>,
                                <br/>
                                +91 9123447818 <b>(<i>Shri Yogendra Mundri</i> - Secretary)</b>,
                                <br/>
                            </td>
                        </tr>
                        <tr className='flex mt-4'>
                            <th className='text-xl text-left pr-16'>Email: </th>
                            <td>info@kmpsbasakuti.com,
                                <br/>
                                support@kmpsbasakuti.com</td>
                            <td></td>
                        </tr>
                        <tr className='flex mt-4'>
                            <th className='text-xl text-left pr-10'>Address: </th>
                            <td>
                                Basakuti, Khutpani, West Singhbhum <br/>Jharkhand 833204</td>
                            <td></td>
                        </tr>
                    </table>
                    <br/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
