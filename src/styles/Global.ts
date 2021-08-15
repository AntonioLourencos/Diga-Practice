import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, 
    *:before, 
    *:after{
        margin:0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html,
    body{
        height: 100%;
        width:100%;

        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.secundaryLight};
        font-family: ${({ theme }) => theme.fonts.default};

        overflow-x: hidden;
    }

    button{
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        min-width: 200px;
        min-height: 40px;

        font-weight: bold;
        transition:  300ms ease-in-out;

        cursor: pointer;
        border: none;
        outline: none;

        :hover{
            transform: scale(0.98);
            transition:  300ms ease-in-out;
        }
    }

`;

export default GlobalStyle;
