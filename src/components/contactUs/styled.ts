import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top:  200px;
    padding-bottom: 30px;

    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;

    .introduction {
        display: flex;
        flex-direction: column;
        max-width: 400px;

        span {
            font-weight: lighter;
        }

        span:nth-child(1) {
            font-size: 2rem;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.white};
        }
    }

    .contact {
        display: flex;
        flex-direction: column;

        margin-top: 50px;

        span {
            margin: 5px 0px;
        }
    }
`;
