import React, { useState } from 'react';
import './popup.css';
import { IoCloseCircleOutline as CloseIcon} from "react-icons/io5";
import { Link } from 'react-router-dom';




export default function Popup({children, bgImg, Roles, Description}) {
    
    const DataDisplay = (props) => {

        return props.trigger ? (
            <div className='popup-area'>
                <div className={`popup-content ${bgImg}`}>
                    <button className='popup-closeBtn' onClick={() => props.setTrigger(false)}><CloseIcon /></button>
                    {props.children}
                </div>
            </div>
        ) : '';
    };
    
    const [popupCall, setPopupCall] = useState(false); 

    return (
        <div className='w-full h-full'>
            <button className={`popBtn flex flex-col text-center items-center justify-center rounded-3xl`} onClick={() => setPopupCall(true)}>{children}</button>
            <DataDisplay trigger={popupCall} setTrigger={setPopupCall}>
                <div className='popUpData'>
                    
                    <div className='w-full px-10 mb-4'>
                        <h3 className='lg:text-[1.3vw] lg:mb-0'>Major Roles:</h3>
                        <p className='mt-0'>{Roles}</p>
                    </div>
                    
                    <div className='w-full px-10' >
                        <h3 className='lg:text-[1.3vw] lg:mb-0'>Our Focus:</h3>
                        <p>{Description}</p>
                    </div>

                    <h3  className='lg:text-[1.3vw] lg:mt-6 lg:mb-2 capitalize'>What do you like to avail?</h3>
                    <div className='popup-child-btns'>
                        <Link className='popup-child-btn' to='/job-seekers/job-application'>Job Options </Link>
                        <Link className='popup-child-btn' to='/employers/employees-required'>Skilled Candidates</Link>
                    </div>

                </div>
        </DataDisplay>
        </div>
    );
}
