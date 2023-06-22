import React from 'react'
import Heading from './Heading'
import {motion} from "framer-motion"


function Skill() {
  return (
    <motion.section id='About'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className='h-max md:h-screen my-5'>
        <Heading text='Skill'/>
        <div className='flex flex-wrap md:flex-nowrap '>
            <div className='flex md:flex-row flex-col justify-center space-x-3 md:flex-nowrap w-full md:justify-around text-white '>
              <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{delay:0.2}}
              className='md:basis-1/3  py-4 flex flex-col items-center rounded-xl text-center bg-veryDarkBlue'>
                <h3 className='font-bold text-green text-lg my-3'>Web Development</h3>
                <ol>
                  <li>React.js</li>
                  <li>Tailwind</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Php</li>
                </ol>
              </motion.div>
              <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              className='md:basis-1/3 my-5 md:m-0 py-4 flex flex-col items-center rounded-xl text-center bg-veryDarkBlue'>
                <h3 className='font-bold text-green text-lg my-3'>Programming</h3>
                <ol>
                  <li>C++</li>
                  <li>SQL</li>
                  <li>Python</li>
                  <li>Java</li>
                </ol>
              </motion.div>
              <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{delay:0.2}}
              className='md:basis-1/3  py-4 flex flex-col items-center rounded-xl text-center bg-veryDarkBlue'>
                <h3 className='font-bold text-green text-lg my-3'>Tech and Frameworks</h3>
                <ol>
                  <li>Git</li>
                  <li>Numpy.py</li>
                  <li>Pandas.py</li>
                  <li>Sping.Boot</li>
                  <li>Docker</li>
                </ol>
              </motion.div>
            </div>

        </div>


    </motion.section>
  )
}

export default Skill