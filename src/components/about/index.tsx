import {
    Container,
    Introduction,
    GroupText,
    GroupWork,
    ItemWork,
} from "./styled";

const About = (): JSX.Element => {
    const workList = [
        {
            message: "Website Development",
        },
        {
            message: "Mobile Apps Development",
        },
        {
            message: "Branding & design",
        },
        {
            message: "IoT Solution",
        },
    ];

    return (
        <Container id="About-us">
            <Introduction>
                <div>
                    <span>About</span>
                    <div>
                        <span>digi</span>
                        <span>diga</span>
                    </div>
                </div>
            </Introduction>
            <GroupText>
                <section>
                    <p>
                        <b>Digidiga</b> Convallis tellus felis nostra curabitur
                        augue curae facilisis elementum mattis cras, porttitor
                        massa duis vitae at habitasse ornare consequat lectus,
                        nisi hendrerit turpis torquent maecenas habitant sodales
                        himenaeos ut.
                    </p>
                    <p>
                        <b>Digidiga</b> Convallis tellus felis nostra curabitur
                        augue curae facilisis elementum mattis cras, porttitor
                        massa duis vitae at habitasse ornare consequat lectus,
                        nisi hendrerit turpis torquent maecenas habitant sodales
                        himenaeos ut.
                    </p>
                </section>
            </GroupText>

            <GroupWork>
                <div className="card">
                    {workList.map(({ message }, index) => {
                        return (
                            <ItemWork key={index}>
                                <span>0{index + 1}</span>
                                <span>{message}</span>
                            </ItemWork>
                        );
                    })}
                </div>
            </GroupWork>
        </Container>
    );
};

export default About;
