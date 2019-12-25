import React from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="container">
        <Counters></Counters>
      </main>
    </React.Fragment>
  );
}

export default App;
