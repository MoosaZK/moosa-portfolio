import React from 'react'
import {motion} from 'framer-motion'
import Wave from './waves/Waves'
function Contact() {
  return (
    <motion.section id='About'
    initial={{ y:100 }}
    whileInView={{ y: 0 }}
    className='h-max mt-5'>
      <div className='relative flex items-center justify-center md:h-[470px]'>
        <Wave.Wave1 className='absolute z-10 w-full bottom-0' />
        <Wave.Wave2 className='absolute  z-9 w-full bottom-0' />
        <Wave.Wave3 className='absolute  z-8 w-full bottom-0' />
        <Wave.Wave4 className='absolute  z-7 w-full bottom-0' />  
      </div>
      <div id='content' className='relative z-30 flex flex-col items-center justify-center bg-green  -mt-16 '>
      <h1 className=' z-20 text-3xl text-center text-veryDarkBlue mb-8 font-bold'> Get In Touch </h1>
        
        <p className=' text-center text-darkBlue font-semibold'>If Internet Explorer is brave enough to ask 
          to be your default browser, 
          You are brave enough to ask that girl out. <br />
          Let us me be of service</p>

            <button className=" my-10 px-5 py-3 border-[3px] ease-in-out duration-300 border-veryDarkBlue rounded-lg hover:border-lightBlue" target="_blank" rel="noopener noreferrer">
              <a className='font-semibold text-xl' href="">Say Hello</a></button>           

          
      </div>




    </motion.section>
  )
}

export default Contact