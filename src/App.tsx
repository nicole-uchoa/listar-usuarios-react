// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { List } from './components/list/list';
import { useUsersData } from './hooks/useUsersDataGet';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  // guardar os dados da api 

  const { data } = useUsersData();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }


  return (
    <div className='container'>
      <h1>Usuários</h1>

      <div className='lista'>
        {data?.map(userData => <List name={userData.name} />)} 
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Cadastrar novo usuário</button>
      
    </div>

  )
}

export default App
