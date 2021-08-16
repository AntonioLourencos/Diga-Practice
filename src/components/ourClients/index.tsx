import Image from "next/image";
import { Line } from "../../styles/utils/Line";
import {
    Container,
    Introduction,
    WhyChooseUs,
    GroupCorporations,
} from "./styled";
import WomanRead from "../../assets/svg/WomanRead.svg";
import image_0 from "../../assets/png/unknown(0).png";
import image_1 from "../../assets/png/unknown(1).png";
import image_2 from "../../assets/png/unknown(2).png";
import image_3 from "../../assets/png/unknown(3).png";
import image_4 from "../../assets/png/unknown(4).png";
import image_5 from "../../assets/png/unknown(5).png";
import image_6 from "../../assets/png/unknown(6).png";
import image_7 from "../../assets/png/unknown(7).png";

const OurClients = (): JSX.Element => {
    const Corporations: string[] = [
        image_0,
        image_1,
        image_2,
        image_3,
        image_4,
        image_5,
        image_6,
        image_7,
    ];

    return (
        <Container id="Clients">
            <Introduction>
                <div className="presentation">
                    <Line width="15rem" />
                    <span>our</span>
                    <span>Client</span>
                </div>
                <GroupCorporations>
                    {Corporations.map((image, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    src={image}
                                    alt="Failed try again"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </GroupCorporations>
            </Introduction>
            <WhyChooseUs>
                <div className="contentChooseUs ">
                    <div className="womanRead">
                        <Image src={WomanRead} alt="Failed try again" />
                    </div>
                </div>
                <div className="contentChooseUs ">
                    <div className="card">
                        <section>
                            <span>Why choose us?</span>
                            <p>
                                <b>digidiga</b> Lorem ipsum iaculis sodales
                                dictum potenti ut mollis, elementum placerat
                                suscipit pulvinar eu vulputate varius enim,
                                ipsum ad sollicitudin per mi ut. imperdiet netus
                                pharetra imperdiet scelerisque convallis taciti
                                scelerisque congue auctor platea, sem suscipit
                                neque eget rhoncus risus erat vestibulum. magna
                                rutrum neque accumsan blandit ultricies
                                tincidunt neque nostra ultrices, eleifend
                                curabitur lorem eu sem fusce pulvinar velit
                                cursus, ligula rhoncus velit tempus lectus
                                commodo cras suspendisse.
                            </p>
                        </section>
                    </div>
                </div>
                <div className="upper" />
            </WhyChooseUs>
        </Container>
    );
};

export default OurClients;
