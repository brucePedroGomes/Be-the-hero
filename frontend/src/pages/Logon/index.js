import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import { LogonContainer, SectionForm } from './styles';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LogonContainer>
      <SectionForm>
        <img src={logoImg} alt="Be The hero" />

        <form onSubmit={handleLogin}>
          <h1>login</h1>

          <input
            placeholder="ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register">
            <FiLogIn size={18} color="#E02041" />
            Cadastre-se
          </Link>
        </form>
      </SectionForm>

      <img src={heroesImg} alt="heroes" />
    </LogonContainer>
  );
}

export default Logon;
