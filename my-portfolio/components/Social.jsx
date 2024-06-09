'use client';
import Link from "next/link";

import {FiGithub, FiLinkedin, } from 'react-icons/fi';
import { FaBehance } from "react-icons/fa";

const socials = [
    {icon: <FiGithub/>, path:'',},
    {icon: <FiLinkedin/>, path:'',},
    {icon: <FaBehance/>, path:'',},
]

const Social = ({containerStyle, iconStyles}) => {
  return (
    <div className={containerStyle}>
        {socials.map((social, index) => {
            return (
                <Link href={social.path} key={index}
                 className={iconStyles}>
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social
