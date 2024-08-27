import React from 'react'
import '../styles/style.css'
import Video1 from '../../Images/background-video.mp4';
import { FaArrowRight as RightArrow} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const industryList = [
    {
      imgLink: '/IndustryImg/automotive.jpg',
      img: 'automotive',
      name: 'Automotive',
    },
    {
      imgLink: '/IndustryImg/construction.jpg',
      img: 'construction',
      name: 'Construction',
    },
    {
      imgLink: '/IndustryImg/food.jpg',
      img: 'food',
      name: 'Food',
    },
    {
      imgLink: '/IndustryImg/greenhouse.jpg',
      img: 'greenhouse',
      name: 'Green House / Farms',
    },
    {
      imgLink: '/IndustryImg/logistics.jpg',
      img: 'logistics',
      name: 'Logistics',
    },
    {
      imgLink: '/IndustryImg/manufacturing.jpg',
      img: 'manufacturing',
      name: 'Manufacturing',
    },
    {
      imgLink: '/IndustryImg/pharmaceutical.jpg',
      img: 'pharmaceutical',
      name: 'Pharmaceutical',
    },
    {
      imgLink: '/IndustryImg/warehouse.jpg',
      img: 'warehouse',
      name: 'Warehouse'
    }
  ]
  

const IndustriesDisplay = () => {
  return (
    <>
    <div className='video-background-container my-10 rounded-xl'>
        <video autoPlay muted loop className='video-background'>
          <source src={Video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='home-section3 flex flex-col min-h-auto items-center justify-end lg:w-full lg:min-h-[80vh] mx-auto shadow-md'>
            <div className='z-10 flex lg:flex-col w-full items-center py-10' >
                <h3 className='text-[7vw] mb-1 lg:text-[2.4vw] lg:font-[600] capitalize tracking-[1px] text-[var(--golden-color)] lg:w-full lg:text-center lg:mb-6'>Industries We Deals In</h3>
                <div className=' w-full flex-wrap flex lg:flex-row justify-center'>
                {
                    industryList.map((Industry, index) => (
                        <div className='w-[25%] text-center m-6 rounded-3xl pb-6 card-background' key={index}>
                            <img className='h-[30vh] w-full rounded-t-3xl object-cover' src={Industry.imgLink} alt={`${Industry.name} industry`}/>
                            <h3 className='text-[1.6vw] mx-4 font-[600] tracking-wide text-[var(--white-color)] mt-4'>{Industry.name}</h3>
                            <p className='text-[1.1vw] mx-4 font-[300] text-[var(--white-color)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et earum non aspernatur odio ratione sapiente.</p>
                        </div>
                    ))
                }
                </div>
                <Link to={'/about-us/'}><button className='flex flex-row items-center bg-[var(--dark-golden-color)] mt-8 pl-6 pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[1.3vw] font-[600] transition-transform ease-in-out hover:bg-[#8e7333] hover:scale-[1.015]'>Let's Hire a Candidate! <RightArrow  className='text-[3vw] p-2 ml-4 rounded-[50px] bg-[#b4a278]' /></button></Link>
                <h3 className='mx-[22%] my-4 text-center text-[1.1vw] text-[var(--white-color)]'>During this 100% free no-strings-attached agency scale strategy call we will go over how our pre-trained virtual assistants can save up to 50% in payroll costs while scaling your business.</h3>
                <h3 className='mx-[22%] mb-4 text-center text-[1.1vw] text-[var(--white-color)]'>It’s free … you’ve got nothing to lose and everything to gain!</h3>
            
            </div>  
        </div>
    </div>
    </>
  )
}

export default IndustriesDisplay