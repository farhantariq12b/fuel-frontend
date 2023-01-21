import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import Button from '../Button';

function Header({ content }) {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <img src="./Fueled-Emblem.svg" alt="fuel-logo" />
        </div>
        {content && <div className="header-content">{content}</div>}
        <div className="header-button">
          <Button>Log In</Button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  content: PropTypes.string
};

export default Header;
