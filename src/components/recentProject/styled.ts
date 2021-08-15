import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 80px;
    padding-bottom: 40px;
    width: 104%;

    background-color: ${({ theme }) => theme.colors.primaryLight};

    @media (max-width: 700) {
        margin: 0px;
        width: 120%;
    }
`;

export const Inform = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
    }

    span:nth-child(2) {
        font-size: 2rem;
        margin-top: 30px;
    }

    span:nth-child(3) {
        font-size: 4rem;
    }
`;

export const GroupCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-top: 90px;
    margin-bottom: 40px;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0px 50px;
    max-width: 20rem;

    .img {
        position: relative;
        height: 15rem;
    }

    section {
        display: flex;
        flex-direction: column;

        margin: 10px 0px;

        span {
            color: ${({ theme }) => theme.colors.primary};
        }

        span:nth-child(1) {
            font-weight: bold;
        }

        span:nth-child(2) {
            font-weight: lighter;
        }
    }
`;
