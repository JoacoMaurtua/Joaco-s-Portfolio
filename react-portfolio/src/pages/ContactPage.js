import React from 'react';
import { MainLayout,InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../components/Title';
import PrimaButton from '../components/PrimaButton';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../components/ContactItem';
import Particle from '../components/Particle';

const ContactPageStyled = styled.section`

  .contact-section{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-column-gap: 2rem;
      .right-content{
        display: flex;
        flex-direction: column;
      }
      .contact-title{
        h4{
          color: var(--colorWhite);
          padding: 1rem 0;
          font-size: 2.2rem;
        }
      }
      .form{
        width: 100%;
        .form-field{
          margin-top: 2.2rem;
          position: relative;
          width: 100%;
          label{
            position: absolute;
            left: 20px;
            top: -20px;
            display: inline-block;
            background: var(--backGroundDark);
            padding: .1rem .5rem; 
            font-weight: bold;
            border-radius: 5px;
            color:white;
          
            
          }
          input{
            border: 2px solid var(--borderColor);
            outline: none;
            background: transparent;
            height: 3.6rem;
            padding: 0 15px;
            width: 100%;
            color: inherit;
          }
          textarea{
            background: transparent;
            color: inherit;
            border: 2px solid var(--borderColor);
            outline: none;
            width: 100%;
            padding:1.2rem 1rem;

          }
        }
      }
  }


`;

export default function ContactPage() {
  /* MATERIAL UI ICONS: */
  const phone = <PhoneIcon/>
  const mail = <MailIcon/>
  const location = <LocationOnIcon/>

  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'}/>
      
      <ContactPageStyled>
      
        <InnerLayout className={"contact-section"}>
            <div className="left-content">
              <div className="contact-title">
                  <h4>Get In Touch!</h4>
              </div>
              <form className="form">
                <div className="form-field">
                  <label htmlFor="name" id="name">Enter your name</label>
                  <input
                    type="text"
                    id="name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" id="email">Enter your email </label>
                  <input
                    type="email"
                    id="email" 
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone" id="phone">Enter your phone </label>
                  <input
                    type="text"
                    id="phone"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="textarea">How can I help you? </label>
                  <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                </div>
                <div className="form-field">
                    <PrimaButton title={"SEND DATA"}/>
                </div>
              </form>
            </div>
            <div className="right-content">
                <ContactItem className="contact-item"
                  icon={phone}
                  title={'Phone'}
                  contact1={'+51 993 406 228'}
                  contact2={'054 25-9605'}
                />

                 <ContactItem className="contact-item"
                  icon={mail}
                  title={'Email'}
                  contact1={'joacomaurtua@gmail.com'}
                  contact2={'falconDev@gmail.com'}
                />

                 <ContactItem className="contact-item"
                  icon={location}
                  title={'Location'}
                  contact1={'Urb Valencia E-14, Umacollo'}
                  contact2={'Arequipa, Peru'}
                />
            </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  )
}
