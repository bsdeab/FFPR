import React, { useState } from 'react';
import './Filter.scss';
import { MultiSelect } from "react-multi-select-component";
import { IoMdSearch } from "react-icons/io";
import data from '../../data/infos.json'; // Importando o arquivo JSON

const language = "en"

function Filter({ setType, setRegion, setSource, setSelectedThemes, setSearchTerm, setAuthor }) {
    // Gerando as opções a partir do arquivo JSON
    const themeOptions = Object.keys(data[language].Themes).map((themeKey) => ({
        label: themeKey,
        value: themeKey.toLowerCase().replace(/\s+/g, '-')
    }));

    const typeOptions = data[language].Types.map((type) => ({
        label: type,
        value: type.toLowerCase().replace(/\s+/g, '-')
    }));

    const regionOptions = data[language].Regions.map((region) => ({
        label: region,
        value: region.toLowerCase().replace(/\s+/g, '-')
    }));

    const sourceOptions = data[language].Sources.map((source) => ({
        label: source,
        value: source.toLowerCase().replace(/\s+/g, '-')
    }));

    const handleSubmit = (event) => {
        event.preventDefault();
        // Os dados já são enviados diretamente para o componente pai, então aqui basta capturar as alterações
    };

    return (
        <div className='filter-container'>
            
            <div className='filter-saves'>
                <span className='filter-title'>Filtro</span>
            </div>

            <div className="filters">
                <div className='filter-item'>
                    <input 
                        id="search" 
                        className='search-input' 
                        placeholder='Busque o projeto' 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>

                <div className='filter-item'>
                    <MultiSelect
                        overrideStrings={{
                            selectAll: "All", 
                            create: "Criar novo tema",      
                            clearSearch: "Limpar busca",     
                            noOptions: "No options", 
                            search: "Pesquisar...",           
                            selectSomeItems: "Selecione os Temas", 
                        }}
                        options={themeOptions}
                        onChange={setSelectedThemes}
                        labelledBy="Select themes"
                        className="custom-multiselect"
                    />
                </div>

                <div className='filter-item'>
                    <select id="type" onChange={(e) => setType(e.target.value)}>
                        <option value="">Selecione o Tipo</option>
                        {typeOptions.map((typez) => (
                            <option key={typez.value} value={typez.value}>{typez.label}</option>
                        ))}
                    </select>
                </div>

                <div className='filter-item'>
                    <select id="region" onChange={(e) => setRegion(e.target.value)}>
                        <option value="">Selecione a Região</option>
                        {regionOptions.map((region) => (
                            <option key={region.label} value={region.label}>{region.label}</option>
                        ))}
                    </select>
                </div>

                <div className='filter-item'>
                    <select id="source" onChange={(e) => setSource(e.target.value)}>
                        <option value="">Fonte</option>
                        {sourceOptions.map((source) => (
                            <option key={source.value} value={source.value}>{source.label}</option>
                        ))}
                    </select>
                </div>

                <div className='filter-item'>
                    <input 
                        id="author" 
                        className='search-input search-author' 
                        placeholder='Busque uma autora' 
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Filter;
