import React from 'react';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import HomePage from './pages/HomePage';

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;


`;


function App() {
  return (
    <div className="App">
      <SideBar />
      <MainContentStyled>
          <HomePage />
      </MainContentStyled>
    </div>
  );
}

export default App;
