import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({
  title,
  isOpen,
  toggle,
  options,
  selectedOptions,
  handleOptionChange,
  renderOption,
}) => (
  <div className="dropdown">
    <button className="dropdown-button" onClick={toggle}>
      {title} <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
    </button>
    {isOpen && (
      <div className="dropdown-content">
        <label className="dropdown-item">
          <input
            type="checkbox"
            value="any"
            onChange={() => handleOptionChange('any')}
            checked={selectedOptions.length === 0}
          />
          Any {title.toLowerCase()}
        </label>
        {options.map((option) => (
          <label key={option} className="dropdown-item">
            <input
              type="checkbox"
              value={option}
              onChange={() => handleOptionChange(option)}
              checked={selectedOptions.includes(option)}
            />
            {renderOption ? renderOption(option) : option}
          </label>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
