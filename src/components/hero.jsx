import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className='relative flex flex-col justify-center items-center md:items-start
     h-screen text-white m-auto space-y-5'>
      
      <h3>Hello, My Name Is</h3>
      <h1 className='lg:text-5xl md:text-4xl text-3xl space-x-5'> 
        <span className='text-green font-bold'>M</span>oosa 
        <span className='text-green font-bold'>Z</span>afar 
        <span className='text-green font-bold'>K</span>han
      </h1>
      <h5 className='text-center md:text-left'>I am a young, but Experienced, Software Developer</h5>
      
      <div className='absolute bg-gradient-to-r right-0 rounded-full from-cyan-500 to-blue-500 blur-2xl -z-10 w-[40%] h-[40%]'>

      </div>

    </motion.div>


  )
}

export default Hero;