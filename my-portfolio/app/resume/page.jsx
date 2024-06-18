'use client'
import { FaNodeJs } from "react-icons/fa";

import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

import { 
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// About data
const about = {
  title: 'About Me',
  description: 'I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am always eager to learn new technologies and improve my skills.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Zakariae El Rharbi'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+212) 6 82 88 30 65'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2 Years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Moroccan'
    },
    {
      fieldName: 'Email',
      fieldValue: 'Zakariaelrharbi269@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Arabic, French'
    },
  ],
};

// Experience data
const experience = {
  icon: 'experience-icon',
  title: 'My Experience',
  description: 'I have worked on a variety of projects, including building websites from scratch, creating web applications, and developing APIs. I have experience with both front-end and back-end technologies, and I am always looking for new challenges to tackle.',
  jobs: [
    {
      company: 'Arkx Talent Factory',
      title: 'Full Stack Developer Intern',
      date: 'Jan 2024 - June 2024',
      description: 'Developed websites and web applications for clients using HTML, CSS, JavaScript, React, Node.js, and MongoDB. Worked on both front-end and back-end development, and collaborated with clients to deliver high-quality products.'
    },
    {
      company: 'Influence Global',
      title: 'Full Stack Developer Intern',
      date: 'June 2024 - present',
      description: 'Developing an online print shop using React, Node.js, and MongoDB. Worked on both front-end and back-end development, and collaborated with clients to deliver high-quality products.'
    },
  ],
};

// Education data
const education = {
  icon: 'education-icon',
  title: 'My Education',
  description: 'I hold a Baccalaureate degree in Economics from the University Polydisciplinaire El Jadida in Morocco. I have also completed several online courses in web development and programming, and a bootcamp in web development. ',
  schools: [
    {
      school: "Arkx Talent Factory - JobInTech",
      degree: "Full Stack Development Bootcamp.",
      date: "Jan 2024 - June 2024",
      description: "The Arkx Talent Factory Bootcamp Programs are intensive 6-month programs that equip you with the skills and network to become a full stack developer. The program includes front-end and back-end development, as well as databases and APIs. It is project-based and includes peer-learning and mentorship."
    },
    
    {
      school: 'ALX Software Engineering Program Online',
      degree: 'Certificates in Software Engineering - Frontend Developer',
      date: '2023 - 2024',
      description: 'The ALX software engineering program is an intensive 12-month program equipping you with the skills and network to become a front-end developer or back-end developer. It includes low- and high-level programming, algorithms, and databases. It also includes system engineering and networking. The program is project-based and includes peer-learning and mentorship.'
    },
    {
      school: "University Polydisciplinaire El Jadida",
      degree: "License degree in Economics",
      date: "2017 - 2021",
      description: "Studied economics, with a focus on financial principles and market analysis."
    },
    {
      school: "Lycée Sidi Bennour",
      degree: "Baccalaureate degree in Science Physics",
      date: "2017",
      description: "Studied physics, with a focus on scientific principles and methodologies. Completed various projects and assignments, and graduated with honors."
    },
  ],
};

// Skills data
const skills = {
  title: 'My Skills',
  description: 'I have experience with a variety of technologies and tools, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am always eager to learn new technologies and improve my skills, and I am constantly working on new projects to expand my knowledge.',
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <SiTypescript />,
      name: 'Typescript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiExpress />,
      name: 'Express.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: 'easeIn'
        },
        className: 'min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        
      }}
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col lg:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto md:mx-0 xl:mx-0 gap-6'>
            <TabsTrigger value='experience' >Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About</TabsTrigger>
          </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value='experience' className='w-full'>
            <div className="flex flex-col gap-[30px] text-center">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="text-left ml-5 max-w-[680px] text-white/70 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-1 md:grid-col-1 gap-[30px]">
                  {experience.jobs.map((job, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1">
                        <span className="text-accent">{job.date}</span>
                        <h3 className="text-xl max-w-[390px] min-h-[30px] text-center lg:text-center">{job.title}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/70">{job.company}</p>
                        </div>
                      </li>
                    )
                  }
                    
                  )}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* education*/}
          <TabsContent value='education' className='w-full'>
          <div className="flex flex-col gap-[30px] text-center">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="text-left ml-5 max-w-[680px] text-white/70 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className='h-[400px]'>
                <ul className="grid grid-cols-1 lg:grid-cols-1 md:grid-col-1 gap-[30px]">
                  {education.schools.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1">
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-xl  max-w-[390px] min-h-[30px] text-center lg:text-center">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/70">{item.school}</p>
                        </div>
                      </li>
                    )
                  }
                    
                  )}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* experience */}
          <TabsContent value='skills' className='w-full h-full'>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[710px] text-white/70 mx-auto xl:mx-0 text-left">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-[10px] gap-4 mb-3">
                {skills.skillsList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl hover:text-accent transition-all duration-300">{skill.icon}
                                
                              </div>
                              <p className="text-white ml-4 hover:text-accent transition-all duration-300">{skill.name}</p>
                          </TooltipTrigger>
                          
                                            
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
          {/* experience */}
          <TabsContent value='about' className='w-full'>
            about
          </TabsContent>
        </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
