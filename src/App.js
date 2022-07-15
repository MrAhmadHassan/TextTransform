
import React from "react";
import { Navbar } from "./Components/Navbar";
import TextForm  from "./Components/TextForm";
import "./index.css";
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
      <h1>Enter your Text to see some change</h1>
        <TextForm/>
      </div>
    </React.Fragment>
  );
}

export default App;
