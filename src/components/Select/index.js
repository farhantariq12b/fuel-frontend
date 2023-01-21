import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

function Select(props) {
  const { label, options, ...remainingProps } = props;

  return (
    <div className="drop-down">
      {label && <label>{label}</label>}
      <select {...remainingProps}>
        {options.map(({ value, label }, index) => (
          <option className="drop-down-option" key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array
};

export default Select;
