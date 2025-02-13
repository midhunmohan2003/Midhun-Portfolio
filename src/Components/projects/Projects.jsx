import React from "react";
import "./projects.css";
import { Card, Col, Row } from "react-bootstrap";
import ProjectFair from '../../assets/projectfair.png'
import MediaPlayer from '../../assets/mediaplayer.png'
import Game from '../../assets/game.png'

function Projects() {
  return (
    <>
      <section className="work section " id="projects">
        <h2 className="section__title ">My Projects</h2>
        <span className="section__subtitle">Most recent projects</span>

        <div className="cards">
        <Row className="container-fluid mt-5">
          <Col sm={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="main-card mt-5">
              <Card.Img variant="top" src={ProjectFair} width={"100%"} />
              <Card.Body>
                <Card.Title>Project Fair</Card.Title>
                <div className="mt-2">
                  <a href="https://github.com/midhunmohan2003/project-fair.git" target="_blank" className="me-3 btn text-dark">
                    
                    <i class="uil uil-github socialIcons"></i>{" "}
                  </a>
                  <a href="https://project-fair-five-tau.vercel.app/" target="_blank" className="me-3 btn text-dark">
                    
                    <i class="bx bx-link socialIcons"></i>{" "}
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="container-fluid mt-5">
          <Col sm={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="main-card mt-5">
              <Card.Img variant="top" src={MediaPlayer} width={"100%"} />
              <Card.Body>
                <Card.Title>Media Player</Card.Title>
                <div className="mt-2">
                  <a href="https://github.com/midhunmohan2003/media-player.git" target="_blank" className="me-3 btn text-dark">
                    
                    <i class="uil uil-github socialIcons"></i>
                  </a>
                  <a href="https://media-player-theta-sable.vercel.app/" target="_blank" className="me-3 btn text-dark">
                    
                    <i class="bx bx-link socialIcons"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="container-fluid mt-5">
          <Col sm={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="main-card mt-5">
              <Card.Img variant="top" src={Game} width={"100%"}  />
              <Card.Body>
                <Card.Title>Tic-Tac-Toe Game</Card.Title>
                <div className="mt-2">
                  <a href="https://github.com/midhunmohan2003/tic-tac-toe-game.git" target="_blank" className="me-3 btn text-dark">
                    {" "}
                    <i className="uil uil-github socialIcons"></i>{" "}
                  </a>
                  <a href="https://tic-tac-toe-game-xi-one.vercel.app/" target="_blank" className="me-3 btn text-dark">
                    {" "}
                    <i className="bx bx-link socialIcons"></i>{" "}
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
      </section>
    </>
  );
}

export default Projects;
