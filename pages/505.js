import Page from "../components/common/Page";
import Container from "@/components/atoms/Container";
import Heading from "../components/atoms/Heading";

const Error505 = () => {
  return (
    <Page seo={{ title: "Server Error", index: false }}>
      <Container>
        <Heading element="h1">505 - Server Error</Heading>
      </Container>
    </Page>
  );
};

export default Error505;
