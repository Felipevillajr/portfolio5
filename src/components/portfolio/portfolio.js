import React from "react";
import "../../App.scss";

export default function portfolio() {
  return (
    <div>
      <div className="home__showbox__text">
        <div className="home__showbox_titles">
          <h1 className="home__showbox_titles__1">Portfolio</h1>

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
  );
}
