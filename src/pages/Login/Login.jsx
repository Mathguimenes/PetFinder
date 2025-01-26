import { useState } from "react";
import axios from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", formData);

      setMessage(response.data.message || "Login realizado com sucesso!");
      setShowPopup(true);
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || "Erro no login.");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
      <h1>Login</h1>
      <div className="linha-login"></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email || ""}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="senha">Senha:</label>
        <br />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha || ""}
          onChange={handleChange}
          required
        />
<br />
        <button className="login-btn" type="submit">Entrar</button>
      </form>
      <div className="linha-login2"></div>
      <button className="signup-link">Ainda não tem cadastro? <a href="/SignUp">Cadastre-se aqui!</a> </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p className="message">{message}</p>
            <p>Navegando para a Página Inicial!</p>
            <p>Por favor aguarde...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
