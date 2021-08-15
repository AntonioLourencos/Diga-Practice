import styled from "styled-components";
import CustomProps from "./interface";

export const Line = styled.div<CustomProps>`
    height: ${({ height }) => (height ? height : "2px")};
    width: ${({ width }) => width};

    background-color: ${({ theme, color }) =>
        color ? color : theme.colors.secundary};
`;
