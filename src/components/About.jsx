import React from 'react'
import Heading from './Heading'
import pic from './moosapic2.jpg'
import {motion} from 'framer-motion'
function About() {
  return (
    <motion.section id='About'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
     className='h-max md:h-screen my-5'>
        <Heading text='About Me'/>
       
        <div className='flex flex-wrap md:flex-nowrap '>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.5}}
                className="content md:basis-1/2  text-white flex items-center">
                <p>
                Allow me to introduce myself, Moosa, 
                a seasoned software developer. 
                With a wealth of experience gained through
                 personal and freelance projects, I bring
                  a versatile skill set to the table.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.5}} 
                className="picture md:basis-1/2 flex items-center justify-center h-[300px] mx-auto mt-3">
                <div className=" border-8 border-green rounded-2xl h-[300px] w-[300px] bg-cover bg-top" style={{ backgroundImage: `url(${pic})` }}>
                </div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default About;