import React from "react";
import "../App/App.css";

/**Renders a button in main app page which triggers index state to change*/

export default function LogButton({ handleClick }) {
  return (
    <button onClick={handleClick} className="Log-button">
      Search Corrupted Logs
    </button>
  );
}

//Button will need handleclick function passed down from main***
