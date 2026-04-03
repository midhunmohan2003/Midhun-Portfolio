import React from "react";

function Data() {
  return (
    <div className="home__data">

      <span className="home__greeting">Hey, I'm</span>

      <h1 className="home__title">Midhun Mohan</h1>

      <h3 className="home__subtitle">
        UI/UX Designer <br />
        <span className="home__tagline">who loves to code</span>
      </h3>

      {/* TOOLS SECTION */}

      <div className="home__tools-wrapper">

        <span className="tools-title">Tools I Use</span>

        <div className="home__tools">

          <div className="tool">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
            />
            <span>Figma</span>
          </div>

          <div className="tool">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
            />
            <span>VS Code</span>
          </div>

          <div className="tool">
           <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
  alt="Illustrator"
/>
            <span>Illustrator</span>
          </div>

        </div>
      </div> <br />

                    <a href="#projects" className="button button--flex">
                      View My Works
                      <svg
                        class="button__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                      </svg>
                    </a>



    </div>
  );
}

export default Data;