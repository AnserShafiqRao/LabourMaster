import React from 'react'
import './styles/style.css'
import img1 from '../Images/Home/home-1.jpg';


import Image1 from '../Images/Home/home-2.jpg';
import Video1 from '../Images/Home/home-video.mp4';
import Video1_Mobile from '../Images/Home/home-video-mobile.mp4';
import Image2 from '../Images/Home/home-3.jpg';
import Image2_Mobile from '../Images/Home/home-3-mobile.jpg';
import Image3 from '../Images/Home/home-4.jpg'
import Image4 from '../Images/Home/home-5.jpg'
import Popup from '../Components/PopUpBtn/PopUp';
import { Link } from 'react-router-dom';


const industryList = [
  {
    icons: '/IndustryIcons/Automotive.png',
    bgImg: 'automotive',
    name: 'Automotive',
    roles: 'Sales analyst, Parts advisor, Drive thru attendant, Mechanical engineer, etc..',
    focus:'Understanding industry standards and project deadlines to source candidates who meet specific automotive needs.'
  },
  {
    icons: '/IndustryIcons/Construction.png',
    bgImg: 'construction',
    name: 'Construction',
    roles: 'Site superintendent, Estimator, Land developer, Land surveyor, Quality Engineer, etc..',
    focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
  },
  {
    icons: '/IndustryIcons/Food.png',
    bgImg: 'food',
    name: 'Food',
    roles: 'Skilled labor, project managers, safety compliance personnel.',
    focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
  },
  {
    icons: '/IndustryIcons/Greenhouse.png',
    bgImg: 'greenhouse',
    name: 'Green House / Farms',
    roles: 'Skilled labor, project managers, safety compliance personnel.',
    focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
  },
  {
    icons: '/IndustryIcons/Logistics.png',
    bgImg: 'logistics',
    name: 'Logistics',
    roles: 'Skilled labor, project managers, safety compliance personnel.',
    focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
  },
  {
    icons: '/IndustryIcons/Manufacturing.png',
    bgImg: 'manufacturing',
    name: 'Manufacturing',
    roles: 'General labourer, Forklift operator, Maintenance technician, HVAC technician, Machine operator, Test technician, SMT Operator, etc..',
    focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
  },
  {
    icons: '/IndustryIcons/Pharma.png',
    bgImg: 'pharmaceutical',
    name: 'Pharmaceutical',
    roles: 'Nursing, Test lab operator, Pharmacist, Biochemistry, Microbiology, Protein chemistry, etc.. ',
    focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
  },
  {
    icons: '/IndustryIcons/Warehouse.png',
    bgImg: 'warehouse',
    name: 'Warehouse',
    roles: 'Skilled labor, project managers, safety compliance personnel.',
    focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
  }
]



const Home2 = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col'>
      {/* Section 1 */}
      <div className='flex flex-row justify-center lg:min-h-[80vh] lg:items-center w-full'>
        <div className='flex flex-col justify-center w-[50%] max-w-[50%] mr-10'>
            <h5 className='bg-neutral-700 w-fit tracking-wide px-4 py-1 rounded-[20px] text-stone-50 text-[0.8rem] lg:mb-3'>Save on Payroll, Not on Quality</h5>
            <h3 className='text-[2.7vw] font-[700] tracking-wide capitalize '>Pre-Trained virtual assitants ready to fuel your digital marketing agency's growth</h3>
            <div className='flex flex-row mt-6'>
                <button className='bg-[var(--dark-golden-color)] rounded-[30px] px-8 py-4 text-[1.3vw] font-[600] capitalize text-stone-50 tracking-wide'>Agency scale strategy session</button>
                <button className='ml-6 text-[1.4vw] font-[700] capitalize underline  tracking-wide'>Explore roles</button>
            </div>
            
        </div>

        <div className='w-[50%] overflow-hidden'>   
            <img src={img1} alt='labour master' className='rounded-[20px]'/>
        </div>
      </div>

      {/* Section 2 */}
      <div className='home-section-2 flex flex-col justify-start items-start my-8 lg:mb-10 lg:items-start w-full lg:min-h-[80vh]'>
        <div className='home-section2-inner flex flex-col-reverse lg:flex-row justify-evenly items-center'>
          
          <div className='max-w-[100%] min-h-[45vh] lg:max-w-[35%] lg:w-[35%] block p-0 shadow-lg rounded-3xl'>
              <img className='w-full object-cover lg:h-[84vh] rounded-3xl' 
              src={Image1} alt='Labour Master Matching Top Talent' />
          </div>
          
          <div className='max-w-[95%] mt-[5%] lg:mt-[0%] p-auto lg:max-w-[65%]  lg:w-[65%] lg:px-[5%]'>
              <h2 className='lg:text-[2.3vw] font-[700] tracking-wide'>Tired of the Hiring Gamble?</h2>
              <h4 className='mb-2 text-[7vw] lg:text-[1.8vw] font-[600] capitalize tracking-[0.75px] text-[var(--dark-golden-color)]'>Matching Top Talent with Leading Employers for Optimal Success</h4>
              <p className='text-[4.3vw] text-[var(--dark-black-color)] lg:text-[1.1vw]'>Discover your ideal employer, perfectly aligned with your skills and expertise. At Labour Master Solutions, we leverage our professional know-how to help businesses recruit with precision. Our advanced search and selection tools enable us to swiftly identify and secure top talent, ensuring a perfect fit for your business needs. The quality of our candidates is unparalleled. We guarantee our ability to identify and deliver the finest talent available in the market today, helping your business thrive with the best in the industry.</p> 
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
          
          <h2 className='text-[7vw] mb-1 lg:text-[2.2vw] lg:font-[600] capitalize tracking-[1px] text-[var(--golden-color)] lg:w-full lg:text-center lg:mb-6'>What We Delivers?</h2>
          
          <div className='flex flex-col lg:flex-row w-[90%]'>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] leading-auto 2xl:leading-auto lg:leading-7 lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] '>Tailored Recruitment<br className='hideOnMobile'/> Solutions</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We collaborate closely with you to design recruitment strategies that align perfectly with your business objectives.</p>
            </div>
            
            <div className='flex flex-col w-full py-2  lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] leading-auto 2xl:leading-auto lg:leading-7 lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] '>Recruitment and <br className='hideOnMobile'/>Screening</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We expedite the recruitment process by sourcing and screening candidates from our broad network to match your business needs.</p>
            </div>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] leading-auto 2xl:leading-auto lg:leading-7 lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] '>Effective Talent <br className='hideOnMobile'/>Placement</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>By providing a pre-vetted shortlist and working quickly to fill vacancies, we help sustain your productivity, even during the busiest periods.</p>
            </div>
            
            <div className='flex flex-col w-full py-2 lg:w-[25%] lg:px-6 lg:min-h-[30vh]'>
              <h3 className='text-[5vw] text-[var(--dark-black-color)] lg:text-[var(--white-color)] capitalize tracking-normal font-[600] lg:text-[1.8vw] '>Workplace Readiness <br className='hideOnMobile'/>Training</h3>
              <p className='text-[4.3vw] text-[var(--dark-black-color)]   lg:text-[var(--white-color)] lg:text-[1.0vw]'>We ensure that new hires are fully trained and ready for their roles from the start, with a priority on maintaining a safety-first mindset.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 with video for mobile */}
      <div className='home-section-3-mobile hideOnDesktop'>
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

      {/* Section 4 */}
      <div className='flex flex-col lg:flex-row lg:w-[85%] lg:mx-auto lg:mb-14'>
        {/* Industrial side pic */}
        <div className='flex lg:max-w-[30%] '>
          <img src={Image2} className='w-full hideOnMobile object-right object-cover lg:rounded-[25px]' alt='Industreis we deals' />
          <img src={Image2_Mobile} className='w-full hideOnDesktop h-[50vh] object-center object-cover' alt='Industreis we deals' />
        </div>
        <div className=' flex justify-center max-w-[95%] pl-[5vw] pr-[5vw] lg:pr-0 mt-[1%] mb-[8%] lg:mt-auto lg:mb-auto  mx-auto lg:pl-16 flex-col lg:max-w-[70%] '>
          <h3 className='mb-1 lg:mb-2 text-[7vw] lg:text-[1.8vw] lg:leading-7 font-[600] capitalize tracking-[0.75px] text-[var(--dark-golden-color)]'>Industries We Deals In</h3>
          <h4 className='text-[4.3vw] text-[var(--dark-black-color)] lg:text-[1.1vw] '>With extensive expertise in staffing solutions, Labour Master Solutions connect you with leading talent across a broad spectrum of industries, ensuring that your organization is equipped with the right professionals to drive growth and success in any sector.</h4>
          <div className='flex justify-evenly mt-4 lg:mt-6 lg:flex-row flex-wrap w-full '>
            
              {industryList.map((industry, index) =>(
                
                  <div className='flex flex-col card-background items-center rounded-3xl w-[70%] max-w-[80%] h-auto my-2 
                       lg:min-h-[23vh] lg:mx-4 lg:my-4 lg:max-w-[21%] lg:w-[21%] lg:py-0' key={index}
                      >
                      <Popup bgImg={industry.bgImg} Roles={industry.roles} Description={industry.focus}>
                        <img src={industry.icons} className='w-[15vw] lg:w-[5vw] mx-auto' alt='Icon try '/>
                        <h3 className='leading-5 text-[5.5vw] mt-4 tracking-wide lg:tracking-normal lg:text-[1.1vw] lg:mt-[2%] font-[500]'>{industry.name}<br/> Industry</h3>
                      </Popup>
                  </div>
                
              ))}
          </div>
        </div>
      
      </div>


      {/* Section 5 */}
      <div className='flex w-full flex-col lg:flex-row'>
        <div className='lg:w-[50%] lg:h-[70vh]'>
            <img src={Image3} className='h-[50vh] lg:h-[100%] lg:w-full object-cover' alt='trained and developed'/>
        </div>
        <div className=' max-w-[95%] px-8 mt-4 mb-8 lg:mt-auto lg:mb-auto lg:w-[50%] flex flex-col items-start justify-center lg:px-14'>
          <h3 className='text-[7vw]  lg:text-[1.8vw] leading-7 font-[600] capitalize tracking-[0.75px] text-[var(--dark-golden-color)] mb-2'>Commitment to Continuous Development</h3>
          <p className='text-[var(--dark-black-color)] lg:text-[1.1vw]'>At Labour Master Solutions, we encourage our roster of employees to pursue ongoing self-improvement and professional growth, adhering to clients’ GMP standards. Our company provides a professional development template to help potential hires create a roadmap for their future careers, ensuring they can contribute efficiently and safely in the workplace.</p>
          <button className='py-2 px-6 mt-[2vh] lg:mt-[3vh] font-[600] rounded-xl tracking-[0.5px] bg-[var(--blackish-golden-color)] text-[var(--golden-color)] hover-effect'><Link to={'/about-us/'}><span className='hideOnMobile'>Want To</span> Receive Talented Employees?</Link></button>
        </div>
      </div>


      {/* Section 6 */}
      <div id='section-6' className='flex w-full flex-col-reverse lg:flex-row'>
        <div className=' max-w-[95%] px-8 mt-4 mb-8 lg:mt-auto lg:mb-auto lg:w-[50%] flex flex-col items-start justify-center lg:px-14'>
          <h3 className='text-[7vw] lg:text-[1.8vw] leading-7 font-[600] capitalize tracking-[0.75px] text-[var(--dark-golden-color)] mb-2'>Connecting Talent with Top Opportunities</h3>
          <p className='text-[var(--dark-black-color)] lg:text-[1.1vw]'>At Labour Master Solutions, we are dedicated to helping you achieve your career goals. We connect you with the best job opportunities that align with your skills and aspirations. Our team offers personalized support to ensure you find roles that foster both growth and professional success. Let us be your partner in building a rewarding and successful career.</p>
          <button className='py-2 px-6 mt-[2vh] lg:mt-[3vh] font-[600] rounded-xl tracking-[0.5px] bg-[var(--blackish-golden-color)] text-[var(--golden-color)] hover-effect'><Link to={'/about-us/'}>Enroll To Seek Options?</Link></button>
        </div>
        <div className='lg:w-[50%] lg:h-[70vh]'>
            <img src={Image4} className='h-[50vh] lg:h-[100%] lg:w-full object-cover' alt='trained and developed'/>
        </div>
      </div>

      {/* Section 7 */}
      <div className='flex w-full home-section-7 last-section'>

          <div className='flex flex-col justify-center items-start text-left z-[1] w-[80%] mx-auto px-[2%] lg:px-[10%]'>
              <h3 className='text-[7vw] lg:text-[2vw] font-[700] capitalize tracking-[0.75px] text-[var(--white-color)] mb-4'>
              We are dedicated to facilitating clients' success in achieving their goals.
              </h3>
              <p className='text-[5.0vw] lg:text-[1.3vw] font-[500] capitalize tracking-[0.75px] text-[var(--white-color)] mb-4'>Whether you’re pursuing a new job or seeking the perfect candidate, we provide the expertise to help you thrive.
              </p>
              <button className=' px-6 py-2 border-2 font-[600] rounded-xl tracking-[1px] text-[var(--white-color)] bg-transparent hover-effect'><Link to={'/contact-us/'}>Contact Us</Link></button>
          </div>
      </div>
    </div>
  )
}

export default Home2
