import React from 'react'


function Info() {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3 + Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Suport</h3>
            <span className="about__subtitle">24/7</span>
        </div>

        <div className="about__box">
        <i class='bx bx-laptop  about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">6 Months Internship</span>
        </div>

      </div>
    </>
  )
}

export default Info
