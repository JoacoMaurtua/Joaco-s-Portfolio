import styled from 'styled-components';

export const MainLayout = styled.div`
  padding: 4rem;
  @media screen and(max-width:642px){
    padding:3rem;
  }

  @media screen and(max-width:510px){
    padding:1rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 3rem 0;
`;