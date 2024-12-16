import React from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Content/Home'
import About from './Components/Content/About'
import TechStack from './Components/Content/TechStack'
import Projects from './Components/Content/Projects'
import Experience from './Components/Content/Experience'
import Education from './Components/Content/Educations'
import Hobbies from './Components/Content/Hobbies'
import Skills from './Components/Content/Skills'
import Contact from './Components/Content/Contact'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [loading, setLoading] = useState(false)

  //for loading screen
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <>
      {loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>

        :

        <>
          <Navbar />
          <Home />
          <About />
          <TechStack />
          <Projects />
          <Experience/>
          <Education/>
          <Hobbies/>
          <Skills/>
          <Contact />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </>}

    </>
  )
}

export default App
