import React from 'react'
import './skills.css'
import { motion } from "framer-motion";
import Frontend from './Frontend'
import Backend from './Backend'

function Skills() {
  return (
    <>
      <section className="skills section" id="skills">
         <motion.div
        className="container mt-5 facility-section"
        id="lab"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, }}
      >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Tools I Use to Craft Experiences</span>
      
      <div className="skills__container container grid">

        <Backend/>
        <Frontend/>
        
      </div>
      </motion.div>
      </section>
    </>
  )
}

export default Skills
