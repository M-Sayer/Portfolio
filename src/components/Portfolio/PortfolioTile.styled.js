import styled from 'styled-components';

export const PortfolioTileStyled = styled.section`

background: #484848;
color: #FFF;
padding: 25px 0;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 80%;
margin-left: 10%;
border-radius: 3px;
margin-bottom: 5px;
position: relative;

img {
  width: 80%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

button {
  margin-top: 25px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
 }
}

@media (min-width: ${({ theme }) => theme.desktop}) {
  .project-links {
    margin-bottom: 40px;
  }
}


`