'use client'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNodeJs,
} from 'react-icons/fa'

import { 
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
 } from 'react-icons/si'
// about data
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
}
// Experience data
const experience = {
  icon:'experience-icon' ,
  title: 'My Experience',
  description: 'I have worked on a variety of projects, including building websites from scratch, creating web applications, and developing APIs. I have experience with both front-end and back-end technologies, and I am always looking for new challenges to tackle.',
  jobs: [
    {
      company: 'Influence Global',
      title: 'Full Stack Developer - Internship',
      date: 'june 2024 - present',
      description: 'developping a online print shop using React, Node.js, and MongoDB. Worked on both front-end and back-end development, and collaborated with clients to deliver high-quality products.'
      },
      {
        company: 'Arkx Talent Factory',
        title: 'Full Stack Developer - Internship',
        date: 'jan 2024 - june 2024',
        description: 'Developed websites and web applications for clients using HTML, CSS, JavaScript, React, Node.js, and MongoDB. Worked on both front-end and back-end development, and collaborated with clients to deliver high-quality products.'
      },
  ],

}




const Resume = () => {
  return (
    <div>
      resume page
    </div>
  )
}

export default Resume
