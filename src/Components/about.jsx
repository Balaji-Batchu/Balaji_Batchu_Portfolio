import { Link } from 'react-router-dom'
import Logo from '/named-logo.png'
import {IoIosHome} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'
import {IoMdMail} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {AboutSide} from './aboutPart.jsx'

export const About = () =>{
    return(
        <div className="flex">
        {/* side bar */}
            <div className="flex flex-col h-screen p-3 bg-gradient-to-t from-[#331374ff] via-[#190e6aff] to-[#150a56ff] shadow w-96 justify-between py-2">
            
                <div className="space-y-3">
                    <div className="flex flex-col items-center">
                        <img src={Logo} alt="logo" className="bg-transparent h-24"></img>
                        <h2 className="text font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 font-merri">BALAJI BATCHU</h2>
                    </div>
                </div>

                <div className="items-center justify-center ">
                    <Link to='/'><IoIosHome className="text-gray-100 mx-10 my-8 hover:text-yellow-400 rounded-lg " size="24"/></Link>
                    <Link to='/about'><CgProfile className="text-yellow-400 mx-10 my-8 hover:text-yellow-400" size="24"/></Link>
                    <Link to='/code'><BsCodeSlash className="text-gray-100 mx-10 my-8 hover:text-yellow-400" size="24"/></Link>

                    <Link to='/contact'><IoMdMail className="text-gray-100 mx-10 my-8 hover:text-yellow-400" size="24"/></Link>
                </div>

                <div>
                    <a target="_blank" href='https://www.linkedin.com/in/balajibatchu'><FaLinkedin className="text-gray-300 mx-10 my-8 hover:text-blue-400" size="24"/></a>
                    <a target="_blank" href="https://www.github.com/Balaji507"><AiOutlineGithub className="text-gray-300 mx-10 my-8 hover:text-white" size="24"/></a>
                </div>
            </div>

            {/* main content */}
            <AboutSide />
        </div>
    )
}

// console.log(<About />)