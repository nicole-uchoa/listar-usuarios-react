// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { List } from './components/list/list';
import { useUsersData } from './hooks/useUsersData';
// import { UserData } from './interface/userData';

function App() {
  // guardar os dados da api 

  const { data } = useUsersData();

  return (
    <div className='container'>
      <h1>Usuários</h1>
      <div className='lista'>
        {data?.map(userData => <List name={userData.name} />)} 
      </div>

    </div>

  )
}

export default App
