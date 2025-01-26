import './Detalhes_Pet.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../../services/api"
import Layout from "../../components/Layout/Layout"

const DetalhesPet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [outrosPets, setOutrosPets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`/Animal/${id}`);
        setPet(response.data);
        setLoading(false);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError("Erro ao carregar os detalhes do pet.");
      } finally {
      setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  useEffect(() => {
    const fetchOutrosPets = async () => {
      try {
        const response = await axios.get(`/animais`);
        const petFiltrados = response.data.filter((outroPet) => outroPet.id !== id);
        setOutrosPets(petFiltrados);
      } catch (error) {
        console.error("Erro ao carregar os outros Pets:", error);
    }
  };

  fetchOutrosPets();
  }, [id]);

  if (loading) {
    return (
      <Layout>
    <div className='detalhes-pet-container'>
      <p>Carregando detalhes do pet...</p>
      </div>;
    </Layout>
  );
  }

  if (error) {
    return (
      <Layout>
        <div className="detalhes-pet-container">
          <p className="error-message">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="detalhes-pet-container">
        {/* Informações do Pet */}
        <section className="pet-info">
          <img src={pet.imagem} alt={pet.nome} className='pet-image' />
          <h1>{pet.nome}</h1>
          <p>
            <strong>Idade: </strong>  {pet.idade} Anos
          </p>
          <p>
            <strong>Espécie: </strong> {pet.especie}
          </p>
          <p>
            <strong>Raça: </strong> {pet.raca || "não especificada"}
          </p>
          <p>
            <strong>Porte: </strong> {pet.porte}
          </p>
          <p>
            <strong>Sexo: </strong> {pet.sexo}
          </p>
          <p>
            <strong>Vacinas: </strong>{" "}
            {pet.vacinas.length > 0 ? pet.vacinas.join(",") : "Nenhuma"}
          </p>
          <p>
            <strong className='descricao'>Descrição: </strong> {pet.descricao || "Sem Descrição."}
          </p>
          <div className="actions">
            <button className="like-btn">💖Curtir</button>
            <button className="chat-btn">💬Iniciar Chat</button>
          </div>
        </section>

        <aside className="more-pets">
          <h2>Outros pets disponíveis</h2>
          <div className="pets-grid">
            {outrosPets.map ((OutroPet)=> (
            <div className="more-pet-card" key={OutroPet.id}>
              <img src={OutroPet.imagem} alt={OutroPet.nome} />
              <h3>{OutroPet.nome}</h3>
            </div>
            )
            )}
          </div>
        </aside>

      </div>
    </Layout>
  );
};

export default DetalhesPet;
