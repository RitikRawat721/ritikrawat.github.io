import React, { useState } from 'react'
import Logo from '../assets/R(3).png'
import { FaBars , FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from 'react-scroll'

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => {
    setNav(!nav)
}

return(

<>
<div className='fixed w-full h-[80px] flex
 justify-between items-center px-4 bg-[#26161f]
 text-gray-300'>
    <div>
        <img className='w-[80px] ' src={Logo} alt="Logo" />
    </div>
    
        <ul className='hidden md:flex'>
            <li>
                <Link to="Hero" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="About" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="Skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="Work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="Contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
   

    {/*Hamburger*/}
    <div onClick={handleClick} className='md:hidden z-10' >
       {!nav ?  <FaBars /> : <FaTimes />}
    </div>

    {/*mobile menu*/}
    
        <ul className={!nav ? "hidden" :
             "absolute top-0 left-0 w-full h-screen bg-[#26161f] flex flex-col justify-center items-center"}> 
            <li className='py-6 text-4xl'>
                <Link to="Hero" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="About" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="Skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="Work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to="Contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
    

    {/*social icons*/}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-4xl  duration-300 bg-blue-500'>
                <a className='flex justify-between text-xl font-bold items-center w-full text-gray-100' href="https://www.linkedin.com/in/ritik-rawat-06796831b/">
                Linkdin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-4xl  duration-300 bg-red-500'>
                <a className='flex justify-between text-xl font-bold items-center w-full text-gray-100' href="mailto:ritikrawat140627@gmail.com" target='blank'>
                Gmail <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-4xl duration-300 bg-purple-950'>
                <a className='flex justify-between text-xl font-bold items-center w-full text-gray-100' href="https://github.com/RitikRawat721" target='blank'>
                GitHub <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-4xl duration-300 bg-gray-700'>
                <a className='flex justify-between text-xl font-bold items-center w-full text-gray-100' href="/">
                CV <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
            </ul> 
    </div>
</div>
</>
);
}

export default Navbar;