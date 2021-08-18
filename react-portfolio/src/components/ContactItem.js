import React from 'react';
import styled from 'styled-components';

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--sideDark);

`;

export default function ContactItem({icon, title, contact1, contact2}) {
  return (
    <ContactItemStyled>
      <div className="left-content">

         {icon}
 
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  )
}
