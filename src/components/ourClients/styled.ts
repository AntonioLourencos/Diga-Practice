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
`;

export const WhyChooseUs = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    height: 400px;
    width: 100%;

    margin-top: 200px;

    .contentChooseUs {
        display: flex;
        justify-content: center;

        height: 100%;
        z-index: 1;
    }

    .womanRead {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 10%;
    }

    .card {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 30px;
        margin-right: 30%;

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
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);

        .contentChooseUs {
            padding: 30px 0px;
        }

        .card {
            margin-right: 0%;
        }
    }
`;

export const GroupCorporations = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;

    margin-top: 100px;
    width: 100%;

    div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 10px;
        width: 10rem;
        height: 5rem;
    }

    @media (max-width: 700px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(auto, 1fr);

        div {
            width: auto;
            height: 5rem;
        }
    }
`;
