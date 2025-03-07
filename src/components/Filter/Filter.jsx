import React from 'react';
import './Filter.scss';
import Select from "react-select";
import data from '../../data/infos.json'; // Importando o arquivo JSON
import translations from '../../data/translate.json'; // Importando o JSON de tradução

function Filter({ setType, setRegion, setSource, setSelectedThemes, setSearchTerm, setLanguageFilter, setOrganization, setPaid, organizationsList, lang }) {
    let language = lang;

    // Gerando as opções a partir do arquivo JSON
    const themeOptions = Object.keys(data[language].Themes).map((themeKey) => ({
        label: themeKey,
        value: themeKey
    }));

    const typeOptions = data[language].Types.map((type) => ({
        label: type,
        value: type
    }));

    const regionOptions = data[language].Regions.map(region => ({
        label: region,
        value: region
    }));

    const sourceOptions = Object.values(translations.Sources).map((values) => ({
        label: values[0], // Use the English word as the label
        value: values[0], // Use the English word as the value
    }));

    // Opções de linguagem (exemplo: inglês, francês, etc.)
    const languageOptions = [
        { label: "English", value: "English" },
        { label: "Français", value: "French" },
        { label: "Español", value: "Spanish" },
        { label: "Português", value: "Portuguese" },
        { label: "नेपाली", value: "Nepali" },
        { label: "हिंदी", value: "Hindi" },
        { label: "Czhech", value: "Czech" },
        { label: "Deutsch", value: "German" },
        { label: "اللغة العربية", value: "Arabic" },
        { label: "українська", value: "Ukrainian" }
    ];

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
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    />
                </div>

                <div className='filter-item'>
                    <Select
                        isMulti
                        onChange={(selectedOptions) => {
                            const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                            setSource(selectedValues); // Use the English words directly
                        }}
                        options={sourceOptions}
                        placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Sourcers"]}
                    />
                </div>

                {/* Other filter items... */}
            </div>
        </div>
    );
}

export default Filter;
