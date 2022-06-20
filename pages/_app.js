import React, { useState } from "react";
import PropTypes from "prop-types";
import { DefaultSeo } from "next-seo";
import ContentProvider from "../components/common/ContentProvider";
import "../styles/app.scss";

const WebApp = ({ Component, pageProps }) => {
  // Initialize state for WordPress context provider.
  const { menus } = pageProps;

  const [content] = useState({
    menus: menus,
  });

  const defaultSeoData = {
    title: undefined,
    titleTemplate: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  };

  return (
    <ContentProvider value={content}>
      {!!defaultSeoData && <DefaultSeo {...defaultSeoData} />}
      {/*!!preview && (
          // TODO -- abstract this to a component.
          <p>
            This page is a preview.{" "}
            <Link href="/api/exit-preview">
              <a>Exit preview mode</a>
            </Link>
          </p>
        )} */}
      <Component {...pageProps} />
    </ContentProvider>
  );
};

export default WebApp;

WebApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};
