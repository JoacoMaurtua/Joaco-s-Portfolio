import React, {useState,useEffect,createContext} from 'react';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { Switch as Switching, Route } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';

export const MyContext = createContext();


const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

function App() {
  const [theme,setTheme] = useState('dark-theme');
  const [checked,setChecked] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  },[theme]);

  const themeToggler =()=>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }else{
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <MyContext.Provider value={{theme,setTheme}}>
        <SideBar />
        <div className="theme">
          <div className="light-dark-mode">
                <div className="left-content">
                  <Brightness4Icon/>
                </div>
                <div className="right-content">
                  <Switch
                    style={{color:'var(--primaryColor)'}}
                    value=""
                    checked={checked}
                    onClick={themeToggler}
                    inputProps={{'aria-label':''}}
                    size="medium"
                  
                  />  
                </div>
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

      </MyContext.Provider>
      
    </div>
  );
}

export default App;
