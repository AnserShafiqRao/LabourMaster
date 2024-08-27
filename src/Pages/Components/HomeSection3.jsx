import React from 'react'
import '../styles/style.css'
import Video1 from '../../Images/Home/home-video.mp4';
import Video1_Mobile from '../../Images/Home/home-video-mobile.mp4';


const VideoSection = () => {
  return (
    <>
    {/* Section 3 with Video Background for desktop */}
    <div className='video-background-container hideOnMobile rounded-3xl'>
        <video autoPlay muted loop className='video-background hideOnMobile'>
          <source src={Video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='home-section3  flex flex-col min-h-auto items-center justify-end lg:w-full lg:min-h-[80vh] mx-auto shadow-md'>
          
          <h2 className='text-[7vw] mb-1 lg:text-[2.4vw] lg:font-[700] capitalize tracking-wide text-[var(--golden-color)] lg:w-full lg:text-center lg:mb-6'>What We Delivers?</h2>
          
          <div className='flex flex-col lg:flex-row w-[90%]'>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-4 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] leading-auto 2xl:leading-auto lg:leading-7 lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.7vw] '>Tailored Recruitment<br className='hideOnMobile'/> Solutions</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We collaborate closely with you to design recruitment strategies that align perfectly with your business objectives.</p>
            </div>
            
            <div className='flex flex-col w-full py-2  lg:w-[25%] lg:px-4 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] leading-auto 2xl:leading-auto lg:leading-7 lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.7vw] '>Recruitment and <br className='hideOnMobile'/>Screening</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We expedite the recruitment process by sourcing and screening candidates from our broad network to match your business needs.</p>
            </div>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-4 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] leading-auto 2xl:leading-auto lg:leading-7 lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.7vw] '>Effective Talent <br className='hideOnMobile'/>Placement</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>By providing a pre-vetted shortlist and working quickly to fill vacancies, we help sustain your productivity, even during the busiest periods.</p>
            </div>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-4 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] leading-auto 2xl:leading-auto lg:leading-7 capitalize tracking-normal font-[600] lg:text-[1.7vw] '>Workplace Readiness <br className='hideOnMobile'/>Training</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We ensure that new hires are fully trained and ready for their roles from the start, with a priority on maintaining a safety-first mindset.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 with video for mobile */}
      <div className='home-section-3-mobile hideOnDesktop rounded-3xl'>
        <video autoPlay muted loop className='video-background shadow-lg'>
          <source src={Video1_Mobile} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='home-section3 flex flex-col min-h-auto items-center justify-end mx-auto'>
          
          <h2 className='text-[7vw] mb-1 font-[600] capitalize tracking-[1px] text-[var(--dark-golden-color)] '>What We Delivers?</h2>
          
          <div className='flex flex-col w-[90%]'>
            
            <div className='flex flex-col w-full py-1 '>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] capitalize tracking-normal font-[600]'>Tailored Recruitment<br className='hideOnMobile'/> Solutions</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]'>We collaborate closely with you to design recruitment strategies that align perfectly with your business objectives.</p>
            </div>
            
            <div className='flex flex-col w-full py-1  '>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] capitalize tracking-normal font-[600]'>Recruitment and <br className='hideOnMobile'/>Screening</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]'>We expedite the recruitment process by sourcing and screening candidates from our broad network to match your business needs.</p>
            </div>
            
            <div className='flex flex-col w-full py-1'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] capitalize tracking-normal font-[600]'>Effective Talent <br className='hideOnMobile'/>Placement</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]'>By providing a pre-vetted shortlist and working quickly to fill vacancies, we help sustain your productivity, even during the busiest periods.</p>
            </div>
            
            <div className='flex flex-col w-full py-1 '>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600]'>Workplace Readiness <br className='hideOnMobile'/>Training</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]'>We ensure that new hires are fully trained and ready for their roles from the start, with a priority on maintaining a safety-first mindset.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoSection