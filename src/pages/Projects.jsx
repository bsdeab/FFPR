import React, { useState, useEffect } from "react";
import data from "../data/cards.json"; // Import your data
import Filter from "../components/Filter"; // Import the Filter component
import translations from "../data/translate.json"; // Import the translations

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [source, setSource] = useState([]);
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
    const filtered = data.filter((item) => {
      const matchesSearchTerm = searchTerm
        ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      // Map selected English words to their keys
      const sourceKeys = source.map(mapSourceToKey);

      const matchesSource = source.length === 0 || sourceKeys.includes(item.source);

      return matchesSearchTerm && matchesSource;
    });

    setFilteredData(filtered);
  }, [searchTerm, source, data]);

  return (
    <div>
      <Filter
        setSearchTerm={setSearchTerm}
        setSource={setSource}
      />
      {/* Render filteredData here */}
    </div>
  );
};

export default Projects;
