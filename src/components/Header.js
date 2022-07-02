import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
};

export default Header;