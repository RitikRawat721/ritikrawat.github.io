import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link, Element } from 'react-scroll';

const Hero = () => {
return(
<>
<Element name="Hero"  ></Element>
<div className='bg-[#26161f] w-full h-screen'>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#C0C0C0]'>
        <p className='text-[#8c52ff] mt-8'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-50'>Ritik Rawat</h1>
        <h2 className='text-3xl sm:6xl font-bold text-gray-400'> 
            A passionate Frontend Developer on 
            the path to Full-Stack Mastery!</h2>
        <p className='text-[#C0C0C0] py-4 max-w-[700px]'>
            I specialize in crafting responsive, 
            user-friendly web interfaces with modern technologies
             like HTML, CSS, JavaScript, and React. I love turning 
             ideas into interactive experiences,
              focusing on both aesthetics and functionality.</p>    
        <p className='text-[#C0C0C0] py-2 max-w-[700px]'>Let's connect and create something amazing together! 🚀</p>
        <div>
            <Link to="Work" smooth={true} duration={500}>
                <button className='flex group text-white border-2 px-6 py-3 my-2 items-center hover:bg-[#8c52ff] hover:border-[#8c52ff] hover:cursor-pointer
                                 hover:text-black hover:rounded-4xl duration-300 hover:font-bold'>My Work 
                <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300'/>
                </button>
            </Link>
            
        </div>
    </div>
</div>
</>
);
}

export default Hero;