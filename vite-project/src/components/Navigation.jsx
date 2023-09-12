import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.png" alt="logo" width="30" height="30" className="d-inline-block align-text-top" />
          
        </Link>

        <ul className="navbar-nav">
          {/* Add other navigation links here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
