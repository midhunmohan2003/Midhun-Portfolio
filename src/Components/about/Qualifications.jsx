import React, { useState } from 'react'
import "./about.css";


function Qualifications() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <>
      <section className="qualification section">
        <span className="section__subtitle">My Personal Journey</span>
      
      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
            onClick={()=> toggleTab(1)}>
                <i className='uil uil-graduation-cap qualification__icon'></i> Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
             onClick={()=> toggleTab(2)}>
                <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">BSc Computer Science</h3>
                        <span className="qualification__subtitle">Kerala University</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2021 - 2024
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                 <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Higher Secondary</h3>
                        <span className="qualification__subtitle">Kerala State Board</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2019 - 2021
                        </div>
                    </div>

                </div>

                
            </div>


             <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Frontend Developer Intern</h3> 
                        <span className="qualification__subtitle">Devfrend Web Solutions</span> 
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>May 2025 - June 2025
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                 <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">MERN Stack Developer Intern</h3>
                        <span className="qualification__subtitle">Luminar Technolab Kochi</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>June 2024 - Jan 2025
                        </div>
                    </div>
                </div>

                

            </div>


        </div>
      </div>
      </section>
    </>
  )
}

export default Qualifications
