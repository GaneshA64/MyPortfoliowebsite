import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/Ganesh_saini.jpg'
import Resume from '../../assets/GaneshResume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left '>
        Hello, I'm Ganesh, a back-end developer specializing in .NET. I have a strong passion for building efficient and scalable web applications. I graduated from Rabindranath Tagore University, Bhopal, with a focus on software development and backend technologies.
          <br />
          I have experience ASP.NET, MVC, ASP.NET CORE C# and SQL. I am always eager to enhance my skill set and stay up-to-date with the latest advancements in technology. I thrive on leveraging my expertise to contribute to high-quality projects and solutions in the fast-evolving field of web development.
          <br />
          When I'm not coding, I enjoy traveling, focusing on self-growth, and watching movies. I firmly believe in maintaining a healthy work-life balance and continuously work towards a healthy lifestyle.
        </p>
        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About