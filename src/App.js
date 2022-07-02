import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

const App = () => {
  return (
    <React.Fragment>
      <Header text="My First App" />
      <div className="container">
        <FeedbackItem />
      </div>
    </React.Fragment>
  );
};

export default App;
