import React, { Component } from "react";

/** RandomBlog
 * Takes in a state & prop (to be developed)
 * Will render random "log entries" for a user to read through
 * Will be linked to a button to trigger render
 * For research- aim to have a dynamic render animation when button event is triggered
 */

export default class Randomblog extends Component {
  render() {
    return (
      <div>
        <h2>Blog Title Goes Here</h2>
        <p>log text here</p>
        <p>date or log entry here</p>
        {/* <img
          src="https://www.gamezebo.com/wp-content/uploads/2021/08/FalloutPipBoy_Feature-720x400.jpg"
          alt="Pip Boy Success Logo"
        ></img> */}
      </div>
    );
  }
}
