'use client'


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@radix-ui/react-select";
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
        <div>
          {/* form */}
          <div>
            <form action="">form</form>
          </div>
          {/* info */}
          <div>
            info
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
