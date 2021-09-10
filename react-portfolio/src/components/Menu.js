import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub'

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2rem;
  .grid-item{
      h3{
        padding-bottom: 1rem;
        font-size: 1.3rem;
        color: var(--primaryColor);
      }
      .portfolio-content{
        display: block;
        position: relative;

        img{
          width: 100%;
          height: 27vh;
          object-fit: cover;
        }
        ul{
          display: none;
        }
      }
  }
  
`;

export default function Menu({menuItem}) {
  return (
    <MenuItemStyled>
        {
          menuItem.map((item)=>{
            return <div className="grid-item" key={item.id}>
                <div className="portfolio-content">
                    <div className="portfolio-image">
                        <img src={item.image} alt=""/>
                    </div>
                    <ul>
                      <li>
                        <a href={item.link}>
                          <GitHub/>
                        </a>
                      </li>
                    </ul>
                </div>
                <h3 className="title" >{item.title}</h3>
                <p>{item.text}</p>
            </div>
          })
        }
    </MenuItemStyled>
  )
}
