import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { educations } from '../constants'

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#ffffff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={education.date}
    iconStyle={{ background: education.iconbg }}
    icon={
      <div
        className="flex justify-center items-center w-ful h-full"
      >
        <img
          src={education.icon}
          alt={education.college_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {education.title}
      </h3>
      <p className="text-secondary text-[160px] font-semibold" style={{ margin: 0 }}>
        {education.college_name}
      </p>
      <p className="text-secondary text-[160px] font-semibold" style={{ margin: 0 }}>
        Branch : {education.branch}
      </p>
      <p className="text-secondary text-[160px] font-semibold" style={{ margin: 0 }}>
        Percentage : {education.percentage}
      </p>
    </div>

  </VerticalTimelineElement>
)

const Education = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          My Education
        </p>
        <h2 className={styles.sectionHeadText}>
          Acedemic History
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((edu, index) =>
          (
            <EducationCard
              key={index}
              education={edu}
            />
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Education, '')