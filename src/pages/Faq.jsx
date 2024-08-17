import React, { useState } from "react";
import "../styles/Faq.css";
const FaqQ = () => {
  const [question, setQuestion] = useState("");
  const [remainingChars, setRemainingChars] = useState(100);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
    setRemainingChars(100 - e.target.value.length);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <div className="ask-question">
        <h2 className="sub-header">Ask a Question</h2>
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          className="faq-input"
          placeholder="Enter your question here..."
          maxLength="100"
        />
        <div className="continue-section">
          <button className="continue-button">Continue...</button>
          <span className="remaing_span">{remainingChars} characters remaining</span>
        </div>
      </div>
      <div className="popular-questions">
        <h2 className="sub-header">Most Popular Question</h2>
        <ul className="question-list">
          <li className="question-item">How can I return an item?</li>
          <li className="question-item">
            I have just placed an order, when will I get my delivery?
          </li>
          <li className="question-item">How do I exchange an item?</li>
          <li className="question-item">Can I pay on delivery?</li>
        </ul>
      </div>
    </div>
  );
};

export default FaqQ;
