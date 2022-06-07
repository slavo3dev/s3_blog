/* eslint-disable react/prop-types */
import ThemeProvider from "providers/ThemeProvider";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import React from "react";

config.autoAddCss = false;
library.add(
  faSun,
  faMoon,
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp,
);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/darcula.css";
import "react-toggle/style.css";
import "styles/index.scss";

// eslint-disable-next-line react/display-name
export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>
          Slavo_3 / Software Development & Blog & Consulting
        </title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
