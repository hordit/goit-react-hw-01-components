import styled from "styled-components";

export const DivProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px auto 50px auto;
padding: 80px 88px;
width: 428px;
height: 504px;
background-color: ${p => p.theme.colors.accent};
`;

export const DivDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 0 30px 0;
width: 100%;
background-color: ${p => p.theme.colors.white};
gap: 10px;
box-shadow: ${p => p.theme.boxShadow};
border-radius: 4px 4px 0 0;
`;

export const Image = styled.img`
border-radius: 50%;
background-color: ${p => p.theme.colors.background};
`;

export const Name = styled.p`
font-weight: bold;
`;

export const Contacts = styled.p`
color: gray; 
font-weight: 500;
`;

export const UlStats = styled.ul`
display: flex;
justify-content: center;
width: 100%;
color: grey ;
font-size: 14px;
font-weight: 500;
border-top: 1px solid #d9d9d9b1;
border-radius: 0 0 4px 4px;
box-shadow: ${p => p.theme.boxShadow};
background-color: #F4F6F9;
`;

export const Li = styled.li`
display: flex;
flex-basis: 33%;
flex-direction: column;
padding: 22px 0 22px 0;
& + & {
    border-left: 1px solid #d9d9d9b1;
  };
`;

export const Span = styled.span`
display: flex;
justify-content: center;
align-items: center;
&.quantity {
  padding-top: 4px;
    color: ${p => p.theme.colors.black};
    font-weight: bold;
}
`;

