import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate our service with us</h2>
        {/* {TODO} rating select component */}
        <div className="input-group">
          <input type="text" placeholder="Write a review" />
          <Button onChange={handleTextChange} type="submit" value={text}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
