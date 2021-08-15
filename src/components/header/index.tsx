import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Line } from "../../styles/utils/Line";
import { Container, Logo, Menu, Option, Hamburger } from "./styled";

const Header = (): JSX.Element => {
    const [handleMenu, setHandleMenu] = useState<boolean>(false);
    const history = useRouter().asPath;
    const theme = useTheme();

    const menu = [
        { path: "/#About-us", name: "About us" },
        { path: "/#Our-Project", name: "Our Project" },
        { path: "/#Clients", name: "Clients" },
    ];

    const handleClick = (): void => {
        return setHandleMenu(!handleMenu);
    };

    return (
        <Container>
            <Logo>
                <Link href="/" passHref>
                    <div>
                        <span>digi</span>
                        <span>diga</span>
                    </div>
                </Link>
            </Logo>
            <Menu handleMenu={handleMenu}>
                {menu.map(({ path, name }, index) => {
                    const DefineSelected = path === history ? true : false;

                    return (
                        <Link key={index} href={path} passHref>
                            <Option handleMenu={DefineSelected}>{name}</Option>
                        </Link>
                    );
                })}
                <Line className="upper" width="300px" />
            </Menu>
            <Hamburger onClick={handleClick} handleMenu={handleMenu}>
                <span />
            </Hamburger>
        </Container>
    );
};

export default Header;
