import React from 'react'
import MusicPage from '../assets/musicPage.png'
import Buisness from '../assets/Buisness.png'
import Weather from '../assets/weather.png'
import { Element } from 'react-scroll'

const Work = () => {
return(
<>
<Element name="Work"  ></Element>
<div className='w-full h-full md:h-screen text-gray-300 bg-[#26161f]'>
    <div className='bg-[#26161f] max-w-[1000px] mx-auto p-4 flex-flex-col justify-center w-full h-full px-8'>
        <div className='pb-8'>
        <p className='text-4xl font-bold border-b-4 border-[#8c52ff] inline text-gray-100'>Work</p>
        <p className='py-4'>// Check out some of my personal work</p>
    </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div style={{backgroundImage: `url(${MusicPage})`}} 
            className='hoverContentdiv shadow-lg shadow-[#362630] group 
            container rounded-md flex justify-center items-center
             mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Html/Css Web-design
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="" target='blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold bg-white text-gray-700 hover:cursor-pointer'>Demo</button>
                        </a>
                        <a href="https://github.com/RitikRawat721/Projects/tree/master/frontend/music_page" target='blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold bg-white text-gray-700 hover:cursor-pointer'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Buisness})`}} 
            className='hoverContentdiv shadow-lg shadow-[#362630] group 
            container rounded-md flex justify-center items-center
             mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    React Js Web-App
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="#" target='blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold bg-white text-gray-700 hover:cursor-pointer'>Demo</button>
                        </a>
                        <a href="https://github.com/RitikRawat721/Projects/tree/master/frontend%20with%20react/BuisinessPage" target='blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold bg-white text-gray-700 hover:cursor-pointer'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Weather})`}} 
            className='hoverContentdiv shadow-lg shadow-[#362630] group 
            container rounded-md flex justify-center items-center
             mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    JS App using API
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="" target='blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold bg-white text-gray-700 hover:cursor-pointer'>Demo</button>
                        </a>
                        <a href="https://github.com/RitikRawat721/Projects/tree/master/Js%20projects/weatherApp" target='blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold bg-white text-gray-700 hover:cursor-pointer'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
);
}

export default Work;