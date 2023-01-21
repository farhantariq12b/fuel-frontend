import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

function InputField(props) {
  const { type = 'text', disabled, label, value, ...remainingProps } = props;

  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input type={type} disabled={disabled} value={value || ''} {...remainingProps} />
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
};

export default InputField;
