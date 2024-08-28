import React from 'react'
import { Disclosure } from '@headlessui/react';
import '../styles/style.css'
import { CiCirclePlus as Plus} from "react-icons/ci";
import { CiCircleMinus as Minus} from "react-icons/ci";


function FAQItem({ question, answer,underline }) {
    return (
        <Disclosure>
            {({ open }) => (
            <div className={underline && !open ? 'drop-downs' : ''}>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 lg:text-[1.8vw] font-[700]  text-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span>{question}</span>
                    <span className={`transform transition-transform duration-500 ${open ? 'rotate-180' : ''}`}>
                    {open ? (
                        <Minus className="text-black lg:text-[1.8vw] font-[700]" />
                    ) : (
                        <Plus className="text-black lg:text-[1.8vw] font-[700]" />
                    )}
                    </span>
                </Disclosure.Button>

                <Disclosure.Panel className={`px-4 pt-4 pb-2 text-[1.3vw] text-stone-800 transform transition-transform duration-500 ${open ? 'shadow-2xl shadow-stone-200 rounded-3xl':''} ` } >
                    {answer}
                </Disclosure.Panel>
            </div>
            )}
        </Disclosure>
    );
  }

const FAQs = () => {

    const faqs = [
        {
            underline: true,
          question: 'Is there any long-term commitment involved?',
          answer: 'There is no long-term commitment, and you can terminate your agreement with us by giving us a 7-day written notice. However, if you choose to go for a long-term commitment, we can offer you specialized pricing.',
        },
        {
            underline: true,
          question: 'What if the virtual assistant doesn’t work out?',
          answer: 'You can try a different assistant, or you can terminate the service with a 7-day notice.',
        },
        {
            underline: true,
          question: 'What if the virtual assistant doesn’t work out?',
          answer: 'You can try a different assistant, or you can terminate the service with a 7-day notice.',
        },
        {
            underline: true,
          question: 'What if the virtual assistant doesn’t work out?',
          answer: 'You can try a different assistant, or you can terminate the service with a 7-day notice.',
        },
        {
            underline: false,
          question: 'What is included with my purchase?',
          answer: 'Your purchase includes access to a dedicated virtual assistant, as well as ongoing support from our team.',
        },
      ];
  return (
    <div id='faqs' className='flex flex-col w-full justify-center items-center'>
        <h2 className='lg:text-[2.4vw] font-[700] tracking-normal '>Frequently Asked Questions</h2>
        {/* <h4 className='mb-2 text-[7vw] lg:text-[1.3vw] font-[400] tracking-normal text-[var(--black-color)]'>Ready to hire a virtual assistant? <Link className='underline text-[var(--dark-golden-color)]'>Click here</Link></h4>         */}
        <div className=' w-[55%]'>
        {faqs.map((faq, index) => (
        <div key={index} className="my-4">
          <FAQItem question={faq.question} answer={faq.answer} underline={faq.underline} />
        </div>
      ))}
        </div>
    </div>
  )
}

export default FAQs