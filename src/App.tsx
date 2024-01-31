import { useState } from 'react';
import './App.css'
import { List } from './components/list/list';
import { useUsersData } from './hooks/useUsersDataGet';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  // guardar os dados da api 
  const [filtro, setFiltro] = useState('');
  const { data } = useUsersData(filtro);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleLimparFiltro = () => {
    setFiltro('');
  };

  return (
    <div className='container'>
      <h1>Usuários</h1>

      <div className='filtragem'>
        <input
          className='input'
          type='text'
          placeholder='Filtrar por nome'
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button onClick={handleLimparFiltro}>Limpar Filtro</button>
      </div>

      <div className='lista'>
        {data?.map((userData) => (
          <List key={userData.id} name={userData.name} />
        ))}
      </div>

      {/* <div className='lista'>
        {data?.map(userData => <List name={userData.name} />)} 
      </div> */}
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Cadastrar novo usuário</button>
      
    </div>

  )
}

export default App
