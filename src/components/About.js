import React from "react";
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="User" />
      <p>This section is all about me and my background.</p>
    </div>
  );
}

export default About;

