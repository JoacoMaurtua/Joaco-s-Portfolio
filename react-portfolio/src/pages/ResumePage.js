import React from 'react';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import { MainLayout } from '../styles/Layouts';
import Mern from '../images/Mern.png';
import styled from 'styled-components';

const ImgContainer = styled.div`
  float: right;
  margin-top: -1.875rem;
  margin-right: 7rem;
  img{
    width: 18.75rem;
  }

`

export default function ResumePage() {
  return (
    <MainLayout>
      <Skills/>
      <ImgContainer>
        <img src = {Mern} alt="MERN"/>
      </ImgContainer>
      <Resume />
    </MainLayout>
  )
}

