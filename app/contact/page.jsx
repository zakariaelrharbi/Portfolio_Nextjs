'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+212) 6 82 88 30 65',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'zakariaelrharbi269@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Casablanca, Morocco',
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none w-full">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et perferendis
                exercitationem accusantium!
              </p>
              {/* input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Firstname" type="text" />
                <Input placeholder="Lastname" type="text" />
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
              </div>
              {/* message section */}
              <Textarea
                placeholder="Write your message here..."
                className="resize-none"
                rows={5}
              />
              {/* submit button */}
              <Button type="submit" className="w-full bg-accent text-black py-3 rounded-md hover:bg-accent-dark">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="order-1 xl:order-none flex flex-col gap-6 p-10 bg-[#1f1f23] rounded-xl text-white">
            <h3 className="text-4xl text-accent">Contact Info</h3>
            {info.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-accent text-2xl">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
