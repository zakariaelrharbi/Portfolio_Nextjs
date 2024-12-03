'use client';

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: "Web Development",
        description: "I can build you a website that is fast, responsive, and user-friendly. I am proficient in HTML, CSS, JavaScript, and React.",
        href:""
    },
    {   
        num: '02',
        title: "UI/UX Design",
        description: "I can design you a user interface that is clean, modern, and user-friendly. I am proficient in Figma and Adobe XD softwares.",
        href:""
    },
    {
        num: '03',
        title: "SEO Optimization",
        description: "I can optimize your website for search engines to increase its visibility and ranking. I am proficient in Google Analytics and Google Search Console.",
        href:""
    },
    {
        num: '04',
        title: "E-commerce Solutions",
        description: "I can build you an online store that is secure, scalable, and easy to manage. I am proficient in Wordpress Shopify and WooCommerce.",
        href:""
    },
];

import { motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ 
            opacity: 1,
            transition: {
              duration: 0.1,
              delay: 1,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index}
              className="flex flex-col gap-6 justify-center group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                   <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                  {/* heading */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          }
          )}
      </motion.div>
      </div>

    </section>
  )
}

export default Services;