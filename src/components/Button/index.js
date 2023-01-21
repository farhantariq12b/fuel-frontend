import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children, isPlus, outline, classes, onClick, ...props }) {
  return (
    <div className="button">
      <button onClick={(e) => onClick(e)} {...props} className={`${classes || ''} ${outline ? ' outline' : ''}`}>
        {isPlus && '+'}
        {children}
      </button>
    </div>
  );
}
Button.propTypes = {
  children: PropTypes.string,
  isPlus: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  classes: PropTypes.string
};

export default Button;
