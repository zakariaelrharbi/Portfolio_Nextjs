'use client';

import { motion } from 'framer-motion';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub, BsBehance } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import img1 from '../../public/blog1.svg'
import img2 from '../../public/cuisi1.svg'
import img3 from '../../public/youpr1.svg'
import img4 from '../../public/jawhar1.svg'
import img5 from '../../public/surf1.svg'
import img6 from '../../public/flickhub.svg'


const projects = [
  {
    num : '01',
    category: 'front-end',
    title: 'FlickHub',
    description: 'FlickHub is a platform for exploring and managing movie collections with an intuitive user experience.',
    stack:[{name: 'React.js'}, {name: 'Redux'}, {name: 'CSS'}, {name: 'firebase'}],
    image:img6,
    live: '',
    github: 'https://github.com/zakariaelrharbi/FlickHub',
    behance:'',
  },
  {
    num : '02',
    category: 'fullstack',
    title: 'Bloglet',
    description: 'Bloglet is a full-stack blogging platform. It provides a seamless experience for creating, managing, and sharing blog posts.',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: img1,
    live: '',
    github: 'https://github.com/zakariaelrharbi/Bloglet',
    behance:'',
  },
  {
    num : '03',
    category: 'Wordpress',
    title: 'Cuisinix',
    description: 'Discover the sleek and user-friendly web design of Cuisinix, an e-commerce platform dedicated to selling all kitchen essentials. ',
    stack:[{name: 'Wordpress'}, {name: 'Elementor'}, {name: 'Woocommerce'}],
    image: img2,
    live: 'https://cuisinix.store/',
    github: '',
    behance:'https://www.behance.net/gallery/213050035/Cuisinix-Your-One-Stop-Kitchen-Shop',
  },
  {
    num : '04',
    category: 'Wordpress',
    title: 'YouPrint',
    description: 'YouPrint is an online printing services website designed to provide a seamless experience for users to customize and order print products.',
    stack:[{name: 'Wordpress'}, {name: 'Elementor'}, {name: 'Woocommerce'}],
    image: img3,
    live: 'https://www.youprint.ma/',
    github: '',
    behance:'https://www.behance.net/gallery/212811737/YouPrint-Online-Printing-Services-Website',
  },
  {
    num : '05',
    category: 'fullstack',
    title: 'Jawhar Al Maarifa',
    description: 'Jawhar Al Maarifa is a full-stack LMS platform designed for selling online courses, offering a smooth experience for learners and course creators.',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: img4,
    live: '',
    github: 'https://github.com/jawhare-lmaarifa/jawhar-al-maarifa',
    behance:'',
  },
  {
    num : '06',
    category: 'backend',
    title: 'SurfMinds',
    description: 'SurfMinds is a backend project focused on delivering efficient data management and robust server-side functionality.',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}],
    image: img5,
    live: '',
    github: 'https://github.com/zakariaelrharbi/SurfMinds-Final-Project',
    behance:'',
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
    animate={{opacity:1, transition:{delay:1, duration:0.1, ease:'easeIn'}}}
    className='min-h-[80vh] flex flex-col justify-center py-8 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/*/ outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline group transitiob-all duration-500 group-hover:text-accent'>{project.num}</div>
              {/* project category */}
              <h2 className='text-[42px] capitalize font-bold leading-none text-white  hover:text-accent transitiob-all duration-500 cursor-pointer'>{project.title}</h2>
              <h2 className='text-[32px] capitalize font-bold leading-none text-accent transitiob-all duration-500'>{project.category}</h2>
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
                {/* behance repo */}
                <Link href={project.behance}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-[#3256232e] flex justify-center items-center group'>
                        
                        <BsBehance className='text-white text-3xl   group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>View In behance</span>
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
                    <div className='h-[300px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                    </div>
                    {/* images */}
                    <div className='relative w-full h-full'> 
                      <Image src={project.image} fill  className='object-contain ' alt=''/>
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-acccent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full ml-2 mr-2'/>
            </Swiper>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Work
