import React, { useState } from "react";
import "./App.css";
import "./style.css";
import Header from "./header";
import Navbar from "./navbar";
import Time from "./time";
import Counter from "./count";
import Timer from "./timer";


function TvMaze() {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        <Time/>
        <Counter/>
        <Timer/>
      </main>
    </>
  );
}

export default TvMaze;
