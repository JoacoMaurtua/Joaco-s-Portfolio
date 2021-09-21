import React from 'react';
import styled from 'styled-components';
import joaco from '../images/joaco.jpg'
import PrimaButton from './PrimaButton';

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    color: var(--colorWhite);
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
        .right-content{
            .info-title{
                margin-right: -40px;
            }
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--colorWhite);
            span{
                font-size: 2rem;
                color: var(--primaryColor);
            }
        }
        .paragraph{
            font-weight: 800;
            padding: 1rem 0;
        }
        .about-info{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: .1rem;
            padding-bottom: 1.4rem;
            .info-title{
                margin-right: 0;
                p{
                    font-weight: 600;
                    padding: .3rem 0;
                }
                span{
                    color: var(--primaryColor);
                    font-weight: 600;
                }
               
            }
        }
    }
`;

export default function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={joaco} alt="joaco"/>
      </div>
      <div className="right-content">
          
          <h4>I am <span>Joaquin Maurtua</span></h4>
          
          <p className="paragraph">
              Hello World! I am Joaquín, the man who will help you fulfill your craziest ideas regarding software, my mission in this world is to innovate and find intelligent solutions to make life easier for you.
          </p>
          <div className="about-info" >
              <div className="info-title">
                  <p><span>Full Name:</span> Joaquín Maúrtua Diban</p>
                  <p><span>My age: </span> 22</p>
                  <p><span>Nationality:</span> Peruvian</p>
                  <p><span>Languages:</span> Spanish, English, Italian</p>
                  <p><span>Hobbies:</span>  Acting, drawing, gym and design</p>
                  <p><span>Location:</span>  Arequipa, Perú</p>
                  <p><span>Service:</span> Full stack MERN developer</p>
              </div>
          </div>
          <PrimaButton title={"Download CV"}/>
      </div>

    </ImageSectionStyled>
  )
}


