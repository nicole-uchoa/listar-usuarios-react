import { List } from '../list/list';
import { useUsersData } from '../../hooks/useUsersDataGet';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export function TelaListar() {
  const [filtro, setFiltro] = useState('');
  const { data } = useUsersData(filtro);

  const handleLimparFiltro = () => {
    setFiltro('');
  };

  return (
    <div>
      <h2>Usuários</h2>
      <div >
        <input
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

      <div>
        <a href='/' className="btn btn-secondary">Página principal</a>
      </div>
    </div>
  );
}

export default TelaListar;