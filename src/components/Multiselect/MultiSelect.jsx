import React, { useState, useEffect, useRef } from 'react';
import './MultiSelect.css'; // Estilos personalizados

function MultiSelect({ options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Selecionar todas as opções
  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
      onChange([]);
    } else {
      const allValues = options.map(option => option.value);
      setSelectedOptions(allValues);
      onChange(allValues);
    }
  };

  // Selecionar/desmarcar opção individual
  const handleSelectOption = (value) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter(option => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="multi-select" ref={dropdownRef}>
      <div className="multi-select-header" onClick={toggleDropdown}>
        <div className="multi-select-placeholder">
          {selectedOptions.length > 0 ? `${selectedOptions.length} selecionado(s)` : 'Select...'}
        </div>
        <div className="multi-select-arrow">{isOpen ? '▲' : '▼'}</div>
      </div>

      {isOpen && (
        <div className="multi-select-dropdown">
          <div className="multi-select-options">
            <div className="multi-select-option select-all">
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.length === options.length}
                  onChange={handleSelectAll}
                />
                Select all options
              </label>
            </div>

            {options.map((option, index) => (
              <div key={index} className="multi-select-option">
                {option.category && <div className="category">{option.category}</div>}
                <label>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedOptions.includes(option.value)} // Aqui verificamos se está selecionado
                    onChange={() => handleSelectOption(option.value)} // Função de mudança
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
