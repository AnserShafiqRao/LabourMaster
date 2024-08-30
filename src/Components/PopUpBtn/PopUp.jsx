import React, { useState } from 'react';
import './popup.css';
import { IoCloseCircleOutline as CloseIcon} from "react-icons/io5";
import { Link } from 'react-router-dom';




export default function Popup({children, bgImg}) {
    
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
            <button className={`popBtn  mt-6 text-center items-center justify-center rounded-3xl`} onClick={() => setPopupCall(true)}>{children}</button>
            <DataDisplay trigger={popupCall} setTrigger={setPopupCall}>
                <div className='popUpData'>
                    <h3  className='lg:text-[1.6vw] font-[700] tracking-wide lg:mt-6 lg:mb-2 capitalize'>What do you like to avail?</h3>
                    <div className='popup-child-btns'>
                        <Link className='popup-child-btn' to='/job-seekers-application/'>Apply For Job</Link>
                        <Link className='popup-child-btn' to='/hire-candidates-application/'>Hire A Candidate</Link>
                    </div>

                </div>
        </DataDisplay>
        </div>
    );
}
