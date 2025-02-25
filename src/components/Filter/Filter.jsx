import React from 'react';
import './Filter.scss';
import Select from "react-select";
import data from '../../data/infos.json'; // Importando o arquivo JSON
import translations from '../../data/translate.json'; // Importando o JSON de tradução

function findEnglishKeyTheme(selectedValue) {
    for (const [englishKey, translatedValues] of Object.entries(translations.Themes)) {
        if (translatedValues.includes(selectedValue) || englishKey === selectedValue) {
            return englishKey;
        }
    }
    return selectedValue; // Caso não encontre, mantém o valor original
}

function findEnglishKeyType(selectedValue) {
    for (const [englishKey, translatedValues] of Object.entries(translations.Types)) {
        if (translatedValues.includes(selectedValue) || englishKey === selectedValue) {
            return englishKey;
        }
    }
    return selectedValue; // Caso não encontre, mantém o valor original
}

function findEnglishKeyRegion(selectedValue) {
    for (const [englishKey, translatedValues] of Object.entries(translations.Regions)) {
        if (translatedValues.includes(selectedValue) || englishKey === selectedValue) {
            return englishKey;
        }
    }
    return selectedValue; // Caso não encontre, mantém o valor original
}

function findEnglishKeySource(selectedValue) {
    for (const [englishKey, translatedValues] of Object.entries(translations.Sources)) {
        if (translatedValues.includes(selectedValue) || englishKey === selectedValue) {
            return englishKey;
        }
    }
    return selectedValue; // Caso não encontre, mantém o valor original
}

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

    const sourceOptions = data[language].Sources.map(source => ({
        label: source,
        value: source
    }));

    // Opções de linguagem (exemplo: inglês, francês, etc.)
    const languageOptions = [
        { label: "English", value: "English" },
        { label: "Français", value: "French" },
        { label: "Español", value: "Spanish" },
        { label: "Português", value: "Portuguese" },
        { label: "नेपाली", value: "Nepali" },
        { label: "हिंदी", value: "Hindi" },
        { label: "Czech", value: "Czhech" },
        { label: "Deutsch", value: "German" },
        { label: "اللغة العربية", value: Arabic" }
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
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className='filter-item'>
                    <Select
                        isMulti
                        onChange={(selectedOptions) => {
                            const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                            const englishThemes = selectedValues.map(findEnglishKeyTheme);
                            setSelectedThemes(englishThemes);
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
                            const englishType = selectedValues.map(findEnglishKeyType);
                            setType(englishType);
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
                            const englishRegion = selectedValues.map(findEnglishKeyRegion);
                            setRegion(englishRegion);
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
                            const englishSource = selectedValues.map(findEnglishKeySource);
                            setSource(englishSource);
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
                            setLanguageFilter(selectedValues); // Atualiza o filtro de linguagem
                        }}
                        options={languageOptions}
                        placeholder={data[lang]["Texts"]["Projects"]["Filter"]["Language"]}
                    />
                </div>

            </div>
        </div>
    );
}

export default Filter;
