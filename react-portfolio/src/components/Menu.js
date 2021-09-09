import React from 'react';
import styled from 'styled';
import GitHub from '@material-ui/icons/GitHub'

const MenuItemStyled = styled.div`


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
            </div>
          })
        }
    </MenuItemStyled>
  )
}
