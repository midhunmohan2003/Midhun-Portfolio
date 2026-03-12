import React from "react";
import "./services.css";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: "bx bx-palette",
      title: "UI/UX Design",
      desc: "Designing clean, intuitive interfaces using Figma with a strong focus on user experience."
    },
    {
      icon: "bx bx-code-alt",
      title: "Frontend Development",
      desc: "Building modern responsive websites using React, CSS, and component-based architecture."
    },
    {
      icon: "bx bx-mobile-alt",
      title: "Responsive Web Design",
      desc: "Creating mobile-first layouts that work perfectly across desktop, tablet, and mobile devices."
    },
    {
      icon: "bx bx-cloud-upload",
      title: "Website Deployment",
      desc: "Deploying websites using Vercel, configuring domains, hosting, and production optimization."
    }
  ];

  return (
    <section className="services section" id="services">

      <div className="container facility-section">

        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services-container">

          {services.map((service, index) => (

            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >

              <i className={`${service.icon} service-icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;