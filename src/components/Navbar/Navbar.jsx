import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

const handleLogoutClick = () => {
  setShowConfirmPopup(true);
};

const confirmLogout = () => {
  localStorage.removeItem("isLoggedIn");
  window.location.reload();
  setShowConfirmPopup(false);
}

const cancelLogout = () => {
  setShowConfirmPopup(false);
};

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/instagrama-76a12.appspot.com/o/images%2Flogo.png?alt=media&token=dfe70625-9659-4f05-9740-d3ac03a2404e"
              alt="PetFinder Logo"
            />
          </Link>
        </div>

        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Adote">Adote</Link>
          </li>
          <li>
            <Link to="/sobre-nos">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/ajude">Ajude</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          {isLoggedIn ? (
            <>
              <Link to="/perfil" className="navbar-btn">
                Perfil
              </Link>
              <button className="navbar-btn" onClick={handleLogoutClick}>
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/Login" className="navbar-btn">
                Login
              </Link>
              <Link to="/SignUp" className="navbar-btn">
                Cadastre-se
              </Link>
            </>
          )}
        </div>
      </div>

      {showConfirmPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Você deseja realmente sair?</p>
            <div className="popup-actions">
              <button className="popup-btn" onClick={confirmLogout}>
                Sim
              </button>
              <button className="popup-btn" onClick={cancelLogout}>
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
