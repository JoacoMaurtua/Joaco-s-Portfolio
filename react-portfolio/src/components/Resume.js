import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import SmallTitle from './SmallTitle';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';

const ResumeStyled = styled.section`


`;

export default function Resume() {
  const codeIcon = <CodeIcon/>
  const education = <SchoolIcon/>

  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'Resume'}/>
      <InnerLayout>
          <SmallTitle icon={codeIcon} title={'Other Technologies'} />
      </InnerLayout>
    </ResumeStyled> 
  )
}
