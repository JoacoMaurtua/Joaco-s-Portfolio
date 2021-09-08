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

    .resume-container{
      border-left: 1px solid var(--borderColor);
    }

    .education-container{
      
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
                title={'Frameworks'}
                text={'JQuery, BackBone.js, Bootstrap, Reactstrap, Material UI, Styled componets, React Motion'}
              />
              <ResumeItem 
                title={'Libraries'}
                text={'JQuery, BackBone.js, Bootstrap, Reactstrap, Material UI, Styled componets, React Motion'}
              />
              <ResumeItem 
                title={'Tools'}
                text={'JQuery, BackBone.js, Bootstrap, Reactstrap, Material UI, Styled componets, React Motion'}
              />
          </div>

          <div className="small-title">
              <SmallTitle icon={education} title={'Education'} />
          </div>
          <div className="resume-container education-container">
              <ResumeItem 
                year = {'2021'}
                title={'Coding Dojo Bootcamp'}
                text={'Certified as a black belt in full stack development MERN.'}
              />
              <ResumeItem 
                year = {'2020'}
                title={'Computer Science BA'}
                text={'Catolica San Pablo University, Arequipa(Peru)'}
              />
          </div>
      </InnerLayout>
    </ResumeStyled> 
  )
}


