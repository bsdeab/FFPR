import React, { useState, useEffect } from "react";
import data from "../data/cards.json"; // Import your data
import Filter from "../components/Filter/Filter"; // Import the Filter component

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
