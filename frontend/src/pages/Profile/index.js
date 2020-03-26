import React, { useEffect, useState } from 'react';

import { ProfileContainer, ProfileList } from './styles';

import { Link, useHistory } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          authorization: ongId
        }
      });

      setIncidents(incidents.filter(inicident => inicident.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <ProfileContainer>
      <header>
        <img src={LogoImg} alt="Be The Hero" />

        <span>Bem vinda, {ongName}</span>

        <Link to="incidents/new" className="button">
          Cadastrar um novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ProfileList>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ProfileList>
    </ProfileContainer>
  );
}

export default Profile;
