import React from 'react';
import {useState,useRef} from 'react'
import {BouncyText} from './bounce'
import emailjs from '@emailjs/browser';
import {IoIosSend} from 'react-icons/io'
import {Notification} from './notification';
import developers from '/developers.png'
//import contact from '../../public/contacts.png'

export const ContactSide = () =>{
  const form = useRef();
    const [popup,setPopup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_cg9jrkb', 'template_vsma0mi', form.current,'2z3L6GBIxXI23Jv7u')
    .then((result) => {
      console.log(result.text);
      form.current.reset();
      setPopup(true);
      setTimeout(()=>{
        setPopup(false)
      },3000)
    }, (error) => {
      console.log(error.text);
    });
  };
    return(
        <div className='flex bg-space-pattern bg-cover bg-no-repeat'>
        <div className="ml-36 flex flex-col w-6/12">
            {popup && <Notification message="Message Sent Successfully" />}
            <div className=" flex flex-col mt-6 mb-2 ">
                <p className='text-[#ffd700] text-2xl font-dance mb-2'>&lt;h1&gt;</p>
                <div className='ml-2'>
                    <BouncyText text="Contact" />
                    <BouncyText text="Me" />
                </div>
                <p className='text-[#ffd700] text-2xl font-dance my-2'>&lt;/h1&gt;</p>
                <p className='text-[#ffd700] text-3xl font-dance mt-2'>&lt;body&gt;</p>
                <p className="text-sky-100 text-xl my-6 leading-10 font-open pl-6 text-justify tracking-wide">I am intrested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question don't hesitate to contact me using below form either.</p>

            </div>
            <div className=" self-start min-w-64 w-3/4 outline outline-2 outline-teal-400 rounded-xl ml-6">
                <form ref={form} onSubmit={handleSubmit} className="max-w-sm mx-auto mt-2 py-2">
                    <div className="mb-4">
                        <label htmlFor="user_name" className="block mb-2 text-yellow-400 font-open">Name</label>
                        <input type="text" name="user_name" id="user_name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_email" className="block mb-2 text-yellow-400 font-open">Email</label>
                        <input type="email" name="user_email" id="user_email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block mb-2 text-yellow-400 font-open">Subject</label>
                        <input type="text" name="subject" id="subject" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-yellow-400 font-open">Message</label>
                        <textarea name="message" id="message" rows="3" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri"></textarea>
                    </div>
                    <div className="text-center flex items-center justify-center">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 font-bold text-[#1a0544ff] bg-amber-400 rounded-md hover:bg-amber-600 hover:text-white hover:font-bold focus:outline-none focus:bg-amber-500">Send <IoIosSend /></button>

                    </div>
                </form>
            </div>
                <p className='text-[#ffd700] text-3xl font-dance my-2'>&lt;/body&gt;</p>
        </div>
        <div className='flex text-white justify-center items-center text-8xl bg-svg-pattern bg-no-repeat bg-center'>
            <img src={developers} alt='svg-contact' className="ml-2 h-2/4"/>
        </div>
    </div>
    )
}

// console.log(<Notification />)