import React from 'react';

import { FiLogIn } from 'react-icons/fi';
import { LogonContainer, SectionForm } from './styles';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon() {
  return (
    <LogonContainer>
      <SectionForm>
        <img src={logoImg} alt="Be The hero" />

        <form>
          <h1>Faca seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit">Entrar</button>
          <a href="/register">
            <FiLogIn size={18} color="#E02041" />
            Nao tenho cadastro
          </a>
        </form>
      </SectionForm>

      <img src={heroesImg} alt="heroes" />
    </LogonContainer>
  );
}

export default Logon;
