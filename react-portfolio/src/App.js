import React from 'react';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { Switch, Route } from 'react-router-dom';

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
          <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route exact path="/about">
                <AboutPage /> 
            </Route>
            <Route exact path="/resume">
                <ResumePage />
            </Route>
            <Route exact path="/portfolios">
                <PortfoliosPage />
            </Route>
            <Route exact path="/contact">
                <ContactPage />
            </Route>
          </Switch>
      </MainContentStyled>
    </div>
  );
}

export default App;
