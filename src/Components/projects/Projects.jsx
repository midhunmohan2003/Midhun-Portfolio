import React, { useState } from "react";
import "./projects.css";
import { motion } from "framer-motion";
import { Card, Button } from "react-bootstrap";

import BikeRentals from "../../assets/aban_img.png";
import blg from "../../assets/blgimg.png";
import Fixit from "../../assets/fixit_img.png";
import Dashboard from "../../assets/dashboard_img.png";

function Projects() {

  const [filter, setFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Aban Bike Rentals",
      category: "Front End",
      image: BikeRentals,
      description:
        "A fully responsive bike rental platform with sleek UI, smooth user experience, custom domain integration, and production deployment using Vercel.",
      tech: "React • Tailwind CSS • Responsive Design • Vercel",
      live: "https://www.abanbikerentals.com",
    },

    {
      title: "FixIt",
      category: "UI/UX",
      image: Fixit,
      description:
        "Mobile application designed to help users easily find and book trusted home service professionals.",
      tech: "Figma • UI/UX Design • Prototyping • Adobe Illustrator",
      live: "https://www.figma.com/proto/uFgqZANlttrf3TuFyPCQNR/Fixit.?node-id=156-309&t=JjpSorCPmV2CElmk-1",
    },

    {
      title: "Fleet Operations Dashboard",
      category: "UI/UX",
      image: Dashboard,
      description:
        "A clean and intuitive dashboard interface designed to monitor fleet activity, track vehicle status, and visualize operational data for efficient fleet management.",
      tech: "Figma • UI/UX Design • Prototyping",
      live: "https://www.figma.com/proto/piG7lvJrmhxGPDShLJUEUx/Tasks?node-id=199-2472&t=4y9E1qkOov1NZQe4-1",
    },

    {
      title: "Brightline Global LLC",
      category: "Front End",
      image: blg,
      description:
        "Designed and developed a responsive corporate website for Brightline Global LLC.",
      tech: "React • CSS • Responsive Design • Vercel",
      live: "https://www.brightlinegloballlc.com",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section className="work section" id="projects">
      <motion.div
        className="container facility-section"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Most Recent Projects</span>

        {/* FILTER PILLS */}
        <div className="project-filters">
          {["All", "UI/UX", "Front End"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <br />

        {/* PROJECT CARDS */}
        <div className="cards">
          {visibleProjects.map((project, index) => (
            <Card key={index} className="main-card mt-5">

              <div className="image-wrapper">

                <Card.Img
                  variant="top"
                  src={project.image}
                  className="card-img-top"
                />

                <span className="project-badge">
                  {project.category}
                </span>

              </div>

              <Card.Body>

                <Card.Title className="title">{project.title}</Card.Title>

                {expandedIndex === index ? (
                  <>
                    <p className="mt-2">{project.description}</p>

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

        {/* VIEW MORE */}
        {filteredProjects.length > 3 && (
          <div className="view-more-container">
            <span
              className="view-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View More"}
            </span>
          </div>
        )}

      </motion.div>
    </section>
  );
}

export default Projects;