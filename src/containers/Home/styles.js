import styled from 'styled-components'
import Background from '../../assents/background1.svg';





export const Container = styled.div`
 background:url("${Background}");
 background-size: cover ;

    align-items: center;
    flex-direction: column;
    display: flex;
    gap: 40px;

    height: 100vh;


`;

export const Image = styled.img`
margin-top: 30px ;





`;


export const H1 = styled.h1`

font-family: 'Roboto';
font-style: normal;

font-size: 34px;
line-height: 40px;


text-align: center;
margin-bottom: 80px;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 22px;

   color : black;
   
   color: #FFFFFF;
`

export const ImputLabel = styled.p`
letter-spacing: -0.408px;


font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #EEEEEE;

`;
export const Input = styled.input`


background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;
padding-left:25px ;
margin-bottom: 30px;


border: none;
outline: none;




font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;



color: #FFFFFF;


`;

