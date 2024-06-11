import React from 'react'
// import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <hr className='mt-10'/>
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-6 text-sm md:text-lg'>
      <div className='space-y-4'>
        <h3 className='md:text-xl text-gray-200 font-semibold'>Gajendra Nagre</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
        <a href="https://github.com/Gajendra-28" target='_blank' className="hover:scale-110 trasition-transform duration-300"> <AiFillGithub className="text-2xl text-gray-300 hover:text-red-600 transition duration-300"/></a>
        <a href="https://www.linkedin.com/in/gajendra-nagre-338947153" target='_blank' className="hover:scale-110 trasition-transform duration-300"> <AiFillLinkedin className="text-2xl text-gray-300 hover:text-red-600 transition duration-300"/></a>
        <a href="https://www.instagram.com/spoiled_brat.28?igsh=MzNlNGNkZWQ4Mg==" target='_blank' className="hover:scale-110 trasition-transform duration-300"><AiFillInstagram className="text-2xl text-gray-300 hover:text-red-600 transition duration-300"/></a>
        
        </div>

      </div>
      <p className='text-gray-400 text-sm md:text-xl'>@2024 Gajendra Nagre</p>
    </div>
    </>
  )
}

export default Footer