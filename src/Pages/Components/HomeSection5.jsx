// import React,{ useState} from 'react'
import React from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom'
import { MdPhoneIphone as CallUs } from "react-icons/md";

// Hiring Process
import { FaRegFileAlt as HP_1} from "react-icons/fa";
import { BiCustomize as HP_2} from "react-icons/bi";
import { SiCrowdsource as HP_3} from "react-icons/si";
import { TbUserScan as HP_4} from "react-icons/tb";
import { FaUserCheck as HP_5} from "react-icons/fa6";
import { ImProfile as HP_6} from "react-icons/im";
import { PiPresentationDuotone as HP_7} from "react-icons/pi";
import { TbDeviceComputerCamera as HP_8} from "react-icons/tb";
import { TiTicket as HP_9} from "react-icons/ti";
import { GrCheckboxSelected as HP_10} from "react-icons/gr";

import { FaArrowDownLong as DOWN} from "react-icons/fa6";


const ProcessDisplay = ( {TargetData} ) =>{
    
    return(
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='w-full flex flex-col justify-center'>
                {TargetData.map((content, index) =>(
                    (content.step === 'Last'? (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <div key={index} className={`grid  grid-cols-1  lg:grid-cols-[25%_70%_5%] w-[100%] bg-stone-900  hover:${content.type === 'special' ? 'bg-[var(--golden-color)]': 'bg-[#eddbbd] hover:text-stone-900' } text-[var(--white-color)] rounded-[10px] p-6`}>
                                <div className='flex flex-col lg:flex-col just lg:justify-start items-center lg:items-start lg:pl-12'>
                                    <h2 className='text-[15vw] lg:text-[2.2vw] lg:mr-4'>{React.createElement(content.icon)}</h2>
                                    <h2 className='text-[5vw] lg:text-[1.3vw] font-[700]' >{content.title}</h2>
                                </div>
                                <div className='text-center lg:text-start pl-2 pt-1'>
                                    <h2 className='text-[4.5vw] font-[500] lg:text-[1.3vw] lg:font-[700]' >{content.description}</h2>
                                </div>
                            </div>
                        </div>
                    ): (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-[25%_70%_5%] w-[100%] bg-stone-900 ${content.type === 'special' ? 'hover:bg-[var(--golden-color)]': 'hover:bg-[#eddbbd]'}  hover:text-stone-900 text-[var(--white-color)] rounded-[10px] p-6`}>
                                <div className='flex flex-col lg:flex-col justify-start items-center lg:items-start lg:pl-12'>
                                    <h2 className='text-[15vw] lg:text-[2.2vw] lg:mr-4'>{React.createElement(content.icon)}</h2>
                                    <h2 className='text-[5vw] lg:text-[1.3vw] font-[700]' >{content.title}</h2>
                                </div>
                                <div className='text-center lg:text-start pl-2 pt-1'>
                                    <h2 className='text-[4.5vw] font-[500] lg:text-[1.3vw] lg:font-[700]' >{content.description}</h2>
                                </div>
                            </div>
                            <div className='my-2'>
                                <h3 className='text-[7vw] lg:text-[1.7vw] font-[400]'>{window.screen.width >1000 ? ( <span>|</span> ): ( <DOWN /> ) }</h3>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
}


const OurProcesses = () => {
    // const [selected, setSelected] = useState('Marketing Agencies');
    

    const HiringSteps = [
        {
            step: '1',
            icon: HP_1,
            type: '',
            title: 'Initial Consultation',
            description: 'We meet with you to understand your hiring needs, including the specific skills, experience, and qualifications required for the role.',
        },
        {
            step: '2',
            icon: HP_2,
            type: '',
            title: 'Customized Job Description',
            description: 'Based on your requirements, we create a tailored job description that accurately reflects the role and expectations.',
        },
        {
            step: '3',
            icon: HP_3,
            type: '',
            title: 'Candidate Sourcing',
            description: 'We leverage our extensive network and resources to source potential candidates who meet your criteria.',
        },
        {
            step: '4',
            icon: HP_4,
            type: 'special',
            title: 'Prescreening',
            description: 'Our team reviews resumes and conducts initial screenings to shortlist candidates who best match your requirements.',
        },
        {
            step: '5',
            icon: HP_5,
            type: '',
            title: 'Background Checks',
            description: 'We perform thorough background checks, including employment history, criminal records, and educational verification, to ensure candidate reliability and suitability.',
        },
        {
            step: '6',
            icon: HP_6,
            type: '',
            title: 'Candidate Profiles',
            description: 'We prepare detailed profiles of the top candidates, highlighting their qualifications, experience, and background check results.',
        },
        {
            step: '7',
            icon: HP_7,
            type: '',
            title: 'Presentation to Client',
            description: 'We present these profiles to you for review, providing all necessary information to help you make an informed decision.',
        },
        {
            step: '8',
            icon: HP_8,
            type: 'special',
            title: 'Interview Coordination',
            description: 'We coordinate interviews between you and the shortlisted candidates, assisting with scheduling and any additional requirements.',
        },
        {
            step: '9',
            icon: HP_9,
            type: '',
            title: 'Feedback and Selection',
            description: 'After interviews, we gather your feedback, assist with final candidate selection, and help with the offer process.',
        },
        {
            step: 'Last',
            icon: HP_10,
            type: '',
            title: 'Onboarding Support',
            description: 'We provide support throughout the onboarding process to ensure a smooth transition for both you and the new hire.',
        },
    ]


    // const handleToggle = () => {
    //     setSelected(selected === 'Marketing Agencies' ? 'Hiring Process' : 'Marketing Agencies');
    // };

    return (
    <div className='flex flex-col justify-start items-start my-8 lg:mb-10 lg:items-start w-full lg:min-h-[80vh]'>
        <h2 className='text-[7vw] lg:text-[2.4vw] font-[700] tracking-normal mx-auto lg:mx-auto lg:mb-3'>How it Works</h2>
        <div className='flex flex-col items-center w-full mt-4'>
            {/* <div className="flex justify-between items-center space-x-4 w-fit text-center">
                <span
                className={`w-[40%] lg:w-auto cursor-pointer text-[5vw] lg:text-[1.3vw] ${selected === 'Marketing Agencies' ? 'text-black font-semibold' : 'text-gray-400'}`}
                onClick={() => setSelected('Marketing Agencies')}
                >
                With Employers
                </span>
                
                <div className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${selected === 'Marketing Agencies' ? 'bg-green-600' : 'bg-green-600'}`} onClick={handleToggle} >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${selected === 'Marketing Agencies' ? '' : 'translate-x-6'}`}></div>
                </div>
                
                <span
                className={`w-[40%] lg:w-auto cursor-pointer text-[5vw] lg:text-[1.3vw] ${selected === 'Hiring Process' ? 'text-black font-semibold' : 'text-gray-400'}`}
                onClick={() => setSelected('Hiring Process')}
                >
                With Job Seekers
                </span>
            </div> */}
            <div className='block w-full mt-6'>
            <ProcessDisplay TargetData={HiringSteps} />
                {/* {selected === 'Marketing Agencies' ? (
                    <ProcessDisplay TargetData={MarketingData}/>
                ): (
                    
                ) } */}
            </div>
            <div className='flex flex-col w-full items-center justify-center mt-4 lg:mt-[4rem]'>
                <Link to={'tel:+16475090006'}><button className='flex flex-row items-center bg-stone-800 mt-3 mb-4 pl-6 pr-6 lg:pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[4.5vw] lg:text-[1.3vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Call Us Today <CallUs  className='hideOnMobile lg:text-[3vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
                {/* <h3 className='mt-4 px-0 lg:px-[30%] text-center text-[4.3vw] lg:text-[1.05vw] '>Keep scrolling to hear from our clients sharing how our virtual assistants have saved them up to 50% in payroll costs while scaling their marketing agency and giving them their time back.</h3> */}
            </div>
        </div>
        
        
    </div>
)
}

export default OurProcesses