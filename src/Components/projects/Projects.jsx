import React, { useState } from "react";
import "./projects.css";
import { motion } from "framer-motion";
import { Card, Button } from "react-bootstrap";
import ProjectFair from "../../assets/projectfair.png";
import MediaPlayer from "../../assets/mediaplayer.png";
import Game from "../../assets/game.png";
import Ecart from "../../assets/e-cart.png";
import ElementsSpa from "../../assets/5Elemenst.png"; 
import ShopNow from "../../assets/Clothing.png";

function Projects() {
  const projects = [
    {
      title: "Project Fair",
      image: ProjectFair,
      description:
        "A full-stack web application where students can upload, manage, and explore academic projects. Designed to streamline project submission and showcase, it provides both public viewing and secure user management using MERN Stack",
      github: "https://github.com/midhunmohan2003/project-fair.git",
      live: "https://project-fair-five-tau.vercel.app/",
    },
    {
      title: "E-Cart",
      image: Ecart,
      description:
        "A frontend e-commerce interface that simulates a shopping cart experience. Designed with clean UI and responsive layout, users can browse products, view details, and manage cart items using React and Redux.",
      github: "https://github.com/midhunmohan2003/e-cart.git",
      live: "https://e-cart-sigma-six.vercel.app/",
    },
     {
      title: "Shop Now",
      image: ShopNow,
      description:
        "A stylish and responsive clothing website built with MERN Stack and TailwindCSS. Users can browse clothing items, add them to cart or wishlist, customize designs, view detailed product pages, and manage their account.",
      github: "https://github.com/midhunmohan2003/Clothing-Frontend.git",
      live: "https://clothing-frontend-izub.vercel.app/",
    },
    {
      title: "Media Player",
      image: MediaPlayer,
      description:
        "A sleek and responsive audio player built using modern web technologies. It allows users to play, pause, and skip tracks with intuitive controls and an attractive interface using react.",
      github: "https://github.com/midhunmohan2003/media-player.git",
      live: "https://media-player-theta-sable.vercel.app/",
    },
    {
      title: "5 Elements Spa",
      image: ElementsSpa,
      description:
        "A visually elegant and soothing landing page website for a premium spa and wellness center, inspired by the five elements of nature. It highlights the spa's services, ambience, and natural therapies through calming visuals and smooth user experience using React.",
      github: "https://github.com/midhunmohan2003/5ElementsSpa.git",
      live: "https://5-elements-spa.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe Game",
      image: Game,
      description:
        "A classic tic-tac-toe game with modern design and interactive gameplay features.",
      github: "https://github.com/midhunmohan2003/tic-tac-toe-game.git",
      live: "https://tic-tac-toe-game-xi-one.vercel.app/",
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
                    <p className="mt-2">{project.description}</p>
                    <div className="mt-3 icons">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="me-3 btn text-dark"
                      >
                        <i className="uil uil-github socialIcons"></i>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="me-3 btn text-dark"
                      >
                        <i className="bx bx-link socialIcons"></i>
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

                  {expandedIndex === index + 3 ? (
                    <>
                      <p className="mt-2">{project.description}</p>
                      <div className="mt-3 icons">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="me-3 btn text-dark"
                        >
                          <i className="uil uil-github socialIcons"></i>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="me-3 btn text-dark"
                        >
                          <i className="bx bx-link socialIcons"></i>
                        </a>
                      </div>
                      <Button
                        variant="link"
                        className="read-toggle-btn mt-2 p-0"
                        onClick={() => toggleExpand(index + 3)}
                      >
                        Read Less
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="link"
                      className="read-toggle-btn mt-2 p-0"
                      onClick={() => toggleExpand(index + 3)}
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
