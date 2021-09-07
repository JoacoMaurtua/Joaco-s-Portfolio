import React from 'react';
import styled from 'styled-components';

const ResumeItemStyled = styled.div`
  display: flex;
  .left-content{ //Cunado cambie a mi experiencia laboral
    width: 50%;
    p{
      display: inline-block;
    }
  }
  .right-content{
    padding-left: .5rem;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        height: 2px;
        width: 3rem;
        background-color: red;

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
