import React from 'react';

import { Container } from '../../styles/globalStyleds';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>logado</small>
      </Title>
      <Paragrafo>texto qualquer para ocupar lugar...</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
