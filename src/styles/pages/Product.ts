import styled from 'styled-components';
import 
  { 
    Container as container, 
    Row as row, 
    Col as col, 
    Button as button 
  } from 'react-bootstrap';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: url('/assets/background.png') #8257e6 no-repeat center; */
`;

export const Header = styled(container)`
  width: 70%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled(row)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(col)``;

export const Menu = styled(col)`
  ul {
    display: flex;
    list-style: none;
  
    li {
      margin-right: 20px;

      a {
        color: black;
        text-decoration: none;
      }

    }

  }
`;

export const Button = styled(button)``;

export const Content = styled.div`
  h1 {
    text-align: center
  }
`;