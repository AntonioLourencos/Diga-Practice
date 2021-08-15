import type { NextPage } from "next";
import Head from "next/head";
import LandinPage from "../components/landingPage";
import About from "../components/about";
import RecentProject from "../components/recentProject";
import OurClients from "../components/ourClients";
import OurAdvantages from "../components/ourAdvantages";
import ContactUs from "../components/contactUs";

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Digidiga | AntonioLourencos</title>
            </Head>
            <LandinPage />
            <About />
            <RecentProject />
            <OurClients />
            <OurAdvantages />
            <ContactUs />
        </>
    );
};

export default Index;
