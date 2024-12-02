'use client'


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Textarea } from "@/components/ui/textarea"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+212) 6 82 88 30 65'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'zakariaelrharbi269@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Casablanca, Morocco'
  }
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:1.5, duration:0.4, ease:'easeIn'}}}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
             <h3 className="text-4xl text-accent">Let's work together</h3>
             <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et perferendis exercitationem accusantium!</p>
             {/* input */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Firstname" type="firstname"/>
                <Input placeholder="Lastname" type="lastname"/>
                <Input placeholder="Email Adress" type="email adress"/>
                <Input placeholder="Phone Number" type="phone number"/>
             </div>

            </form>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
