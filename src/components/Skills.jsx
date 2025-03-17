import React from 'react'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import Jquery from '../assets/jquery.png'
import NodeJs from '../assets/node.png'
import Python from '../assets/Python.png'
import Reactpng from '../assets/react.png'
import Sass from '../assets/SASS.png'
import Tailwind from '../assets/tailwind.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import { Element } from 'react-scroll'

const Skills = () => {
return(
<>
<Element name="Skills"></Element>
<div className='bg-[#26161f] text-gray-300 w-full md:h-screen'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full px-8'>
        <div>
            <p className='text-4xl inline font-bold border-b-4 border-[#8c52ff] text-gray-100'>Skills</p>
            <p className='py-4'>// These are the technologies I've worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NodeJs} alt="HTML icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Reactpng} alt="HTML icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                <p className='my-4'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Jquery} alt="HTML icon" />
                <p className='my-4'>JQUERY</p>
            </div>
            <div className='shadow-md shadow-[#362630] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Sass} alt="HTML icon" />
                <p className='my-4'>SASS</p>
            </div>
        </div>
    </div>
</div>
</>
);
}

export default Skills;