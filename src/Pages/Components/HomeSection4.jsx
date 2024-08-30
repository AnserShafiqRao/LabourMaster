import React from 'react'
import '../styles/style.css'
import PopUp from '../../Components/PopUpBtn/PopUp';
import Temporary from '../../Images/AboutUs/temporary.jpg';
import Permanent from '../../Images/AboutUs/permanent.jpg'
import Direct from '../../Images/AboutUs/direct.jpg';
import { FaArrowRight as RightArrow} from "react-icons/fa6";

const industry = {
    icons: '/IndustryIcons/Automotive.png',
    bgImg: 'automotive',
    name: 'Automotive',
}

const CareerRoles = () => {
  return (
    <div className='flex flex-col justify-start items-start my-8 lg:mb-10 lg:items-start w-full lg:min-h-[80vh]'>
        <h2 className='text-[7vw] lg:text-[2.4vw] font-[700] tracking-normal text-center lg:text-start capitalize lg:mb-5'>Tailored General Labour Roles to Meet Your Needs</h2>
        {/* <h4 className='mb-4 lg:mb-2 text-[4.8vw] lg:text-[1.3vw] font-[400] tracking-normal text-[var(--black-color)]'>Looking for a career? <Link className='underline text-[var(--dark-golden-color)]'>Click here</Link></h4>         */}
        <div className='grid center grid-cols-1 w-full lg:gap-[5%] lg:grid-cols-[30%_30%_30%]'>
          
          <div className='flex flex-col my-4 lg:my-1 mx-4'>
            <img src={Temporary} className='max-h-[38vh] object-center rounded-3xl object-cover' alt='Checking it'/>
            <div className='mx-1'>
              <h5 className='my-4 text-[4vw] lg:text-[1vw] text-[var(--white-color)] bg-[var(--dark-golden-color)] w-fit pt-1 pb-auto px-3 rounded-3xl '>Popular placements with LMS</h5>
              <h3 className='text-[5.8vw] lg:text-[1.5vw] font-[700] capitalize'>Temporary Placements</h3>
              <p className='text-[4.3vw] lg:text-[1.1vw] text-stone-700'>Secure temporary employment opportunities designed to support your business during critical periods. Our placements are ideal for short-term projects, providing skilled professionals who can seamlessly integrate into your team. Whether you need extra hands for peak seasons or specific tasks, we offer flexible solutions tailored to meet your immediate needs.</p>
              <PopUp bgImg={industry.bgImg}>
                <h4 className='flex flex-row items-center w-fit bg-stone-800 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[4.5vw] lg:text-[1.1vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>
                Let's Explore <RightArrow  className='text-[8vw] lg:text-[2.0vw] p-2 ml-4 rounded-[50px] bg-stone-500' />
                </h4>
                </PopUp>
            </div>

          </div>

          <div className='flex flex-col my-4 lg:my-1 mx-4'>
            <img src={Permanent} className='max-h-[38vh] object-center rounded-3xl object-cover' alt='Checking it'/>
            <div className='mx-1'>
              <h5 className='my-4 text-[4vw] lg:text-[1vw] text-[var(--white-color)] bg-[var(--dark-golden-color)] w-fit pt-1 pb-auto px-3 rounded-3xl '>#1 hire to start</h5>
              <h3 className='text-[5.8vw] lg:text-[1.5vw] font-[700] capitalize'>Permanent Placements</h3>
              <p className='text-[4.3vw] lg:text-[1.1vw] text-stone-700'>Discover top talent for permanent employment with our expert recruitment services. We connect you with professionals who align with your company’s vision and culture, ensuring long-term success. Our rigorous selection process guarantees the right fit, helping you build a dedicated team that drives your business forward.</p>
              <PopUp bgImg={industry.bgImg}>
                <h4 className='flex flex-row items-center w-fit bg-stone-800 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[4.5vw] lg:text-[1.1vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>
                Let's Explore <RightArrow  className='text-[8vw] lg:text-[2.0vw] p-2 ml-4 rounded-[50px] bg-stone-500' />
                </h4>
                </PopUp>
            </div>

          </div>
          <div className='flex flex-col my-4 lg:my-1 mx-4'>

            <img src={Direct} className='max-h-[38vh] object-center rounded-3xl object-cover' alt='Checking it'/>
            <div className='mx-1'>
              <h5 className='my-4 text-[4vw] lg:text-[1vw] text-[var(--white-color)] bg-[var(--dark-golden-color)] w-fit pt-1 pb-auto px-3 rounded-3xl '>Ready to Scale? Start here.</h5>
              <h3 className='text-[5.8vw] lg:text-[1.5vw] font-[700] capitalize'>Direct Hiring</h3>
              <p className='text-[4.3vw] lg:text-[1.1vw] text-stone-700'>Our direct hiring services connect you with top talent quickly and efficiently. We streamline the recruitment process, ensuring you find the right fit for your team without the hassle. From sourcing to placement, we handle every step, so you can focus on driving your business forward. Let us find your next star employee.</p>
              <PopUp bgImg={industry.bgImg}>
                <h4 className='flex flex-row items-center w-fit bg-stone-800 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[4.5vw] lg:text-[1.1vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>
                Let's Explore <RightArrow  className='text-[8vw] lg:text-[2.0vw] p-2 ml-4 rounded-[50px] bg-stone-500' />
                </h4>
                </PopUp>
            </div>
            {/* For Setting header btn's call to section below it on home page */}
            <div id='how-it-works'/>

          </div>
        </div>
      </div>
  )
}

export default CareerRoles