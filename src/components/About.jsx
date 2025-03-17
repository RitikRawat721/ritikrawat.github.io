import React from 'react'
import { Element } from 'react-scroll';

const About = () => {
return(
<><Element name="About" ></Element>
<div className='w-full h-screen bg-[#26161f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full px-8'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            
            <div className='sm:text-right pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-[#8c52ff] text-gray-100'>About</p>
            </div>
            
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 '>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Ritik Rawat, nice to meet you, Please take a look around</p>
                </div> 
                <div>
                    <p>Hi, I'm Ritik Rawat, a passionate front-end developer skilled in HTML,
                       CSS, JavaScript, React, Tailwind CSS, jQuery, and SASS. I'm currently
                       learning Python to transition into full-stack development.
                       I love building responsive and interactive user interfaces,
                       focusing on clean code and great user experiences. I'm eager to grow,
                       collaborate with a dynamic team, and contribute to impactful projects.</p>
                </div>
            </div>
    </div>
</div>
</>
);
}

export default About;