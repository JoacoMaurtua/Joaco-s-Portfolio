import React, {useState} from 'react';
import Title from '../components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';

export default function PortfoliosPage() {
  const [menuItem, setMenuItem] = useState();
  return (
    <MainLayout>
      <Title title={'Projects'} span={'Projects'}/>
      <InnerLayout>

      </InnerLayout>
    </MainLayout>
  )
}
