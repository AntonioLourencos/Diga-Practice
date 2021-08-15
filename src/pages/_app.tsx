import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Default } from "../styles/themes/Default";
import GlobalStyle from "../styles/Global";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={Default}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;
