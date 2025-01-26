import './Adote.css';
import { Link } from 'react-router-dom';
import axios from "../../services/api"
import { useEffect, useState } from 'react';
import Layout from "../../components/Layout/Layout"


const Adote = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [filtros, setFiltros] = useState({
    especie: '',
    idade: '',
    porte: '',
    sexo: '',
  });

  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const aplicarFiltros = async () => {
    try {
      setLoading(true);
      const query =  new URLSearchParams(filtros).toString();
      const response = await axios.get(`/animais?${query}`);
      setPets(response.data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Erro ao filtrar pets. Tente Novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('/animais');
        setPets(response.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Erro ao carregar os pets. Tente Novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  return (
    <Layout>
    <div className="adote-container">
      <div className="adote-header">
        <h1>Adote um pet</h1>
        <div className="linha-adote"></div>
        <div className="adote-actions">
          <Link to="/adicionar-pet" className='adote-btn'>Cadastrar novo pet</Link>
          <p className="separar">|</p>
          <button className="filtro-btn"
          onClick={() => setMostrarFiltros((prev) => !prev)}
          >
          {mostrarFiltros ? "Fechar Filtros" : "Filtrar"}
          </button>
          <p className="separar">|</p>
          <Link to="/pets-curtidos" className='curtidos-btn'>Pets Curtidos</Link>
        </div>
        <div className="linha-adote2"></div>
      </div>
      <div className="container-filtros">
      {mostrarFiltros && (
        <div className="filtro-container">
          <label htmlFor="especie">Espécie:</label>
          <select
            id="especie"
            value={filtros.especie}
            onChange={(e) => setFiltros({...filtros, especie: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Outro">Outro</option>
          </select>

          <label htmlFor="idade">Idade:</label>
          <select
            id="idade"
            value={filtros.idade}
            onChange={(e) => setFiltros({...filtros, idade: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="Criança">Criança (0-3 anos)</option>
            <option value="Adulto">Adulto (4-12 anos)</option>
            <option value="Idoso">Idoso (13+ anos)</option>
          </select>

          <label htmlFor='porte'>Porte:</label>
          <select
            id='porte'
            value={filtros.porte}
            onChange={(e) => setFiltros({...filtros, porte: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="Pequeno">Pequeno (até 4kg)</option>
            <option value="Médio">Médio (entre 4-8kg)</option>
            <option value="Grande">Grande (acima de 8kg)</option>
          </select>

          <label htmlFor='sexo'>Sexo:</label>
          <select
            id='sexo'
            value={filtros.sexo}
            onChange={(e) => setFiltros({...filtros, sexo: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>

          <button className="filtrar-btn" onClick={aplicarFiltros}>
            Filtrar
          </button>
        </div>
        )}
        </div>

      <div className="adote-content">
        {loading && <p>Carregando pets...</p>}
        {error && <p className='error-message'>{error}</p>}
        {!loading && !error && pets.length === 0 && (
          <p>Nenhum pet disponivel para adoção no momento</p>
        )}
        {!loading && !error && pets.length > 0 && (
          <div className="pets-grid">
            {pets.map((pet) => (
              <div className="pet-card" key={pet.id}>
                <img src={pet.imagem} alt={pet.nome} className='pet-image' />
                <h2>{pet.nome}</h2>
                <p>{pet.descricao}</p>
                <Link to={`/adote/detalhes-pet/${pet.id}`} className="ver-btn">
                Ver
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </Layout>
  )
}

export default Adote;
