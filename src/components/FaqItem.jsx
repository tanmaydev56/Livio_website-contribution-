import { useState } from "react";
import "../styles/FaqItem.css";
import upArrow from "../assets/images/up-arrow.png";
import downArrow from "../assets/images/down-arrow.png";
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div
        className={`faq-question ${isOpen ? "selected" : ""}`}
        onClick={toggleOpen}
      >
        {question}
        <img src={isOpen ? upArrow : downArrow} alt="toggle arrow" />
      </div>
      <div className={`faq-answer ${isOpen ? "show" : ""}`}>{answer}</div>
    </div>
  );
}

export default FaqItem;
