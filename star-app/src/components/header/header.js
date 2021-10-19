import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex justify-content-between container">
      <div className="header-block-left d-flex">
        <h3>
          <a href="#/">
            StarDB
          </a>
        </h3>
        <ul className="d-flex">
          <li>
            <a href="#/people">People</a>
          </li>
          <li>
            <a href="#/planets">Planets</a>
          </li>
          <li>
            <a href="#/starships">Starships</a>
          </li>
        </ul>
      </div>

      <button
          onClick={onServiceChange}
          className="btn btn-danger btn-lg">
        Change Service
      </button>
    </div>
  );
};

export default Header;