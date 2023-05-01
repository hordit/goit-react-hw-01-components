import styled from "styled-components";

export const UlList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
`;

export const LiItem = styled.li`
margin-top: 10px;
padding: 5px 12px 5px 12px;
box-shadow: ${p => p.theme.boxShadow};
`;