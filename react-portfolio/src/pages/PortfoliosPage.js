import React, {useState} from 'react';
import Title from '../components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Menu from '../components/Menu';
import projects from '../data/projects';
import { Button } from '@material-ui/core';

const allButtons = ['All', ...projects.map(item=>item.category)]

export default function PortfoliosPage() {
  const [menuItem, setMenuItem] = useState(projects);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) =>{

    if(button === 'MERN APP'){
      setMenuItem(projects);
      return;
    }

    const filteredData = projects.filter(item => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <MainLayout>
      <Title title={'Projects'} span={'Projects'}/>
      <InnerLayout>
          <Button filter={filter} button={button}/>
          <Menu menuItem = {menuItem}/> 
      </InnerLayout>
    </MainLayout>
  )
}
