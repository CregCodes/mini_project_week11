import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Randomblog from "../RandomBlog/Randomblog";
import { dataLogs } from "../../Data/datalogs";
import LogButton from "../LogButton/LogButton";

function App() {
  const [logs, setLogs] = useState({ dataLogs });

  // function handleClick() {}

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
          <LogButton />
          <Randomblog prop={dataLogs} />
        </div>
        <div className="piece scanlines noclick" />
        <div className="piece glow noclick" />
      </div>
    </div>
  );
}

// CSS elements blocking img from loading?
// Add as an icon instead?
// alternatively- use text only rendering in RandomBlog component
// or wrap in own div and style with different class?

/* <img src="https://www.gamezebo.com/wp-content/uploads/2021/08/FalloutPipBoy_Feature-720x400.jpg" alt="Pip Boy Success Logo" /> */

export default App;
