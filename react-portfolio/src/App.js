import React from 'react';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { Switch as Switching, Route } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'



const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="light-dark-mode">
            <div className="left-content">
              <Brightness4Icon/>
            </div>
            <div className="right-content">
              <Switch
                style={{color:'var(--primaryColor)'}}
                value=""
                //checked={}
                //onChange={}
                inputProps={{'aria-label':''}}
                size="medium"
              
              />  
            </div>
          </div>
      <MainContentStyled>

          <Switching>
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
          </Switching>
      </MainContentStyled>
    </div>
  );
}

export default App;
