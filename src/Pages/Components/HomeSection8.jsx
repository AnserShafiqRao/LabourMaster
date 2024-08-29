import React, { useState } from 'react'
import ContactSide from '../../Images/Home/home-8.jpg'


const ContactSection = () => {
    const ourMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.0000480335148!2d-79.65493602395628!3d43.710548071099524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c07b0bb498f%3A0x7f6d23cd91e30a94!2s2980%20Drew%20Rd%20Unit%20%23%20112%2C%20Mississauga%2C%20ON%20L4T%204E5%2C%20Canada!5e0!3m2!1sen!2s!4v1719255223368!5m2!1sen!2s';

    const [contactForm, setContactForm] = useState({
        FullName: '',
        Email: '',
        ContactNumber:'',
        Reason: '',
        Message: '',
        SubmissionDate: '',
        SubmissionTime: '',
    })

    const handleEntry = (e) =>{
        const {name, value} = e.target;

        if (name === 'ContactNumber') {
            let newValue = value.replace(/\D/g, '');
            if (newValue.length > 10) {
                newValue = newValue.slice(0, 10);
            }
            newValue = newValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            setContactForm((prev) => ({
                ...prev,
                [name]: newValue,
            }));
        } else {
            setContactForm((prev) =>({
                ...prev,
                [name]:value,
            }))
        }

    }   
    const handleSubmission = () =>{
        console.log(contactForm);
    }

    return (
        <div id='contact-section' className='flex flex-row flex-wrap w-full justify-center items-center mt-10'>
            <div className='flex flex-col w-[100%] hideOnDesktop mb-8'>
                <img className='w-full h-[45vh] object-cover rounded-3xl shadow-lg shadow-stone-500' src={ContactSide} alt='Contact - Labour Master'/>
            </div>
            <div className='flex flex-col  w-[90%] lg:w-[70%]'>
                <h2 className='text-[6.5vw] lg:text-[2.4vw] font-[700] tracking-normal capitalize'>Still Not Totally Clear, Ask anything from us?</h2>
                <form onSubmit={handleSubmission}>
                    <div className='flex flex-col w-full'>
                        <label className='text-[5vw] lg:text-[1.4vw] mt-[1%] mb-0'>Full Name</label>
                        <input className='text-[4.3vw] lg:text-[1.3vw] mt-[-0.5%] text-[var(--dark-golden-color)] px-3 lg:px-4 py-1 rounded-lg lg:mr-[17%] bg-stone-200' type='text' name='FullName' placeholder='Enter your full name' value={contactForm.FullName} onChange={handleEntry} required/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='text-[5vw] lg:text-[1.4vw] mt-[1%] mb-0'>Email</label>
                        <input className='text-[4.3vw] lg:text-[1.3vw] mt-[-0.5%] text-[var(--dark-golden-color)] px-3 lg:px-4 py-1 rounded-lg lg:mr-[17%] bg-stone-200' type='text' name='Email' placeholder='Enter your email address' value={contactForm.Email} onChange={handleEntry} required/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='text-[5vw] lg:text-[1.4vw] mt-[1%] mb-0'>Contact Number</label>
                        <input className='text-[4.3vw] lg:text-[1.3vw] mt-[-0.5%] text-[var(--dark-golden-color)] px-3 lg:px-4 py-1 rounded-lg lg:mr-[17%] bg-stone-200' type='tel' name='ContactNumber' placeholder='Enter your contact number' value={contactForm.ContactNumber} onChange={handleEntry} required/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='text-[5vw] lg:text-[1.4vw] mt-[1%] mb-0'>Reason</label>
                        <select className='text-[4.3vw] lg:text-[1.3vw] mt-[-0.5%] text-[var(--dark-golden-color)] px-3 lg:px-4 py-2 rounded-lg lg:mr-[17%] bg-stone-200' id='Reason' name='Reason' value={contactForm.Reason} onChange={handleEntry}>
                            <option value={null} className='py-1'>Select a reason</option>
                            <option value={'Hire a candidate'} className='py-1'>Hire a candidate</option>
                            <option value={'Seeking a job'} className='py-1'>Seeking a job</option>
                            <option value={'General enquiry'} className='py-1'>General enquiry</option>
                            <option value={'Set up a meeting'} className='py-1'>Set up a meeting</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='text-[5vw] lg:text-[1.4vw] mt-[1%] mb-0'>Message</label>
                        <textarea rows={3} className='text-[4.3vw] lg:text-[1.3vw] text-[var(--dark-golden-color)] px-4 py-1 rounded-lg lg:mr-[17%] bg-stone-200' type='text' name='Message' placeholder='Enter your message' value={contactForm.Message} onChange={handleEntry} required/>
                    </div>
                    <button type='submit' className='text-[5vw] lg:text-[1.4vw] bg-[var(--dark-golden-color)] text-[var(--white-color)] font-600 pt-[1%] pb-[0.75%] tracking-normal px-6 mt-4 rounded-[100px] transition-transform duration-500 ease-in-out hover:scale-[1.05]'>Submit</button>
                </form>
            </div>
            <div className='flex flex-col lg:w-[30%] hideOnMobile'>
                <img className='w-full h-[85vh] object-cover rounded-3xl shadow-lg shadow-stone-500' src={ContactSide} alt='Contact - Labour Master'/>
            </div>
            <div className='w-[111%] lg:w-[111%] mr-[-6%] ml-[-6%] mt-[4vh] lg:mt-[6vh]'>
            <iframe src={ourMap} title="Office Address On MAP" className="w-full h-[40vh] lg:h-[50vh]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactSection