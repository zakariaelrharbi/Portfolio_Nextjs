'use client';
import Link from "next/link";

import {FiGithub, FiLinkedin, } from 'react-icons/fi';
import { FaBehance } from "react-icons/fa";

const socials = [
    {icon: <FiGithub/>, path:'https://github.com/zakariaelrharbi',},
    {icon: <FiLinkedin/>, path:'https://www.linkedin.com/in/zakaria-elrharbi/',},
    {icon: <FaBehance/>, path:'https://www.behance.net/zakariaelrharbi',},
]

const Social = ({containerStyle, iconStyles}) => {
  return (
    <div className={containerStyle}>
        {socials.map((social, index) => {
            return (
                <Link href={social.path} key={index}
                 className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social
