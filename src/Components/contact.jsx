import { Link } from 'react-router-dom'
import Logo from '../../public/named-logo.png'
import {IoIosHome} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'
import {IoMdMail} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {ContactSide} from './contactPart.jsx'
import {Loading} from './loader'
import {useState, useEffect} from 'react'

export const Contact = () =>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function setLoadingState() {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        };
        setLoadingState();
    }, []);

    return(
        <>
         {loading ? <Loading /> :
        <div className="flex h-full">
        {/* side bar */}
            <div className="flex flex-col h-screen p-3 bg-gradient-to-t from-[#331374ff] via-[#190e6aff] to-[#150a56ff] shadow w-56 font-merri justify-between py-2">
                <div className="space-y-3">
                    <div className="flex flex-col items-center">
                        <img src={Logo} alt="logo" className="bg-transparent h-24"></img>
                        <h2 className="text font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">BALAJI BATCHU</h2>
                    </div>
                </div>

                <div className="items-center justify-center ">
                    <Link to='/'><IoIosHome className="text-gray-200 mx-10 my-8 hover:text-yellow-400 rounded-lg " size="24"/></Link>
                    <Link to='/about'><CgProfile className="text-gray-200 mx-10 my-8 hover:text-yellow-400" size="24"/></Link>
                    <Link to='/code'><BsCodeSlash className="text-gray-200 mx-10 my-8 hover:text-yellow-400" size="24"/></Link>
                    <Link to='/contact'><IoMdMail className="text-yellow-400 mx-10 my-8 hover:text-yellow-400" size="24"/></Link>
                </div>

                <div>
                    <a target="_blank" href='https://www.linkedin.com/in/balajibatchu'><FaLinkedin className="text-gray-300 mx-10 my-8 hover:text-blue-400" size="24"/></a>
                    <a target="_blank" href="https://www.github.com/Balaji-Batchu"><AiOutlineGithub className="text-gray-300 mx-10 my-8 hover:text-white" size="24"/></a>
                </div>
            </div>
            {/* main content */}
            <ContactSide />
            
        </div>}
        </>
    )
}

// console.log(<Loading />)