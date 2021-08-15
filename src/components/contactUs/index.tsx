import { Container, Contact } from "./styled";

const ContactUs = (): JSX.Element => {
    return (
        <Container>
            <Contact>
                <section className="introduction">
                    <span>Contact Us</span>
                    <span>
                        Congue pharetra urna mi fringilla sed ad et aptent,
                        fusce sit blandit dapibus viverra condimentum fermentum
                        nam, curabitur inceptos enim risus pulvinar magna
                        suscipit.
                    </span>
                </section>
                <section className="contact">
                    <span>email@email.com</span>
                    <span>+1 11 1111-1111</span>
                </section>
            </Contact>
        </Container>
    );
};

export default ContactUs;
