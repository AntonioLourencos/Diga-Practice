import { Container, Inform, GroupAdvantages, OptionAdvantages } from "./styled";
import ManPlant from "../svg/ManPlant";

const OurAdvantages = (): JSX.Element => {
    const groupAdvantages = [
        {
            name: "Integer nullam morbi",
            description:
                "Mauris erat metus vel luctus pharetra pretium sem, fusce orci euismod convallis ut. vulputate adipiscing inceptos erat lacus cubilia, adipiscing auctor lectus aptent, aliquet sagittis netus tincidunt. nisl fusce habitant turpis luctus vel a condimentum augue, fermentum lorem pretium mollis aenean senectus vivamus adipiscing turpis, libero posuere aenean sollicitudin aliquet aenean maecenas. est euismod curae rhoncus felis volutpat morbi vehicula sem, potenti pharetra lacus sociosqu interdum curae nostra class vitae, congue velit sapien vel integer bibendum rhoncus.",
        },
        {
            name: "Integer nullam morbi",
            description:
                "Mauris erat metus vel luctus pharetra pretium sem, fusce orci euismod convallis ut. vulputate adipiscing inceptos erat lacus cubilia, adipiscing auctor lectus aptent, aliquet sagittis netus tincidunt. nisl fusce habitant turpis luctus vel a condimentum augue, fermentum lorem pretium mollis aenean senectus vivamus adipiscing turpis, libero posuere aenean sollicitudin aliquet aenean maecenas. est euismod curae rhoncus felis volutpat morbi vehicula sem, potenti pharetra lacus sociosqu interdum curae nostra class vitae, congue velit sapien vel integer bibendum rhoncus.",
        },
        {
            name: "Integer nullam morbi",
            description:
                "Mauris erat metus vel luctus pharetra pretium sem, fusce orci euismod convallis ut. vulputate adipiscing inceptos erat lacus cubilia, adipiscing auctor lectus aptent, aliquet sagittis netus tincidunt. nisl fusce habitant turpis luctus vel a condimentum augue, fermentum lorem pretium mollis aenean senectus vivamus adipiscing turpis, libero posuere aenean sollicitudin aliquet aenean maecenas. est euismod curae rhoncus felis volutpat morbi vehicula sem, potenti pharetra lacus sociosqu interdum curae nostra class vitae, congue velit sapien vel integer bibendum rhoncus.",
        },
        {
            name: "Integer nullam morbi",
            description:
                "Mauris erat metus vel luctus pharetra pretium sem, fusce orci euismod convallis ut. vulputate adipiscing inceptos erat lacus cubilia, adipiscing auctor lectus aptent, aliquet sagittis netus tincidunt. nisl fusce habitant turpis luctus vel a condimentum augue, fermentum lorem pretium mollis aenean senectus vivamus adipiscing turpis, libero posuere aenean sollicitudin aliquet aenean maecenas. est euismod curae rhoncus felis volutpat morbi vehicula sem, potenti pharetra lacus sociosqu interdum curae nostra class vitae, congue velit sapien vel integer bibendum rhoncus.",
        },
    ];

    return (
        <Container>
            <Inform>
                <span>Our</span>
                <span>Advantages</span>
            </Inform>
            <GroupAdvantages>
                {groupAdvantages.map(({ name, description }, index) => {
                    return (
                        <OptionAdvantages key={index}>
                            <div className="header">
                                <span>{name}</span>
                            </div>
                            <div className="body">
                                <section>
                                    <p>{description}</p>
                                </section>
                            </div>
                        </OptionAdvantages>
                    );
                })}
            </GroupAdvantages>
            <div className="ManPlant">
                <ManPlant Size={"25rem"} />
            </div>
        </Container>
    );
};

export default OurAdvantages;
