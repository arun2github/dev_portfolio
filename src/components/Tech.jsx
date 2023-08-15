import React from "react";
import { motion } from 'framer-motion'

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          What I have learned so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Technology Stack
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-[100px]'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 mt-2' key={technology.name}>
            <BallCanvas
              icon={technology.icon}
            />
            <p className="justify-center ti-align-center ml-9">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");