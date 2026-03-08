import React, { useState } from "react";
import "./projects.css";
import { motion } from "framer-motion";
import { Card, Button } from "react-bootstrap";
import ProjectFair from "../../assets/projectfair.png";
import MediaPlayer from "../../assets/mediaplayer.png";
import Game from "../../assets/game.png";
import BikeRentals from "../../assets/aban_img.png";
import blg from "../../assets/blgimg.png"; 
import Fixit from "../../assets/fixit_img.png";

function Projects() {
  const projects = [

    {
      title: "Aban Bike Rentals",
      image: BikeRentals,
      description:
        "A fully responsive bike rental platform with sleek UI, smooth user experience, custom domain integration, and production deployment using Vercel.",
      tech: "React • Tailwind CSS • Vercel",
      live: "https://www.abanbikerentals.com",
    },

    {
      title: "FixIt",
      image: Fixit,
      description:
        "Mobile application designed to help users easily find and book trusted home service professionals.",
      tech: "Figma • UI/UX Design • Prototyping • Adobe Illustrator",
      live: "https://www.figma.com/proto/uFgqZANlttrf3TuFyPCQNR/Fixit.?node-id=156-309&t=JjpSorCPmV2CElmk-1",
    },

    {
      title: "Brightline Global LLC",
      image: blg,
      description:
        "Designed and developed a responsive corporate website for Brightline Global LLC, an electrical solutions and smart meter services company. The site showcases the company’s services, industry expertise, and global operations through a modern UI and smooth user experience.",
      tech: "React • CSS • Responsive Design",
      live: "https://www.brightlinegloballlc.com",
    },

  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="work section" id="projects">
      <motion.div
        className="container facility-section"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Most Recent Projects</span>

        {/* First row - 3 cards */}
        <div className="cards">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="main-card mt-5">
              <Card.Img
                variant="top"
                src={project.image}
                className="card-img-top"
              />
<Card.Body>

  <Card.Title>{project.title}</Card.Title>

  {expandedIndex === index ? (
    <>
      <p className="mt-2">{project.description}</p> <br />

      {/* Tech Stack */}
      <p className="tech-stack">
        <strong>Tools:</strong> {project.tech}
      </p>

      <div className="mt-2 icons">

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="live-link"
        >
          <i className="bx bx-link socialIcons"></i>
          <span>Live Link</span>
        </a>

      </div>

      <Button
        variant="link"
        className="read-toggle-btn mt-2 p-0"
        onClick={() => toggleExpand(index)}
      >
        Read Less
      </Button>
    </>
  ) : (
    <Button
      variant="link"
      className="read-toggle-btn mt-2 p-0"
      onClick={() => toggleExpand(index)}
    >
      Read More
    </Button>
  )}

</Card.Body>
            </Card>
          ))}
        </div>

        {/* Second row - center remaining cards */}
        {projects.length > 3 && (
          <div className="cards mt-5" style={{ justifyContent: "center" }}>
            {projects.slice(3).map((project, index) => (
              <Card key={index + 3} className="main-card mt-5">
                <Card.Img
                  variant="top"
                  src={project.image}
                  className="card-img-top"
                />
               <Card.Body>

  <Card.Title>{project.title}</Card.Title>

  {expandedIndex === index ? (
    <>
      <p className="mt-2">{project.description}</p>

      {/* Tech Stack */}
      <p className="tech-stack">
        <strong>Tech Stack:</strong> {project.tech}
      </p>

      <div className="mt-2 icons">

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="live-link"
        >
          <i className="bx bx-link socialIcons"></i>
          <span>Live Link</span>
        </a>

      </div>

      <Button
        variant="link"
        className="read-toggle-btn mt-2 p-0"
        onClick={() => toggleExpand(index)}
      >
        Read Less
      </Button>
    </>
  ) : (
    <Button
      variant="link"
      className="read-toggle-btn mt-2 p-0"
      onClick={() => toggleExpand(index)}
    >
      Read More
    </Button>
  )}

</Card.Body>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Projects;
