import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
    <div className="faq">
      <h2>Perguntas Frequentes</h2>
      <ul className="faq-list">
        <li className={`faq-item ${openIndex === 0 ? "open" : ""}`} onClick={() => toggleFaq(0)}>
          <div className="faq-question">O que é o PetFinder?</div>
          <div className="faq-answer">O PetFinder é uma plataforma para adoção de animais.</div>
        </li>
        <li className={`faq-item ${openIndex === 1 ? "open" : ""}`} onClick={() => toggleFaq(1)}>
          <div className="faq-question">Como posso adotar um pet?</div>
          <div className="faq-answer">Basta clicar na seção de adoção, escolher um pet e entrar em contato!</div>
        </li>
        <li className={`faq-item ${openIndex === 2 ? "open" : ""}`} onClick={() => toggleFaq(2)}>
          <div className="faq-question">Preciso pagar para adotar?</div>
          <div className="faq-answer">Não! Nosso objetivo é encontrar lares amorosos para os pets.</div>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default FAQ;
