import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{delay:0.3}}
    className='relative flex flex-col justify-center items-center md:items-start
     h-screen text-white m-auto space-y-5'>
      
      <h3>Hello, My Name Is</h3>
      <h1 className='lg:text-5xl md:text-4xl text-3xl space-x-5'> 
        <span className='text-green font-bold'>M</span>oosa 
        <span className='text-green font-bold'>Z</span>afar 
        <span className='text-green font-bold'>K</span>han
      </h1>
      <h5 className='text-center md:text-left'>I am a young, but Experienced, Software Developer</h5>
      
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{delay:0.3}} 
      className='absolute bg-gradient-to-tl right-0 rounded-full from-darkGreen to-midGreen blur-2xl -z-10 w-[300px] h-[300px]'>

      </motion.div>

    </motion.div>


  )
}

export default Hero;