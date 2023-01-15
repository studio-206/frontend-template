import { createStitches } from "@stitches/react";

import type * as Stitches from "@stitches/react";
import { fuildFontSize, fuildSpacingBottom, fuildSpacingTop } from "./utils";

type UtilValue = Stitches.ScaleValue<"space"> | number | string;

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {},
      fontSizes: {},
      space: {},
    },
    media: {
      tablet: "(min-width: 768px)",
      desktop: "(min-width: 1024px)",
    },
    utils: {
      m: (value: UtilValue) => ({
        margin: value,
      }),
      mx: (value: UtilValue) => ({ marginLeft: value, marginRight: value }),
      my: (value: UtilValue) => ({ marginTop: value, marginBottom: value }),
      mt: (value: UtilValue) => ({
        marginTop: value,
      }),
      mr: (value: UtilValue) => ({
        marginRight: value,
      }),
      mb: (value: UtilValue) => ({
        marginBottom: value,
      }),
      ml: (value: UtilValue) => ({
        marginLeft: value,
      }),
      pt: (value: UtilValue) => ({
        paddingTop: value,
      }),
      pr: (value: UtilValue) => ({
        paddingRight: value,
      }),
      pb: (value: UtilValue) => ({
        paddingBottom: value,
      }),
      pl: (value: UtilValue) => ({
        paddingLeft: value,
      }),
      px: (value: UtilValue) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: UtilValue) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      p: (value: UtilValue) => ({
        padding: value,
      }),
      fluidSpacingTop: fuildSpacingTop,
      fluidSpacingBottom: fuildSpacingBottom,
      userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),
      size: (value: Stitches.PropertyValue<"width">) => ({
        width: value,
        height: value,
      }),
      appearance: (value: Stitches.PropertyValue<"appearance">) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      fluidFontSize: fuildFontSize,
    },
  });
