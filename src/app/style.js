import styled from 'styled-components';
import Background from './datas/images/PoznanBackground.jpg';
import theme from "./datas/theme";
export const ApplicationStyled = styled.div`
  display: flex;
  // font-family:OCR A Std, monospace;
  flex:1;
  flex-direction: column;
  background-color:${theme.colors.background};
  background-repeat: repeat-y;
  color:${theme.colors.text};
  .Background{
    height:100%;
    background-position:50% 50%;
  }
`;
export const Application = styled.div`
    text-align: center;
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
`;

export default Application;