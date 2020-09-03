import styled from 'styled-components';

export const StyledButton = styled.button`
background: ${props => props.primary ? '#000' : '#FFF'};
color: ${props => props.primary ? '#FFF' : '#000'};
border: none;
border-radius: 3px;
padding: 3px;
width: 8rem;
height: 2rem;
text-align: center;

background-position: center;
transition: background 0.8s;

&:hover {
  background: ${props => props.lightHover ? '#484848' : '#212121'} 
    radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
  cursor: pointer;

}
&:active {
  background-color: ${props => props.lightHover ? '#484848' : '#212121'};
  background-size: 100%;
  transition: background 0s;
}
`

export const StyledLink = styled.a`
  color: #FFF;
  margin: 5px 10px;
`