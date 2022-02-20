import type { AppProps } from "next/app";

import { globalCss } from "stitches.config";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  html: {
    boxSizing: "border-box",
  },
  "*, *:before, *:after": {
    boxSizing: "inherit",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
