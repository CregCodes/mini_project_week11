import React from "react";

/** RandomBlog
 * Takes in a state & prop (to be developed)
 * Will render random "log entries" for a user to read through
 * Will be linked to a button to trigger render
 * For research- aim to have a dynamic render animation when button event is triggered
 */
function Randomblog({ data, logs }) {
  return (
    <>
      <h2>{data[logs].name}</h2>
      <p>{data[logs].logEntry}</p>
      <p>{data[logs].date}</p>
    </>
  );
}

export default Randomblog;
