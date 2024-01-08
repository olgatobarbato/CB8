import { useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Card from "./components/card";

function App() {
  const days = [];
  for (let index = 1; index <= 24; index++) {
    days.push(index);
  }

  return (
    <div className="App">
      <h1>🎄 It's Christmas time! 🎅🏼</h1>
      <Hero />
      <div className="Cards__Container">
        {days.map((day) => (
          <Card key={day} day={day} />
        ))}
      </div>
    </div>
  );
}

export default App;
