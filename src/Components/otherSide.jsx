import React from 'react';
import AutoComplete from './autoComplete'
import Profile from '../../public/profilepic.png'
import {BiRightArrowAlt} from 'react-icons/bi'
import DownloadButton from './download'
import {Link} from 'react-router-dom'

export const OtherSide = () =>{
    return(
        <div className="mx-36 flex">
            <div className='flex flex-col justify-center'>
                <p className='text-[#ffd700] text-2xl font-dance my-2'>&lt;h1&gt;</p>
                <div className="text-8xl font-bold text-white px-4 font-merri">
                    <p>Hi,</p>
                    <p className="">I'm <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-orange-400 hover:underline hover:cursor-pointer decoration-[#85cbd9] decoration-4 underline-offset-8">Balaji Batchu</span></p>
                    <p>web Developer</p>                
                </div>
                <p className='text-[#ffd700] text-2xl font-dance my-2'>&lt;/h1&gt;</p>
                <p className='text-yellow-100 text-xl my-6 tracking-widest'>Frontend Developer / React Expert / Tech Enthusiast</p>
                <div className="">
                    <Link to="/contact">
                        <button className='outline outline-offset-1 outline-2 hover:outline-2 hover:outline-offset-4 px-4 py-2 outline-yellow-400 text-xl text-yellow-400 tracking-wider hover:bg-yellow-400 hover:text-gray-800 font-semibold mb-6 flex justify-center items-center gap-2 font-merri'>
                            Contact Me <BiRightArrowAlt className="" size={20}/>
                        </button>
                    </Link>
                    <div className="flex justify-start">
                        <DownloadButton />
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center ml-56'>

                <img src={Profile} alt='user img' className='rounded-full h-96 outline outline-offset-8 outline-orange-400 ring ring-2 ring-offset-2 ring-teal-300 ring-offset-gray-800 hover:ring-3 hover:cursor-pointer'/>
                <div className="self-center my-6">
                    <AutoComplete />
                </div>
            </div>
        </div>
    )
}
// console.log(<DownloadButton />)