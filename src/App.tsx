// import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import TelaListar from './components/telas/tela-listar';
import TelaAdicinar from './components/telas/tela-adicionar';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div class="card position-relative">
      <div class="card-header">Menu</div>
      <div class="card-body">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/listar" >Listar Usuário </Link></li>
          <li class="breadcrumb-item"><Link to="/adicionar" >Adicionar Usuário</Link></li>
        </ol>
      </div>
    </div>
  );
}

function App() {
  // guardar os dados da api 
  return (
    <div className='container'>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/listar" Component={TelaListar} />
            <Route path="/adicionar" Component={TelaAdicinar} />
          </Routes>
        </div>
      </Router >
    </div>
  )
}

export default App
