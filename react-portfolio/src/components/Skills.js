import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import ProgressBar from './ProgressBar';
import Title from './Title';
const SkillsStyled = styled.section`
  .skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }


`;

export default function Skills() {
  return (
    <SkillsStyled>
      <MainLayout>
        <Title title={'Resume'} span={'Resume'}/>
        <InnerLayout>
          <div className="skills">
            <ProgressBar
              title={'HTML5'}
              width={'80%'}
              text={'80%'}
            />

            <ProgressBar
              title={'CSS3'}
              width={'90%'}
              text={'90%'}
            />

            <ProgressBar
              title={'JAVASCRIPT'}
              width={'75%'}
              text={'75%'}
            />

            <ProgressBar
              title={'REACT JS'}
              width={'75%'}
              text={'75%'}
            />

            <ProgressBar
              title={'MONGODB'}
              width={'40%'}
              text={'40%'}
            />

            <ProgressBar
              title={'NODE'}
              width={'70%'}
              text={'70%'}
            />
          </div>
        </InnerLayout>
      </MainLayout>
    </SkillsStyled>
  )
}
