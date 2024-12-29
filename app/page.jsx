'use client';
import { Button } from '../components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

import jsPDF from 'jspdf';
import Typewriter from 'typewriter-effect';


const Page = () => {
  
  const downloadPdf = () => {
    const doc = new jsPDF();
    const imgUrl = 'https://i.ibb.co/DQr6xXy/Zakaria-Elrharbi-En.jpg';
    
    const [pageWidth, pageHeight] = [doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight()];
    const imgWidth = 692, imgHeight = 979;
    const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
  
    doc.addImage(imgUrl, 'PNG', 0, 0, imgWidth * ratio, imgHeight * ratio);
    doc.save('Zakaria-Elrharbi-CV.pdf');
  }
  
  

  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none pt-3'>
            <span className='text-xl'>Full Stack Developer</span>
            <h1 className='h1 mb-2'>
              Hello, I'm <br/>
              <span className='text-white text-4xl xl:text-6xl'>Zakaria Elrharbi</span>
            </h1>
            <h2 className='text-accent mb-6 xl:text-5xl text-3xl'>
            <Typewriter
                  style={{color: '#f3c100'}}
                  options={{
                  strings: [
                    "Front-End Developer",
                    "Back-End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  }}
                />
            </h2>
            <p className='max-w-[600px] mb-9 text-white/80 text-left '>
              As a Full Stack Developer, I create seamless, user-centric web applications by integrating both front-end and back-end technologies. 
              My focus is on delivering high-quality, scalable solutions that meet client needs and exceed expectations.
            </p>
            {/* button and social media */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button 
                variant='outline' 
                size='lg'
                onClick={downloadPdf}
                className='uppercase flex items-center gap-2'>
                <span>Download CV</span>
                <FiDownload className='text-xl'/>
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social containerStyle='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500'/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo className='order-1 xl:order-none mb-8 xl:mb-0'/> 
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Page;
