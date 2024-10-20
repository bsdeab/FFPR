import './styles/global.scss';
import './styles/home.scss';
import Projects from "./pages/Projects"
import { MultiSelect } from "react-multi-select-component";
import React, { useState } from "react";

function App() {

  const [selected, setSelected] = useState([]);

  return (
    <div className="App">

      <Projects />

    </div>
  );
}

export default App;
