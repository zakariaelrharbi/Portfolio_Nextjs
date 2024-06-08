'use client';
import { Button } from '../components/ui/button';
import {FiDownload} from 'react-icons/fi';

const page = () => {
  return (
    <section className='h-full'>
      <div className="container max-auto  h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          {/* text */}
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Full Stack-Developer</span>
            <h1 className='h1 mb-6'>
              Hello, I'm <br/><span className='text-accent'>Zakaria ELRHARBI</span>
            </h1>
            <p className='max-w-[600px] mb-9 text-white/80'>
              As a Full Stack Developer, I create seamless, user-centric web applications by integrating both front-end and back-end technologies. 
              My focus is on delivering high-quality, scalable solutions that meet client needs and exceed expectations.
            </p>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default page
