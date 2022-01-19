import "./App.scss";
import React, { useState } from "react";

function App() {
  const [hide, setHide] = useState(false);
  const [home, setHome] = useState(false);

  const toggleClass = () => {
    if (hide == false) {
      setHide(!hide);
    } else {
      setHide(hide);
    }
  };

  const showAbout = () => {
    setHome(!home);
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
        <header>
          <h1 className="home__link">About</h1>
          <h1
            className="home__link"
            onClick={() => window.location.reload(false)}
          >
            Home
          </h1>
        </header>
        <div className="home__showbox__text">
          <div className="home__showbox_titles">
            <h1 className="home__showbox_titles__1">Portfolio</h1>
            <p className="home__showbox_titles__2">Check Out</p>
            <h2 className="home__showbox_titles__3">Examples of my work</h2>
          </div>

          <div className="examples">
            <a
              href="https://scratch.mit.edu/projects/626326222"
              target="_blank"
              rel="noreferrer"
            >
              Scratch Based Game
            </a>
            <a
              href="https://codesandbox.io/s/spacemanparallax-qut1r?file=/src/styles.css"
              target="_blank"
              rel="noreferrer"
            >
              Custom made parallax effect
            </a>
            <a
              href="https://pacific-retreat-51764.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              RPG style message board(test with false info)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
