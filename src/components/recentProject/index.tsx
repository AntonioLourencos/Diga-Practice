import Image from "next/image";
import { useTheme } from "styled-components";
import { Line } from "../../styles/utils/Line";
import { Container, Inform, GroupCard, Card } from "./styled";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";

const RecentProject = (): JSX.Element => {
    const theme = useTheme();

    const cards = [
        {
            image: Image1,
            title: "Lorem ipsum lacus scelerisque, aenean molestie!",
            description: "Lorem ipsum per et, quam donec.",
        },
        {
            image: Image2,
            title: "Lorem ipsum sagittis class, purus pharetra.",
            description: "Lorem ipsum ultricies aliquam, senectus condimentum.",
        },
    ];

    return (
        <Container>
            <Inform>
                <Line width="15rem" color={theme.colors.primary} />
                <span>Recent</span>
                <span>Project</span>
            </Inform>
            <GroupCard>
                {cards.map(({ image, title, description }, index) => {
                    return (
                        <Card key={index}>
                            <div className="img">
                                <Image
                                    src={image}
                                    alt="Failed try again"
                                    layout="fill"
                                />
                            </div>
                            <section>
                                <span>{title}</span>
                                <span>{description}</span>
                            </section>
                        </Card>
                    );
                })}
            </GroupCard>
            <Line width="80%" color={theme.colors.primary} />
        </Container>
    );
};

export default RecentProject;
