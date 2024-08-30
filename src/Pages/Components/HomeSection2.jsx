import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom';
import Image1 from '../../Images/Home/home-2.jpg';
import { IoCheckmarkCircle as Tick } from "react-icons/io5";
import { FaArrowRight as RightArrow} from "react-icons/fa6";

const HomeSection2 = () => {
  return (
    <div className='home-section-2 flex flex-col justify-start items-start my-8 lg:mb-10 lg:items-start w-full lg:min-h-[80vh]'>
        <div className='home-section2-inner flex flex-col lg:flex-row justify-evenly items-center'>
          
          <div className='max-w-[100%] h-[40vh] lg:h-auto lg:max-w-[35%] lg:w-[35%] block p-0 shadow-lg rounded-3xl'>
              <img className='w-full h-full object-cover lg:h-[84vh] rounded-3xl' 
              src={Image1} alt='Labour Master Matching Top Talent' />
          </div>
          
          <div className='max-w-[95%] mt-[5%] lg:mt-[0%] p-auto lg:max-w-[65%]  lg:w-[65%] lg:px-[5%]'>
              <h2 className='text-[8vw] lg:text-[2.4vw] font-[700] tracking-wide'>Tired of the Hiring Struggle?</h2>
              <p className='text-[4.3vw] text-[var(--dark-black-color)] tracking-[0.1px] lg:text-[1.3vw]'>Labour Master is here to help. We connect you with top-notch, pre-vetted professionals who are ready to make an immediate impact on your team.</p> 
              
              <h4 className='mb-2 text-[7vw] lg:text-[1.9vw] font-[700] capitalize text-[var(--black-color)]'>Why Choose Labour Master?</h4>
              <div>
                <div className='flex items-start '>
                  <h3 className=' text-[5vw] lg:text-[1.3vw] text-[var(--dark-golden-color)] mt-[0.25%] mr-[0.5%]'><Tick className=''/> </h3>
                  <h5 className='text-[4.4vw] tracking-normal lg:text-[1.1vw] capitalize lg:tracking-wide'><span className='font-[700]'>Top-Notch Talent:</span> Our candidates are carefully selected to match your exact needs, ensuring immediate contribution.</h5>
                </div>
                <div className='flex items-start '>
                <h3 className=' text-[5vw] lg:text-[1.3vw] text-[var(--dark-golden-color)] mt-[0.25%] mr-[0.5%]'><Tick className=''/> </h3>
                <h5 className='text-[4.4vw] tracking-normal lg:text-[1.1vw] capitalize lg:tracking-wide'><span className='font-[700]'>Efficient Process:</span> We handle the hiring complexities, allowing your team to focus on core tasks.</h5>
                </div>
                <div className='flex items-start '>
                <h3 className=' text-[5vw] lg:text-[1.3vw] text-[var(--dark-golden-color)] mt-[0.25%] mr-[0.5%]'><Tick className=''/> </h3>
                  <h5 className='text-[4.4vw] tracking-normal lg:text-[1.1vw] capitalize lg:tracking-wide'><span className='font-[700]'>Customized Solutions:</span> Whether you need one specialist or an entire team, our services are tailored to your specific requirements.</h5>
                </div>
              </div>
              
              {/* <p className='text-[4.3vw] text-[var(--dark-black-color)] tracking-[0.1px] lg:text-[1.3vw]'>Our virtual assistants are pre-trained and ready to support your digital marketing needs. Trusted by leading agencies, they’re ready to contribute to your success. Whether it’s SEO, content creation, social media management, or analytics, they’re ready to jump in and make a tangible difference in your day-to-day giving you your time back.</p>  */}
              
              {/* <h5 className='mb-2 text-[7vw] lg:text-[1.9vw] font-[700] capitalize text-[var(--black-color)]'>Did you know virtual assistants.....</h5> */}
              <div>
                <h5 className='my-6 lg:my-2 text-[4.5vw] lg:text-[1.1vw] font-[500] capitalize tracking-wide'>Our approach saves you time, reduces hiring risks, and ensures you have the right people in place to drive your business forward.</h5>
                <h5 className='my-6 lg:my-2 text-[4.5vw] lg:text-[1.1vw] font-[500] capitalize tracking-wide'>I’d love to schedule a quick 15-minute Google Meet to discuss how we can meet your hiring needs. What time works best for you this week?</h5>
                <h5 className='my-6 lg:my-2 text-[4.5vw] lg:text-[1.1vw] font-[500] capitalize tracking-wide'>Thank you for considering Labour Master as your hiring partner.</h5>
              </div>
              <Link to={'/hire-candidates-application/'}><button className='flex flex-row items-center bg-stone-800 mt-4 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[4.5vw] lg:text-[1.3vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Hire Candidates <RightArrow  className='text-[8vw] lg:text-[3vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
          </div>


        </div>
      </div>
  )
}

export default HomeSection2