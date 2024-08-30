import React from 'react'
import '../styles/style.css'
import Video1 from '../../Images/background-video.mp4';
import { FaArrowRight as RightArrow} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const industryList = [
    {
      imgLink: '/IndustryImg/automotive.jpg',
      img: 'automotive',
      name: 'Automotive',
      description:'Our recruitment agency enhances the candidate hiring process for automotive clients by delivering specialized talent tailored to industry needs. We streamline candidate sourcing, conduct thorough screenings, and ensure a perfect match to drive your business forward.',
    },
    {
      imgLink: '/IndustryImg/construction.jpg',
      img: 'construction',
      name: 'Construction',
      description:'A recruitment agency enhances the construction hiring process by streamlining candidate selection, ensuring only qualified professionals are presented. With industry expertise and rigorous screening, we help clients build strong teams efficiently, driving project success and growth.',
    },
    {
      imgLink: '/IndustryImg/food.jpg',
      img: 'food',
      name: 'Food',
      description:'Partnering with our recruitment agency transforms your hiring process in the food industry. We streamline candidate sourcing, prescreening, and background checks, ensuring you attract top talent efficiently, so you can focus on delivering exceptional culinary experiences.',
    },
    {
      imgLink: '/IndustryImg/greenhouse.jpg',
      img: 'greenhouse',
      name: 'Green House / Farms',
      description:'Our recruitment agency streamlines the hiring process for greenhouse and farm industries by connecting you with qualified candidates who meet specific agricultural needs. We enhance efficiency and ensure you find top talent to drive your operations forward.',
    },
    {
      imgLink: '/IndustryImg/logistics.jpg',
      img: 'logistics',
      name: 'Logistics',
      description:'Partnering with a recruitment agency streamlines the hiring process in logistics, enhancing efficiency and precision. We connect you with top talent, ensuring quick placement of skilled professionals who meet your specific operational needs and boost overall performance.',
    },
    {
      imgLink: '/IndustryImg/manufacturing.jpg',
      img: 'manufacturing',
      name: 'Manufacturing',
      description:'Partnering with our recruitment agency enhances your manufacturing hiring process by streamlining candidate selection, ensuring a perfect fit for technical roles. We expedite talent acquisition, reduce hiring risks, and boost operational efficiency with pre-vetted, qualified candidates.',
    },
    {
      imgLink: '/IndustryImg/pharmaceutical.jpg',
      img: 'pharmaceutical',
      name: 'Pharmaceutical',
      description:'Partnering with a recruitment agency enhances your pharmaceutical hiring process by streamlining candidate sourcing, ensuring thorough vetting, and facilitating compliance with industry regulations. This improves hiring efficiency, accelerates candidate placement, and strengthens your team with top talent.',
    },
    {
      imgLink: '/IndustryImg/warehouse.jpg',
      img: 'warehouse',
      name: 'Warehouse',
      description:'Partnering with a recruitment agency enhances your warehouse hiring process by providing access to a pool of pre-screened candidates. Our expertise ensures efficient candidate matching, speeding up hiring and improving workforce quality for optimal operational performance.',
    }
  ]
  

const IndustriesDisplay = () => {
  return (
    <div id='our-industries' className='mb-[4vh] lg:mb-0'>
    <div className='h-[100%] video-background-container my-10 rounded-[25px] lg:rounded-xl'>
        <video autoPlay muted loop className='h-[600vh] absolute lg:h-[100%] video-background'>
          <source src={Video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='home-section3 bg-[#0000008d] lg:bg-[#0000007b] flex flex-col min-h-auto items-center justify-end lg:w-full lg:min-h-[80vh] mx-auto shadow-md'>
            <div className='z-10 flex flex-col w-full items-center py-6 lg:py-10' >
                <h3 className='text-[7vw] mb-1 lg:text-[2.4vw] font-[700] lg:font-[600] capitalize tracking-[1px] text-[var(--golden-color)] lg:w-full lg:text-center lg:mb-6'>Industries We Deals In</h3>
                <div className=' w-full flex-wrap flex flex-col lg:flex-row justify-center'>
                {
                    industryList.map((Industry, index) => (
                        <div className='w-[80%] lg:w-[25%] text-center my-3 mx-auto lg:m-6 rounded-3xl pb-6 card-background' key={index}>
                            <img className=' h-[24vh] lg:h-[30vh] w-full rounded-t-3xl object-cover' src={Industry.imgLink} alt={`${Industry.name} industry`}/>
                            <h3 className='text-[5.3vw] lg:text-[1.6vw] mx-4 font-[600] tracking-wide text-[var(--white-color)] mt-4'>{Industry.name}</h3>
                            <p className='text-[4.3vw] lg:text-[1.1vw] mx-4 font-[300] text-[var(--white-color)]'>{Industry.description}</p>
                        </div>
                    ))
                }
                </div>
                <Link to={'/hire-candidates-application/'}><button className='flex flex-row items-center bg-[var(--dark-golden-color)] mt-8 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[4.5vw] lg:text-[1.3vw] font-[600] transition-transform ease-in-out hover:bg-[#8e7333] hover:scale-[1.015]'>Hire a Candidate! <RightArrow  className='text-[8vw] lg:text-[3vw] p-2 ml-4 rounded-[50px] bg-[#b4a278]' /></button></Link>
                {/* For Setting header btn's call to section below it on home page */}
                <div id='contact-section'/>
            </div>  
        </div>
    </div>
    </div>
  )
}

export default IndustriesDisplay