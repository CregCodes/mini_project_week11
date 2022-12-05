import "./App.css";
import React from "react";
import { useState } from "react";
import Randomblog from "../RandomBlog/Randomblog";
import { dataLogs } from "../../Data/datalogs";
import LogButton from "../LogButton/LogButton";

function App() {
  const [logs, setLogs] = useState(0);
  /**Function changes index value in state by 1up to length of array-1
   * The else statement resets the index number back to 0 to prevent app from crashing.
   */
  function handleClick() {
    if (logs < dataLogs.length - 1) {
      setLogs(logs + 1);
      console.log("Bossed it");
    } else {
      setLogs(0);
      console.log("reset");
    }
  }

  return (
    <div>
      <div className="emblem">
        <span className="icon-information" />
      </div>
      <div className="frame">
        <div className="piece output">
          <h1>ROBCO INDUSTRIES (TM)</h1>
          <a>#$% ATTEMPT(S) LEFT: # # </a>
          <pre className="preCode">01000 01110 01001 01001</pre>
          <pre className="preCode">4%£2! 0*671 98NM# 23P%^</pre>
          <pre className="preCode">01010 10100 10100 01010</pre>
          <pre className="preCode">01001 01010 01010 01010</pre>
          <pre className="preCode">01000 01110 01001 01001</pre>
          <pre className="preCode">01100 10100 01010 11001</pre>
          <p>**SYSTEM ERROR**</p>
          <p>DON'T WORRY WE ONLY TEST WEAPONS ON CUSTOMERS WE DON'T LIKE$%^£</p>
          <p>**ERROR- SHIFT PATTERNS UNSYNCED- CHECK LOGS**</p>
          <a href="https://media.tenor.com/dSwksaJ7GgMAAAAC/parks-and-recreation-tv-show.gif">
            CONTACT ADMINISTRATOR
          </a>
          <h1>Oh something else then human?</h1>
          <p>
            **ROBCO (TM) AUTO-CHAT IS NOT A ROBOT AND IS HUMAN... YES, HUMAN. NO
            NEED TO WORRY#$% **INSERT EMOTIONAL PLATITUDE**
          </p>
          <LogButton handleClick={handleClick} />
          <Randomblog data={dataLogs} logs={logs} />
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
