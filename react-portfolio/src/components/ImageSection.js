import React from 'react';
import styled from 'styled-components';
import joaco from '../images/joaco.jpg'
import PrimaButton from './PrimaButton';

const ImageSectionStyled = styled.div`

    margin-top: 5rem;
    display: flex;
    .left-content{
        width: 100%;
        img{
            width: 85%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        color: var(--colorWhite);
        h4{
            font-size: 2rem;
            color: var(--colorWhite);
            span{
                font-size: 2rem;
                color: var(--primaryColor)
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            padding-bottom: 1.4rem;
            display: flex;
            padding-bottom: 1.3rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
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
                  <p>Full Name</p>
                  <p>Age</p>
                  <p>Nationality</p>
                  <p>Languages</p>
                  <p>Hobbies</p>
                  <p>Location</p>
                  <p>Service</p>
              </div>

              <div className="info">
                  <p>: Joaquín Maúrtua Diban</p>
                  <p>: 22</p>
                  <p>: Peruvian</p>
                  <p>: Spanish, English, Italian</p>
                  <p>: Acting, drawing, painting, gym and design</p>
                  <p>: Arequipa, Perú</p>
                  <p>: Full stack MERN developer</p>
              </div>
          </div>
          <PrimaButton title={"Download CV"}/>
      </div>

    </ImageSectionStyled>
  )
}


