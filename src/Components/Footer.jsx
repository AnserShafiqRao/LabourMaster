import React from 'react'
import './style.css'
import FooterLogo from '../Images/labour-master-logo-footer.png';
import { Link } from 'react-router-dom';
import { LuPhoneCall as CallUs} from "react-icons/lu";
import { IoMailOpenOutline as MailUs} from "react-icons/io5";
import { RiInstagramFill as Insta} from "react-icons/ri";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { BsLinkedin as Linkedin} from "react-icons/bs";



const Footer = () => {
  return (
    <div className='w-full h-auto px-6 py-8 flex flex-col items-start bg-zinc-900 bottom-0
    lg:px-8 lg:py-8 lg:flex-row lg:justify-center

    '>
        <div className=' lg:w-[27%] lg:px-4'> 
            <img src={FooterLogo} alt='Labour Master Solution' className='w-fit h-[16vh] ml-[0px]'/>
            <h4 className='text-slate-50 mt-2 text-[3.5vw] lg:text-[0.95vw] tracking-[0.5px]'>Labour Master Solution Company is dedicated to HR excellence, delivering top-tier staff for our clients. We swiftly attract skilled candidates to meet your business needs, offering experienced and reliable temporary employees.</h4>
        </div>
        <div className=' lg:w-[20%] lg:px-4'> 
            <h2 className='footer-heading text-[5.5vw] lg:text-[1.6vw]'>Quick Links</h2>
            <div className='flex flex-col ml-1 lg:ml-2'>
            <Link className='my-1 w-fit footer-menu ' to={'/'}>Home</Link>
                <Link className='my-1 w-fit footer-menu ' to={'/about-us/'}>About Us</Link>
                <Link className='my-1 w-fit footer-menu ' to={'/job-seekers/'}>Job Seekers</Link>
                <Link className='my-1 w-fit footer-menu ' to={'/employers/'}>Employers</Link>
                {/* <Link className='my-1 w-fit footer-menu ' to={'/our-services/'}>Our Services</Link> */}
                <Link className='my-1 w-fit footer-menu ' to={'/contact-us/'}>Contact Us</Link>
            </div>
        </div>
        <div className=' lg:w-[26%] lg:px-4 lg:mr-[1%] flex flex-col'> 
            <h2 className='footer-heading text-[5.5vw] lg:text-[1.6vw]'>Get Connect With Us</h2>
            <h4 className='text-slate-50 mt-2 text-[3.5vw] lg:text-[1vw] tracking-[0.5px]'>Let us know how we can assist you, and we’ll respond at our earliest convenience.</h4>
            <Link to={'/contact-us/'}  className='footer-contact-btn mt-2'>To Get Job Options</Link>
            <h4 className='text-[3.8vw] lg:text-[1.3vw] text-[var(--golden-color)] my-1 lg:my-2 ml-2 italic font-[600]'>OR</h4>
            <Link to={'/contact-us/'}  className='footer-contact-btn'>To Hire Candidates</Link>
        </div>
        <div className=' lg:w-[24%] lg:px-4 flex flex-col'> 
            <h2 className='footer-heading text-[5.5vw] lg:text-[1.6vw]'>To Reach Us</h2>

            <Link to={'/contact-us/'}  className='footer-contact-links mt-[1vh]'><CallUs className='text-[var(--golden-color)] mr-2 text-[4vw] lg:text-[1.2vw]'/> (647) 509 0006</Link>
            <Link to={'mailto:info@labourmaster.ca'}  className='footer-contact-links mt-[1vh]'><MailUs className='text-[var(--golden-color)] mr-2 text-[4vw] lg:text-[1.2vw]'/> info@labourmaster.ca</Link>
            <h4 className='text-[4.5vw] lg:text-[1.2vw] font-[600] mt-2 mb-1 tracking-[0.75px] text-[var(--golden-color)]'>Follow Us</h4>
            <div className='flex flex-row'>
                <Link className='footer-social-icons'><Facebook /></Link>
                <Link className='footer-social-icons'><Insta /></Link>
                <Link className='footer-social-icons'><Linkedin /></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Footer