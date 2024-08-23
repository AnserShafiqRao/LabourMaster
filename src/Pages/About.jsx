import React from 'react'
import './styles/style.css'
import { Link } from 'react-router-dom'
import Image1 from '../Images/AboutUs/about-2.jpg'
import Image2 from '../Images/AboutUs/about-3.jpg'
import Image3 from '../Images/AboutUs/about-4.jpg'
import Image4 from '../Images/AboutUs/about-6.png'

const CommitmentPoints = [
  'We meticulously screen candidates for availability, eligibility, and interest to ensure the perfect fit for our clients.',
  'Our pricing is transparent and competitive, offering genuine value in the industry.',
  'We provide round-the-clock customer care, available 24/7/365, ensuring continuous support.',
  'We specialize in seamless transitions from temporary to permanent hires, accommodating last-minute changes as needed.',
  'Our robust database gives us access to a wide pool of qualified candidates.',
  'Our exceptional service in Ontario has earned us a reputation for excellence.',
  'By partnering with us, you save valuable time and energy, allowing you to focus on your core business goals.'
]


const PlacementTypes = [
  {
    name:'Permanent Placement',
    description: 'We invest time in recognizing your individual skills and aspirations, pairing you with employers who are dedicated to fostering your career growth.',
    bg_Class: 'permanent'
  },
  {
    name:'Temporary Placement',
    description: 'Our temporary job placement services connect job seekers with positions that match their skills and career aspirations.',
    bg_Class: 'temporary'
  },
  {
    name:'Direct Hiring',
    description: 'We facilitate a seamless hiring process, ensuring that your skills are matched with career opportunities that offer long-term potential.',
    bg_Class: 'direct'
  }
]

const About = () => {
  return (
    <div className='w-full flex flex-col'>
      {/* Section 1 */}
      <div className='about-section-1 flex flex-col justify-center lg:items-start w-full lg:min-h-[90vh]'>
        <div className='flex flex-col items-start section-1-inner-content'>
          <h3 className=' text-[6vw] leading-7 mb-2 lg:mb-2 lg:text-[1.7vw] lg:font-[600] capitalize lg:tracking-[0.5px] text-[var(--white-color)] lg:leading-9'>
          Empowering Careers With <span className='text-[var(--golden-color)] underline italic tracking-[1px]'>Strategic Recruitment</span> Solutions </h3>
          <h4 className='text-[4.5vw] leading-6 capitalize mb-4 lg:tracking-wider lg:mb-auto lg:leading-auto lg:text-[1.2vw] lg:font-[400] text-[var(--white-color)]'>With a focus on creating impactful workforce and recruitment strategies, our expert team connects people to jobs in all states across Canada, transforming the world of work.</h4>
          <button className='py-[1%] px-4  lg:py-2 lg:px-6 lg:mt-[3vh] font-[600] rounded-xl tracking-[0.5px] bg-[var(--golden-color)] hover:bg-[var(--blackish-golden-color)] hover:text-[var(--golden-color)] hover-effect'>Explore Candidates</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex flex-col text-center self-center justify-center lg:min-h-[35vh] lg:w-[75%]'>
          <h4 className='text-[4vw] lg:text-[1.1vw] font-[600] capitalize'>Why labour master solutions?</h4>
          <h3 className='mb-2 text-[7vw] lg:text-[1.8vw] lg:leading-7 font-[600] capitalize tracking-[0.75px] text-[var(--dark-golden-color)]' >Your Trusted Partner in Human Resource Excellence</h3>
          <p className='text-[4.3vw] text-[var(--dark-black-color)] lg:text-[1.1vw]'>Labour Master Solutions is committed to delivering top-notch staffing services. With a strategic approach, we quickly bring the best candidates to your business, offering experienced and dedicated temporary staff tailored to your unique needs.</p>
      </div>

      {/* Section 3 */}
      <div className='flex flex-col justify-center lg:items-start lg:my-2 w-full'>
        <div className='flex flex-col-reverse lg:flex-row px-[5vw] justify-evenly items-center'>
          <div className='max-w-[95%] mt-[5%] lg:mt-[0%] p-auto lg:max-w-[50%] lg:pr-[5%]'>
              <h4 className='mb-2 text-[7vw] lg:text-[1.8vw] lg:leading-7 font-[600] capitalize tracking-[0.75px] text-[var(--dark-black-color)]'>
                <span className=' text-[var(--dark-golden-color)] font-[700]'>Our Mission:</span> Supporting Professional Aspirations with Integrity and Respect</h4>
              <p className='text-[4.3vw] text-[var(--dark-black-color)] lg:text-[1.1vw]'>Labour Master Solution is a leading provider of tailored and efficient staffing solutions. Our objective is to deliver high-quality services in a cost-effective manner. We are dedicated to supporting our job seekers in achieving their professional aspirations with integrity and respect. Our team is commitied to providing the best service and results to our clients.</p> 
              <button className='py-2 px-6 mt-[2vh] font-[600] capitalize rounded-xl tracking-[0.5px] bg-[var(--blackish-golden-color)] text-[var(--golden-color)] hover-effect'><Link to={'/our-services/'}>Enroll for job options</Link></button>
          </div>
          <div className='max-w-[100%] min-h-[45vh] lg:max-w-[40%] block p-0 shadow-lg rounded-3xl'>
              <img className='w-full h-[45vh] object-cover lg:h-[45vh] rounded-3xl' 
              src={Image1} alt='Labour Master Matching Top Talent' />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className='flex flex-col justify-center lg:items-start lg:my-2 w-full'>
        <div className='flex flex-col-reverse lg:flex-row-reverse px-[5vw] justify-evenly items-center'>
          <div className='max-w-[95%] mt-[5%] lg:mt-[0%] p-auto lg:max-w-[50%] lg:pr-[5%]'>
              <h4 className='mb-2 text-[7vw] lg:text-[1.8vw] lg:leading-7 font-[600] capitalize tracking-[0.75px] text-[var(--dark-black-color)]'>
                <span className=' text-[var(--dark-golden-color)] font-[700]'>Our Vision:</span> Establishing Long-Term Success Through Talent and Trust</h4>
              <p className='text-[4.3vw] text-[var(--dark-black-color)] lg:text-[1.1vw]'>At Labour Master Solution, vision is to establish and maintain a long-term partnership with all of our clients by delivering exceptional recruitment services. Our Vision is to cultivate a talented pool of candidates to ensure proper placement and alignment of personnel with job requirements. By continiously providing the best recruitment experience, we aim to exceed our clients' expectations.</p> 
              <button className='py-2 px-6 mt-[2vh] font-[600] capitalize rounded-xl tracking-[0.5px] bg-[var(--blackish-golden-color)] text-[var(--golden-color)] hover-effect'><Link to={'/our-services/'}>Explore our services</Link></button>
          </div>
          <div className='max-w-[100%] min-h-[45vh] lg:max-w-[40%] block p-0 shadow-lg rounded-3xl'>
              <img className='w-full h-[45vh] object-cover lg:h-[45vh] rounded-3xl' 
              src={Image2} alt='Labour Master Matching Top Talent' />
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className='flex flex-col justify-center lg:items-start lg:my-2 w-full'>
        <div className='flex flex-col-reverse lg:flex-row px-[5vw] justify-evenly items-center'>
          <div className='max-w-[95%] mt-[5%] lg:mt-[0%] p-auto lg:max-w-[50%] lg:pr-[5%]'>
              <h4 className='mb-2 text-[7vw] lg:text-[1.8vw] lg:leading-7 font-[600] capitalize tracking-[0.75px] text-[var(--dark-black-color)]'>
                <span className=' text-[var(--dark-golden-color)] font-[700]'>Our Values:</span> Fostering an Open and Trustworthy Recruitment Process</h4>
              <p className='text-[4.3vw] text-[var(--dark-black-color)] lg:text-[1.1vw]'>At Labour Master Solution, we strive to ensure the satisfaction of not only our clients but also our job seekers. Our recruiters work diligently to ensure alignment of both the clients' and candidates' needs. We are committed to maintaining a transparent workplace environment and ensure that the recruitment process is conducted in an open and honest manner.</p> 
              <button className='py-2 px-6 mt-[2vh] font-[600] capitalize rounded-xl tracking-[0.5px] bg-[var(--blackish-golden-color)] text-[var(--golden-color)] hover-effect'><Link to={'/our-services/'}>Seek talented employees</Link></button>
          </div>
          <div className='max-w-[100%] min-h-[45vh] lg:max-w-[40%] block p-0 shadow-lg rounded-3xl'>
              <img className='w-full h-[45vh] object-cover lg:h-[45vh] rounded-3xl' 
              src={Image3} alt='Labour Master Matching Top Talent' />
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className='about-section-6 flex flex-row items-end justify-center lg:min-h-[70vh] lg:px-[13%]'>
        <div className='block p-0 w-[30%] z-10'>
            <img className='w-full h-[45vh] object-contain lg:h-[65vh] rounded-3xl' 
            src={Image4} alt='Labour Master Matching Top Talent' />
        </div>
        <div className='flex flex-col justify-center w-[70%] z-10 lg:pl-[5%] lg:min-h-[70vh]'>
          <h4 className='text-[4vw] lg:text-[1.1vw] font-[600] text-[var(--white-color)] capitalize'>Our Commitment To Excellence</h4>
          <h3 className='mb-2 text-[7vw] lg:text-[1.8vw] lg:leading-7 font-[600] capitalize tracking-wider text-[var(--golden-color)]' >What Sets Us Apart</h3>
          <div className=''>
            {CommitmentPoints.map((text,index) => (
              <h4 key={index} className='text-[4.3vw] text-[var(--white-color)] lg:text-[1.1vw] lg:my-1 grid grid-cols-[auto,1fr]'><span className='w-fit text-[var(--golden-color)] font-[600] '>{index+1}.</span> <span className='ml-[1%]'>{text}</span></h4>
            ))}
          </div>
          
        </div>
      </div>  
      
      {/* Section 7 */}
      <div className='flex flex-col justify-center items-center about-section-7 lg:min-h-[70vh] w-[85%] mx-auto'>
        <h3 className='text-[7vw] lg:text-[2vw] leading-7 font-[700] capitalize tracking-[0.75px] text-[var(--dark-golden-color)] mb-6'>Placement types we provide</h3>
        <div className='w-full grid justify-center lg:grid-cols-[1fr,1fr,1fr]'>
          {PlacementTypes.map((placement, index) => (
            <div 
              key={index} 
              className={`group mx-[4%] flex flex-col items-start justify-end hover:pb-0 hover:justify-center
              lg:pl-[6%] lg:pr-[3%] lg:pb-[6%] lg:min-h-[37vh] ${placement.bg_Class}`}
            >
              <h3 className='z-10 lg:text-[1.5vw] font-[600] text-[var(--golden-color)] '>{placement.name}</h3>
              <h3 className='lg:text-[1vw] text-[var(--white-color)]  hidden z-10 group-hover:block '>{placement.description}</h3>
            </div>
          ))}
        </div>
      </div>
      

      {/* Section 8 */}
      <div className='flex w-full about-section-8 last-section'>
        <div className='flex flex-col justify-center items-start text-left z-[1] w-[80%] mx-auto px-[2%] lg:px-[10%]'>
            <h3 className='text-[7vw] lg:text-[2vw] leading-7 font-[700] capitalize tracking-[0.75px] text-[var(--white-color)] mb-4'>
            Dedicated to Aligning Your Goals with Exceptional Talent Placement.
            </h3>
            <p className='text-[5.0vw] lg:text-[1.3vw] leading-7 font-[500] capitalize tracking-[0.75px] text-[var(--white-color)] mb-4'>Whether you're making a career move or searching for the perfect job fit, we offer the expert guidance and support you need to excel and achieve your career goals.</p>
            <div className='flex items-center'>
            <button className=' px-6 py-2 border-2 font-[600] rounded-xl tracking-[1px] text-[var(--white-color)] bg-transparent hover-effect'><Link to={'/contact-us/'}>Looking For Job Options?</Link></button>
            <h3 className='text-[5.0vw] lg:text-[2vw] text-[var(--golden-color)] italic font-[800] mx-6'>OR</h3>
            <button className=' px-6 py-2 border-2 font-[600] rounded-xl tracking-[1px] text-[var(--white-color)] bg-transparent hover-effect'><Link to={'/contact-us/'}>Searching For Candidates?</Link></button>
            </div>
            
            
        </div>
      </div>


    </div>  
  )
}

export default About