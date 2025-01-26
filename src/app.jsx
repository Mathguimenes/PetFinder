import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/index'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Adote from "./pages/Adote";
import DetalhesPet from './pages/Detalhes_pet'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path="/adote" element={<Adote />} />
        <Route path='/adote/detalhes-pet/:id' element={<DetalhesPet />} />
        <Route path='/SignUp' element={< SignUp />} />
        <Route path='/Login' element={< Login />} />
      </Routes>
    </Router>
  )
}

export default App
