import React, { useState } from 'react';
import project1 from "../assets/chatapp.png";
import project3 from "../assets/project2.png";
import project2 from "../assets/project_3.jpg";
import project4 from "../assets/project_4.png";
// import arrow from "../assets/arrow.png";
// import { AiFillGithub } from 'react-icons/ai';

const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "UI for frontend development of Chat Cummunity Model using React and Also Implement Socketio and API.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project2,
        title: "Project #2",
        description: "UI for frontend development using React.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project3,
        title: "Project #3",
        description: "UI for frontend development of Portfolio using React.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project4,
        title: "Project #4",
        description: "UI for frontend development of Bookshelf using React.",
        links: {
            site: "#",
            github: "#",
        },
    },


];

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0);

    return (
        <div className="my-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-6 px-4" id="portfolio">
            <div className="relative z-10 col-span-1 md:col-span-3 grid place-items-center">
                <p className="text-gray-200 font-bold text-4xlmd:skew-y-6 mb-4 md:mb-0">Select Project</p>
                {/* <img src={arrow} alt="Select project arrow" className="absolute w-[50px] top-10 right-0 md:right-12" /> */}

                <ul className="flex flex-wrap justify-center md:flex-col gap-6 md:gap-1 md:space-y-4 md:text-2xl">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            onClick={() => setCurrentProject(index)}
                            className={`cursor-pointer text-gray-300 mx-0 my-0 ${currentProject === index ? 'active-project' : ''}`}
                        >
                            {project.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="z-10 glass w-full col-span-1 md:col-span-5">
                <div className="w-full h-80">
                    <img
                        className="w-full h-full object-cover rounded-2xl mb-4"
                        src={projects[currentProject].img}
                        alt={projects[currentProject].title}
                    />
                </div>

                <div className="p-4 overflow-auto">
                    <p className="text-gray-200 my-4 break-words">{projects[currentProject].description}</p>
                    <div className="flex space-x-4">
                        {/* <a
                            href={projects[currentProject].links.site}
                            className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                        >
                            View Site
                        </a>
                        <a
                            href={projects[currentProject].links.github}
                            className=" text-2xl px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                        >
                            <AiFillGithub />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
