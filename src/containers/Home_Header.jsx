import React from 'react'
import Home_Hero from '../components/Home_Hero'
import Features from '../components/Features'
import Clientele from '../components/Clientele'
import Main_Feature from '../components/Main_Feature'
import './header.css'

const Home_Header = () => {
  return (
    <>
        <div className="home_header w-full bg-gradient-to-b from-[#FBF1EC] to-[#ffffff] flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12">

            <Home_Hero />
            <Features />
            <Clientele />
            <br />
            {/* <Main_Feature /> */}
        </div>
    </>
  )
}

export default Home_Header
