import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom';
import Image1 from '../../Images/Home/home-2.jpg';
import { IoCheckmarkCircle as Tick } from "react-icons/io5";
import { FaArrowRight as RightArrow} from "react-icons/fa6";

const HomeSection2 = () => {
  return (
    <div className='home-section-2 flex flex-col justify-start items-start my-8 lg:mb-10 lg:items-start w-full lg:min-h-[80vh]'>
        <div className='home-section2-inner flex flex-col-reverse lg:flex-row justify-evenly items-center'>
          
          <div className='max-w-[100%] min-h-[45vh] lg:max-w-[35%] lg:w-[35%] block p-0 shadow-lg rounded-3xl'>
              <img className='w-full object-cover lg:h-[84vh] rounded-3xl' 
              src={Image1} alt='Labour Master Matching Top Talent' />
          </div>
          
          <div className='max-w-[95%] mt-[5%] lg:mt-[0%] p-auto lg:max-w-[65%]  lg:w-[65%] lg:px-[5%]'>
              <h2 className='lg:text-[2.4vw] font-[700] tracking-wide'>Tired of the Hiring Gamble?</h2>
              <h4 className='mb-2 text-[7vw] lg:text-[1.9vw] font-[700] capitalize text-[var(--black-color)]'>Imagine scaling without the headache</h4>
              <p className='text-[4.3vw] text-[var(--dark-black-color)] tracking-[0.1px] lg:text-[1.3vw]'>Our virtual assistants are pre-trained and ready to support your digital marketing needs. Trusted by leading agencies, they’re ready to contribute to your success. Whether it’s SEO, content creation, social media management, or analytics, they’re ready to jump in and make a tangible difference in your day-to-day giving you your time back.</p> 
              <h5 className='mb-2 text-[7vw] lg:text-[1.9vw] font-[700] capitalize text-[var(--black-color)]'>Did you know virtual assistants.....</h5>
              <div>
                <h5 className='flex items-center lg:text-[1.5vw] font-[700] capitalize tracking-wide'><Tick className='text-[var(--dark-golden-color)] mb-[0.5%] mr-[1vw]'/> Boost retention</h5>
                <h5 className='flex items-center lg:text-[1.5vw] font-[700] capitalize tracking-wide'><Tick className='text-[var(--dark-golden-color)] mb-[0.5%] mr-[1vw]'/> One VA = $300K gain</h5>
                <h5 className='flex items-center lg:text-[1.5vw] font-[700] capitalize tracking-wide'><Tick className='text-[var(--dark-golden-color)] mb-[0.5%] mr-[1vw]'/> cut payroll by 60%</h5>
              </div>
              <Link to={'/about-us/'}><button className='flex flex-row items-center bg-stone-800 mt-4 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[1.3vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Virtual Assistant Roles <RightArrow  className='text-[3vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
          </div>


        </div>
      </div>
  )
}

export default HomeSection2