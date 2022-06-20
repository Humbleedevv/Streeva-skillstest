import Page from "../components/common/Page";
import PageTemplate from "../components/templates/pages";
// import getAllPages from "../lib/wordpress/pages/getAllPages";
// import getPageBySlug from "../lib/wordpress/pages/getPageBySlug";
import pages from "../data/pages/pages.json";
import menus from "../data/global/navigation.json";

//* Example component data which would normally be fetched from an API call
import { exampleComponentData } from "../lib/wordpress/pages/exampleComponentData";

// ? Read more on dynamic routes: https://nextjs.org/docs/routing/dynamic-routes

const contentType = "";

const DynamicPages = ({ page }) => {
  console.log("Page :: ", page);
  return (
    <Page seo={{ title: "Project Starter Kit" }}>
      <PageTemplate componentData={exampleComponentData} />
    </Page>
  );
};

export default DynamicPages;

// ? Use getStaticProps() with params to fetch page specific data based on the slug being dynamically passed to the page

export async function getStaticProps({ params }) {
  //* Example of how to fetch data
  // const page = await getPageBySlug(params.slug);

  // const page = {
  //   slug: params.slug,
  // };

  const page = pages.find((page) => page.slug === params.slug[0]);

  //* Example of how to render 404 on static pages; if 'page' data doesn't exist a 404 page will be displayed
  if (!page) {
    return {
      notFound: true,
    };
  }

  //* This will be passed to the page component as props
  return {
    props: {
      page,
      menus,
    },
  };
}

// ? Use getStaticPaths() to fetch all page slug paths and pass to the getStaticProps() params

export async function getStaticPaths() {
  //* Example of fetching data for all pages to pass to getStaticPaths() paths
  // const pages = await getAllPages();

  // await Promise.all(
  //   pages.map(async (page) => {
  //     return {
  //       params: { slug: [page.slug] },
  //     };
  //   })
  // );

  //* Get the paths we want to pre-render for pages
  // const paths = [
  //   {
  //     params: { slug: ["about"] },
  //   },
  //   {
  //     params: { slug: ["contact"] },
  //   },
  // ];

  const paths = pages.map((page) => {
    const slug = page.slug;
    return { params: { slug: [slug] } };
  });

  console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: "blocking",
  };
}
