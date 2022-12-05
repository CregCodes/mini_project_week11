import React from "react";

/** RandomBlog
 * Takes in a state (state= logs- an index number in an array)
 * takes in a prop (prop= data from array of objects in data file)
 * Renders different log entries from data file
 * Linked to button function- changes index number and displays new array object
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
