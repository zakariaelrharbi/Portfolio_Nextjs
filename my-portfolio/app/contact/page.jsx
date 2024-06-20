'use client'


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@radix-ui/react-select";

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



const Contact = () => {
  return (
    <div>
      contact page
    </div>
  )
}

export default Contact
