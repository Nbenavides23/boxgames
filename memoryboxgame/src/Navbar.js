import React from 'react';
import propTypes from  'prop-types';
import './Navbar.css';

const Navbar = ({onNewGame}) => (
    <header>
    <h2><a>Memory Game</a></h2>
    <nav>
      <li><a onClick={onNewGame}>New Game</a></li>
    </nav>
    </header>
    );

Navbar.propTypes = {
  onNewGame: propTypes.func.isRequired
};

export default Navbar;