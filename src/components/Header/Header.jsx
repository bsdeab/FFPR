import React from 'react';
import Select from 'react-select';
import './Header.scss';

import logo from '../../assets/logo.png';

import usFlag from '../../assets/flags/us.png';
import frFlag from '../../assets/flags/fr.png';
import spFlag from '../../assets/flags/sp.png';
import grFlag from '../../assets/flags/gr.png';
import ptFlag from '../../assets/flags/pt.png';

import { MdBookmarkBorder } from 'react-icons/md'

function Header(props) {
    const languageOptions = [
        { value: 'pt', label: <img src={ptFlag} alt="Português" className="flag-icon" /> },
        { value: 'en', label: <img src={usFlag} alt="English" className="flag-icon" /> },
        { value: 'gr', label: <img src={grFlag} alt="Germany" className="flag-icon" /> },
        { value: 'sp', label: <img src={spFlag} alt="Spanish" className="flag-icon" />},
        { value: 'fr', label: <img src={frFlag} alt="Français" className="flag-icon" /> }
    ];

    const handleLanguageChange = (selectedOption) => {
        console.log("Idioma selecionado: ", selectedOption.value);

    };

    return (
        <div className='header-container'>

            <div className='header-logo'>
                <img src={logo} alt="Logo" className='logo' />
            </div>

            <div className='header-items'>
                <span className='header-item'>Home</span>
                <span className='header-item'>Projetos</span>
                <span className='header-item'>Sobre</span>
                <span className='header-item'>Contato</span>

                <div className='language'>
                    <Select
                        options={languageOptions}
                        onChange={handleLanguageChange}
                        className="language-select"
                        classNamePrefix="select"
                        isSearchable={false}
                        defaultValue={languageOptions[0]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
