import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column footer-left">
        <h4>Nos acompanhe nas redes sociais!</h4>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61563278681181&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a
            href="https://www.instagram.com/ajuda_petfinder?igsh=emI0aGxseG12ejV2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-column footer-middle">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/instagrama-76a12.appspot.com/o/images%2Flogo.png?alt=media&token=dfe70625-9659-4f05-9740-d3ac03a2404e"
          alt="PetFinder Logo"
          className="footer-logo"
        />
        <h4>Como encontrar o PetFinder?</h4>
        <p>Rua dos Animais, 123 - Bairro PetLover</p>
        <p>Telefone: (xx) xxxxx-xxxx</p>
      </div>
      <div className="footer-column footer-right">
        <h4>Desenvolvido por</h4>
        <p>Grupo Vínculus</p>
      </div>
    </footer>
  );
};

export default Footer;
