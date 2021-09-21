  import React,{useContext} from 'react';
  import { MyContext } from '../App';
  import styled from 'styled-components';
  import { InnerLayout } from '../styles/Layouts';
  import Title from './Title';
  import ServicesCard from './ServicesCard';
  import web from '../images/web.png';
  import web2 from '../images/web-2.png';
  import pwa from '../images/pwa.png';
  import pwa2 from '../images/pwa-2.png';
  import mobile from '../images/mobile.png';
  import mobile2 from '../images/mobile-2.png';


  const ServicesStyled = styled.div`
      .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
      }
  `;

  export default function ServicesSection() {
    const {theme} = useContext(MyContext);

    return (
      <InnerLayout>
        <ServicesStyled>
            <Title title={'Services'} span={'services'}/>
            <div className="services">
                <ServicesCard
                  image={
                    theme === 'dark-theme'?web:web2
                  }
                  title={"Web Design"}
                  paragraph={
                    "Hello World! I am Joaquín, the man who will help you fulfill your craziest ideas regarding software."
                  }
                />
                
                <div className="mid-card">
                    <ServicesCard
                      image={
                        theme === 'dark-theme'?pwa:pwa2
                      }
                      title={"Web Development"}
                      paragraph={
                        "Hello World! I am Joaquín, the man who will help you fulfill your craziest ideas regarding software."
                      }
                    />
                </div>
                
                <ServicesCard
                  image={
                    theme === 'dark-theme'?mobile:mobile2
                  }
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
  