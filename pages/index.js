import Page from "../components/common/Page";
import HomeTemplate from "../components/templates/home";
// import getAllPages from "../lib/wordpress/pages/getAllPages";
import pages from "../data/pages/pages.json";
import menus from "../data/global/navigation.json";

//* Example component data which would normally be fetched from an API call
import { exampleComponentData } from "../lib/wordpress/pages/exampleComponentData";

const Home = () => {
  return (
    <Page seo={{ title: "Project Starter Kit" }}>
      <HomeTemplate componentData={exampleComponentData} />
    </Page>
  );
};

export default Home;

export async function getStaticProps(context) {
  //* Example of how to fetch data for use
  // const pages = await getAllPages();
  // console.log(pages);

  const page = pages.find((page) => page.slug === "/");

  //* Example of how to render 404 on static pages
  if (!page) {
    return {
      notFound: true,
    };
  }

  //* This will be passed to the page component as props
  return {
    props: { menus },
  };
}
