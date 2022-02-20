import { globalCss } from "src/styles/stitches.config";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  html: {
    boxSizing: "border-box",
  },
  "*, *:before, *:after": {
    boxSizing: "inherit",
  },
});

export default globalStyles;
