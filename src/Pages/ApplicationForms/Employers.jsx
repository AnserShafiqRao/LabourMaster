import React, { useState } from 'react'
import './styles.css'


const EmployersFormPage = () => {

    // const [error, setError] = useState('');
    const [empForm, setEmpForm] = useState({
        Firstname: '',
        Lastname:'',
        CompanyName: '',
        Designation:'',
        Email: '',
        Phone:'',
        Posting:'',
        Industry:'',
        City:'',
        State: '',
        Message:'',
        SubmissionDate:'',
        SubmissionTime:'',
        NewStatus: true,
        Emp_Id:'',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'Phone') {
          let formattedPhone = value.replace(/\D/g, '');
          if (formattedPhone.length > 10) {
            formattedPhone = formattedPhone.slice(0, 10);
          }
          formattedPhone = formattedPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3');
          setEmpForm((prev) => ({
            ...prev,
            [name]: formattedPhone,
          }));
        } 
         
        else {
          setEmpForm((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
      };

    const handleSubmission = () =>{
        console.log('Hello');
    }
    return (
        <div className='w-[90%] mx-auto flex flex-col'>
            <div className='flex justify-center altered-background items-center min-h-[15vh] lg:min-h-[25vh] shadow-xl'>
                <h1 className='z-10 text-[#d0ac34] text-[7.8vw] lg:text-[3vw] font-[700] tracking-wide'>Employees Request</h1>
            </div>
            <div className='flex flex-col items-center lg:mx-auto my-5 lg:my-6 lg:w-[77%] text-center'>
                <h4 className='capitalize tracking-wide text-[5.2vw] lg:text-[1.3vw]'>Let us know the position you need to fill, and Intellect Workforce will help you find the right fit. <span className='hideOnMobile'>Please complete the form below, and we'll contact you to initiate the recruitment process.</span></h4>
                
                <div className='flex flex-col justify-start items-start w-[90%] text-start lg:w-full mt-4 lg:mt-6'>
                
                    <h4 className=' tracking-normal text-[4.5vw] lg:text-[1.25vw]'>Please complete the form, and one of our recruiters will be in touch with you soon.</h4>
                    <form className='flex flex-wrap flex-row justify-start w-full' onSubmit={handleSubmission}>

                        <h3 className='w-full text-start text-[4.5vw] lg:text-[1.25vw] text-[var(--black-color)] font-[700] tracking-wide mt-4 lg:mt-3 mb-3 lg:mb-2'>General Information</h3>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>First Name:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='Firstname' value={empForm.Firstname} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Last Name:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='Lastname' value={empForm.Lastname} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Company Name:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='CompanyName' value={empForm.CompanyName} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Your Designation:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='Designation' value={empForm.Designation} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Email:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='email' name='Email' value={empForm.Email} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Phone#</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='tel' name='Phone' value={empForm.Phone} onChange={handleChange} required/>
                        </div>


                        <h3 className='w-full text-start text-[4.5vw] lg:text-[1.25vw] text-[var(--black-color)] font-[700] tracking-wide mt-4 lg:mt-3 mb-3 lg:mb-2'>Target Candidates Requirements</h3>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Required Position: </label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='Posting' value={empForm.Posting} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Industry:</label>
                            <select
                            className="text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]"
                            name="Industry"
                            value={empForm.Industry}
                            onChange={handleChange}
                            >
                            <option value={null}></option>
                            <option value="Info Tech">Information Technology</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Finance">Finance</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Retail">Retail</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Construction">Construction</option>
                            <option value="Marketing">Marketing</option>
                            </select>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>City: </label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='City' value={empForm.City} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>State: </label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='State' value={empForm.State} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Message: </label>
                            <textarea rows={4} className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' name='Message' value={empForm.Message} onChange={handleChange} required/>
                        </div>
                        
                        <div className='w-full flex justify-center'>
                            <button type='submit' className='rounded-[100px] text-[4.5vw] lg:text-[1.25vw] text-[var(--white-color)] font-[600] tracking-wide mt-6 px-8 py-2 bg-[var(--dark-golden-color)] transition-transform duration-500 ease-in-out hover:scale-[1.075]' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployersFormPage