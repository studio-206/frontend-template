import type * as Stitches from "@stitches/react";

import { theme } from "src/styles/stitches.config";

export const convertToRem = (fontSize?: string) => {
  if (!fontSize) return 0;
  return parseInt(fontSize.replace("px", ""), 10) / 16;
};

export const fluidify = (minFsRaw: string, maxFsRaw: string) => {
  const minVw = convertToRem("320px");
  const maxVw = convertToRem("1920px");

  const minFs = convertToRem(minFsRaw);
  const maxFs = convertToRem(maxFsRaw);
  const factor = (1 / (maxVw - minVw)) * (maxFs - minFs);
  const calcRem = minFs - minVw * factor;
  const calcVw = 100 * factor;
  const calc = `${calcRem}rem + ${calcVw}vw`;
  const min = Math.min(minFs, maxFs);
  const max = Math.max(minFs, maxFs);

  return {
    calc,
    min,
    max,
  };
};

export const fuildSpacing = (
  value: [Stitches.PropertyValue<"padding">, Stitches.PropertyValue<"padding">],
) => {
  // Parse values
  // We check if they are theme tokens and if so get their values
  const minFsRaw =
    String(value[0]).indexOf("$") === 0
      ? (theme.space as any)[String(value[0]).replace("$", "")].value
      : String(value[0]);
  const maxFsRaw =
    String(value[1]).indexOf("$") === 0
      ? (theme.space as any)[String(value[1]).replace("$", "")].value
      : String(value[1]);

  const { calc, min, max } = fluidify(minFsRaw, maxFsRaw);
  const clamp = `clamp(${min}rem, ${calc}, ${max}rem);`;

  return {
    clamp,
  };
};

export const fuildSpacingTop = (
  value: [Stitches.PropertyValue<"padding">, Stitches.PropertyValue<"padding">],
) => {
  const { clamp } = fuildSpacing(value);

  return {
    paddingTop: clamp,
  };
};

export const fuildSpacingBottom = (
  value: [Stitches.PropertyValue<"padding">, Stitches.PropertyValue<"padding">],
) => {
  const { clamp } = fuildSpacing(value);

  return {
    paddingBottom: clamp,
  };
};

export const fuildFontSize = (
  value: [Stitches.PropertyValue<"fontSize">, Stitches.PropertyValue<"fontSize">],
) => {
  // Parse values
  // We check if they are theme tokens and if so get their values
  const minFsRaw =
    String(value[0]).indexOf("$") === 0
      ? (theme.fontSizes as any)[String(value[0]).replace("$", "")].value
      : String(value[0]);
  const maxFsRaw =
    String(value[1]).indexOf("$") === 0
      ? (theme.fontSizes as any)[String(value[1]).replace("$", "")].value
      : String(value[1]);

  const { calc, min, max } = fluidify(minFsRaw, maxFsRaw);
  const clamp = `${min}rem; font-size: clamp(${min}rem, ${calc}, ${max}rem);`;

  return {
    fontSize: clamp,
  };
};
