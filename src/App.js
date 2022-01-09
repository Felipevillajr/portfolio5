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
        <h1>box</h1>
      </div>
    </div>
  );
}

export default App;
