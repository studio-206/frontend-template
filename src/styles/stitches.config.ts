import { createStitches } from "@stitches/react";

import type * as Stitches from "@stitches/react";

type UtilValue = Stitches.ScaleValue<"space"> | number | string;

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
    space: {},
  },
  media: {
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
  },
  utils: {
    mx: (value: UtilValue) => ({ marginLeft: value, marginRight: value }),
    my: (value: UtilValue) => ({ marginTop: value, marginBottom: value }),
    px: (value: UtilValue) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: UtilValue) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
