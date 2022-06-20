import Page from "../components/common/Page";
import Container from "@/components/atoms/Container";
import Heading from "../components/atoms/Heading";

const Error404 = () => {
  return (
    <Page seo={{ title: "Page Not Found", index: false }}>
      <Container>
        <Heading element="h1">404 - Page Not Found</Heading>
      </Container>
    </Page>
  );
};

export default Error404;
