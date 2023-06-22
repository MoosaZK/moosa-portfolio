import React from 'react'
import Heading from './Heading'
import {motion} from 'framer-motion'
function Projects() {
  return (
    <motion.section id='About'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
     className='h-max md:h-screen my-5'>
        <Heading text='Projects'/>
        
    </motion.section>
  )
}

export default Projects