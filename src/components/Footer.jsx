import React from 'react'
// import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Gajendra Nagre</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
        <a href="https://github.com/Gajendra-28" target='_blank' className="hover:scale-110 trasition-transform duration-300"> <AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/gajendra-nagre-338947153" target='_blank' className="hover:scale-110 trasition-transform duration-300"> <AiFillLinkedin/></a>
        <a href="https://www.instagram.com/spoiled_brat.28?igsh=MzNlNGNkZWQ4Mg==" target='_blank' className="hover:scale-110 trasition-transform duration-300"><AiFillInstagram/></a>
        
        </div>

      </div>
      <p className='text-gray-400'>@2024 Gajendra Nagre</p>
    </div>
  )
}

export default Footer