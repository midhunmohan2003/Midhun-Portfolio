import React from 'react'
import './home.css'
import { motion } from "framer-motion";
import Social from './Social'
import Data from './Data'
import Scrolldown from './Scrolldown'

function Home() {
  return (
    <>
      <section className="home section" id="home">
         <motion.div
                className="container mt-5 facility-section"
                id="lab"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, }}
              >
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social/>
            <div className="home__img"></div>
            <Data/>
          </div>
          <Scrolldown/>
        </div>
        </motion.div>
      </section>
    </>
  )
}

export default Home
