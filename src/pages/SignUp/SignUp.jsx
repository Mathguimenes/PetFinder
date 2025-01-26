import { useState } from "react";
import "./SignUp.css";
import api from "../../services/api";

const SignUp = () => {
  const [formData, SetFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/usuarios", formData);
      console.log("Usuário cadastrado:", response.data);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h1>Cadastro de Usuários</h1>

        <div className="linha-signup"></div>
        <br />

        <form onSubmit={handleSubmit}>
<div className="separador2"></div>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <br />
            <input
              type="text"
              placeholder="Insira seu Nome"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

<div className="separador"></div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              placeholder="Insira seu Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

<div className="separador"></div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <br />
            <input
              type="password"
              placeholder="Insira sua Senha"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />

            <br />
            <br />
            <button className="signup-btn" type="submit">
              Cadastrar
            </button>
            <div className="linha-signup2"></div>

            <button className="login-button">Já tem uma conta? <a href="/Login">Entre Agora!</a></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
