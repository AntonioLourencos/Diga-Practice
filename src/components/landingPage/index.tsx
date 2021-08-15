import Link from "next/link";
import { Container, Introduction } from "./styled";
import { Line } from "../../styles/utils/Line";
import ManLaptop from "../svg/ManLaptop";

const LandinPage = (): JSX.Element => {
    return (
        <Container>
            <Introduction>
                <span>We create digital products as your solution</span>
                <span>Web Design, Mobile Apps, IoT Solution</span>
                <Link href="/#Contact-us" passHref>
                    <button>Contact us</button>
                </Link>
            </Introduction>
            <ManLaptop Size={"20rem"} />

            <div className="upper">
                <Line width="15rem" />
            </div>
        </Container>
    );
};

export default LandinPage;
