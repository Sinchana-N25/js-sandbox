//Toggle that automates the color generator
// to run all on its own, changing the color every 1 seconds.
//Another example of the UseEffect hook
import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

export default function ColorfulBackground() {
  const [toggle, setToggle] = useState(false);

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        if (toggle) {
          const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
          document.body.style.backgroundColor = randomColor;
        }
      }, 1000);

      return function () {
        clearInterval(intervalId);
      };
    },
    [toggle]
  );

  const handleToggle = function () {
    setToggle(function (prevToggle) {
      return !prevToggle;
    });
  };

  return (
    <div id="toggle">
      <button onClick={handleToggle}>
        {toggle ? "Stop" : "Start"} Color Changing
      </button>
    </div>
  );
}
