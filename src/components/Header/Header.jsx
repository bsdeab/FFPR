import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import './Header.scss';

import logo from '../../assets/logo.png';
import usFlag from '../../assets/flags/us.png';
import frFlag from '../../assets/flags/fr.png';
import spFlag from '../../assets/flags/sp.png';
import grFlag from '../../assets/flags/gr.png';
import ptFlag from '../../assets/flags/pt.png';

// Icones
import { MdMenu, MdClose } from "react-icons/md";

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); // Ref para detectar cliques fora do menu

    const languageOptions = [
        { value: 'pt', label: <img src={ptFlag} alt="Português" className="flag-icon" /> },
        { value: 'en', label: <img src={usFlag} alt="English" className="flag-icon" /> },
        { value: 'gr', label: <img src={grFlag} alt="German" className="flag-icon" /> },
        { value: 'sp', label: <img src={spFlag} alt="Spanish" className="flag-icon" /> },
        { value: 'fr', label: <img src={frFlag} alt="Français" className="flag-icon" /> }
    ];

    const handleLanguageChange = (selectedOption) => {
        console.log("Idioma selecionado: ", selectedOption.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fechar o menu ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='header-container'>
            <div className='header-logo'>
                <img src={logo} alt="Logo" className='logo' />
            </div>

            <div ref={menuRef} className={`header-items ${menuOpen ? 'open' : ''}`}>
                <span className='header-item'>Home</span>
                <span className='header-item'>Projetos</span>
                <span className='header-item'>Salvos</span>
                <span className='header-item'>Sobre</span>
                <span className='header-item'>Contato</span>
                <span className='header-items'>Dados</span>
                
                <div className='language'>
                    <Select
                        options={languageOptions}
                        onChange={handleLanguageChange}
                        className="language-select"
                        isSearchable={false}
                        defaultValue={languageOptions[0]}
                    />
                </div>
            </div>

            <div className='menu-toggle' onClick={toggleMenu}>
                {/* Alternar entre ícones de abrir/fechar */}
                {menuOpen ? (
                    <MdClose className="menu-icon close-icon" />
                ) : (
                    <MdMenu className="menu-icon" />
                )}
            </div>
        </div>
    );
}

export default Header;
