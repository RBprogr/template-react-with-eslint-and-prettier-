import styled from 'styled-components';

export const Title = styled.h1`
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
  color: ${(props) => (props.isRed ? 'blue' : 'red')};
`;

export const Paragrafo = styled.p`
  color: green;
`;
