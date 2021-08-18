import React from 'react';
import { MainLayout,InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../components/Title';

const ContactPageStyled = styled.section`


`;

export default function ContactPage() {
  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'}/>
      <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <form className="form">
              <div className="form-field">
                <label htmlFor="name" id="name">Enter your name: </label>
                <input
                  type="text"
                  id="name"
                
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" id="email">Enter your email: </label>
                <input
                  type="email"
                  id="email"
                
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone" id="phone">Enter your phone: </label>
                <input
                  type="text"
                  id="phone"
                />
              </div>

              <div className="text-area">
                <label htmlFor="textarea">How can I help you? </label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              </div>
            </form>
          </div>
          <div className="right-content">

          </div>
      </InnerLayout>
    </MainLayout>
  )
}
