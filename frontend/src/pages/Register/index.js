import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { RegisterContainer, Content, InputGroup } from './styles';

import { FiArrowLeft } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';

import api from '../../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    const response = await api.post('ongs', data);
    try {
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <RegisterContainer>
      <Content>
        <section>
          <img src={LogoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Doadores e empresas poderão encontrar e doar facilmente para sua
            organização através de nossa rede.
          </p>

          <Link to="/">
            <FiArrowLeft size={18} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <InputGroup>
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </InputGroup>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </RegisterContainer>
  );
}

export default Register;
