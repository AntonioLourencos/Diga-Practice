import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 20px;
    }
`;
export const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-child(1) {
        width: 365px;

        span {
            font-weight: bold;
            color: ${({ theme }) => theme.colors.secundary};
        }

        span:nth-child(1) {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        div {
            span {
                font-size: 4rem;
            }

            span:nth-child(1) {
                font-size: 4rem;
                color: ${({ theme }) => theme.colors.primary};
                margin: 0px;
            }
        }
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        grid-column-start: 1;
        grid-row-start: 1;

        div:nth-child(1) {
            width: auto;
        }
    }
`;
export const GroupText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin-bottom: 15px;

    section {
        width: 90%;

        b {
            font-size: 1.15rem;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.secundaryLight};
        }

        p {
            font-size: 1rem;
            font-weight: lighter;

            margin: 15px 0px;
            padding: 10px 0px;

            color: ${({ theme }) => theme.colors.secundaryLight};
        }
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        grid-column-start: 1;
        grid-row-start: 2;
        height: auto;

        span:nth-child(1) {
            width: auto;
        }
    }
`;

export const GroupWork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;

    width: 100%;
    z-index: 1;

    background-color: ${({ theme }) => theme.colors.white};

    .card {
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);

        background-color: ${({ theme }) => theme.colors.yellow};
        height: 300px;
        width: 80%;
        transform: translateY(50px);

        div:nth-child(1),
        div:nth-child(2),
        div:nth-child(3) {
            border-right: 1px solid ${({ theme }) => theme.colors.white};
        }
    }

    @media (max-width: 700px) {
        grid-column-start: 1;
        grid-row-start: 3;

        .card {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);

            height: auto;
            transform: translateY(50px);

            div:nth-child(1),
            div:nth-child(2),
            div:nth-child(3) {
                border-right: none;
                border-bottom: 1px solid ${({ theme }) => theme.colors.white};
            }
        }
    }
`;

export const ItemWork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    height: 60%;
    padding: 30px;

    span {
        color: ${({ theme }) => theme.colors.white};
        margin: 15px;
    }

    span:nth-child(2) {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;
