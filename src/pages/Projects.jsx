import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import '../styles/global.scss';
import '../styles/home.scss';
import infos from '../data/infos.json'; // Importando o arquivo JSON
import infos from '../data/translate.json';

import { useState } from 'react';

const data = [
  {
    "title": "Feminist Foreign Policy Sharpens Focus on Ending Gender-Based Violence as Key to National Security",
    "tags": ["Gender-based violence"],
    "organization": "E-International Relations",
    "author": ["Stephenie Foster"],
    "year": "2024",
    "language": ["English"],
    "link": "https://www.e-ir.info/2024/12/30/feminist-foreign-policy-sharpens-focus-on-ending-gender-based-violence-as-key-to-national-security/",
    "type": "Blog",
    "region": "Global",
    "source": "Civil society",
    "paid": "Free", 
  },
  {
    "title": " Feministická zahraničná politika. Rozvoj konceptu, definujúce prvky, formulácia výskumného rámca ",
    "tags": ["FFP analysis", "Feminist methodologies"],
    "organization": "Czech Journal of International Relations",
    "author": ["Alexandra Madarászová"],
    "year": "2024",
    "language": ["Czech"],
    "link": "https://cjir.iir.cz/index.php/cjir/article/view/8",
    "type": "Journal article",
    "region": "Europe",
    "source": "Academia",
    "paid": "Free", 
  },
  {
    "title": " ¿ Aproximación a una Política de Cooperación Feminista? ",
    "tags": ["FFP analysis"],
    "organization": "Revista Internacional de Estudios Feministas",
    "author": ["Rosa Belen Agirregomezkorta Ibarluzea"],
    "year": "2024",
    "language": ["Spanish"],
    "link": "https://revistas.udc.es/index.php/ATL/article/view/arief.2024.9.2.9804",
    "type": "Journal article",
    "region": "Europe",
    "source": "Academia",
    "paid": "Free", 
  },
  {
    "title": " ¿Podrá ser feminista la cooperación española? ",
    "tags": ["FFP analysis"],
    "organization": "Revista Internacional de Estudios Feministas",
    "author": ["María Castro Serantes"],
    "year": "2024",
    "language": ["Spanish"],
    "link": "https://revistas.udc.es/index.php/ATL/article/view/arief.2024.9.2.9804",
    "type": "Journal article",
    "region": "Europe",
    "source": "Academia",
    "paid": "Free", 
  },
  {
    "title": "Feminist Foreign Policy Sharpens Focus on Ending Gender-Based Violence as Key to National Security",
    "tags": ["Gender-based violence"],
    "organization": "E-International Relations ",
    "author": ["Stephanie Foster"],
    "year": "2024",
    "language": ["English"],
    "link": "https://www.e-ir.info/2024/12/30/feminist-foreign-policy-sharpens-focus-on-ending-gender-based-violence-as-key-to-national-security/",
    "type": "Blog",
    "region": "Global",
    "source": "Civil society",
    "paid": "Free", 
  },
  {
    "title": "Is “Feminist Foreign Policy” A Ruse?",
    "tags": ["FFP analysis"],
    "organization": "Z",
    "author": ["Laura O'Connel"],
    "year": "2024",
    "language": ["English"],
    "link": "https://znetwork.org/znetarticle/is-feminist-foreign-policy-a-ruse/",
    "type": "Blog",
    "region": "Global",
    "source": "Civil society",
    "paid": "Free", 
  },
  {
    "title": "The “Feminist” Label Trap: Factors Contributing to Sweden’s Abandonment of Their FFP Agenda",
    "tags": ["FFP analysis"],
    "organization": "Modern Diplomacy",
    "author": ["Raina V. Cakrabuana"],
    "year": "2025",
    "language": ["English"],
    "link": "https://moderndiplomacy.eu/2025/01/10/the-feminist-label-trap-factors-contributing-to-swedens-abandonment-of-their-ffp-agenda/",
    "type": "Civil society",
    "region": "Europe",
    "source": "Government",
    "paid": "Free", 
  },
  {
    "title": "Initiative on accountability for Afghanistan’s violations of the UN Convention on the Elimination of All Forms of Discrimination against Women",
    "tags": ["Diplomacy", "Women, peace and security"],
    "organization": "Federal Foreign Office",
    "author": ["N/A"],
    "year": "2025",
    "language": ["English"],
    "link": "https://www.auswaertiges-amt.de/en/aussenpolitik/cedaw-2694096",
    "type": "Press release",
    "region": "Europe, Asia",
    "source": "Government",
    "paid": "Free", 
  },
  {
    "title": "USAID And The Department Of State Invest $2.6 Billion In Gender Equality Fact Sheet",
    "tags": ["Feminist Funding"],
    "organization": "USAID",
    "author": ["N/A"],
    "year": "2024",
    "language": ["English"],
    "link": "https://web.archive.org/web/20250117162320/https://www.usaid.gov/gender-equality-and-womens-empowerment/fact-sheets/usaid-and-department-state-invest-26-billion-gender-equality-fact-sheet",
    "type": "Report",
    "region": "Americas",
    "source": "Government",
    "paid": "Free", 
  },
  {
    "title": "To Fight Growing Militarism, Philanthropy Should Embrace a Feminist Playbook",
    "tags": ["Feminist Funding", "Women, peace and security"],
    "organization": "The Chronicle of Philanthropy",
    "author": ["Christine Ahn", "Diana Duarte", "Hanni Hanson"],
    "year": "2025",
    "language": ["English"],
    "link": "https://carleton.ca/lerrn/2025/forced-displacement-and-canadas-feminist-foreign-policy-what-is-missing/",
    "type": "Op-ed",
    "region": "Global",
    "source": "News organization",
    "paid": "Free", 
  },
  {
    "title": "Forced Displacement and Canada’s Feminist Foreign Policy: What Is Missing?",
    "tags": ["Migration and refugees"],
    "organization": "The Local Engagement Refugee Research Network",
    "author": ["Muzna Dureid"],
    "year": "2025",
    "language": ["English"],
    "link": "https://carleton.ca/lerrn/2025/forced-displacement-and-canadas-feminist-foreign-policy-what-is-missing/",
    "type": "Report",
    "region": "Americas",
    "source": "Civil society",
    "paid": "Free", 
  },
  {
    "title": "La politique étrangère du Canada sous Justin Trudeau : une rhétorique ambitieuse, mais des résultats modestes",
    "tags": ["FFP analysis"],
    "organization": "The Conversation",
    "author": ["Nicolas-Francois Perron"],
    "year": "2025",
    "language": ["French"],
    "link": "https://theconversation.com/la-politique-etrangere-du-canada-sous-justin-trudeau-une-rhetorique-ambitieuse-mais-des-resultats-modestes-246947",
    "type": "Blog",
    "region": "Global",
    "source": "News organization",
    "paid": "Free", 
  },
  {
    "title": "Advancing Feminist Foreign Policy in the Multilateral System: Key Debates and Challenges",
    "tags": ["FFP analysis"],
    "organization": "International Peace Institute",
    "author": ["Evyn Papworth"],
    "year": "2024",
    "language": ["English"],
    "link": "https://www.ipinst.org/wp-content/uploads/2024/03/2403_Advancing-Feminist-Foreign-Policyweb.pdf",
    "type": "Policy brief",
    "region": "Global",
    "source": "Civil society",
    "paid": "Free", 
  },
  {
    "title": "Feminist Foreign Policy: A Framework",
    "tags": ["FFP analysis"],
    "organization": "International Center for Research on Women",
    "author": ["Lyric Thompson"],
    "year": "2020",
    "language": ["English"],
    "link": "https://drive.google.com/drive/folders/1K-4i_CRuBCHcjVwsgg9pnrEh0QJ2VR40?usp=drive_link",
    "type": "Toolkit",
    "region": "Global",
    "source": "Civil society",
    "paid": "Free", 
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
    "source": "Civil Society",
    "paid": "Free", 
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
    "source": "Civil society",
    "region": ["Europe", "Asia"],
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
    "source": "Government",
    "region": "Americas",
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
    "region": "Africa",
    "paid": "Free",
  },
  {
    "title": "Why donors must finance feminist movements",
    "tags": ["Feminist Funding"],
    "organization": "Overseas Development Institute",
    "author": ["Emilie Tant", "Ján Michalko"],
    "year": "2024",
    "language": ["English"],
    "link": "https://odi.org/en/insights/why-donors-must-finance-feminist-movements/",
    "type": "Blog",
    "source": "Civil society",
    "region": "Global",
    "paid": "Free"
  },
  {
    "title": "Opportunities for India-Mexico cooperation on gender mainstreaming",
    "tags": ["Diplomacy"],
    "organization": "Hindustan Times",
    "author": ["Adolfo García Estrada", "Ambika Vishwanath"],
    "year": "2024",
    "language": ["English"],
    "link": "https://www.hindustantimes.com/ht-insight/international-affairs/opportunities-for-india-mexico-cooperation-on-gender-mainstreaming-101724917511018.html",
    "type": "News",
    "source": "News organization",
    "region": ["Asia", "Americas"],
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
    "region": "Africa",
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
    "source": "Civil society",
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
    "source": "News organization",
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
    "link": "https://ekantipur.com/en/opinion/2024/08/13/dimensions-of-feminist-foreign-policy-06-44.html",
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
    "type": "Op-ed",
    "source": "News organization",
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
    "source": "Civil society",
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
  {
    "title": "Feminist Foreign Policy and Nepal",
    "tags": ["FFP analysis"],
    "organization": "MyRepublica",
    "author": ["Sandhya Ghimire"],
    "year": "2025",
    "language": ["English"],
    "link": "https://myrepublica.nagariknetwork.com/news/feminist-foreign-policy-and-nepal-80-95.html",
    "type": "News",
    "source": "News organization",
    "region": "Asia",
    "paid": "Free"
  },
  {
    "title": "Feminist Foreign Policy – 50th anniversary of the Veil law",
    "tags": ["Sexual and reproductive health and rights"],
    "organization": "France Diplomacy",
    "author": ["N/A"],
    "year": "2025",
    "language": ["English"],
    "link": "https://www.diplomatie.gouv.fr/en/french-foreign-policy/feminist-diplomacy/news/article/feminist-foreign-policy-50th-anniversary-of-the-veil-law-17-jan-2025",
    "type": "Press release",
    "source": "Government",
    "region": "Europe",
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
  const [languageFilter, setLanguageFilter] = useState([]);

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

    const matchesLanguage = languageFilter.length > 0
        ? languageFilter.some(lang => card.language.includes(lang))
        : true;


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
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Projects;
