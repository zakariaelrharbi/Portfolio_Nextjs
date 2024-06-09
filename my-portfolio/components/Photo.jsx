'use client';

import { motion } from "framer-motion";
import Image from 'next/image';


const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 0.9,
          duration: 0.4,
          ease: 'easeIn'
        },
      }}
      >
        {/* image */}
        <motion.div 
      initial={{ opacity: 0}}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: 'easeInOut'
        },
      }} className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]  mix-blend-lighten 	"> 
           <Image src='/zakaria.png' alt="zakaria elrharbi" priority quality={100} fill className='object-contain rounded-full'/> 
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
