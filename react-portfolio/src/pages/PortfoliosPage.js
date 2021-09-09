import React, {useState} from 'react';
import Title from '../components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Menu from '../components/Menu';
import projects from '../data/projects';

export default function PortfoliosPage() {
  const [menuItem, setMenuItem] = useState(projects);
  return (
    <MainLayout>
      <Title title={'Projects'} span={'Projects'}/>
      <InnerLayout>
          <Menu menuItem = {menuItem}/> 
      </InnerLayout>
    </MainLayout>
  )
}
