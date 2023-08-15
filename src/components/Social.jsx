import React from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { SocialMedia } from '../constants';


const SocialSection = ({ index, img, source_link }) => {

  const handleClick = () => {
    window.open(source_link, "_blank");
  };
  return (
    <div
      className='relative cursor-pointer'
      onClick={() => handleClick()}
    >
      <img
        src={img}
        className='class="transition w-7  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150 rounded-xl '
      // className='w-7 h-7 object-cover rounded-2xl'
      />
    </div>
  )
}

const Social = () => {
  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <hr
          className="w-3/5 mx-auto mb-10"
        />
        <div className='flex  gap-10 cursor-pointer  justify-center '>
          {SocialMedia.map((social, index) => (
            <SocialSection
              key={`social-${index}`}
              index={index}
              {...social}
            />
          ))}
        </div>
        <hr
          className="w-3/5 mx-auto mt-10"
        />
        <div className='flex justify-center mt-[20px] gap-20 mb-[30px]'>
          <div>
            <h1
            >Design & Developed by : <span>Arun Kumar</span></h1>

          </div>
          <div>
            <h3>M <span>itsarun.fsd@gmail.com</span></h3>
            <h4>T <span>+91-8882726711</span></h4>
          </div>
        </div>

      </motion.div>

    </div>
  )
}

export default Social