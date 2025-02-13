import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Midhun</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
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
      </footer>
    </>
  )
}

export default Footer
