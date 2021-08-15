import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.green};

    height: 120vh;
    width: 103%;

    padding-top: 50px;

    .ManPlant {
        height: 300px;
        padding: 30px;
        margin-left: 350px;

        z-index: 1;
    }

    @media (max-width: 700px) {
        height: 190vh;

        .ManPlant {
            height: 300px;
            padding: 30px;
            margin-left: 100px;

            transform: translateY(50px);
        }
    }
`;

export const Inform = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.white};
    }

    span:nth-child(1) {
        font-size: 2rem;
        margin-top: 30px;
    }

    span:nth-child(2) {
        font-size: 4rem;
    }
`;

export const GroupAdvantages = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    width: 80%;

    @media (max-width: 700px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }
`;

export const OptionAdvantages = styled.div`
    display: flex;
    flex-direction: column;
    height: 15rem;
    width: 25rem;

    .header {
        font-size: 1.1rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.yellow};

        margin: 15px;
    }

    @media (max-width: 700px) {
        height: auto;
        width: 20rem;
    }
`;
