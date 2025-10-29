import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
      <p>
        Welcome! My name is <strong>{username}</strong> and I’m from {city}.
      </p>
    </div>
  );
}

export default Home;

