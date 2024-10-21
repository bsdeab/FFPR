import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import '../styles/global.scss';
import '../styles/home.scss';
import Header from "../components/Header/Header";
import infos from '../data/infos.json'; // Importando o arquivo JSON

import { useState } from 'react';

const data = [
  {
    "title": "Feminist Foreign Policy: A Framework",
    "tags": ["Care", "Artificial Intelligence"],
    "organization": "Center for Research on Women",
    "author": ["Lyric Thompson"],
    "year": "2020",
    "language": ["English"],
    "link": "https://drive.google.com/drive/folders/1K-4i_CRuBCHcjVwsgg9pnrEh0QJ2VR40?usp=drive_link",
    "type": "Report",
    "region": "North America (US and Canada)",
    "source": "Academia"
  },
  {
    "title": "Defining Feminist Foreign Policy: The 2023 Edition",
    "tags": ["Care", "Health"],
    "organization": "Feminist Foreign Policy Collaborative",
    "author": ["Lyric Thompson", "Spogmay Ahmed", "Beatriz Silva", "Jillian Montilla"],
    "year": "2023",
    "language": ["English", "French"],
    "link": "https://drive.google.com/drive/folders/1y7aeQYj9aI8vqeUKCwsYrwB3dHHgBJBG?usp=drive_link",
    "type": "Report",
    "region": "North America (US and Canada)",
    "source": "Individual"
  }
];

function Projects(props) {
  // Estados para os filtros
  const [type, setType] = useState([]);
  const [region, setRegion] = useState([]);
  const [source, setSource] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [author, setAuthor] = useState([]);
  const [organization, setOrganization] = useState([]);

  let lang = props.lang;

  // Função para extrair autores únicos
  const getUniqueAuthors = () => {
    const authors = data.map(card => card.author).flat();
    return [...new Set(authors)];
  };

  // Função para extrair organizações únicas
  const getUniqueOrganizations = () => {
    const organizations = data.map(card => card.organization);
    return [...new Set(organizations)];
  };

  // Gerar listas de autores e organizações
  const authorsList = getUniqueAuthors().map(author => ({
    label: author,
    value: author
  }));

  const organizationsList = getUniqueOrganizations().map(org => ({
    label: org,
    value: org
  }));

  // Função para filtrar os dados
  const filteredData = data.filter(card => {
    // Verifica se há correspondência de tipo
    const matchesType = type.length > 0
      ? type.some(t => card.type.includes(t))
      : true;

    // Verifica se há correspondência de região
    const matchesRegion = region.length > 0
      ? region.some(r => card.region.includes(r))
      : true;

    // Verifica se há correspondência de fonte
    const matchesSource = source.length > 0
      ? source.some(s => card.source.includes(s))
      : true;

    // Verifica se há correspondência de temas
    const matchesThemes = selectedThemes.length > 0
      ? selectedThemes.every(theme => card.tags.some(tag => tag.includes(theme)))
      : true;

    // Verifica se há correspondência com o termo de pesquisa
    const matchesSearchTerm = searchTerm ? card.title.includes(searchTerm) : true;

    // Verifica se há correspondência de autor
    const matchesAuthor = author.length > 0
      ? author.some(a => card.author.some(cardAuthor => cardAuthor.includes(a)))
      : true;

    // Verifica se há correspondência de organização
    const matchesOrganization = organization.length > 0
      ? organization.some(org => card.organization.includes(org))
      : true;

    console.log(matchesType, matchesRegion)

    return matchesType && matchesRegion && matchesSource && matchesThemes && matchesSearchTerm && matchesAuthor && matchesOrganization;
  });

  return (
    <div className="App">

      <div className="home-infos">
        <span className="home-title">{infos[lang]["Texts"]["Projects"]["Title"]}</span>
        <span className="home-description">{infos[lang]["Texts"]["Projects"]["Phrase1"]}</span>
        <span className="home-description">{infos[lang]["Texts"]["Projects"]["Phrase2"]}</span>
        <span className="home-description">{infos[lang]["Texts"]["Projects"]["Phrase3"]}</span>
      </div>

      <Filter
        setType={setType}
        setRegion={setRegion}
        setSource={setSource}
        setSelectedThemes={setSelectedThemes}
        setSearchTerm={setSearchTerm}
        setAuthor={setAuthor}
        setOrganization={setOrganization}
        authorsList={authorsList} // Passa a lista de autores
        organizationsList={organizationsList} // Passa a lista de organizações
        lang={lang}
      />

      <div className="projects">
        <span className="projects-title">{infos[lang]["Texts"]["Projects"]["Filter"]}</span>
        <span className="projects-found">{filteredData.length} {infos[lang]["Texts"]["Projects"]["Founded"]}</span>

        {filteredData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            tags={card.tags}
            organization={card.organization}
            author={card.author}
            year={card.year}
            language={card.language}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
