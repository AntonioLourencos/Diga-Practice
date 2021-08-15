import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    span {
        font-size: 1.2rem;
        font-weight: lighter;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
