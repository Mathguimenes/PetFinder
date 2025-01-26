import "./Home.css";
import Layout from "../../components/Layout/Layout";
import FAQ from "../../components/FAQ";

const Home = () => {
  return (
    <Layout>
      {/** Passo 1: Criar as Boas-Vindas */}
      <div className="home-container">
        <div className="welcome">
          <div className="title">
            <h1>PetFinder</h1>
            <h3>Conectando vidas através da Adoção!</h3>
          </div>
          <div className="welcome-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/instagrama-76a12.appspot.com/o/images%2Fdownload%20(1).jpg?alt=media&token=0ec50054-e98b-493f-9937-472c2a8f5002"
              alt=""
            />
          </div>
        </div>
{/** Passo 2: Criar uma seção para exibir alguns pets disponiveis para adoção */}
{/** Mexer após criar o cadastro de pets e estiver tudo correto no DB */}
        <div className="adoption-section">
          <h1>Disponíveis para Adoção</h1>
        </div>
          <div className="pet-cards">
            <div className="pet-card">
              <img src="" alt="" />
              <p>Nome do pet</p>
            </div>
            <div className="pet-card">
              <img src="" alt="" />
              <p>Nome do pet</p>
            </div>
            <div className="pet-card">
              <img src="" alt="" />
              <p>Nome do pet</p>
            </div>
            <div className="pet-card">
              <img src="" alt="" />
              <p>Nome do pet</p>
            </div>
            <div className="pet-card">
              <img src="" alt="" />
              <p>Nome do pet</p>
            </div>
          </div>
        
<div><br /><br /></div>

{/** Passo 3: Criar uma seção "Como ajudar o petfinder" */}
    {/** SubPasso: Dentro da sessão, criar três cards "Doação", "Adote" e "Sobre Nós" */}
        <div className="help-section">
          <h1>Ajude o PetFinder</h1>
        <div className="card-container">
          <div className="card">
            <br />
            <h3>Doação</h3>
            <p>Faça sua doação para ajudar nossos pets!</p>
            <button className="card-btn">Doar</button>
            <br />
            <img src="https://firebasestorage.googleapis.com/v0/b/instagrama-76a12.appspot.com/o/images%2FPerrito-removebg-preview.png?alt=media&token=e3c503c0-6a8f-46f4-aebe-1d15be9d4a2d" 
            alt="" />
            <br />
          </div>

          <div className="card">
            <br />
            <h3>Adote</h3>
            <p>Conheça os pets diponiveis para adoção.</p>
            <button className="card-btn">Adotar</button>
            <br />
            <img src="https://firebasestorage.googleapis.com/v0/b/instagrama-76a12.appspot.com/o/images%2Fdownload__2_-removebg-preview.png?alt=media&token=cdd64c77-ab97-44ff-9b04-3e981001f7f3" 
            alt="" />

          </div>
          
          <div className="card">
            <br />
            <h3>Sobre nós</h3>
            <p>Venha conhecer o trabalho do PetFinder</p>
            <button className="card-btn">Conhecer</button>
            <br />
            <img src="https://firebasestorage.googleapis.com/v0/b/instagrama-76a12.appspot.com/o/images%2F13910d05-e5d4-44f6-adba-65d3669ca4d9-removebg-preview.png?alt=media&token=2ac822cd-b133-458a-89d1-7760ae4fa401"
            alt="" />
          </div>

          </div>

          <div><br /></div>

        </div>

{/** Passo 4: Criar uma seção para o quiz onde irá redirecionar para a página do quiz */}

        <div className="quiz-container">
          <h1>Qual é o pet ideal para você?</h1>
          <div className="container-quiz">
          <div className="quiz">
          <p>
            Faça o quiz e descubra o pet perfeito para o seu estilo de vida!
          </p>
          <br />
          <img src="https://firebasestorage.googleapis.com/v0/b/instagrama-76a12.appspot.com/o/images%2F5db8ef1f-452c-4f08-9ccb-6ce967226ec5-removebg-preview.png?alt=media&token=df42aebb-b9aa-4555-ac76-de9effacd1a4"
          alt="" />
          <br />
          <button className="quiz-btn">Fazer o quiz</button>
          <br /><br />
          </div>
          </div>
          <div><br /></div>
        </div>
        <br />
        <FAQ />
        <br />
      </div>
    </Layout>
  );
};

export default Home;
