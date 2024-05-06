import { type Font } from "../../type";

/*
 * Base alphabet
 */
const base = {
  a: [
    [
      [0.85, 0.5],
      [0.15, 0.5],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.85, 0.725],
      [0.85, 0.3],
      [0.3, 0.3],
    ],
  ],
  æ: [
    [
      [0.5, 0.3],
      [0.85, 0.3],
      [0.85, 0.5],
      [0.15, 0.5],
      [0.15, 0.7],
      [0.5, 0.7],
      [0.5, 0.3],
      [0.15, 0.3],
    ],
    [
      [0.5, 0.7],
      [0.85, 0.7],
    ],
  ],
  ɐ: [
    [
      [0.15, 0.5],
      [0.85, 0.5],
      [0.85, 0.3],
      [0.15, 0.3],
      [0.15, 0.7],
      [0.7, 0.7],
    ],
  ],
  ɑ: [
    [
      [0.85, 0.5],
      [0.15, 0.5],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.85, 0.725],
      [0.85, 0.3],
    ],
  ],
  ɒ: [
    [
      [0.15, 0.5],
      [0.85, 0.5],
      [0.85, 0.3],
      [0.15, 0.3],
    ],
    [
      [0.15, 0.275],
      [0.15, 0.7],
    ],
  ],

  b: [
    [
      [0.15, 0.1],
      [0.15, 0.725],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.3],
      [0.15, 0.3],
    ],
  ],
  ʙ: [
    [
      [0.55, 0.5],
      [0.55, 0.35],
      [0.35, 0.35],
      [0.35, 0.65],
      [0.65, 0.65],
      [0.65, 0.5],
      [0.35, 0.5],
    ],
  ],
  ƀ: [
    [
      [0.15, 0.1],
      [0.15, 0.725],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.3],
      [0.15, 0.3],
    ],
    [
      [0.05, 0.165],
      [0.25, 0.165],
    ],
  ],
  ɓ: [
    [
      [0.35, 0.1],
      [0.15, 0.1],
      [0.15, 0.725],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.3],
      [0.15, 0.3],
    ],
  ],
  ƃ: [
    [
      [0.85, 0.1],
      [0.15, 0.1],
      [0.15, 0.725],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.3],
      [0.15, 0.3],
    ],
  ],

  c: [
    [
      [0.85, 0.3],
      [0.15, 0.3],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  ɕ: [
    [
      [0.85, 0.3],
      [0.15, 0.3],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.5, 0.55],
      [0.15, 0.75],
    ],
  ],

  d: [
    [
      [0.85, 0.1],
      [0.85, 0.725],
    ],
    [
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.85, 0.3],
    ],
  ],
  đ: [
    [
      [0.85, 0.1],
      [0.85, 0.725],
    ],
    [
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.75, 0.165],
      [0.95, 0.165],
    ],
  ],
  ð: [
    [
      [0.5, 0.1],
      [0.85, 0.3],
      [0.85, 0.725],
    ],
    [
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.5, 0.2],
      [0.65, 0.1],
    ],
  ],
  ȸ: [
    [
      [0.5, 0.1],
      [0.5, 0.725],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
    ],
  ],
  ǳ: [
    [
      [0.45, 0.1],
      [0.45, 0.725],
    ],
    [
      [0.45, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.45, 0.3],
    ],
    [
      [0.55, 0.3],
      [0.85, 0.3],
      [0.55, 0.7],
      [0.85, 0.7],
    ],
  ],
  ʣ: [
    [
      [0.5, 0.1],
      [0.5, 0.725],
    ],
    [
      [0.5, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.5, 0.3],
    ],
    [
      [0.5, 0.3],
      [0.85, 0.3],
      [0.5, 0.7],
      [0.85, 0.7],
    ],
  ],
  ǆ: [
    [
      [0.45, 0.1],
      [0.45, 0.725],
    ],
    [
      [0.45, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.45, 0.3],
    ],
    [
      [0.55, 0.3],
      [0.85, 0.3],
      [0.55, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.55, 0.1],
      [0.7, 0.2],
      [0.85, 0.1],
    ],
  ],
  ʥ: [
    [
      [0.5, 0.1],
      [0.5, 0.725],
    ],
    [
      [0.5, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.5, 0.3],
    ],
    [
      [0.5, 0.3],
      [0.85, 0.3],
      [0.5, 0.7],
      [0.85, 0.7],
      [0.85, 0.6],
      [0.65, 0.8],
    ],
  ],
  ʤ: [
    [
      [0.5, 0.1],
      [0.5, 0.725],
    ],
    [
      [0.5, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.5, 0.3],
    ],
    [
      [0.5, 0.3],
      [0.85, 0.3],
      [0.55, 0.55],
      [0.85, 0.7],
      [0.7, 0.9],
      [0.5, 0.8],
    ],
  ],
  ɗ: [
    [
      [0.95, 0.1],
      [0.9, 0.1],
      [0.85, 0.15],
      [0.85, 0.725],
    ],
    [
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.85, 0.3],
    ],
  ],
  ƌ: [
    [
      [0.15, 0.15],
      [0.85, 0.725],
    ],
    [
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.85, 0.3],
    ],
  ],
  ȡ: [
    [
      [0.65, 0.1],
      [0.65, 0.725],
    ],
    [
      [0.65, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.65, 0.3],
    ],
    [
      [0.5, 0.7],
      [0.85, 0.7],
      [0.85, 0.6],
      [0.65, 0.8],
    ],
  ],
  ẟ: [
    [
      [0.75, 0.15],
      [0.5, 0.1],
      [0.3, 0.1],
      [0.15, 0.15],
      [0.85, 0.5],
      [0.5, 0.7],
      [0.15, 0.5],
      [0.5, 0.325],
    ],
  ],

  e: [
    [
      [0.15, 0.5],
      [0.85, 0.5],
      [0.85, 0.3],
      [0.15, 0.3],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  ə: [
    [
      [0.85, 0.5],
      [0.15, 0.5],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.3],
      [0.15, 0.3],
    ],
  ],
  ǝ: [
    [
      [0.75, 0.5],
      [0.25, 0.5],
      [0.25, 0.65],
      [0.75, 0.65],
      [0.75, 0.35],
      [0.25, 0.35],
    ],
  ],
  ɛ: [
    [
      [0.75, 0.35],
      [0.6, 0.3],
      [0.25, 0.4],
      [0.6, 0.5],
      [0.25, 0.6],
      [0.6, 0.7],
      [0.75, 0.65],
    ],
  ],
  ɘ: [
    [
      [0.85, 0.5],
      [0.15, 0.5],
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
  ],
  ɚ: [
    [
      [0.95, 0.5],
      [0.9, 0.45],
      [0.9, 0.4],
      [0.15, 0.55],
      [0.225, 0.8],
      [0.85, 0.7],
      [0.75, 0.3],
      [0.25, 0.4],
    ],
  ],
  ɜ: [
    [
      [0.25, 0.35],
      [0.4, 0.3],
      [0.75, 0.4],
      [0.4, 0.5],
      [0.75, 0.6],
      [0.4, 0.7],
      [0.25, 0.65],
    ],
  ],
  ɝ: [
    [
      [0.25, 0.35],
      [0.4, 0.3],
      [0.75, 0.4],
      [0.4, 0.5],
      [0.75, 0.6],
      [0.4, 0.7],
      [0.25, 0.65],
    ],
    [
      [0.85, 0.5],
      [0.75, 0.45],
      [0.75, 0.4],
    ],
  ],
  ɞ: [
    [
      [0.25, 0.65],
      [0.2, 0.55],
      [0.2, 0.45],
      [0.25, 0.35],
      [0.4, 0.3],
      [0.75, 0.4],
      [0.4, 0.5],
      [0.75, 0.6],
      [0.4, 0.7],
      [0.25, 0.65],
    ],
  ],
  ʚ: [
    [
      [0.75, 0.65],
      [0.8, 0.55],
      [0.8, 0.45],
      [0.75, 0.35],
      [0.6, 0.3],
      [0.25, 0.4],
      [0.6, 0.5],
      [0.25, 0.6],
      [0.6, 0.7],
      [0.75, 0.65],
    ],
  ],
  ɤ: [
    [
      [0.15, 0.3],
      [0.65, 0.6],
      [0.5, 0.7],
      [0.35, 0.6],
      [0.85, 0.3],
    ],
  ],

  f: [
    [
      [0.15, 0.5],
      [0.7, 0.5],
    ],
    [
      [0.3, 0.7],
      [0.3, 0.2],
      [0.85, 0.2],
    ],
  ],
  ʩ: [
    [
      [0.15, 0.5],
      [0.5, 0.5],
    ],
    [
      [0.25, 0.7],
      [0.25, 0.2],
      [0.5, 0.2],
    ],
    [
      [0.5, 0.475],
      [0.5, 0.7],
    ],
    [
      [0.5, 0.5],
      [0.85, 0.5],
      [0.85, 0.8],
      [0.825, 0.85],
      [0.75, 0.9],
    ],
  ],
  ƒ: [
    [
      [0.15, 0.35],
      [0.7, 0.35],
    ],
    [
      [0.25, 0.825],
      [0.3, 0.89],
      [0.325, 0.9],
      [0.35, 0.89],
      [0.4, 0.825],
      [0.4, 0.8],
      [0.4, 0.2],
      [0.85, 0.2],
    ],
  ],

  g: [
    [
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.85, 0.275],
      [0.85, 0.9],
      [0.5, 0.9],
    ],
  ],
  ɡ: [
    [
      [0.885, 0.72],
      [0.115, 0.72],
      [0.115, 0.28],
      [0.885, 0.28],
    ],
    [
      [0.885, 0.2525],
      [0.885, 0.94],
      [0.5, 0.94],
    ],
  ],
  ɢ: [
    [
      [0.725, 0.3],
      [0.265, 0.3],
      [0.265, 0.628],
      [0.725, 0.628],
      [0.725, 0.496],
      [0.496, 0.496],
    ],
  ],
  ǥ: [
    [
      [0.75, 0.7],
      [0.15, 0.7],
      [0.15, 0.3],
      [0.75, 0.3],
    ],
    [
      [0.75, 0.275],
      [0.75, 0.9],
      [0.5, 0.9],
    ],
    [
      [0.65, 0.8],
      [0.85, 0.8],
    ],
  ],
  ʛ: [
    [
      [0.8, 0.2],
      [0.75, 0.225],
      [0.725, 0.25],
      [0.725, 0.3],
      [0.265, 0.3],
      [0.265, 0.628],
      [0.725, 0.628],
      [0.725, 0.496],
      [0.496, 0.496],
    ],
  ],
  ɣ: [
    [
      [0.35, 0.3],
      [0.55, 0.8],
      [0.5, 0.85],
      [0.45, 0.8],
      [0.65, 0.3],
    ],
  ],
  ƣ: [
    [
      [0.15, 0.4],
      [0.65, 0.4],
      [0.65, 0.75],
      [0.15, 0.75],
      [0.15, 0.4],
    ],
    [
      [0.65, 0.4],
      [0.75, 0.35],
      [0.85, 0.4],
      [0.85, 0.9],
    ],
  ],

  h: [
    [
      [0.15, 0.7],
      [0.15, 0.1],
    ],
    [
      [0.125, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
    ],
  ],
  ħ: [
    [
      [0.25, 0.7],
      [0.25, 0.1],
    ],
    [
      [0.225, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
    ],
    [
      [0.15, 0.2],
      [0.35, 0.2],
    ],
  ],
  ʜ: [
    [
      [0.265, 0.3],
      [0.265, 0.628],
    ],
    [
      [0.265, 0.496],
      [0.73, 0.496],
    ],
    [
      [0.73, 0.3],
      [0.73, 0.628],
    ],
  ],
  ƕ: [
    [
      [0.15, 0.7],
      [0.15, 0.1],
    ],
    [
      [0.125, 0.3],
      [0.5, 0.3],
      [0.5, 0.7],
      [0.85, 0.7],
      [0.85, 0.3],
    ],
  ],
  ɦ: [
    [
      [0.15, 0.7],
      [0.15, 0.2],
      [0.16, 0.145],
      [0.2, 0.1],
    ],
    [
      [0.125, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
    ],
  ],
  ɧ: [
    [
      [0.15, 0.7],
      [0.15, 0.2],
      [0.16, 0.145],
      [0.2, 0.1],
    ],
    [
      [0.125, 0.3],
      [0.85, 0.3],
      [0.85, 0.8],
      [0.83, 0.85],
      [0.75, 0.9],
    ],
  ],

  i: [
    [
      [0.5, 0.1],
      [0.5, 0.125],
    ],
    [
      [0.15, 0.3],
      [0.5, 0.3],
      [0.5, 0.7],
      [0.65, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  ĳ: [
    [
      [0.35, 0.1],
      [0.35, 0.125],
    ],
    [
      [0.15, 0.3],
      [0.35, 0.3],
      [0.35, 0.7],
      [0.4, 0.7],
    ],
    [
      [0.35, 0.7],
      [0.35, 0.7],
    ],
    [
      [0.65, 0.1],
      [0.65, 0.125],
    ],
    [
      [0.5, 0.3],
      [0.8, 0.3],
    ],
    [
      [0.65, 0.3],
      [0.65, 0.9],
      [0.35, 0.9],
    ],
  ],
  ı: [
    [
      [0.15, 0.3],
      [0.5, 0.3],
      [0.5, 0.7],
      [0.65, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  ɪ: [
    [
      [0.265, 0.3],
      [0.73, 0.3],
    ],
    [
      [0.265, 0.628],
      [0.73, 0.628],
    ],
    [
      [0.496, 0.3],
      [0.496, 0.628],
    ],
  ],
  ɨ: [
    [
      [0.5, 0.1],
      [0.5, 0.125],
    ],
    [
      [0.15, 0.3],
      [0.5, 0.3],
      [0.5, 0.7],
      [0.65, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.35, 0.45],
      [0.65, 0.45],
    ],
  ],
  ɩ: [
    [
      [0.5, 0.3],
      [0.5, 0.6],
      [0.55, 0.65],
      [0.6, 0.68],
      [0.65, 0.7],
    ],
  ],

  j: [
    [
      [0.6, 0.1],
      [0.6, 0.125],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.6, 0.3],
      [0.6, 0.9],
      [0.15, 0.9],
    ],
  ],
  ȷ: [
    [
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.6, 0.3],
      [0.6, 0.9],
      [0.15, 0.9],
    ],
  ],
  ɉ: [
    [
      [0.6, 0.1],
      [0.6, 0.125],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.6, 0.3],
      [0.6, 0.9],
      [0.15, 0.9],
    ],
    [
      [0.45, 0.45],
      [0.75, 0.45],
    ],
  ],
  ʝ: [
    [
      [0.6, 0.1],
      [0.6, 0.125],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.6, 0.3],
      [0.6, 0.9],
      [0.15, 0.9],
      [0.15, 0.7],
      [0.75, 0.7],
    ],
  ],
  ɟ: [
    [
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.6, 0.3],
      [0.6, 0.9],
      [0.15, 0.9],
    ],
    [
      [0.45, 0.45],
      [0.75, 0.45],
    ],
  ],
  ʄ: [
    [
      [0.75, 0.15],
      [0.7, 0.15],
      [0.64, 0.18],
      [0.6, 0.25],
      [0.6, 0.9],
      [0.15, 0.9],
    ],
    [
      [0.45, 0.45],
      [0.75, 0.45],
    ],
  ],

  k: [
    [
      [0.15, 0.7],
      [0.15, 0.1],
    ],
    [
      [0.85, 0.3],
      [0.15, 0.5],
      [0.85, 0.7],
    ],
  ],
  ƙ: [
    [
      [0.15, 0.7],
      [0.15, 0.3],
      [0.17, 0.2],
      [0.23, 0.12],
      [0.3, 0.1],
    ],
    [
      [0.85, 0.3],
      [0.15, 0.5],
      [0.85, 0.7],
    ],
  ],
  ʞ: [
    [
      [0.85, 0.3],
      [0.85, 0.9],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.5],
      [0.15, 0.3],
    ],
  ],
  l: [
    [
      [0.15, 0.1],
      [0.4, 0.1],
      [0.4, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  ł: [
    [
      [0.15, 0.1],
      [0.4, 0.1],
      [0.4, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.25, 0.5],
      [0.55, 0.4],
    ],
  ],
  ŀ: [
    [
      [0.15, 0.1],
      [0.4, 0.1],
      [0.4, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.6, 0.425],
      [0.6, 0.475],
    ],
  ],
  ǉ: [
    [
      [0.15, 0.1],
      [0.35, 0.1],
      [0.35, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.55, 0.7],
    ],

    [
      [0.65, 0.1],
      [0.65, 0.125],
    ],
    [
      [0.5, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.65, 0.3],
      [0.65, 0.9],
      [0.5, 0.9],
    ],
  ],
  ỻ: [
    [
      [0.35, 0.1],
      [0.35, 0.7],
    ],
    [
      [0.65, 0.1],
      [0.65, 0.7],
    ],
    [
      [0.25, 0.15],
      [0.75, 0.15],
    ],
  ],
  ʪ: [
    [
      [0.15, 0.1],
      [0.35, 0.1],
      [0.35, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.5],
      [0.55, 0.5],
      [0.55, 0.2],
      [0.85, 0.2],
    ],
  ],
  ʫ: [
    [
      [0.15, 0.1],
      [0.35, 0.1],
      [0.35, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.5, 0.2],
      [0.85, 0.2],
      [0.5, 0.7],
    ],
  ],
  ʟ: [
    [
      [0.265, 0.3],
      [0.265, 0.628],
      [0.73, 0.628],
    ],
  ],
  ƚ: [
    [
      [0.15, 0.1],
      [0.4, 0.1],
      [0.4, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.25, 0.45],
      [0.55, 0.45],
    ],
  ],
  ɫ: [
    [
      [0.15, 0.1],
      [0.4, 0.1],
      [0.4, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.25, 0.5],
      [0.25, 0.4],
      [0.55, 0.5],
      [0.55, 0.4],
    ],
  ],
  ɬ: [
    [
      [0.15, 0.1],
      [0.4, 0.1],
      [0.4, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.4, 0.45],
      [0.4, 0.4],
      [0.25, 0.4],
      [0.25, 0.55],
      [0.75, 0.55],
    ],
  ],
  ɭ: [
    [
      [0.15, 0.1],
      [0.4, 0.1],
      [0.4, 0.9],
      [0.5, 0.9],
    ],
  ],
  ȴ: [
    [
      [0.5, 0.1],
      [0.5, 0.9],
      [0.75, 0.9],
      [0.75, 0.7],
      [0.3, 0.8],
      [0.3, 0.9],
    ],
  ],
  ɮ: [
    [
      [0.15, 0.1],
      [0.35, 0.1],
      [0.35, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.5, 0.7],
    ],
    [
      [0.35, 0.3],
      [0.85, 0.3],
      [0.55, 0.55],
      [0.85, 0.7],
      [0.7, 0.9],
      [0.5, 0.8],
    ],
  ],
  ƛ: [
    [
      [0.3, 0.15],
      [0.5, 0.2],
      [0.85, 0.7],
    ],
    [
      [0.62, 0.4],
      [0.15, 0.7],
    ],
    [
      [0.48, 0.35],
      [0.65, 0.25],
    ],
  ],
  ʎ: [
    [
      [0.7, 0.15],
      [0.5, 0.2],
      [0.15, 0.7],
    ],
    [
      [0.38, 0.4],
      [0.85, 0.7],
    ],
  ],

   m: [
    [
      [0.15, 0.7],
      [0.15, 0.275],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
    ],
    [
      [0.5, 0.3],
      [0.5, 0.7],
    ],
  ],
 
  n: [
    [
      [0.15, 0.7],
      [0.15, 0.275],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
    ],
  ],
 ǌ: [
    [
      [0.15, 0.7],
      [0.15, 0.275],
    ],
    [
      [0.15, 0.3],
      [0.45, 0.3],
      [0.45, 0.7],
    ],
    [
      [0.7, 0.1],
      [0.7, 0.125],
    ],
    [
      [0.55, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.7, 0.3],
      [0.7, 0.9],
      [0.45, 0.9],
    ],
  ],
  ɴ: [
    [
      [0.265, 0.628],
      [0.265, 0.3],
      [0.73, 0.628],
      [0.73, 0.3],
    ],
  ],
  ɲ: [
     [
      [0.1, 0.77],
      [0.125, 0.75],
      [0.15, 0.7],
      [0.15, 0.275],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
    ],
  ],
  ƞ: [
    [
      [0.15, 0.7],
      [0.15, 0.275],
    ],
    [
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.9],
    ],
  ],
  ɳ: [
   [
      [0.15, 0.7],
      [0.15, 0.275],
    ],
    [
      [0.15, 0.3],
      [0.77, 0.3],
      [0.77, 0.85],
      [0.85, 0.9]
    ],
  ],
  ȵ: [
    [
      [0.15, 0.7],
      [0.15, 0.275],
    ],
    [
      [0.15, 0.3],
      [0.65, 0.3],
      [0.65, 0.9],
      [0.85, 0.9],
      [0.85, 0.7],
      [0.5, 0.9]
    ],

  ],

  o: [
    [
      [0.15, 0.7],
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
  ],
  p: [
    [
      [0.15, 0.9],
      [0.15, 0.3],
      [0.85, 0.3],
      [0.85, 0.7],
      [0.125, 0.7],
    ],
  ],
  q: [
    [
      [0.85, 0.9],
      [0.85, 0.3],
      [0.15, 0.3],
      [0.15, 0.7],
      [0.875, 0.7],
    ],
  ],
  r: [
    [
      [0.85, 0.3],
      [0.35, 0.3],
      [0.15, 0.4],
    ],
    [
      [0.15, 0.275],
      [0.15, 0.7],
    ],
  ],
  s: [
    [
      [0.85, 0.3],
      [0.15, 0.3],
      [0.15, 0.5],
      [0.85, 0.5],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
  ],
  t: [
    [
      [0.15, 0.3],
      [0.85, 0.3],
    ],
    [
      [0.35, 0.2],
      [0.35, 0.7],
      [0.85, 0.7],
    ],
  ],
  u: [
    [
      [0.15, 0.3],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.85, 0.75],
      [0.85, 0.3],
    ],
  ],
  v: [
    [
      [0.15, 0.3],
      [0.5, 0.7],
      [0.85, 0.3],
    ],
  ],
  w: [
    [
      [0.15, 0.3],
      [0.15, 0.725],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.3],
    ],
    [
      [0.5, 0.3],
      [0.5, 0.7],
    ],
  ],
  x: [
    [
      [0.15, 0.3],
      [0.85, 0.7],
    ],
    [
      [0.85, 0.3],
      [0.15, 0.7],
    ],
  ],
  y: [
    [
      [0.15, 0.3],
      [0.15, 0.7],
      [0.875, 0.7],
    ],
    [
      [0.85, 0.3],
      [0.85, 0.9],
      [0.5, 0.9],
    ],
  ],
  z: [
    [
      [0.15, 0.3],
      [0.85, 0.3],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  œ: [
    [
      [0.5, 0.3],
      [0.85, 0.3],
      [0.85, 0.5],
      [0.5, 0.5],
      [0.5, 0.3],
      [0.15, 0.3],
      [0.15, 0.7],
      [0.5, 0.7],
      [0.5, 0.5],
    ],
    [
      [0.5, 0.7],
      [0.85, 0.7],
    ],
  ],
} as Font;

export { base };
