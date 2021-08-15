import styled, { css, keyframes } from "styled-components";
import CustomPropsHamburger from "./Interface";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    min-height: 5rem;

    span {
        cursor: pointer;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    margin: 10px;
    width: 50vw;

    span {
        font-weight: bold;
        font-size: 1.5rem;
    }

    span:nth-child(1) {
        color: ${({ theme }) => theme.colors.primary};
    }
    span:nth-child(2) {
        color: ${({ theme }) => theme.colors.secundary};
    }
`;

export const Menu = styled.div<CustomPropsHamburger>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 10px;
    margin: 10px;
    width: 50vw;

    .upper {
        display: none;
    }

    @media (max-width: 700px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        z-index: 2;
        background-color: ${({ theme }) => theme.colors.white};

        animation: ${({ handleMenu }) =>
                handleMenu ? Animation.open : Animation.close}
            1s ease-in-out forwards;

        .upper {
            display: block;
        }
    }
`;

export const Option = styled.span<CustomPropsHamburger>`
    padding: 5px;
    margin: 5px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.secundaryLight};

    ${({ handleMenu }) =>
        handleMenu &&
        css`
            color: ${({ theme }) => theme.colors.primary};
        `}
`;

export const Hamburger = styled.div<CustomPropsHamburger>`
    position: relative;
    display: none;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 30px;
    border-radius: 4px;
    cursor: pointer;

    span {
        position: relative;
        height: 2px;
        width: 100%;

        content: "";

        border-radius: 2px;
        background: ${({ theme }) => theme.colors.secundary};
        transition: 500ms ease-in-out;
        transform: rotate(
            ${({ handleMenu }) => (handleMenu ? "45deg" : "0deg")}
        );
    }

    span:before,
    span:after {
        position: absolute;
        height: 2px;
        width: 100%;

        content: "";

        border-radius: 2px;
        background: ${({ theme }) => theme.colors.secundary};
        transition: 500ms ease-in-out;
    }

    span:before {
        top: ${({ handleMenu }) => (handleMenu ? "0px" : "10px")};

        transform: rotate(
            ${({ handleMenu }) => (handleMenu ? "90deg" : "0deg")}
        );
    }

    span:after {
        top: ${({ handleMenu }) => (handleMenu ? "0px" : "-10px")};

        transform: rotate(
            ${({ handleMenu }) => (handleMenu ? "90deg" : "0deg")}
        );
    }

    @media (max-width: 700px) {
        display: flex;
    }
`;

const Animation = {
    open: () => {
        const Animation = keyframes`
            from{
                top: -300px;
            }to{
                top: 60px;
            }
        `;

        return Animation;
    },
    close: () => {
        const Animation = keyframes`
            from{
                top: 60px;
            }to{
                top: -300px;
            }
        `;

        return Animation;
    },
};
