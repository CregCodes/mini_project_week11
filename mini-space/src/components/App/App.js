import "./App.css";
import React from "react";
import Randomblog from "../RandomBlog/Randomblog";

function App() {
  return (
    <div>
      <div className="emblem">
        <span className="icon-information" />
      </div>
      <div className="frame">
        <div className="piece output">
          <h1>The best at short notice</h1>
          <p>You're probably looking for things to press</p>
          <p>Well, we're not quite there yet</p>
          <p>BUT there is this link below... maybe that's something for now?</p>
          <a href="https://media.tenor.com/dSwksaJ7GgMAAAAC/parks-and-recreation-tv-show.gif">
            GO ON... CLICK ME THEN
          </a>
          <h1>Oh something else then?</h1>
          <Randomblog />
        </div>
        <div className="piece scanlines noclick" />
        <div className="piece glow noclick" />
      </div>
    </div>
  );
}

export default App;
