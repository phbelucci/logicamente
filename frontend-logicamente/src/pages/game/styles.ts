import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 100%;
  
  nav {
    height: 10%;
    max-height: 10%;
    width: 100%;
  }

  main {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    align-content: center;
    align-items: center;
  
    div {
      display: flex;
      width: 98%;
    }
  }

`;