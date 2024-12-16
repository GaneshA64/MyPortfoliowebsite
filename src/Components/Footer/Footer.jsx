import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {

    const social = [
        {
          link: 'https://www.linkedin.com/in/ganesh6464',
          icon: <FaLinkedinIn/>,
        },
        {
          link: 'https://github.com/GaneshA64',
          icon: <AiFillGithub/>,
        },
        {
          link: 'https://www.facebook.com/share/18XmnHnRdM/',
          icon: <FaFacebook/>,
        },
        {
          link: 'https://www.instagram.com/ganeshsaini_64/profilecard/?igsh=NG56MjZ3YzI1bHVm',
          icon: <FaInstagram/>,
        },
        {
          link: 'https://wa.link/u2zzb5',
          icon: <FaWhatsapp/>
        }
      ]
      
    return (
        <footer className='md:flex md:px-10 lg:flex bg-white dark:bg-slate-800 text-black dark:text-white lg:px-48 px-4 py-5 justify-between border-t border-slate-800'>
                <div>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2'>Copyright © 2024 Ganesh Saini. All rights reserved.</h2>
                </div>
                <div className='md:flex lg:flex gap-10 '>
                    <div>
                        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2  uppercase'>Contact</h2>
                        <a href="mailto:chiragjain.jain7@gmail.com" className='text-[16px]  hover:text-fuchsia-800 transition-all duration-150 ease-in-out cursor-pointer'>Email: ganeshofficial6464@gmail.com</a>
                        <p className='text-[16px] pb-5 hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>Phone: +91-6376516148</p>
                    </div>
                    <div>
                        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me</h2>
                        <div className='flex space-x-4'>
                            {social.map((social, index) => (
                                <a key={index} target="_blank" href={social.link} className=' hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
                                <div  className='text-[28px]'>
                                    {social.icon}
                                </div>                    
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
