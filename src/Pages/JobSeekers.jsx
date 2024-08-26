import React from 'react'

const JobSeekers = () => {
  return (
    <div className='w-full flex flex-col'>
      {/* Section 1 */}
      <div className='services-section-1 flex flex-col justify-center lg:items-start w-full lg:min-h-[90vh]'>
        <div className='flex flex-col items-start section-1-inner-content z-10'>
          <h3 className=' text-[6vw] leading-7 mb-2 lg:mb-2 lg:text-[1.7vw] lg:font-[600] capitalize lg:tracking-[0.5px] text-[var(--white-color)] lg:leading-9 2xl:leading-auto'>
          Tailoring recruitment solutions to the <span className='text-[var(--golden-color)] underline italic tracking-[1px]'>Unique Demands</span> of every industry </h3>
          <h4 className='text-[4.5vw] leading-6 capitalize mb-4 lg:tracking-wider lg:mb-auto lg:leading-auto lg:text-[1.2vw] lg:font-[400] text-[var(--white-color)]'>We are committed to offering tailored solutions that align with the distinct demands of every industry. With a focus on excellence and versatility, we empower a wide array of sectors with targeted expertise, ensuring the best results and continued growth.</h4>
          <button className='py-[1%] px-4  lg:py-2 lg:px-6 lg:mt-[3vh] font-[600] rounded-xl tracking-[0.5px] bg-[var(--golden-color)] hover:bg-[var(--blackish-golden-color)] hover:text-[var(--golden-color)] hover-effect'>Connect With Us</button>
        </div>
      </div>

      {/* Section 2 */}

    </div>
  )
}

export default JobSeekers