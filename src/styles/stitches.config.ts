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
    mx: (value: number | string) => ({ marginLeft: value, marginRight: value }),
    my: (value: number | string) => ({ marginTop: value, marginBottom: value }),
    px: (value: number | string) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: number | string) => ({ paddingTop: value, paddingBottom: value }),
  },
});
