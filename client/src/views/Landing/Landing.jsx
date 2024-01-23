import { Link } from "react-router-dom";
import { Wrapper, Title, ButtonWrapper, Button } from "./landingStyles";

function Landing() {
  return (
    <Wrapper>
      <Title>Welcome to Countries of the World!</Title>
      <ButtonWrapper>
        <Link to={"/home"}>
          <Button class='btnlandPage'>Hop on Board!</Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Landing;
