//Math decides the colour of the background, a simple example for UseEffect hook
import React from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [colour, setColour] = useState("#ffffff");

  useEffect(
    function () {
      document.body.style.backgroundColor = colour;
    },
    [colour]
  );

  function generateColour() {
    const randomColour =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColour(randomColour);
  }

  return (
    <div id="button">
      <button onClick={generateColour}>ZAP!!</button>
    </div>
  );
}
