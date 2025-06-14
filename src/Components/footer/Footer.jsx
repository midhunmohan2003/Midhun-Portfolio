import React from 'react'
import './footer.css'
import { motion } from "framer-motion";


function Footer() {
  return (
    <>
      <footer className="footer">
        <motion.div
        className="container mt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="footer__container container">
            <h1 className="footer__title">Midhun</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/mi_._dhun/" className="footer__social-link" target='_blank'>
        <i class="uil uil-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/midhunmohan2003" className="footer__social-link" target='_blank'>
        <i class="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/midhunmohan2003?tab=repositories" className="footer__social-link" target='_blank'>
        <i class="uil uil-github"></i>
        </a>
            </div>
            <span className='footer__copy'>&#169; Midhun Mohan. All rights reserved</span>
        </div>
        </motion.div>
      </footer>
    </>
  )
}

export default Footer
