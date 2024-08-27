import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom';
import Image2 from '../../Images/Home/home-3.jpg';
import { FaArrowRight as RightArrow} from "react-icons/fa6";
const CareerRoles = () => {
  return (
    <div className='flex flex-col justify-start items-start my-8 lg:mb-10 lg:items-start w-full lg:min-h-[80vh]'>
        <h2 className='lg:text-[2.4vw] font-[700] tracking-normal capitalize'>Virtual Assistant Roles for Marketing Agencies</h2>
        <h4 className='mb-2 text-[7vw] lg:text-[1.3vw] font-[400] tracking-normal text-[var(--black-color)]'>Looking for a career? <Link className='underline text-[var(--dark-golden-color)]'>Click here</Link></h4>        
        <div className='grid center w-full gap-[5%] grid-cols-[30%_30%_30%]'>
          <div className='flex flex-col mx-4'>
            <img src={Image2} className='max-h-[38vh] object-center rounded-3xl object-cover' alt='Checking it'/>
            <div className='mx-1'>
              <h5 className='my-4 text-[1vw] text-[var(--white-color)] bg-[var(--dark-golden-color)] w-fit pt-1 pb-auto px-3 rounded-3xl '>#1 hire to start</h5>
              <h3 className='lg:text-[1.5vw] font-[700] capitalize'>Permanent Placements</h3>
              <p className='lg:text-[1.1vw] text-stone-700'>Executive assistants streamline operations and support growth for digital marketing agencies.</p>
              <Link to={'/about-us/'}><button className='flex flex-row items-center bg-stone-800 mt-6 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[1.1vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Learn More <RightArrow  className='text-[2.0vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
            </div>

          </div>
          <div className='flex flex-col mx-4'>

            <img src={Image2} className='max-h-[38vh] object-center rounded-3xl object-cover' alt='Checking it'/>
            <div className='mx-1'>
              <h5 className='my-4 text-[1vw] text-[var(--white-color)] bg-[var(--dark-golden-color)] w-fit pt-1 pb-auto px-3 rounded-3xl '>Popular add-on with EA</h5>
              <h3 className='lg:text-[1.5vw] font-[700] capitalize'>Temporary Placements</h3>
              <p className='lg:text-[1.1vw] text-stone-700'>Virtual account managers handle client communication, project timelines, and quality, supporting your digital marketing agency’s growth.</p>
              <Link to={'/about-us/'}><button className='flex flex-row items-center bg-stone-800 mt-6 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[1.1vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Learn More <RightArrow  className='text-[2.0vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
            </div>

          </div>
          <div className='flex flex-col mx-4'>

            <img src={Image2} className='max-h-[38vh] object-center rounded-3xl object-cover' alt='Checking it'/>
            <div className='mx-1'>
              <h5 className='my-4 text-[1vw] text-[var(--white-color)] bg-[var(--dark-golden-color)] w-fit pt-1 pb-auto px-3 rounded-3xl '>Ready to Scale? Start here.</h5>
              <h3 className='lg:text-[1.5vw] font-[700] capitalize'>Direct Hiring</h3>
              <p className='lg:text-[1.1vw] text-stone-700'>Virtual SDRs boost your digital marketing agency’s lead generation and sales, finding and qualifying clients to grow revenue, with scalable support for your needs.</p>
              <Link to={'/about-us/'}><button className='flex flex-row items-center bg-stone-800 mt-6 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[1.1vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Learn More <RightArrow  className='text-[2.0vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
            </div>

          </div>
          {/* <div className='flex flex-col mx-4'>

            <img src={Image2} className='max-h-[38vh] object-center rounded-3xl object-cover' alt='Checking it'/>
            <div className='mx-1'>
              <h5 className='my-4 text-[1vw] text-[var(--white-color)] bg-[var(--dark-golden-color)] w-fit pt-1 pb-auto px-3 rounded-3xl '>Ignite Brand Authority</h5>
              <h3 className='lg:text-[1.5vw] font-[700] capitalize'>Marketing Associate</h3>
              <p className='lg:text-[1.1vw] text-stone-700'>Virtual marketing associates enhance your agency’s online presence and growth by improving content, social media, and SEO, adapting their support as your needs evolve.</p>
              <Link to={'/about-us/'}><button className='flex flex-row items-center bg-stone-800 mt-6 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[1.1vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Learn More <RightArrow  className='text-[2.0vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
            </div>

          </div> */}
        </div>
      
      </div>
  )
}

export default CareerRoles