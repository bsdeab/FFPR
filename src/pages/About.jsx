// src/pages/About.js
import React from 'react';
import '../styles/about.scss'; // Importando o estilo específico para a página About
import data from '../data/infos.json';

function About(props){

  let lang = props.lang

  return (
    <div className="about-container">
      <div className="about-content">

        <h1>{data[lang]["Texts"]["About"]["Title"]}</h1>
        <p>
          {data[lang]["Texts"]["About"]["Phrase1"]}
        </p>
        <p>
          {data[lang]["Texts"]["About"]["Phrase2"]} <a href="https://www.ffpcollaborative.org/contact-us" className="link">{data[lang]["Texts"]["About"]["Form"]}</a> {data[lang]["Texts"]["About"]["Phrase2-1"]} <a href="https://twitter.com/TheFFPCollab" target="_blank" rel="noopener noreferrer" className="link">X/Twitter</a> {data[lang]["Texts"]["About"]["Phrase2-x"]} <a href="https://www.linkedin.com/company/feminist-foreign-policy-collaborative/" target="_blank" rel="noopener noreferrer" className="link">Linkedin</a>.
        </p>
        <p>
          {data[lang]["Texts"]["About"]["Phrase3"]}
        </p>
      </div>
    </div>
  );
};

export default About;