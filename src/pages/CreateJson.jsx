import React, { useState } from "react";
import infos from "../data/infos.json"; // Importe o JSON
import "../styles/create.scss";

const CreateJson = () => {
  // Extraia as opções do JSON
  const themes = Object.keys(infos["en"]["Themes"]); // Extrai as chaves do dicionário
  const types = Object.keys(infos["en"]["Types"]); // Extrai as chaves do dicionário
  const sources = Object.keys(infos["en"]["Sources"]); // Extrai as chaves do dicionário
  const regions = Object.keys(infos["en"]["Regions"]); // Extrai as chaves do dicionário

  const [formData, setFormData] = useState({
    title: "",
    tags: [],
    organization: "",
    author: "",
    year: "",
    language: [], // Change to an array
    link: "",
    type: "report", // Use the key
    source: "international_org", // Use the key
    region: [], // Change to an array
    paid: "Free",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "language") {
      // Split the input by commas and trim whitespace
      const languages = value.split(",").map((lang) => lang.trim());
      setFormData((prev) => ({ ...prev, [name]: languages }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTagsChange = (e) => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({ ...prev, tags: selectedTags }));
  };

  const handleRegionsChange = (e) => {
    const selectedRegions = Array.from(
      e.target.selectedOptions,
      (option) => option.value // Store the keys (e.g., "europe", "asia")
    );
    setFormData((prev) => ({ ...prev, region: selectedRegions }));
  };

  const handleGenerateJSON = () => {
    // Map selected region keys to their values
    const regionValues = formData.region.map(
      (key) => infos["en"]["Regions"][key]
    );

    // Map selected source key to its value
    const sourceValue = infos["en"]["Sources"][formData.source];

    // Map selected type key to its value
    const typeValue = infos["en"]["Types"][formData.type];

    const jsonOutput = {
      title: formData.title,
      tags: formData.tags,
      organization: formData.organization,
      author: formData.author.split(",").map((a) => a.trim()), // Convert author string to array
      year: formData.year,
      language: formData.language, // Already an array
      link: formData.link,
      type: typeValue, // Use mapped type value
      region: regionValues, // Use mapped region values
      source: sourceValue, // Use mapped source value
      paid: formData.paid,
    };

    // Use 4 spaces for indentation
    const jsonString = JSON.stringify(jsonOutput, null, 8);

    navigator.clipboard
      .writeText(jsonString)
      .then(() => alert("JSON copiado para a área de transferência!"))
      .catch((err) => console.error("Erro ao copiar:", err));
  };

  return (
    <div className="create-container">
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label>Tags (Ctrl + Click to select multiple options):</label>
      <select multiple onChange={handleTagsChange}>
        {themes.map((key) => (
          <option key={key} value={key}>
            {key} {/* Exibe o valor do dicionário */}
          </option>
        ))}
      </select>

      <label>Organization:</label>
      <input
        type="text"
        name="organization"
        value={formData.organization}
        onChange={handleChange}
      />

      <label>Author (separado por vírgula):</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />

      <label>Year:</label>
      <input
        type="text"
        name="year"
        value={formData.year}
        onChange={handleChange}
      />

      <label>Language:</label>
      <input
        type="text"
        name="language"
        value={formData.language.join(", ")} // Display as comma-separated string
        onChange={handleChange}
        placeholder="Enter language(s)"
      />

      <label>Link:</label>
      <input
        type="text"
        name="link"
        value={formData.link}
        onChange={handleChange}
      />

      <label>Type:</label>
      <select name="type" value={formData.type} onChange={handleChange}>
        {types.map((key) => (
          <option key={key} value={key}>
            {infos["en"]["Types"][key]} {/* Exibe o valor do dicionário */}
          </option>
        ))}
      </select>

      <label>Source:</label>
      <select name="source" value={formData.source} onChange={handleChange}>
        {sources.map((key) => (
          <option key={key} value={key}>
            {infos["en"]["Sources"][key]} {/* Exibe o valor do dicionário */}
          </option>
        ))}
      </select>

      <label>Region (Ctrl + Click to select multiple options):</label>
      <select multiple name="region" onChange={handleRegionsChange}>
        {regions.map((key) => (
          <option key={key} value={key}>
            {infos["en"]["Regions"][key]} {/* Exibe o valor do dicionário */}
          </option>
        ))}
      </select>

      <label>Paid:</label>
      <div>
        <input
          type="radio"
          name="paid"
          value="Free"
          checked={formData.paid === "Free"}
          onChange={handleChange}
        />
        Free
        <input
          type="radio"
          name="paid"
          value="Paywalled"
          checked={formData.paid === "Paywalled"}
          onChange={handleChange}
        />
        Paywalled
      </div>

      <button onClick={handleGenerateJSON} style={{ marginTop: "10px" }}>
        Gerar JSON
      </button>
    </div>
  );
};

export default CreateJson;
