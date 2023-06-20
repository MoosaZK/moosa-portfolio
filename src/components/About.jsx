import React from 'react'
import Heading from './Heading'
import pic from './moosapic2.jpg'
import {motion} from 'framer-motion'
function About() {
  return (
    <motion.section id='About'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
     className='h-max md:h-screen'>
        <Heading text='About Me'/>
       
        <div className='flex flex-wrap md:flex-nowrap '>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.5}}
                className="content md:basis-1/2  text-white flex items-center">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic, quaerat nesciunt in fuga, blanditiis ea nam reiciendis aspernatur rem ratione repellendus iusto pariatur et reprehend <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic, quaerat nesciunt in fuga, blanditiis ea nam reiciendis aspernatur rem ratione repellendus iusto pariatur et reprehend <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic, quaerat nesciunt in fuga, blanditiis ea nam reiciendis aspernatur rem ratione repellendus iusto pariatur et reprehend <br />
                </p>
            </motion.div>

            <div className="picture md:basis-1/2 flex items-center justify-center h-[300px]">
                <div className=" border-8 border-green rounded-2xl h-[300px] w-[300px] bg-cover bg-top" style={{ backgroundImage: `url(${pic})` }}>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default About;