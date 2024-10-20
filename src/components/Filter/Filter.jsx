import React, { useState } from 'react';
import './Filter.scss';
import Select from "react-select";
import data from '../../data/infos.json'; // Importando o arquivo JSON

const language = "en"

function Filter({ setType, setRegion, setSource, setSelectedThemes, setSearchTerm, setAuthor }) {
    // Estado para controlar se os filtros estão expandidos ou não
    const [isExpanded, setIsExpanded] = useState(false);

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

                {/* Botão de expandir/retrair para mobile */}
                <button className="expand-button" onClick={toggleFilters}>
                    {isExpanded ? '▲ Esconder Filtros' : '▼ Expandir Filtors'}
                </button>

                {/* Mostrar os filtros adicionais apenas se estiver expandido */}
                {isExpanded && (
                    <>
                        <div className='filter-item'>
                            <Select
                                isMulti
                                value={null}
                                onChange={(selectedOptions) => {
                                    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                                    setSelectedThemes(selectedValues);
                                }}
                                options={themeOptions}
                                placeholder="Selecione os Temas"
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
                                className='search-input' 
                                placeholder='Busque uma autora' 
                                onChange={(e) => setAuthor(e.target.value)} 
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Filter;
