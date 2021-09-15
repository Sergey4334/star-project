import React from "react";

import './error-indicator.css';
import iconDeth from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator bg-primary w-100 h-100 text-center">
      <img src={iconDeth} alt="error icon" width="60" /><br />
      <span className="boom bg-warning m-2 text-white d-block p-2">BOOM!</span>
      <span className="btn-outline-warning">Somthing has gone terribly wrong!</span>
    </div>
  );
}
export default ErrorIndicator;