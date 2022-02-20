import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {},
  },
  media: {
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
  },
  utils: {
    mx: (value: number) => ({ marginLeft: value, marginRight: value }),
    my: (value: number) => ({ marginTop: value, marginBottom: value }),
    px: (value: number) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: number) => ({ paddingTop: value, paddingBottom: value }),
  },
});
