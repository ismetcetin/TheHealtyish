import React from "react";
import './Alert.scss';

const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <h3 className="alert__text">{alert}</h3>
    </div>
  );
};

export default Alert;