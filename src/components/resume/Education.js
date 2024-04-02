import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT"
            subTitle="CUTM, Bhubaneswar (2021 - 2025)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="CENTRAL BOARD OF SECONDARY EDUCATION"
            subTitle="SVSS College, Baripada (2020 - 2021)"
            result="4.75/5"
            des="Successfully completed the CBSE 12th board examinations with outstanding performance from a SVSS College"
          />
          <ResumeCard
            title="ST. ANNE'S CONVENT SCHOOL"
            subTitle="Convent School, Baripada (2018 - 2019)"
            result="5.00/5"
            des="Successfully completed the ICSE 10th board examinations with outstanding performance from a prestigious Convent school"
          />
        </div>
      </div>
      {/* part Two */}

    </motion.div>
  );
}

export default Education