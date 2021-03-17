import styled from 'styled-components';
import Cross from '../../assets/cross.svg'

export const Card = styled.section`
width: 758px;
height:694px;
border-radius:5px;
background-color: white;
padding:47px 36px;
margin:auto;
`;

export const CardHeader = styled.header`
padding-bottom: 35px;
border-bottom: 1px solid  #E4E4E4;
margin-bottom: 43px;
`;

export const CardTitle = styled.h2`
font-family: Space Grotesk;
font-size: 24px;
font-weight: 600;
`;

export const CardStatus = styled(CardTitle)`
  &.success {color: #0C9241;
  };
  &.error {color: red};
`;


export const CardBody = styled.div`
font-family: Space Grotesk;
border-bottom: 1px solid  #E4E4E4;
padding-bottom: 30px;
margin-bottom: 30px;

  & .fieldName {
    font-size:12px;
    color: #A3A3A9;
    margin: 5px 0;
  }
  & .paragraph {
    font-size: 16px;
    color: #2F2F32;
    max-width: 467px;
  }
  & .flexContainer {
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
  }
`;


export const CardFooter = styled.footer`
& .fieldName {
    font-size:12px;
    color: #A3A3A9;
    margin: 5px 0;
  }
  & .paragraph {
    font-size: 16px;
    color: #2F2F32;
    max-width: 467px;
    margin: 0 0 4px 0;
  }
`;

export const CloseButton = styled.button`
 width: 15px;
 height: 15px;
 font-family: Roboto;
 font-weight: bold;
 border:none;
 background: transparent url(${Cross}) 0 0 no-repeat;
`

export const RequestRefund = styled.button`
font-family: Space Grotesk;
font-style: normal;
font-weight: 600;
font-size: 14px;
color: #2550E5;
padding: 6px 10px;
border-radius: 6px;
border:none;
background-color: #F6F6F6;
`