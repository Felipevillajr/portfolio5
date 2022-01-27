import "./App.scss";
import React, { useState } from "react";
import About from "./components/about/about";

function App() {
  const [hide, setHide] = useState(false);

  const toggleClass = () => {
    if (hide === false) {
      setHide(!hide);
    } else {
      setHide(hide);
    }
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
        <About />
      </div>
    </div>
  );
}

export default App;
