import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub'

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2rem;
  .grid-item{
      transform: scale(0.87);
      transition: all .3s ease-in-out;
      &:hover{
        transform: scale(0.90)
      }
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
          transform: translateY()-100px
        }

        .portfolio-image{
          &::before{
            content: "";
            position: absolute;
            left: 2%;
            top: 4%;
            transition: scale(0);
            height: 0;
            width: 0;
            transition: all .4s ease-in-out;

          }
          
        }
        .portfolio-image:hover{
          ul{
            transform: translateY(0);
            display: block;
            position: absolute;
            left: 50%;
            top: 35%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            li{
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              border-radius: 50%;
              margin: 0 1rem;
      
            }
            svg{
              font-size: 3.5rem;
              color: #00919c;
              cursor: pointer;
            }
          }
          &::before{
            transform-origin: left;
            width: calc(100% - 4%);
            height: calc(100% - 43%);
            background-color: white;
            opacity: 0.9;
            transform-origin: left;
          
          }

      }
  }
  
  }`

export default function Menu({menuItem}) {
  return (
    <MenuItemStyled >
    {
        menuItem.map((item)=>{
            return <div className="grid-item" key={item.id}>
                <div className="portfolio-content">
                    <div className="portfolio-image">
                        <img src={item.image} alt=""/>
                        <ul>
                            <li>
                                <a href={item.link1}>
                                    <GitHub />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                </div>
            </div>
        })
    }
</MenuItemStyled>
  )
}
