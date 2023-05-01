import styled from "styled-components";

export const DivItem = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 260px;
`;

export const SpanStatus = styled.span`
svg {
    color: ${p => (p.isOnline ? "green" : "red")};
}
`;

export const ImgAvatar = styled.img`
background-color: #79c8ea9a;
border-radius: 4px;
width: 70px;
padding: 5px;
margin-left: 12px;
margin-right: 12px;
`;

export const PName = styled.p`
font-size: 25px;
font-weight: 500;
`
