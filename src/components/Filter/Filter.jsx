import React, { useState } from 'react';
import './Filter.scss';
import Select from "react-select";
import data from '../../data/infos.json'; // Importando o arquivo JSON

const language = "en";

function Filter({ setType, setRegion, setSource, setSelectedThemes, setSearchTerm, setAuthor, setOrganization, authorsList, organizationsList, lang}) {
    
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
                <span className='filter-title'>{data[lang]["Texts"]["Projects"]["Filter"]["Name"]}</span>
            </div>

            <div className="filters">
                <div className='filter-item'>
                    <input 
                        id="search" 
                        className='search-input' 
                        placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Search"]}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>

                <button className="expand-button" onClick={toggleFilters}>
                    {isExpanded ? `▲ ${data[lang]["Texts"]["Projects"]["Filter"]["Expand"]}` : `▼ ${data[lang]["Texts"]["Projects"]["Filter"]["Expand"]}`}
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
                                placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Themes"]}
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
                                placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Types"]}
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
                                placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Regions"]}
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
                                placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Sourcers"]}
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
                                placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Authors"]}
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
                                placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Orgs"]}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Filter;
