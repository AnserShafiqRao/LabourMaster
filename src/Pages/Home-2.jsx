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
      <div className='flex flex-row justify-center lg:min-h-[80vh] lg:items-center w-full'>
        <div className='flex flex-col justify-center w-[50%] max-w-[50%] mr-10'>
            <h5 className='bg-neutral-700 w-fit tracking-wide px-4 py-1 rounded-[20px] text-stone-50 text-[0.8rem] lg:mb-3'>Save on Payroll, Not on Quality</h5>
            <h3 className='text-[2.8vw] font-[700] tracking-wide capitalize '>Pre-Trained virtual assitants ready to fuel your digital marketing agency's growth</h3>
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

    </div>
  )
}

export default Home2
