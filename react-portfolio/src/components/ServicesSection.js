  import React from 'react';
  import styled from 'styled-components';
  import { InnerLayout } from '../styles/Layouts';
  import Title from './Title';
  import ServicesCard from './ServicesCard';
  import web from '../images/web.png';
  import pwa from '../images/pwa.png'
  import mobile from '../images/mobile.png';

  const ServicesStyled = styled.div`
      .services{
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        .mid-card{
          margin: 0 1.2rem;
        }

      }
  `;

  export default function ServicesSection() {
    return (
      <InnerLayout>
        <ServicesStyled>
            <Title title={'Services'} span={'services'}/>
            <div className="services">
                <ServicesCard
                  image={web}
                  title={"Web Design"}
                  paragraph={
                    "Hello World! I am Joaquín, the man who will help you fulfill your craziest ideas regarding software."
                  }
                />
                
                <div className="mid-card">
                    <ServicesCard
                      image={pwa}
                      title={"Web Development"}
                      paragraph={
                        "Hello World! I am Joaquín, the man who will help you fulfill your craziest ideas regarding software."
                      }
                    />
                </div>
                
                <ServicesCard
                  image={mobile}
                  title={"Mobile Development"}
                  paragraph={
                    "Hello World! I am Joaquín, the man who will help you fulfill your craziest ideas regarding software."
                  }
                />

                
            </div>
        </ServicesStyled>    
      </InnerLayout>
    )
  }
  