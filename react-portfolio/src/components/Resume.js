import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import SmallTitle from './SmallTitle';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

const ResumeStyled = styled.section`
    .small-title{
      padding-bottom: 2rem;
    }

`;

export default function Resume() {
  const codeIcon = <CodeIcon/>
  const education = <SchoolIcon/>

  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'Resume'}/>
      <InnerLayout>
          <div className="small-title">
              <SmallTitle icon={codeIcon} title={'Other Technologies'} />
          </div>
          <div className="resume-container">
            <ResumeItem 
              title={'Frameworks and tools'}
              text={'JQuery, BackBone.js, Bootstrap, Reactstrap, Material UI, Styled componets, React Motion'}
            />
          </div>
      </InnerLayout>
    </ResumeStyled> 
  )
}
