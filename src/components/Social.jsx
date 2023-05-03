import React from 'react'
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
    <div>
      <div className='flex  gap-10 cursor-pointer  justify-center'>
        {SocialMedia.map((social, index) => (
          <SocialSection
            key={`social-${index}`}
            index={index}
            {...social}
          />
        ))}
      </div>
    </div>
  )
}

export default Social