import React from 'react'
import Heading from './Heading'
import {motion} from 'framer-motion'
import {ReactComponent as wave} from './wave.svg'
function Contact() {
  return (
    <motion.section id='About'
    initial={{ y:100 }}
    whileInView={{ y: 0 }}
    className='h-max md:h-screen my-5'>
        <Heading text='Get In Touch'/> 
        <wave />
    </motion.section>
  )
}

export default Contact