import React, { useState } from 'react';
import './Filter.scss';
import Select from "react-select";
import data from '../../data/infos.json'; // Importando o arquivo JSON

const language = "en";

function Filter({ setType, setRegion, setSource, setSelectedThemes, setSearchTerm, setAuthor, setOrganization, authorsList, organizationsList }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Gerando as opções a partir do arquivo JSON
    const themeOptions = Object.keys(data[language].Themes).map((themeKey) => ({
        label: themeKey,
        value: themeKey
    }));

    const typeOptions = data[language].Types.map((type) => ({
        label: type,
        value: type
    }));

    const regionOptions = data[language].Regions.map(region => {
        return {
            label: region,
            value: region
        };
    });

    const sourceOptions = data[language].Sources.map((source) => ({
        label: source,
        value: source
    }));

    // Função para alternar a expansão dos filtros
    const toggleFilters = () => {
        setIsExpanded(!isExpanded);
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

                <button className="expand-button" onClick={toggleFilters}>
                    {isExpanded ? '▲ Esconder Filtros' : '▼ Expandir Filtros'}
                </button>

                {isExpanded && (
                    <>
                        <div className='filter-item'>
                            <Select
                                isMulti
                                onChange={(selectedOptions) => {
                                    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                                    setSelectedThemes(selectedValues);
                                }}
                                options={themeOptions}
                                placeholder="Selecione os Temas"
                            />
                        </div>

                        <div className='filter-item'>
                            <Select
                                isMulti
                                onChange={(selectedOptions) => {
                                    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                                    setType(selectedValues);
                                }}
                                options={typeOptions}
                                placeholder="Selecione os Tipos"
                            />
                        </div>

                        <div className='filter-item'>
                            <Select
                                isMulti
                                onChange={(selectedOptions) => {
                                    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                                    setRegion(selectedValues);
                                }}
                                options={regionOptions}
                                placeholder="Selecione as Regiões"
                            />
                        </div>

                        <div className='filter-item'>
                            <Select
                                isMulti
                                onChange={(selectedOptions) => {
                                    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                                    setSource(selectedValues);
                                }}
                                options={sourceOptions}
                                placeholder="Selecione as Fontes"
                            />
                        </div>

                        <div className='filter-item'>
                            <Select
                                isMulti
                                onChange={(selectedOptions) => {
                                    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                                    setAuthor(selectedValues);
                                }}
                                options={authorsList}
                                placeholder="Selecione os Autores"
                            />
                        </div>

                        <div className='filter-item'>
                            <Select
                                isMulti
                                onChange={(selectedOptions) => {
                                    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                                    setOrganization(selectedValues);
                                }}
                                options={organizationsList}
                                placeholder="Selecione as Organizações"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Filter;
