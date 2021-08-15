import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 50px;
`;

export const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    .presentation {
        display: flex;
        flex-direction: column;
        padding: 10px 0px;

        div {
            margin: 10px 0px;
        }

        span {
            font-weight: bold;
        }

        span:nth-child(2) {
            font-size: 2rem;
            color: ${({ theme }) => theme.colors.secundary};
        }

        span:nth-child(3) {
            font-size: 4rem;
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    .corporations {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 100px;
        width: 100%;
    }
`;

export const WhyChooseUs = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 5px;

    margin-top: 200px;

    .contentChooseUs {
        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 1;
    }

    .card {
        height: 100%;
        width: 25rem;

        padding: 40px 30px;

        background-color: ${({ theme }) => theme.colors.primary};
        section {
            span {
                font-size: 2rem;
                font-weight: bold;
                color: ${({ theme }) => theme.colors.white};
            }

            b,
            p {
                font-weight: bold;
                color: ${({ theme }) => theme.colors.white};
            }
            p {
                font-weight: lighter;
            }
        }
    }

    .upper {
        position: absolute;
        width: 100%;
        height: 50%;

        bottom: 0px;
        left: 0px;

        background: ${({ theme }) => theme.colors.yellow};
    }

    @media (max-width: 700px) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 0px;
    }
`;
