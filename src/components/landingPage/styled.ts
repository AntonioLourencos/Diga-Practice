import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    justify-content: space-evenly;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 5px;

    height: 90vh;

    .upper {
        position: absolute;
        height: 100%;
        width: 100%;

        bottom: 0px;
        right: 0px;

        * {
            position: absolute;
            bottom: 0px;
            left: 10%;
        }
    }

    @media (max-width: 700px) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 0px;

        min-height: 90vh;
    }
`;
export const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 1;

    button,
    span {
        width: 365px;
    }

    span:nth-child(1) {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.secundary};

        margin-bottom: 20px;
    }
    span:nth-child(2) {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.secundaryLight};

        margin-bottom: 40px;
    }

    @media (max-width: 700px) {
        display: flex;
        justify-content: center;

        button {
            width: 15rem;
        }

        span {
            width: 20rem;
        }

        span:nth-child(1) {
            font-size: 1.8em;
        }

        span:nth-child(2) {
            font-size: 1.1rem;
        }
    }
`;
