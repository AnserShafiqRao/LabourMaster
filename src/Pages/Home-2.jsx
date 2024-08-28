import React from 'react'
import './styles/style.css'
import img1 from '../Images/Home/home-1.jpg';


// import Image2 from '../Images/Home/home-3.jpg';
// import Image2_Mobile from '../Images/Home/home-3-mobile.jpg';
// import Image3 from '../Images/Home/home-4.jpg'
// import Image4 from '../Images/Home/home-5.jpg'
// import Popup from '../Components/PopUpBtn/PopUp';
// import { Link } from 'react-router-dom';
import CareerRoles from './Components/HomeSection4';
import HomeSection2 from './Components/HomeSection2';
import VideoSection from './Components/HomeSection3';
import OurProcesses from './Components/HomeSection5';
import ContentScroller from './Components/ContentScroller';
import IndustriesDisplay from './Components/HomeSection6';
import FAQs from './Components/HomeSection7';
import ContactSection from './Components/HomeSection8';


// const industryList = [
//   {
//     icons: '/IndustryIcons/Automotive.png',
//     bgImg: 'automotive',
//     name: 'Automotive',
//     roles: 'Sales analyst, Parts advisor, Drive thru attendant, Mechanical engineer, etc..',
//     focus:'Understanding industry standards and project deadlines to source candidates who meet specific automotive needs.'
//   },
//   {
//     icons: '/IndustryIcons/Construction.png',
//     bgImg: 'construction',
//     name: 'Construction',
//     roles: 'Site superintendent, Estimator, Land developer, Land surveyor, Quality Engineer, etc..',
//     focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
//   },
//   {
//     icons: '/IndustryIcons/Food.png',
//     bgImg: 'food',
//     name: 'Food',
//     roles: 'Skilled labor, project managers, safety compliance personnel.',
//     focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
//   },
//   {
//     icons: '/IndustryIcons/Greenhouse.png',
//     bgImg: 'greenhouse',
//     name: 'Green House / Farms',
//     roles: 'Skilled labor, project managers, safety compliance personnel.',
//     focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
//   },
//   {
//     icons: '/IndustryIcons/Logistics.png',
//     bgImg: 'logistics',
//     name: 'Logistics',
//     roles: 'Skilled labor, project managers, safety compliance personnel.',
//     focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
//   },
//   {
//     icons: '/IndustryIcons/Manufacturing.png',
//     bgImg: 'manufacturing',
//     name: 'Manufacturing',
//     roles: 'General labourer, Forklift operator, Maintenance technician, HVAC technician, Machine operator, Test technician, SMT Operator, etc..',
//     focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
//   },
//   {
//     icons: '/IndustryIcons/Pharma.png',
//     bgImg: 'pharmaceutical',
//     name: 'Pharmaceutical',
//     roles: 'Nursing, Test lab operator, Pharmacist, Biochemistry, Microbiology, Protein chemistry, etc.. ',
//     focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
//   },
//   {
//     icons: '/IndustryIcons/Warehouse.png',
//     bgImg: 'warehouse',
//     name: 'Warehouse',
//     roles: 'Skilled labor, project managers, safety compliance personnel.',
//     focus:'Understanding regulatory requirements and project timelines to find candidates who meet specific construction needs.'
//   }
// ]



const Home2 = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col'>
      {/* Section 1 */}
      <div className='flex flex-col-reverse lg:flex-row justify-center lg:min-h-[80vh] lg:items-center w-full'>
        <div className='flex flex-col justify-center w-full max-w-full lg:w-[50%] lg:max-w-[50%] mt-6 lg:mt-0 mr-auto lg:mr-10'>
            <h5 className='bg-neutral-700 w-fit tracking-wide px-4 py-1 rounded-[20px] text-stone-50 text-[4vw] lg:text-[0.8rem] mb-4 lg:mb-3'>Save on Payroll, Not on Quality</h5>
            <h3 className='text-[7vw] lg:text-[2.8vw] font-[700] tracking-wide capitalize '>Pre-screened candidates ready to drive your business growth with the right talent</h3>
            <div className='flex flex-row mt-6'>
                <button className='bg-[var(--dark-golden-color)] rounded-[30px] px-4 py-3 lg:px-8 lg:py-4 text-[4.5vw] lg:text-[1.3vw] font-[600] capitalize text-stone-50 tracking-wide'>Hire Candidates</button>
                <button className='ml-4 lg:ml-6 text-[4.5vw] lg:text-[1.4vw] font-[700] capitalize underline  tracking-wide'>Explore roles</button>
            </div>
            
        </div>

        <div className=' w-full h-[40vh] lg:h-auto lg:w-[50%] overflow-hidden'>   
            <img src={img1} alt='labour master' className='h-full object-cover object-left rounded-[20px] lg:object-center lg:h-auto '/>
        </div>
      </div>

      {/* Section 2 */}
      <HomeSection2 />

      {/* Section 3 */}
      <VideoSection />


      {/*  Section 4 */}
      <CareerRoles />

      {/* Section 5 */}
      <OurProcesses/>  

      <ContentScroller/>

      {/* Section 6 */}
      <IndustriesDisplay />

      {/* Section 7 */}
      <FAQs />

      {/* Section 8 */}
      <ContactSection /> 


    </div>
  )
}

export default Home2
