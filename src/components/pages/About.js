import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          This is a React small app to leave feedback for a prodocut or service
        </p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
      ;
    </Card>
  );
};

export default About;
