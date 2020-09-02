import styled from 'styled-components';

export const StyledButton = styled.button`
background: ${props => props.primary ? '#000' : '#FFF'};
color: ${props => props.primary ? '#FFF' : '#000'};
border: none;
border-radius: 3px;
padding: 3px;
width: 8rem;
height: 2rem;

`

export const StyledLink = styled.a`
  color: #FFF;
  margin: 5px 10px;
`