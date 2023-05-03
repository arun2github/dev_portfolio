import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
        justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'

          />
          <h3

            className='text-white text-[20px]
            font-bold text-center'
          > {title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {

  const handleDownload = () => {

  }
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Intoduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a React developer with experience in a variety of other technologies including Material UI, Node.js, Express.js, Ruby, and Ruby on Rails. With a strong focus on clean code and usability, I have developed a range of web applications from scratch and contributed to several open-source projects. I am passionate about creating intuitive and engaging user experiences and am always seeking out new challenges to further my skills and knowledge. When I'm not coding, you can usually find me listing music, reading, or trying out new recipes in the kitchen.
      </motion.p>
      <div>
        <a
          href='./ARUN_RESUME.pdf'
          target='_blank'
        >
          <button
            type='button'
            className='class="transition py-3 px-8  ease-in-out delay-150 bg-violet-700 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-200 rounded-xl mt-[40px] ml-[50px]'
          >
            My Resume

          </button>
        </a>

        <a
          href='#contact'
        >
          <button
            type='button'
            className='class="transition py-3 px-8  ease-in-out delay-150 bg-violet-700 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-200 rounded-xl mt-[40px] ml-[50px]'
          >
            Hire Me

          </button>
        </a>


      </div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about')