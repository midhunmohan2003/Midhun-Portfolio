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

      <a href="#contact" className="button button--flex homeButton">
        Say Hello
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </a>

    </div>
  );
}

export default Data;