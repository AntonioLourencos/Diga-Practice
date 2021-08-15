import Image from "next/image";
import { Line } from "../../styles/utils/Line";
import { Container, Introduction, WhyChooseUs } from "./styled";
import WomanRead from "../svg/WomanRead";
import Corporations from "../../assets/corporations.png";

const OurClients = (): JSX.Element => {
    return (
        <Container>
            <Introduction>
                <div className="presentation">
                    <Line width="15rem" />
                    <span>our</span>
                    <span>Client</span>
                </div>
                <div className="corporations">
                    <Image
                        src={Corporations}
                        alt="Failed try again"
                        layout="fixed"
                    />
                </div>
            </Introduction>
            <WhyChooseUs>
                <div className="contentChooseUs">
                    <WomanRead Size={"25rem"} />
                </div>
                <div className="contentChooseUs card">
                    <section>
                        <span>Why choose us?</span>
                        <p>
                            <b>digidiga</b> Lorem ipsum iaculis sodales dictum
                            potenti ut mollis, elementum placerat suscipit
                            pulvinar eu vulputate varius enim, ipsum ad
                            sollicitudin per mi ut. imperdiet netus pharetra
                            imperdiet scelerisque convallis taciti scelerisque
                            congue auctor platea, sem suscipit neque eget
                            rhoncus risus erat vestibulum. magna rutrum neque
                            accumsan blandit ultricies tincidunt neque nostra
                            ultrices, eleifend curabitur lorem eu sem fusce
                            pulvinar velit cursus, ligula rhoncus velit tempus
                            lectus commodo cras suspendisse.
                        </p>
                    </section>
                </div>
                <div className="upper" />
            </WhyChooseUs>
        </Container>
    );
};

export default OurClients;
