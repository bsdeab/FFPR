import './styles/global.scss';
import './styles/home.scss';
import Projects from "./pages/Projects";
import Header from './components/Header/Header';
import React, { useState } from "react";

function App() {

  const [selected, setSelected] = useState([]);
  const [language, setLanguage] = useState("pt"); // Adicione o estado para a linguagem

  return (
    <div className="App">
      {/* Passa setLanguage como prop para o Header */}
      <Header setLanguage={setLanguage} />
      
      <Projects lang={language}/>

    </div>
  );
}

export default App;