import React from "react";
import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="mb2 container content-row">
      <div className="col-md-6 ml-2">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default Row;