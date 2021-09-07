import React from 'react';
import styled from 'styled-components';

const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child){
    padding-bottom: 3rem;
  }
  .left-content{ //Cunado cambie a mi experiencia laboral

    width: 10%;
  
    p{
      display: inline-block;
    }
  }
  .right-content{
    margin-left: .5rem;
    padding-left: 5.5rem;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        height: 2px;
        width: 3rem;
        background-color: var(--borderColor);

    }
    h5{
      color: var(--primaryColor);
      font-size: 2rem;
      padding-bottom: .7rem;
    }
     
  }
`;

export default function ResumeItem({title,text}) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
         
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  )
}
