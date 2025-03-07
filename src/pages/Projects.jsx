import React, { useState, useEffect } from "react";
import data from "../data/cards.json"; // Import your data
import Filter from "../components/Filter"; // Import the Filter component
import translations from "../data/translate.json"; // Import the translations

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState([]);
  const [region, setRegion] = useState([]);
  const [source, setSource] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [languageFilter, setLanguageFilter] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [paid, setPaid] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  // Map English words to their keys
  const mapSourceToKey = (source) => {
    for (const [key, values] of Object.entries(translations.Sources)) {
      if (values.includes(source)) {
        return key;
      }
    }
    return source; // Fallback to the original value if no match is found
  };

  useEffect(() => {
    console.log("Source Filter:", source); // Debug: Log the selected sources
    console.log("Data:", data); // Debug: Log the full data

    const filtered = data.filter((item) => {
      const matchesSearchTerm = searchTerm
        ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      // Map selected English words to their keys
      const sourceKeys = source.map(mapSourceToKey);

      const matchesSource = source.length === 0 || sourceKeys.includes(item.source);

      console.log("Item:", item.title, "Matches Source:", matchesSource); // Debug: Log each item and its match status

      const matchesType = type.length === 0 || type.includes(item.type);

      const matchesRegion = region.length === 0 || region.includes(item.region);

      const matchesThemes =
        selectedThemes.length === 0 ||
        selectedThemes.every((theme) => item.tags.includes(theme));

      const matchesLanguage =
        languageFilter.length === 0 || languageFilter.includes(item.language);

      const matchesOrganization =
        organization.length === 0 || organization.includes(item.organization);

      const matchesPaid = paid === null || item.paid === paid;

      return (
        matchesSearchTerm &&
        matchesSource &&
        matchesType &&
        matchesRegion &&
        matchesThemes &&
        matchesLanguage &&
        matchesOrganization &&
        matchesPaid
      );
    });

    console.log("Filtered Data:", filtered); // Debug: Log the filtered data
    setFilteredData(filtered);
  }, [searchTerm, source, type, region, selectedThemes, languageFilter, organization, paid, data]);

  return (
    <div>
      <Filter
        setSearchTerm={setSearchTerm}
        setType={setType}
        setRegion={setRegion}
        setSource={setSource}
        setSelectedThemes={setSelectedThemes}
        setLanguageFilter={setLanguageFilter}
        setOrganization={setOrganization}
        setPaid={setPaid}
      />
      {/* Render filteredData here */}
    </div>
  );
};

export default Projects;
