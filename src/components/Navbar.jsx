import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const closeMenu = () => {
        setNav(false);
    }

    return (
        <div className='max-w-[1200px] h-24 mx-auto flex justify-between items-center text-lg px-4 md:px-0'>
            <h1 className='text-3xl font-bold text-gray-200'>Gajendra Nagre</h1>
            <ul className='hidden md:flex text-gray-200'>
                <li className='p-5 hover:scale-110 trasition-transform duration-300'><a href="#portfolio">Portfolio</a></li>
                <li className='p-5 hover:scale-110 trasition-transform duration-300'><a href="#about">Experience</a></li>
                <li className='p-5 hover:scale-110 trasition-transform duration-300'><a href="#contact">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden z-40'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'z-40 text-gray-300 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#171717] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl font-bold m-4'>Gajendra Nagre</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-5'><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li className='p-5'><a href="#about" onClick={closeMenu}>Experience</a></li>
                    <li className='p-5'><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
