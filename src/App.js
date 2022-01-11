import "./App.scss";
import React, { useState } from "react";

function App() {
  const [hide, setHide] = useState(false);

  const toggleClass = () => {
    setHide(!hide);
  };

  return (
    <div className="home">
      <div onClick={toggleClass} className={hide ? "home__none" : null}>
        <h1 className="home__h1">Welcome! I am Felipe Villa</h1>
        <p className="home__p">Click Me!</p>
      </div>
      <div
        onClick={toggleClass}
        className={hide ? "home__showbox" : "home__box"}
      >
        <h1>Examples of my work</h1>
        <div>
          <a href="https://scratch.mit.edu/projects/626326222">
            Scratch Based Game
          </a>
          <a href="https://codesandbox.io/s/spacemanparallax-qut1r?file=/src/styles.css">
            custom made parallax effects
          </a>
          <a href="https://pacific-retreat-51764.herokuapp.com/">
            RPG style message board
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
