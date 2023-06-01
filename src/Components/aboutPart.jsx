import React from 'react';
import {Cube} from './cube'
import {BouncyText} from './bounce'

export const AboutSide = () =>{
    return(
        <div className="flex bg-space-pattern bg-cover bg-no-repeat">
        <div className="mx-36 flex flex-col my-6 w-6/12 justify-center">
            <p className='text-[#ffd700] text-2xl font-dance my-2'>&lt;h1&gt;</p>
            <div>
                <BouncyText text="About" />
                <BouncyText text="Me" />
            </div>
            <p className='text-[#ffd700] text-2xl font-dance my-2'>&lt;/h1&gt;</p>
            <p className='text-[#ffd700] text-3xl font-dance my-2'>&lt;body&gt;</p>
            <div className="group text-[#f5f5f5] text-xl my-6 leading-10 font-open pl-6 text-justify tracking-wide hover:cursor-pointer">
            <div className='leading-loose'>
            <div className='leading-loose'>Hi, I'm <span className="group-hover:underline underline-offset-4 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">Balaji Batchu</span>, a frontend developer with a passion for crafting beautiful and intuitive user experiences. I specialize in developing dynamic and <span className="group-hover:underline underline-offset-4 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">responsive websites</span> using modern web technologies.</div><br />

            <div className='leading-loose'>My love for web development stems from my desire to create <span className="group-hover:underline underline-offset-4 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">innovative solutions</span> that meet the needs of both businesses and their users. I am committed to staying up-to-date with the latest trends and techniques in the industry, and I am always <span className="group-hover:underline underline-offset-4 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">seeking opportunities</span> to learn and grow. I believe that a healthy work-life balance is key to maintaining productivity and creativity, and I strive to bring that balance into everything I do.</div><br />

            <div className="leading-loose">If you're interested in working together, feel free to reach out! I'd love to chat about your project and see how I can help bring <span className="group-hover:underline underline-offset-4 decoration-2 decoration-yellow-400 group-hover:text-[#6ee7b7]">your vision to life.</span></div></div></div>
            <p className='text-[#ffd700] text-3xl font-dance my-2'>&lt;/body&gt;</p>

        </div>
        <Cube />
    </div>
    )
}
// console.log(<Cube />)