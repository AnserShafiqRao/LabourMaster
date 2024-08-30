import React, { useState } from 'react'
import './styles.css'


const JobSeekersFormPage = () => {

    const [error, setError] = useState('');
    const [applicationForm, setApplicationForm] = useState({
        Firstname: '',
        Lastname:'',
        Email: '',
        Phone:'',
        Industry:'',
        MajorExperience: '',
        Resume: URL,
        SubmissionDate:'',
        SubmissionTime:'',
        NewStatus: true,
        Js_Id:'',
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === 'Phone') {
          let formattedPhone = value.replace(/\D/g, '');
          if (formattedPhone.length > 10) {
            formattedPhone = formattedPhone.slice(0, 10);
          }
          formattedPhone = formattedPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3');
          setApplicationForm((prev) => ({
            ...prev,
            [name]: formattedPhone,
          }));
        } 
        // else if (name === 'resume') {
        //   const allowedTypes = [
        //     'application/msword',
        //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        //     'text/plain',
        //     'application/pdf',
        //   ];
    
        //   const file = files[0];
    
        //   if (file && allowedTypes.includes(file.type)) {
        //     setApplicationForm((prev) => ({
        //       ...prev,
        //       [name]: file,
        //     }));
        //     setError('');
        //   } 
        //   else {
        //     setError('Please upload a valid file format: .doc, .docx, .txt, or .pdf');
        //     e.target.value = null;
        //   }
        // } 
        else {
          setApplicationForm((prev) => ({
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
                <h1 className='z-10 text-[#d0ac34] text-[7.8vw] lg:text-[3vw] font-[700] tracking-wide'>Job Application</h1>
            </div>
            <div className='flex flex-col items-center lg:mx-auto my-5 lg:my-6 lg:w-[77%] text-center'>
                <h4 className='capitalize tracking-wide text-[5.2vw] lg:text-[1.3vw]'>Thank you for your interest in joining one of our roles at Intellect Workforce. <span className='hideOnMobile'>Please provide the required information below and upload a recent copy of your resume for consideration.</span></h4>
                
                <div className='flex flex-col justify-start items-start w-[90%] text-start lg:w-full mt-4 lg:mt-6'>
                
                    <h4 className=' tracking-normal text-[4.5vw] lg:text-[1.25vw]'>Please complete the form, and we will be in touch with you soon.</h4>
                    <form className='flex flex-wrap flex-row justify-start w-full' onSubmit={handleSubmission}>

                        <h3 className='w-full text-start text-[4.5vw] lg:text-[1.25vw] text-[var(--black-color)] font-[700] tracking-wide mt-4 lg:mt-3 mb-3 lg:mb-2'>Applicant's Information</h3>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>First Name:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='Firstname' value={applicationForm.Firstname} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Last Name:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='Lastname' value={applicationForm.Lastname} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Email:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='email' name='Email' value={applicationForm.Email} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Phone#</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='tel' name='Phone' value={applicationForm.Phone} onChange={handleChange} required/>
                        </div>

                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Target Industry:</label>
                            <select
                            className="text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]"
                            name="Industry"
                            value={applicationForm.Industry}
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
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Major Experience:</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='text' name='MajorExperience' value={applicationForm.MajorExperience} onChange={handleChange} required/>
                        </div>
                        <div className=' flex flex-col text-start w-[100%] lg:w-[48%] mx-[1%] mb-[3%] lg:mb-[1%]'>
                            <label className='text-[4.25vw] lg:text-[1.23vw] font-[600]'>Upload Your Resume</label>
                            <input className='text-[4.25vw] lg:text-[1.23vw] bg-stone-300 py-2 lg:py-2 px-2 lg:px-3 rounded-xl lg:rounded-md text-[var(--dark-golden-color)] font-[500]' type='file' accept='.doc, .docx, .txt, .pdf' name='Resume' id='resume-upload' onChange={handleChange} required/>
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

export default JobSeekersFormPage