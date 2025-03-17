import React from 'react'
import { Element } from 'react-scroll';

const Contact = () => {
return(
<>
<Element name="Contact"  ></Element>
<div className='w-full h-screen bg-[#26161f] flex justify-center items-center px-8 p-4'>
    
    <form action="https://getform.io/f/bxowrwda" method='POST' className='flex flex-col max-w-[600px] w-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#8c52ff] text-gray-100' >Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or send me an email - ritikrawat140627@gmail.com</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder='Name' name="name"/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Eamil' name="eamil"/>
        <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows='10' id=""></textarea>
        <button className='text-white border-2 px-6 py-3 my-2 hover:bg-[#8c52ff] hover:border-[#8c52ff] hover:cursor-pointer
             hover:text-black hover:rounded-4xl duration-300 hover:font-bold mx-auto flex items-center' type='submit'>Let's Collaborate</button>
    </form>

</div>
</>
);
}

export default Contact;