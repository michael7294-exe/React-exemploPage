import styled from 'styled-components'
import Background from '../../assents/background.svg';





export const Container = styled.div`
 background:url("${Background}");
 background-size: cover ;

    align-items: center;
    flex-direction: column;
    display: flex;
    gap: 40px;

    height: 100vh;
    min-height: 100vh;


`;

export const Image = styled.img`
margin-top: 30px ;





`;







export const User = styled.li`

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

border: none;
outline: none;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
     

    p{
       font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;



       color: #FFFFFF;
    }
    button{
       background: none;
       border: none;
       cursor: pointer;
         
    }
    

`;



