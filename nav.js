import React from 'react';

const Navigation = () => {
  return (
    <header>
      <h1>Welcome to Sanrio World <i className="fas fa-heart" style={{ color: '#ff69b4' }}></i></h1>
      <nav>
        <ul>
          <li><a href="#interactive-section">Zodiac Sign Game</a></li>
          <li><a href="#gallery-section">Character Goodies</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
