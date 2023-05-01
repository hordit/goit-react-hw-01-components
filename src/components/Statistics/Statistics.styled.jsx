import styled from "styled-components";

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
max-width: 480px;
margin: 40px auto 40px auto;
padding: 70px;
background-color: ${p => p.theme.colors.accent};
`;

export const H2 = styled.h2`
font-size: 22px;
text-align: center;
color: #5d6265;
width: 100%;
padding: 33px;
box-shadow: ${p => p.theme.boxShadow};
background-color: ${p => p.theme.colors.white};
`;

export const Ulist = styled.ul`
display: flex;
width: 100%;
box-shadow: ${p => p.theme.boxShadow};
`;

export const LiItem = styled.li`
flex-basis: 20%;
display: flex;
flex-direction: column;
align-items: center;
padding: 13px;
background-color: ${p => p.color};
color: ${p => p.theme.colors.white};
box-shadow: ${p => p.theme.boxShadow};
`;

export const SpanLabel = styled.span`
padding-bottom: 5px;
font-size: 13px;
`;

export const SpanPercentage = styled.span`
font-size: 18px;
`;
