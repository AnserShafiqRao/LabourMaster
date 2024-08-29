import React,{ useState} from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import { FaArrowRight as RightArrow} from "react-icons/fa6";

// Marketing Agencies
import { MdOutlinePhoneAndroid as MA_1} from "react-icons/md";
import { FaHandshakeSimple as MA_2} from "react-icons/fa6";
import { CiServer as MA_3} from "react-icons/ci";
import { AiFillProduct as MA_4} from "react-icons/ai";

// Hiring Process
import { FaRegFileAlt as HP_1} from "react-icons/fa";
import { PiPhoneCallDuotone as HP_2} from "react-icons/pi";
import { TbDeviceComputerCamera as HP_3} from "react-icons/tb";
import { TiTicket as HP_4} from "react-icons/ti";
import { FaListCheck as HP_5} from "react-icons/fa6";
import { GrCheckboxSelected as HP_6} from "react-icons/gr";
import { FaArrowDownLong as DOWN} from "react-icons/fa6";


const ProcessDisplay = ( {TargetData} ) =>{
    
    return(
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='w-full flex flex-col justify-center'>
                {TargetData.map((content, index) =>(
                    (content.step === 'Last'? (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <div key={index} className={`grid  grid-cols-1  lg:grid-cols-[25%_70%_5%] w-[100%] bg-stone-900  hover:${content.type === 'special' ? 'bg-[var(--golden-color)]': 'bg-[#eddbbd] hover:text-stone-900' } text-[var(--white-color)] rounded-[10px] p-6`}>
                                <div className='flex flex-col lg:flex-row just lg:justify-start items-center lg:pl-12'>
                                    <h2 className='text-[15vw] lg:text-[2.2vw] lg:mr-4'>{React.createElement(content.icon)}</h2>
                                    <h2 className='text-[5vw] lg:text-[1.3vw] font-[700]' >{content.title}</h2>
                                </div>
                                <div className='text-center lg:text-start pl-4'>
                                    <h2 className='text-[4.5vw] font-[500] lg:text-[1.3vw] lg:font-[700]' >{content.description}</h2>
                                </div>
                            </div>
                        </div>
                    ): (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-[25%_70%_5%] w-[100%] bg-stone-900 ${content.type === 'special' ? 'hover:bg-[var(--golden-color)]': 'hover:bg-[#eddbbd]'}  hover:text-stone-900 text-[var(--white-color)] rounded-[10px] p-6`}>
                                <div className='flex flex-col lg:flex-row justify-start items-center lg:pl-12'>
                                    <h2 className='text-[15vw] lg:text-[2.2vw] lg:mr-4'>{React.createElement(content.icon)}</h2>
                                    <h2 className='text-[5vw] lg:text-[1.3vw] font-[700]' >{content.title}</h2>
                                </div>
                                <div className='text-center lg:text-start pl-4'>
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
    const [selected, setSelected] = useState('Marketing Agencies');
    
    const MarketingData = [
        {
            step: '1',
            icon: MA_1,
            type: '',
            title: 'Discovery Call',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: '2',
            icon: MA_2,
            type: '',
            title: 'Interview Process',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: '3',
            icon: MA_3,
            type: '',
            title: 'Onboarding',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: 'Last',
            icon: MA_4,
            type: '',
            title: 'Step Back & Grow',
            description: 'We get your candidate requirements and send you a customized job description.',
        },

    ]
    const HiringSteps = [
        {
            step: '1',
            icon: HP_1,
            type: '',
            title: 'The Resume Hunt',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: '2',
            icon: HP_2,
            type: '',
            title: 'Initial Screening Call',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: '3',
            icon: HP_3,
            type: '',
            title: 'Zoom Interview',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: '4',
            icon: HP_4,
            type: 'special',
            title: 'Golden Ticket',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: '5',
            icon: HP_5,
            type: '',
            title: 'Pre-Onboarding Session',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
        {
            step: 'Last',
            icon: HP_6,
            type: '',
            title: 'Good Luck For Job',
            description: 'We get your candidate requirements and send you a customized job description.',
        },
    ]


    const handleToggle = () => {
        setSelected(selected === 'Marketing Agencies' ? 'Hiring Process' : 'Marketing Agencies');
    };

    return (
    <div  id='how-it-works' className='flex flex-col justify-start items-start my-8 lg:mb-10 lg:items-start w-full lg:min-h-[80vh]'>
        <h2 className='text-[7vw] lg:text-[2.4vw] font-[700] tracking-normal mx-auto lg:mx-0 lg:mb-5'>How it Works</h2>
        <div className='flex flex-col items-center w-full mt-4'>
            <div className="flex justify-between items-center space-x-4 w-fit text-center">
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
            </div>
            <div className='block w-full mt-6'>
                {selected === 'Marketing Agencies' ? (
                    <ProcessDisplay TargetData={MarketingData}/>
                ): (
                    <ProcessDisplay TargetData={HiringSteps} />
                ) }
            </div>
            <div className='flex flex-col w-full items-center justify-center mt-4 lg:mt-[4rem]'>
                <Link to={'/about-us/'}><button className='flex flex-row items-center bg-stone-800 mt-4 pl-6 pr-6 lg:pr-2 py-2 text-[var(--white-color)] rounded-[100px] text-[4.5vw] lg:text-[1.3vw] font-[600] transition-transform ease-in-out hover:bg-stone-700 hover:scale-[1.015]'>Book a FREE Agency Sale Strategy Call Now! <RightArrow  className='hideOnMobile lg:text-[3vw] p-2 ml-4 rounded-[50px] bg-stone-500' /></button></Link>
                <h3 className='mt-4 px-0 lg:px-[30%] text-center text-[4.3vw] lg:text-[1.05vw] '>Keep scrolling to hear from our clients sharing how our virtual assistants have saved them up to 50% in payroll costs while scaling their marketing agency and giving them their time back.</h3>
            </div>
        </div>
        
        
    </div>
)
}

export default OurProcesses