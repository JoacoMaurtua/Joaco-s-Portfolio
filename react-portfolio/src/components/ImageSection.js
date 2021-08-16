import React from 'react';
import styled from 'styled-components';
import joaco from '../images/joaco.jpg'

const ImageSectionStyled = styled.div`
margin-top: 3.5rem;
  display: flex;
  .left-content{
    width: 100%;
    img{
      width: 90%;
      height: 21rem;
    }
  }
  .right-content{
    h4{
      font-size: 2rem;
      span{
        font-size: 2rem;
        color: var(--primaryColor);
      }
    }
    .paragraph{
      padding: 1rem 0;
    }
    .about-info{
      display: flex;
      .info-title{
        padding-right: 2rem;
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
          <div className="about-info">
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
                  <p>: Acting, drawing, painting, soccer, gym, and design</p>
                  <p>: Arequipa, Perú</p>
                  <p>: Web and mobile developer</p>
              </div>
          </div>

          
      </div>
      
    </ImageSectionStyled>
  )
}
