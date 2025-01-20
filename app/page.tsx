'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [isDescriptionOpen, setIsDescriptionOpen]  = useState(false);

  const homeContent: { title: string; description: string; image: string; }[] = [
    {
      title: "Padma Shri Dr. Jamun Singh Soy",
      description: "This day symbolizes a new beginning, not only for the students who walk through our doors but for the entire community that believes in the transformative power of education. As we inaugurate this school, we also invite the community to join us in this collective endeavor. We must work together—parents, educators, communities, and leaders—to ensure that every child has access to the opportunities and resources needed to thrive. As a community, we must ensure that education remains inclusive, equitable, and empowering for all. Let us build an environment where every child, regardless of background, can pursue their dreams and contribute meaningfully to the world.",
      image: "/images/home/img6.jpeg", // Provide a proper image path or URL
    }
  ];

  type Content = {
    title: string;
    description: string;
    link: string;
    image?: string;
  };

  const latestNews: Content[] = [
    {
      title: "नई शिक्षा नीति को मिली, केन्द्रीय कैबिनेट की मंजूरी।",
      description: "Kolhan Model Public School which has been established on year 2024 under the directorship of …………………., This School .....",
      link: "/LatestNews",
      image: ""
    },
    {
      title: "Parent Teacher Meeting",
      description: "23 दिसम्बर  का PTM  meeting  का विडिओ  KMPS  के हमारे बच्चों  की प्रगति बहुत सराहनीय  है,  जो निश्चित ही प्राचार्य श्री राजेन्द्र बोदरा जी,  श्री योगेन्द्र मुंडरी  जी , शिक्षिकाएँ और स्कूल स्टाफ के मेहनत का नतीजा .....",
      link: "/LatestNews"
    },
    // {
    //   title: "",
    //   description: "अशिक्षा की वजह से हमारे गांवों की जनसंख्या घट रही है, कोरोना वायरस की वजह से एक मौत नहीं हुई, मगर मलेरिया, दस्त, तपेदिक की वजह से मौतें ज्यादा होती हैं । जब वो अस्पताल जाते तो communication नहीं कर पाते,उनकी मौत की वजह गलत इलाज होती है। .....",
    //   link: "/LatestNews"
    // },
    // {
    //   title: "",
    //   description: "आदिवासी समाज को स्वस्थ, शिक्षित, और सांस्कृतिक रूप से संपन्न होना चाहिए। इसके लिए निम्नलिखित बिंदुओं पर ध्यान दिया जाना चाहिए : शिक्षा : सभी बच्चों को गुणवत्तापूर्ण शिक्षा मिलनी चाहिए ताकि वे अपने भविष्य को संवार सकें और समाज को प्रगति पर ले जा सकें। स्वास्थ्य .....",
    //   link: "/LatestNews"
    // },
    {
      title: "",
      description: "In continuation to it and experiencing the turbulence of Teachers and other KMPS staff availability, let us invite applications for Teachers, Nurse,Security guards and Cooks for conducting selection interview in the month of January after 20th,2025 so that we are empowered .....",
      link: "/LatestNews"
    },
  ]

  const gallery = [
    {
      name: "Image 1",
      location: "/images/gallery/img1.jpg",
    },
    {
      name: "Image 2",
      location: "/images/gallery/img2.jpg",
    },
    {
      name: "Image 3",
      location: "/images/gallery/img3.jpg",
    },
    {
      name: "Image 4",
      location: "/images/gallery/img4.jpg",
    },
  ]

  // const maxLength = 150;

    // const latestNewsContent = latestNews.map((news, index) => (
    //   <div key={index} className="w-full border-2 border-slate-500 rounded-md bg-slate-100 px-20 py-10 text-center lg:w-[40%]">
    //     <h3 className="text-2xl font-bold mb-8 text-red-800">
    //       {news.title}
    //     </h3>
    //       <p className="mb-10">
    //         {news.description.length <= maxLength
    //           ? news.description
    //           : `${news.description.slice(0, maxLength)}...`}
    //       </p>
          
    //       <a
    //         className="bg-red-800 px-8 md:px-10 lg:px-8 xl:px-20 py-4 rounded-md text-white mt-8 text-sm md:text-md lg:text-lg hover:bg-red-900"
    //         href={news.link}
    //       >
    //         Read More
    //       </a>
          
    //       <a
    //         className="bg-red-800 px-8 md:px-10 lg:px-8 xl:px-20 py-4 rounded-md text-white mt-8 text-sm md:text-md lg:text-lg hover:bg-red-900"
    //         href={news.link}
    //       >
    //         Read More
    //       </a>
          
        
    //     {/* <p className="text-lg mb-8">{news.description}</p> */}
    //   </div>
    // ));

      const handleHomeContent = homeContent.map((item, index) => (
        <div key={index} className="w-full">
          <Image 
            className="object-contain w-full rounded-md"
            alt={item.title}
            src={item.image}
            width={600}
            height={300}
          />
          <h3 className="text-2xl font-bold my-8">
            {item.title}
          </h3>
          <p className={`w-full transition-all duration-500 ease-in-out ${ isDescriptionOpen ? "h-auto" : "h-16 overflow-hidden" }`} >
            {
              item.description.length <= 50 || isDescriptionOpen
                ? item.description
                : item.description.slice(0, 50) + "... "
            }
          </p>
          <button
            className="bg-green-800 px-8 md:px-10 lg:px-8 xl:px-20 py-4 rounded-md text-white mt-8 text-sm md:text-md lg:text-lg hover:bg-green-900"
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          >
            Know More
          </button>
        </div>
      ));

    

    const galleryContent = gallery.map((item, index) => (
      <div key={index} className="w-full border-2 border-white rounded-md text-center md:w-[40%] lg:w-[20%]">
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
      <main className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start">

         {/* ============ Hero Section ============ */}
        <section className="relative w-full min-h-[400px] mt-[80px]">
          <div className="relative flex flex-col justify-center items-center w-full h-full bg-[url('/images/bg.jpeg')] bg-contain bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gray-950 opacity-90" />
            <div className="relative flex gap-2 justify-center">
              <div className="relative flex flex-col-reverse  flex-wrap gap-20 md:gap-32 justify-center items-center h-full px-20 py-36 md:flex-row md:items-center">
                <div className="w-full md:w-[50%] lg:w-[40%] text-center md:text-left">
                  <h1 className="text-white font-black text-md md:text-5xl lg:text-6xl" >The Best  <br/><span className="text-yellow-500 font-black text-5xl lg:text-8xl">Model Public School</span><br /><span className="font-black text-5xl lg:text-6xl">in Kolhan</span></h1>
                </div>
                <div className="object-cover rounded-md border-8 shadow-md border-white overflow-hidden w-full md:w-[50%] lg:w-[32%]">
                  <Image
                    className="object-cover w-full h-full"
                      src="/images/bg.jpeg"
                      alt="KMPS School Image"
                      width={500}
                      height={250}
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Intro Section */}
        {/* ============ Intro Section ============ */}
        <section className="relative w-full min-h-[400px]">
          <div className="relative flex flex-col justify-center items-center w-full h-full bg-white">
            
            <div className="relative flex gap-2 justify-center py-16">
              <div className="relative flex flex-col-reverse  flex-wrap gap-6 lg:gap-8 justify-center items-center h-full px-20 md:py-10 lg:flex-row md:items-center">
                <div className="w-full lg:w-[50%] flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                  <p className="text-xl font-bold">Primary & Secondary School</p>
                  <h2 className="text-4xl leading-9 md:text-7xl md:leading-[1] lg:text-3xl xl:text-6xl font-black mb-4 text-green-800">
                    KOLHAN MODEL PUBLIC SCHOOL
                  </h2>
                  <h3 className="text-2xl lg:text-lg xl:text-2xl font-bold mb-8">(Co-ed 10+2 English Medium School)
                  - A Unit of KECS, Reg No: 154/2023 -</h3>
                  <p 
                    className="text-lg lg:text-sm xl:text-lg mb-8"
                  >
                    {"Kolhan Model Public School (KMPS) is a co-educational English-medium institution established in 2024 in Basakuti, Khutpani, Jharkhand. KMPS was inaugurated on April 1, 2024, in a ceremony attended by numerous intellectuals from the Ho community, marking a significant step toward educational advancement in the region. KMPS is a Kolhan Education and Charitable Society (KECS) unit, registered under Reg No: 154/2023. The school aims to provide a quality education that aligns with standard curriculum requirements while integrating elements of tribal knowledge and wisdom. The institution is dedicated to empowering young students from Jharkhand, particularly those from the Ho and Munda tribes, by offering comprehensive educational opportunities. The school's facilities include a library, computer lab, and science lab, providing students with essential resources for their academic development. "}
                  </p>
                  <div className="mb-16 lg:mb-8 xl:mb-16">
                    <table>
                      <thead>
                        <tr>
                          <th className="text-2xl font-bold">Our School is Facilitated With</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Library</td>
                        </tr>
                        <tr>
                          <td>Computer Lab</td>
                        </tr>
                        <tr>
                          <td>Science Lab</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Link className="relative bg-green-800 px-20 py-4 rounded-md text-white mt-8 lg:mt-1 hover:bg-green-900" href="/about"> Know More </Link>
                </div>
                <div className="grid place-items-center w-full h-full md:w-[60%] xl:w-[40%]">
                    <Image
                      className="object-contain w-[80%] h-[80%] lg:w-[80%] lg:h-[80%]"
                      src="/images/logo/school_logo.png"
                      alt="KMPS School Image"
                      width={500}
                      height={250}
                    />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section 
          className="block px-20 w-full"
        >
          <div
            className="block  border-2 border-red-500 w-full"
          >
            <p>{ handleHomeContent }</p>
          </div>
        </section>

        <div className="w-full flex flex-col justify-center items-center">
                    <div
                      className="flex flex-col justify-center items-center bg-slate-50 rounded-sm px-6 py-8 text-center w-full lg:w-[600px] xl:w-[800px] h-full"
                    >
                      <Image
                        className='object-contain w-full mb-8'
                        src="/images/latestNews/admissionOpen.jpeg"
                        alt="Holiday List"
                        width={600}
                        height={300}
                      />
                      <a
                        className="bg-green-800 px-8 py-3 rounded-md text-white hover:bg-green-900"
                        href="/LatestNews"
                      >
                        Know More
                      </a>
                    </div>
                    <div
                      className="flex flex-col justify-center items-center bg-slate-50 rounded-sm px-6 py-8 text-center w-full lg:w-[600px] xl:w-[800px] h-full"
                    >
                      <Image
                        className='object-contain w-full mb-8'
                        src="/images/latestNews/recruitment.jpeg"
                        alt="Holiday List"
                        width={600}
                        height={300}
                      />
                      <a
                        className="bg-green-800 px-8 py-3 rounded-md text-white hover:bg-green-900"
                        href="/LatestNews"
                      >
                        Know More
                      </a>
                    </div>

                    
        </div>

        

        {/* ============ Latest News Section ============ */}

      
        <div className="relative flex gap-2 justify-center bg-slate-50 py-16">
          <div className="relative flex gap-20 md:gap-32 lg:gap-14 justify-center items-center h-full px-20 py-10 md:flex-row">

            

              <div className="relative flex gap-2 justify-center bg-slate-50 py-16">
                <div className="relative flex flex-wrap gap-8 md:gap-8 lg:gap-14 justify-center items-center h-full px-10 md:flex-row">
                  <div className="w-full text-center">
                    <p className="text-md font-bold md:text-xl">Information about School</p>
                    <h2 className="text-4xl font-black text-red-800 md:text-6xl mb-16">Latest News</h2>
                  </div>
                  <div className="flex flex-col justify-center items-center flex-wrap gap-6 lg:flex-row w-full">
                    

                      {latestNews.map((news, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center bg-slate-50 border-2 border-slate-500 rounded-sm px-6 py-8 text-center w-full md:w-[300px] h-full"
                      >
                        <h3 className="text-2xl font-bold mb-4">{news.title}</h3>
                        <p className="text-lg mb-4">{news.description}</p>
                        <a
                          className="bg-green-800 px-8 py-3 rounded-md text-white hover:bg-green-900"
                          href={news.link}
                        >
                          Know More
                        </a>
                      </div>
                      ))}
                  </div>
                  

                 
                </div>
              </div>

          </div>
        </div>

        {/* ============ Gallery Section ============ */}

        <section className="relative w-full min-h-[400px]">
          <div className="relative flex flex-col justify-center items-center w-full h-full bg-white">
            
            <div className="relative flex gap-2 justify-center flex-wrap">
              <div className="relative flex flex-wrap gap-10 md:gap-10 lg:gap-8 justify-center items-center h-full px-20 py-10 md:flex-row md:items-center">
                <div className="w-full">
                  {/* <p className="text-xl font-bold">Information abut School</p> */}
                  <h2 className="text-6xl font-black text-green-800">Gallery</h2>
                </div>
                {galleryContent}
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
