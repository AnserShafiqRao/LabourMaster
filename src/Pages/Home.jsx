import React from 'react'
import './styles/style.css'
import Image1 from '../Images/Home/home-2.jpg';
import Video1 from '../Images/Home/home-video.mp4';
import Video1_Mobile from '../Images/Home/home-video-mobile.mp4';

const Home = () => {
  return (
    <div className='w-full flex flex-col'>
      {/* Section 1 */}
      <div className='flex flex-col justify-center lg:items-start w-full home-section-1 lg:min-h-[90vh]'>
        <div className='flex flex-col items-start home-section1-inner'>
          <h3 className='lg:text-[1.7vw] lg:font-[600] lg:capitalize lg:tracking-[0.5px] text-[var(--white-color)] lg:leading-9'>
            Exploring to <span className='text-[var(--golden-color)] underline italic tracking-[1px]'>get best candidate</span> options? 
          </h3>
          <h4 className='lg:text-[1.2vw] lg:font-[400] text-[var(--white-color)]'>Let's work together to strengthen your team and drive success.</h4>
          <button className='lg:py-2 lg:px-6 lg:mt-[3vh] font-[600] rounded-xl tracking-[0.5px] bg-[var(--golden-color)] hover:bg-[var(--blackish-golden-color)] hover:text-[var(--golden-color)] hover-effect'>Explore Candidates</button>
          
          <h3 className='lg:mt-8 lg:text-[1.7vw] lg:font-[600] lg:capitalize lg:tracking-[0.5px] text-[var(--white-color)] lg:leading-9'>
            Looking to <span className='text-[var(--golden-color)] underline italic tracking-[1px]'>get best job</span> options to get highlight? 
          </h3>
          <h4 className='lg:text-[1.2vw] lg:font-[400] text-[var(--white-color)]'>Explore the latest and finest job openings across Canada by staying connected with us.</h4>
          <button className='lg:py-2 lg:px-6 lg:mt-[3vh] font-[600] rounded-xl tracking-[0.5px] bg-[var(--golden-color)] hover:bg-[var(--blackish-golden-color)] hover:text-[var(--golden-color)] hover-effect'>Searching for Jobs</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className='home-section-2 flex flex-col justify-center lg:items-start w-full lg:min-h-[80vh]'>
        <div className='home-section2-inner flex flex-row px-[5vw] justify-evenly items-center'>
          <div className='max-w-[50%] pr-[5%]'>
              <h2 className='lg:text-[1.1vw] lg:font-[600] capitalize'>What we provides?</h2>
              <h4 className='lg:text-[1.8vw] lg:leading-7 lg:font-[600] capitalize tracking-[0.75px] text-[var(--dark-golden-color)]'>Matching Top Talent with Leading Employers for Optimal Success</h4>
              <p className='text-[var(--dark-black-color)] lg:text-[1.1vw]'>Discover your ideal employer, perfectly aligned with your skills and expertise. At Labour Master Solutions, we leverage our professional know-how to help businesses recruit with precision. Our advanced search and selection tools enable us to swiftly identify and secure top talent, ensuring a perfect fit for your business needs. The quality of our candidates is unparalleled. We guarantee our ability to identify and deliver the finest talent available in the market today, helping your business thrive with the best in the industry.</p> 
          </div>
          <div className='max-w-[40%] block p-0 shadow-lg rounded-3xl'>
              <img className='w-full rounded-3xl' 
              src={Image1} alt='Labour Master Matching Top Talent' />
          </div>
        </div>
      </div>

      {/* Section 3 with Video Background for desktop */}
      <div className='video-background-container hideOnMobile'>
        <video autoPlay muted loop className='video-background hideOnMobile'>
          <source src={Video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='home-section3  flex flex-col min-h-auto items-center justify-end lg:w-full lg:min-h-[80vh] mx-auto shadow-md'>
          
          <h2 className='text-[7vw] mb-1 lg:text-[2.2vw] lg:leading-7 lg:font-[600] capitalize tracking-[1px] text-[var(--golden-color)] lg:w-full lg:text-center lg:mb-6'>How We Delivers?</h2>
          
          <div className='flex flex-col lg:flex-row w-[90%]'>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Tailored Recruitment<br className='hideOnMobile'/> Solutions</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We collaborate closely with you to design recruitment strategies that align perfectly with your business objectives.</p>
            </div>
            
            <div className='flex flex-col w-full py-2  lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Recruitment and <br className='hideOnMobile'/>Screening</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We expedite the recruitment process by sourcing and screening candidates from our broad network to match your business needs.</p>
            </div>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Effective Talent <br className='hideOnMobile'/>Placement</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>By providing a pre-vetted shortlist and working quickly to fill vacancies, we help sustain your productivity, even during the busiest periods.</p>
            </div>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Workplace Readiness <br className='hideOnMobile'/>Training</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We ensure that new hires are fully trained and ready for their roles from the start, with a priority on maintaining a safety-first mindset.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='home-section-3-mobile hideOnDesktop'>
        <video autoPlay muted loop className='video-background shadow-lg'>
          <source src={Video1_Mobile} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='home-section3 flex flex-col min-h-auto items-center justify-end mx-auto'>
          
          <h2 className='text-[7vw] mb-1 font-[600] capitalize tracking-[1px] text-[var(--dark-golden-color)] '>How We Delivers?</h2>
          
          <div className='flex flex-col w-[90%]'>
            
            <div className='flex flex-col w-full py-2 '>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Tailored Recruitment<br className='hideOnMobile'/> Solutions</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We collaborate closely with you to design recruitment strategies that align perfectly with your business objectives.</p>
            </div>
            
            <div className='flex flex-col w-full py-2  '>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Recruitment and <br className='hideOnMobile'/>Screening</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We expedite the recruitment process by sourcing and screening candidates from our broad network to match your business needs.</p>
            </div>
            
            <div className='flex flex-col w-full py-2'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Effective Talent <br className='hideOnMobile'/>Placement</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>By providing a pre-vetted shortlist and working quickly to fill vacancies, we help sustain your productivity, even during the busiest periods.</p>
            </div>
            
            <div className='flex flex-col w-full py-2 '>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] lg:leading-9'>Workplace Readiness <br className='hideOnMobile'/>Training</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We ensure that new hires are fully trained and ready for their roles from the start, with a priority on maintaining a safety-first mindset.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Section 4 */}

    </div>
  )
}

export default Home
