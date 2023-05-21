import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import Social from './Social'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send('service_qq3vd7c',
      'template_v5zbyiw',
      {
        from_name: form.name,
        to_name: 'Arun',
        from_email: form.email,
        to_email: 'itsarun.fsd@gmail.com',
        message: form.message
      },
      '58Ko77FiuP-NrhSKm'
    )
      .then(() => {
        setLoading(false)
        alert('Thank you , I will get back to you as soon as possible')
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong')
      })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>get in touch</p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Please write your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Email
            </span>
            <input
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="please write your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Message
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='class="transition py-3 px-8 outlined-none w-fit  ease-in-out delay-150 bg-violet-700 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-200 rounded-xl mt-[40px] ml-[50px]'
            onClick={handleSubmit}
          >
            {loading ? 'sending...' : 'Send'}

          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mt-[20rem]'
      >
        <hr
          className='mb-[20px]'
        />
        <Social />
        <hr
          className='mt-[20px]'
        />
        <div className='flex mt-[20px] gap-20'>
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

export default SectionWrapper(Contact, 'contact')