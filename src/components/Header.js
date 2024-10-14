import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header py-5 text-center">
      <div className="container">
        <h1 className="display-4">Welcome to CP's Vacations</h1>
        <p className="lead">Plan your dream vacation with us</p>
      </div>
    </header>
  );
}

export default Header;
