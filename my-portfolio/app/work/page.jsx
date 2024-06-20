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
    url: '',
  },
  {
    num : '02',
    category: 'backend',
    title: 'SurfMinds',
    description: 'Project 2 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}],
    image: '',
    live: '',
    url: '',
  },
  {
    num : '03',
    category: 'fullstack',
    title: 'NewWave',
    description: 'Project 3 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: '',
    live: '',
    url: '',
  },
  {
    num : '04',
    category: 'fullstack',
    title: 'Bloglet',
    description: 'Project 4 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'TailwindCSS'}, {name: 'Redux'}],
    image: '',
    live: '',
    url: '',
  },
  {
    num : '05',
    category: 'fullstack',
    title: 'Jawhar Al Maarifa',
    description: 'Project 5 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: '',
    live: '',
    url: '',
  },
  {
    num : '06',
    category: 'fullstack',
    title: 'YouPrint',
    description: 'Project 6 description',
    stack:[{name: 'Node.js'}, {name: 'Express.js'}, {name: 'MongoDB'}, {name: 'React.js'}, {name: 'Redux'}, {name: 'TailwindCSS'}],
    image: '',
    live: '',
    url: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            {/*/ outline num */}
            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
            {/* project category */}
            <div className='text-[42px] capitalize font-bold leading-none text-white'>{project.category}</div>
            {/* project title */}
          </div>
          <div className='w-full xl:w-[50%]'>slider</div>
        </div>
      </div>

    </motion.section>
  )
}

export default Work
