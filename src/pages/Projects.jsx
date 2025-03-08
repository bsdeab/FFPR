import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import '../styles/global.scss';
import '../styles/home.scss';
import infos from '../data/infos.json'; 
import cards from "../data/cards.json"; 
import { useState } from 'react';

const data = cards["Cards"]

function Projects(props) {
  // Estados para os filtros
  const [type, setType] = useState([]);
  const [region, setRegion] = useState([]);
  const [source, setSource] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [author, setAuthor] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [paids, setPaid] = useState([]); // Novo estado para o filtro de pagamento
  const [languageFilter, setLanguageFilter] = useState([]);

  let lang = props.lang;

 
 useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesSearchTerm = searchTerm
        ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      // Use the English terms directly for the source filter
      const matchesSource = source.length === 0 || source.includes(item.source);

      const matchesType = type.length === 0 || type.includes(item.type);

      const matchesRegion = region.length === 0 || region.includes(item.region);
  
      const matchesThemes =
        selectedThemes.length === 0 ||
        selectedThemes.every((theme) => item.tags.includes(theme));

      const matchesLanguage =
        languageFilter.length === 0 || languageFilter.includes(item.language);

      const matchesPaid = paid === null || item.paid === paid


    // Retorna verdadeiro se todos os filtros corresponderem
    return matchesType && matchesRegion && matchesSource &&
           matchesThemes && matchesSearchTerm && matchesLanguage;
    });

  return (
    <div className="App">

      <div className="home-infos">
        <span className="home-title">{infos[lang]["Texts"]["Projects"]["Title"]}</span>
        <span className="home-description">{infos[lang]["Texts"]["Projects"]["Phrase1"]}</span>
        <span className="home-description bolder ">{infos[lang]["Texts"]["Projects"]["Phrase2"]} <a href={infos[lang]["Texts"]["Projects"]["terms"]} className="link-terms" target="_blank">{infos[lang]["Texts"]["Projects"]["Phrase2-terms"]}</a> {infos[lang]["Texts"]["Projects"]["Phrase2-1"]}</span>
        <a href={infos[lang]["Texts"]["Projects"]["contact"]} target="_blank" className="home-description link">{infos[lang]["Texts"]["Projects"]["Phrase3"]}</a>
        <span className="home-description how">{infos[lang]["Texts"]["Projects"]["Phrase4"]}</span>
        <span className="home-description">{infos[lang]["Texts"]["Projects"]["Phrase5"]}</span>
      </div>

      <Filter
        lang={lang}
        type={type}
        setType={setType}
        region={region}
        setRegion={setRegion}
        source={source}
        setSource={setSource}
        selectedThemes={selectedThemes}
        setSelectedThemes={setSelectedThemes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        author={author}
        setAuthor={setAuthor}
        organization={organization}
        setOrganization={setOrganization}
        paid={paids}
        setPaid={setPaid} // Adiciona o estado de pagamento ao filtro
        authorsList={authorsList}
        organizationsList={organizationsList}
        languageFilter={languageFilter}
        setLanguageFilter={setLanguageFilter}
        language={lang}
      />

      <div className="projects">
        <span className="projects-found">{filteredData.length} {infos[lang]["Texts"]["Projects"]["Founded"]}</span>

        <div className="project-view">

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
              lang={lang}
              paid={card.paid}
              region={card.region}
              source={card.source}
              type={card.type}
            />
          ))}

        </div>
      </div>
    </div>
  );
},

export default Projects;
