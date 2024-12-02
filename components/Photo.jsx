'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
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
        {/* image with circle border */}
        <motion.div 
          initial={{ opacity: 0}}
          animate={{ 
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut'
            },
          }} 
          className="relative p-2 rounded-full border-4 border-accent w-[310px] h-[310px] xl:w-[510px] xl:h-[510px] "
        > 
          <Image 
            src='/zakaria.png' 
            alt="zakaria elrharbi" 
            priority 
            quality={100} 
            fill 
            className='object-contain rounded-full' 
          /> 
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo;
