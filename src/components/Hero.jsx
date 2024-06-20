import React from 'react';
import profilepic from "../assets/ppic.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import {
    DiJavascript1,
    DiReact,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap

} from 'react-icons/di';

const Hero = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-4 " id="home">

            <div className="grid grid-cols-2 md:col-span-5 p-4 glass">
                <div className='flex items-center justify-start'>
                    <img
                        className="w-[800px] rounded-3xl"
                        src={profilepic}
                        alt="profile pic" />
                </div>

                <div className="my-auto ml-0 md:ml-4 flex-col text-gray-200">
                    <p className="text-xl lg:text-4xl font-bold">Hi! I am <br />Gajendra Nagre <br />
                        <TypeAnimation
                            sequence={[
                                "Frontend Dev",
                                1000,
                                "Webdesigner",
                                1000,
                                "Consultant",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>
                    <p className="text-xl md:text-3xl font-semibold text-gray-400">with a 6 months experience</p>
                    {/* <button className="mt-6 px-2 py-2 text-sm md:text-lg font-bold text-white bg-primary-color rounded-xl"> 
                    <a href='../assets/Gajendra Nagre Resume_9850077683.pdf' download="Gajendra's Resume.pdf" title='Download Resume' rel="noopener noreferrer">
                            Download CV
                    </a>
                    </button> */}
                        {/* <button className="mt-4 px-2 py-2 text-sm md:text-lg font-bold text-white bg-primary-color rounded-xl">Open CV</button> */}
                    <a href="https://drive.google.com/file/d/19LsICNfQmBzxBqKHPk0Bfo-uCaUDyNmO/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
    <button className="mt-4 px-2 py-2 text-sm md:text-lg font-bold text-white bg-primary-color rounded-xl">
        Open CV
    </button>
</a>

                </div>
            </div>

            <div className="grid md:col-span-3 gap-6">

                <div className="text-5xl p-12 glass">
                    <p className="text-gray-200 text-x1 font-bold mb-4 text-center">My Tech Stack</p>
                    <div className="grid grid-cols-4 gap-4">
                        <DiHtml5 className="text-orange-600" />
                        <DiCss3 className="text-blue-600" />
                        <DiSass className="text-pink-600" />
                        <DiBootstrap className="text-purple-600" />
                        <DiJavascript1 className="text-yellow-500" />
                        <DiReact className="text-blue-500" />
                    </div>
                </div>

                <div className="text-6xl gap-4 flex justify-center items-center glass text-gray-600">
                    <a href="https://github.com/Gajendra-28" target='_blank' className="hover:scale-110 trasition-transform duration-300"> <AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/gajendra-nagre-338947153" target='_blank' className="hover:scale-110 trasition-transform duration-300"> <AiFillLinkedin /></a>
                    <a href="https://www.instagram.com/spoiled_brat.28?igsh=MzNlNGNkZWQ4Mg==" target='_blank' className="hover:scale-110 trasition-transform duration-300"><AiFillInstagram /></a>


                </div>
            </div>





        </div>
    )
}
export default Hero;