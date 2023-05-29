import React from 'react';
import Scroll from './scroll'
import Logo from '/named-logo.png';
import {BiRightArrowAlt} from 'react-icons/bi';
import DownloadButton from './downloadp';
import Profile from '/profilepic.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import {IoIosSend} from 'react-icons/io'
import Footer from './footer'


const projects = [
  {
    title: 'Prathidhi Naivedhya',
    imageSrc: '/prathidhi-naivedhya.PNG',
    link: 'https://github.com/Balaji-Batchu/Prathidhi_Naivedhya',
    live_link: 'https://prathidhi-naivedhya.netlify.app'
  },
  {
    title: 'A.I Summarizer',
    imageSrc: '/A.I_GEN.png',
    link: 'https://github.com/Balaji-Batchu/Summarizer.io',
    live_link: 'https://ai-summarizer.netlify.app'
  },
  {
    title: 'FoodApp',
    imageSrc: '/foodapp.png',
    link: 'https://github.com/Balaji-Batchu/FoodApp',
    live_link: 'https://foodapp.netlify.app'
  },
  {
    title: 'Tenzies Game',
    imageSrc: '/tenzies.PNG',
    link: 'https://github.com/Balaji-Batchu/Tenzies-Game',
    live_link: 'https://tenzies.netlify.app'
  },
];

export const Phone = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
    };

    const sliderRef = useRef(null);

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


    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const yOffset = 0; // Adjust this value as per your requirements
            const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div>
        {/*Home Page*/}
                <nav className="flex items-center justify-center text-white p-4 bg-[#0e0733ff] bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <img src={Logo} className="h-10 rounded-full"/>
              <h2 className="text font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 font-merri">BALAJI BATCHU</h2>  
                </nav>
            <div id="home" className='bg-space-pattern bg-no-repeat bg-cover flex flex-col justify-center items-center pb-16 pt-4 px-4 h-screen'>
                <img src={Profile} alt='user img' className='md:hidden rounded-full h-56 w-56 outline outline-offset-8 outline-orange-400 ring ring-2 ring-offset-2 ring-teal-300 ring-offset-gray-800 hover:ring-3 hover:cursor-pointer'/>
                <div className='text-white font-merri pt-10'>
                <p className='text-xl'>Hi,&nbsp;
                                <span className="">I'm <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-orange-400 hover:underline hover:cursor-pointer decoration-[#85cbd9] decoration-2 underline-offset-4">Balaji Batchu</span></span> web Developer</p>
                </div>
                <p className='text-yellow-100 py-4 tracking-wide'>Frontend Developer | React Expert | Tech Enthusiast</p>
                <div className="flex justify-around items-center w-full pt-6">
                    <button className='outline outline-offset-1 outline-2 hover:outline-2 hover:outline-offset-4 px-2 py-1 outline-yellow-400 text-yellow-400 tracking-wider hover:bg-yellow-400 hover:text-gray-800 font-semibold flex justify-center items-center gap-2 font-merri rounded-md' onClick={scrollToContact}>
                        Contact Me <BiRightArrowAlt className="" size={20}/>
                    </button>
                    <DownloadButton />
                </div>
                <Scroll scrollTo="about"/>
            </div>

                    {/*About Page*/}
            <div id="about" className='bg-space-pattern bg-no-repeat bg-cover flex flex-col justify-center items-center py-16 px-6 h-screen'>
                <p className='font-merri text-yellow-400 text-2xl'>About me</p>
                <div className="group text-[#f5f5f5] text-xl leading- font- text-justify hover:cursor-pointer">
                    <div className='font-serif tracking-wide leading-relaxed'>
                    <div className='font-serif tracking-wide leading-relaxed py-4'>Hi, I'm <span className="group-hover:underline underline-offset-2 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">Balaji Batchu</span>, a frontend developer with a passion for crafting beautiful and intuitive user experiences. I specialize in developing dynamic and <span className="group-hover:underline underline-offset-2 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">responsive websites</span> using modern web technologies.</div><br />

                    <div className='font-serif tracking-wide leading-relaxed'>My love for web development stems from my desire to create <span className="group-hover:underline underline-offset-2 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">innovative solutions</span> that meet the needs of both businesses and their users. I am committed to staying up-to-date with the latest trends and techniques in the industry, and I am always <span className="group-hover:underline underline-offset-2 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">seeking opportunities</span> to learn and grow.</div><br />

                    <div className="font-serif tracking-wide leading-relaxed">If you're interested in working together, feel free to reach out! I'd love to chat about your project and see how I can help bring <span className="group-hover:underline underline-offset-2 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">your vision to life.</span></div></div></div>
                    <Scroll scrollTo="projects"/>
            </div>

            {/*Projects Page*/}
            <div id="projects" className='bg-space-pattern bg-no-repeat bg-cover flex flex-col justify-center items-center py-16 px-6 h-screen'>
                <p className='font-merri text-yellow-400 text-2xl tracking-wide '>My Previous Projects</p>
                
                
                <div className="mx-auto my-10 w-96 items-center justify-center text-yellow-400 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg group">
                    <Slider {...settings} ref={sliderRef}>
                        {projects.map((project, index) => (
                        <div key={index} className="px-4">
                            <h3 className="text-[#6ee7b7] font-semibold text-xl py-4">{project.title}</h3>
                            <img className="h-48 self-center hover:cursor-pointer rounded-lg" src={project.imageSrc} alt={project.title} />
                            <div className="flex justify-center mt-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mr-4 text-xl font-serif hover:text-sky-300">
                                GitHub Link
                            </a>
                            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-xl font-serif hover:text-sky-300">
                                Live Link
                            </a>
                            </div>
                        </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center mt-4">
                    </div>
                </div>
                <Scroll scrollTo="contact"/>
            </div>

        {/* contact page */}
            <div id="contact" className='bg-space-pattern bg-no-repeat bg-cover flex flex-col justify-center items-center py-16 px-6 h-screen'>
                <p className='font-merri text-yellow-400 text-2xl my-6'>Contact Me</p>


                <div className="min-w-64 w-4/5 outline outline-2 outline-teal-400 rounded-xl">
                <form ref={form} onSubmit={handleSubmit} className="max-w-sm mx-auto mt-2 py-2">
                    <div className="mb-4 px-4">
                        <label htmlFor="user_name" className="block mb-2 text-yellow-400 font-open">Name</label>
                        <input type="text" name="user_name" id="user_name" className="w-full px-6 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri"/>
                    </div>
                    <div className="mb-4 px-4">
                        <label htmlFor="user_email" className="block mb-2 text-yellow-400 font-open">Email</label>
                        <input type="email" name="user_email" id="user_email" className="w-full px-6 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri" />
                    </div>
                    <div className="mb-4 px-4">
                        <label htmlFor="subject" className="block mb-2 text-yellow-400 font-open">Subject</label>
                        <input type="text" name="subject" id="subject" className="w-full px-6 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri" />
                    </div>
                    <div className="mb-4 px-4">
                        <label htmlFor="message" className="block mb-2 text-yellow-400 font-open">Message</label>
                        <textarea name="message" id="message" rows="3" className="w-full px-6 py-2 border rounded-md focus:outline-none focus:border-sky-400 border-2 text-black font-bold font-merri"></textarea>
                    </div>
                    <div className="text-center flex items-center justify-center">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 font-bold text-[#1a0544ff] bg-amber-400 rounded-md hover:bg-amber-600 hover:text-white hover:font-bold focus:outline-none focus:bg-amber-500">Send <IoIosSend /></button>

                    </div>
                </form>
            </div>

            </div>
            <Footer />
        </div>
    )
}