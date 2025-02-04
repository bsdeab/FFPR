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
    "tags": ["FFP analysis"],
    "organization": "Center for Research on Women",
    "author": ["Lyric Thompson"],
    "year": "2020",
    "language": ["English"],
    "link": "https://drive.google.com/drive/folders/1K-4i_CRuBCHcjVwsgg9pnrEh0QJ2VR40?usp=drive_link",
    "type": "Report",
    "region": "North America (US and Canada)",
    "source": "Academia",
    "paid": "Paywalled", 
  },
  {
    "title": "Defining Feminist Foreign Policy: The 2023 Edition",
    "tags": ["FFP analysis"],
    "organization": "Feminist Foreign Policy Collaborative",
    "author": ["Lyric Thompson", "Spogmay Ahmed", "Beatriz Silva", "Jillian Montilla"],
    "year": "2023",
    "language": ["English", "French"],
    "link": "https://drive.google.com/drive/folders/1y7aeQYj9aI8vqeUKCwsYrwB3dHHgBJBG?usp=drive_link",
    "type": "Report",
    "region": "Global",
    "source": "Individual",
    "paid": "Paywalled", 
  },
  {
    "title": "A Reality Check of Dutch Feminist Foreign Policy in Afghanistan and South Sudan",
    "tags": ["Human rights", "FFP analysis"],
    "organization": "Cordaid; The Broker; Women's International Peace Centre",
    "author": ["Anne Kwakkenbos", "Helen Kezie-Nwoha", "Rojan Bolling", "Ruth van de Velde"],
    "year": "2024",
    "language": ["English"],
    "link": "https://drive.google.com/file/d/1ip0PLF4aJ4W1qCarRHoSUrl6hMjf3UXt/view",
    "type": "Report",
    "source": "International organization",
    "region": ["Europe"],
    "paid": "Free", 
  },
  {
    "title": "Foreign Ministry adopts affirmative action in Foreign Service promotion exam",
    "tags": ["Labor/workforce"],
    "organization": "Secretaría de Relaciones Exteriores de México",
    "author": ["N/A"],
    "year": "2024",
    "language": ["English"],
    "link": "https://www.gob.mx/sre/prensa/foreign-ministry-adopts-affirmative-action-in-foreign-service-promotion-exam?idiom=en",
    "type": "Press Release",
    "source": "",
    "region": "Latin America and the Caribbean",
    "paid": "Free", 
  },
  {
    "title": "Improving Feminist Leadership Policy In Mining, Agriculture, And Clean Energy",
    "tags": ["Climate justice"],
    "organization": "Cross River Watch",
    "author": ["Njemanze Ugoeze"],
    "year": "2024",
    "language": ["English"],
    "link": "https://crossriverwatch.com/2024/08/improving-feminist-leadership-policy-in-mining-agriculture-and-clean-energy-by-njemanze-ugoeze/",
    "type": "Blog",
    "source": "Government",
    "region": "Sub-Saharan Africa",
    "paid": "Free",
  },
  {
    "title": "Why donors must finance feminist movements",
    "tags": ["Feminist Funding"],
    "organization": "Overseas Development Institute (ODI)",
    "author": ["Emilie Tant", "Ján Michalko"],
    "year": "2024",
    "language": ["English"],
    "link": "https://odi.org/en/insights/why-donors-must-finance-feminist-movements/",
    "type": "Blog",
    "source": "Individual",
    "region": "Global",
    "paid": "Free"
  },
  {
    "title": "Opportunities for India-Mexico cooperation on gender mainstreaming",
    "tags": ["FFP analysis"],
    "organization": "Hindustan Times",
    "author": ["Adolfo García Estrada", "Ambika Vishwanath"],
    "year": "2024",
    "language": ["English"],
    "link": "https://www.hindustantimes.com/ht-insight/international-affairs/opportunities-for-india-mexico-cooperation-on-gender-mainstreaming-101724917511018.html",
    "type": "News",
    "source": "News organization",
    "region": ["Asia", "Latin America and the Caribbean"],
    "paid": "Free"
  },
  {
    "title": "The Continent Falling Behind: Africa’s placement in the Global Feminist Foreign Policy Discourse",
    "tags": ["FFP analysis", "Decolonization"],
    "organization": "African Arguments",
    "author": ["Wanjiku Wanjohi", "Chryspin Afifu Onkoba", "Naomi Majale","Nicole Mumala Maloba"],
    "year": "2024",
    "language": ["English"],
    "link": "https://africanarguments.org/2024/08/the-continent-falling-behind-africas-placement-in-the-global-feminist-foreign-policy-discourse/",
    "type": "Blog",
    "source": "News Organization",
    "region": "Sub-Saharan Africa",
    "paid": "Free"
  },
  {
    "title": "Feminist Economic Alternatives",
    "tags": ["Feminist Funding"],
    "organization": "Count Me In!",
    "author": ["N/A"],
    "year": "2022",
    "language": ["English"],
    "link": "https://cmiconsortium.org/publications/feminist-economic-alternatives-why-and-why-now/",
    "type": "Reports",
    "source": "",
    "region": "Global",
    "paid": "Free"
  },
  {
    "title": "Making Feminist Foreign Policy A Reality: Experiences and Lessons Learned from one of Sweden’s Largest Women’s Rights Organisations",
    "tags": ["FFP analysis"],
    "organization": "Kvinna till Kvinna",
    "author": ["N/A"],
    "year": "2023",
    "language": ["English"],
    "link": "https://kvinnatillkvinna.org/wp-content/uploads/2023/05/The-Kvinna-till-Kvinna-Foundatio",
    "type": "Reports",
    "source": "",
    "region": "Europe",
    "paid": "Free"
  },
  {
    "title": "Feminist Foreign Policy Framework and Gender Equality in Nepal",
    "tags": ["FFP analysis"],
    "organization": "Nepal Institute for International Cooperation and Engagement",
    "author": ["Ruby Khadgi"],
    "year": "2021",
    "language": ["English"],
    "link": "https://niice.org.np/archives/7525",
    "type": "Blog",
    "source": "",
    "region": "Asia",
    "paid": "Free"
  },
  {
    "title": "Dimensions of Feminist Foreign Policy",
    "tags": ["FFP analysis"],
    "organization": "Kantipur",
    "author": ["Niha Pandey", "Keshav Giri"],
    "year": "2024",
    "language": ["English"],
    "link": "",
    "type": "News",
    "source": "News organization",
    "region": "Asia",
    "paid": "Free"
  },
  {
    "title": "नारीवादी परराष्ट्र नीतिका आयाम",
    "tags": ["FFP analysis"],
    "organization": "कान्तिपुर",
    "author": ["निहा पाण्डे", "केशव गिरी"],
    "year": "२०८१",
    "language": ["नेपाली"],
    "link": "https://ekantipur.com/opinion/2024/08/13/dimensions-of-feminist-foreign-policy-06-44.html",
    "type": "News",
    "source": "",
    "region": "Asia",
    "paid": "Free"
  },
  {
    "title": "What is the value of feminist foreign policy in advancing social justice globally?",
    "tags": ["FFP analysis"],
    "organization": "Overseas Development Institute",
    "author": ["Ján Michalko", "Megan Daigle", "Sohela Nazneen", "Kaira Zoe", "Alburo-Cañete", "Sophie Efange"],
    "year": "2024",
    "language": ["English"],
    "link": "https://odi.org/en/insights/what-is-the-value-of-feminist-foreign-policy-in-advancing-social-justice-globally/",
    "type": "Blog",
    "source": "",
    "region": "Global",
    "paid": "Free"
  },
  {
    "title": "The CFFP Glossary",
    "tags": ["FFP analysis"],
    "organization": "Centre for Feminist Foreign Policy",
    "author": ["N/A"],
    "year": "2021",
    "language": ["English"],
    "link": "https://centreforfeministforeignpolicy.org/2021/03/08/feminist-glossary-2/",
    "type": "Toolkit",
    "source": "",
    "region": "Global",
    "paid": "Free"
  },


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
  const [paids, setPaid] = useState([]); // Novo estado para o filtro de pagamento

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

    // Verifica se há correspondência de pagamento
    const matchesPaid = paids.length > 0
      ? paids.includes(card.paid)
      : true;

    // Retorna verdadeiro se todos os filtros corresponderem
    return matchesType && matchesRegion && matchesSource &&
           matchesThemes && matchesSearchTerm &&
           matchesAuthor && matchesOrganization &&
           matchesPaid;
    });

  return (
    <div className="App">

      <div className="home-infos">
        <span className="home-title">{infos[lang]["Texts"]["Projects"]["Title"]}</span>
        <span className="home-description">{infos[lang]["Texts"]["Projects"]["Phrase1"]}</span>
        <span className="home-description bolder">{infos[lang]["Texts"]["Projects"]["Phrase2"]}</span>
        <a href="https://forms.fillout.com/t/a2gP6FojgFus" className="home-description link">{infos[lang]["Texts"]["Projects"]["Phrase3"]}</a>
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
        language={lang}
      />

      <div className="projects">
        <span className="projects-title">{infos[lang]["Texts"]["Projects"]["Project"]}</span>
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
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Projects;

