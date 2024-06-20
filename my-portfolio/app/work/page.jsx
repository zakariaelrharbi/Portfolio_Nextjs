'use client';

import { motion } from 'framer-motion';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';


const projects = [
  {
    num : '01',
    category: 'frontend',
    title: 'Frajaflex',
    description: 'Project 1 description',
    stack:[{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
    image: '',
    live: '',
    github: '',
  },
  {
    num : '02',
    category: 'backend',
    title: 'SurfMinds',
    description: 'Project 2 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}],
    image: '',
    live: '',
    github: '',
  },
  {
    num : '03',
    category: 'fullstack',
    title: 'NewWave',
    description: 'Project 3 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: '',
    live: '',
    github: '',
  },
  {
    num : '04',
    category: 'fullstack',
    title: 'Bloglet',
    description: 'Project 4 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: '',
    live: '',
    github: '',
  },
  {
    num : '05',
    category: 'fullstack',
    title: 'Jawhar Al Maarifa',
    description: 'Project 5 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: '',
    live: '',
    github: '',
  },
  {
    num : '06',
    category: 'fullstack',
    title: 'YouPrint',
    description: 'Project 6 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: '',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:1.5, duration:0.4, ease:'easeIn'}}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/*/ outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline group transitiob-all duration-500 group-hover:text-accent'>{project.num}</div>
              {/* project category */}
              <h2 className='text-[42px] capitalize font-bold leading-none text-white  hover:text-accent transitiob-all duration-500'>{project.category}</h2>
              {/* project description */}
              <p className='text-[18px] text-white/70'>{project.description}</p>
              {/* project stack */}
              <ul className='grid  grid-cols-2 xl:grid-cols-3 gap-1 '>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>{item.name}
                    {/* remove last comma */}
                    {index !== project.stack.length - 1 && <span className='text-white/70'>,</span>}
                    </li>
                  )
                
                })
                }
              </ul>
              {/* border */}
              <div className='border border-white/40'></div>
              {/* button */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-[#3256232e] flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl  group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>Live Project</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github repo */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-[#3256232e] flex justify-center items-center group'>
                        
                        <BsGithub className='text-white text-3xl   group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>View In Github</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                    </div>
                    {/* images */}
                    <div className='relative w-full h-full'> 
                      <Image src={project.image} fill className='object-cover' alt=''/>
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              
            </Swiper>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Work
