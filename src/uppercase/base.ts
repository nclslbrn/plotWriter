import { type Font } from "../type";

const base = {
  A: [
    [
      [0.85, 0.7],
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.557],
      [0.85, 0.557],
    ],
  ],
  Æ: [
    [
      [0.5, 0.7],
      [0.5, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.557],
      [0.6, 0.557],
    ],
    [
      [0.85, 0.271],
      [0.5, 0.271],
      [0.5, 0.7],
      [0.85, 0.7],
    ],
  ],
  B: [
    [
      [0.6, 0.557],
      [0.6, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.557],
      [0.15, 0.557],
    ],
  ],
  Ƀ: [
    [
      [0.6, 0.557],
      [0.6, 0.271],
      [0.25, 0.271],
      [0.25, 0.7],
      [0.85, 0.7],
      [0.85, 0.557],
      [0.25, 0.557],
    ],
    [
      [0.15, 0.629],
      [0.35, 0.629],
    ],
  ],
  Ɓ: [
    [
      [0.6, 0.557],
      [0.6, 0.271],
      [0.25, 0.271],
      [0.25, 0.7],
      [0.85, 0.7],
      [0.85, 0.557],
      [0.25, 0.557],
    ],
    [
      [0.3, 0.271],
      [0.15, 0.271],
      [0.15, 0.414],
    ],
  ],
  Ƃ: [
    [
      [0.6, 0.271],
      [0.25, 0.271],
      [0.25, 0.7],
      [0.85, 0.7],
      [0.85, 0.557],
      [0.25, 0.557],
    ],
  ],
  C: [
    [
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  Ƈ: [
    [
      [0.85, 0.15],
      [0.83, 0.15],
      [0.8, 0.18],
      [0.8, 0.271],
      [0.2, 0.271],
      [0.2, 0.7],
      [0.8, 0.7],
    ],
  ],
  D: [
    [
      [0.15, 0.271],
      [0.85, 0.271],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
    [
      [0.3, 0.271],
      [0.3, 0.7],
    ],
  ],
  Đ: [
    [
      [0.25, 0.271],
      [0.85, 0.271],
      [0.85, 0.7],
      [0.25, 0.7],
    ],
    [
      [0.3, 0.271],
      [0.3, 0.7],
    ],
    [
      [0.2, 0.521],
      [0.4, 0.521],
    ],
  ],
  Ǳ: [
    [
      [0.15, 0.271],
      [0.45, 0.271],
      [0.45, 0.7],
      [0.15, 0.7],
    ],
    [
      [0.2, 0.271],
      [0.2, 0.7],
    ],
    [
      [0.55, 0.271],
      [0.85, 0.271],
      [0.55, 0.7],
      [0.85, 0.7],
    ],
  ],
  Ɗ: [
    [
      [0.15, 0.414],
      [0.15, 0.271],
      [0.85, 0.271],
      [0.85, 0.7],
      [0.25, 0.7],
    ],
    [
      [0.3, 0.271],
      [0.3, 0.7],
    ],
  ],
  Ƌ: [
    [
      [0.15, 0.271],
      [0.85, 0.271],
      [0.85, 0.718],
    ],
    [
      [0.85, 0.7],
      [0.15, 0.7],
      [0.15, 0.414],
      [0.85, 0.414],
    ],
  ],
  E: [
    [
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.15, 0.557],
      [0.55, 0.557],
    ],
  ],
  Ǝ: [
    [
      [0.15, 0.271],
      [0.85, 0.271],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
    [
      [0.85, 0.557],
      [0.45, 0.557],
    ],
  ],
  Ə: [
    [
      [0.85, 0.429],
      [0.15, 0.429],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.271],
      [0.15, 0.271],
    ],
  ],
  Ɛ: [
    [
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.5, 0.4],
      [0.15, 0.4],
    ],
  ],
  F: [
    [
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.557],
      [0.55, 0.557],
    ],
  ],
  Ƒ: [
    [
      [0.25, 0.789],
      [0.3, 0.836],
      [0.325, 0.843],
      [0.35, 0.836],
      [0.4, 0.789],
      [0.4, 0.271],
      [0.85, 0.271],
    ],
    [
      [0.15, 0.557],
      [0.55, 0.557],
    ],
  ],
  G: [
    [
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.557],
      [0.5, 0.557],
    ],
  ],
  Ǥ: [
    [
      [0.75, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
      [0.75, 0.7],
      [0.75, 0.557],
      [0.45, 0.557],
    ],
    [
      [0.55, 0.63],
      [0.85, 0.63],
    ],
  ],
  Ɠ: [
    [
      [0.85, 0.15],
      [0.83, 0.15],
      [0.8, 0.18],
      [0.8, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.557],
      [0.5, 0.557],
    ],
  ],
  Ɣ: [
    [
      [0.2995, 0.271],
      [0.5655, 0.6954],
      [0.499, 0.7433],
      [0.4325, 0.6954],
      [0.6985, 0.271],
    ],
  ],
  H: [
    [
      [0.15, 0.271],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.557],
      [0.85, 0.557],
    ],
    [
      [0.85, 0.271],
      [0.85, 0.7],
    ],
  ],
  I: [
    [
      [0.15, 0.271],
      [0.85, 0.271],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.5, 0.271],
      [0.5, 0.7],
    ],
  ],
  J: [
    [
      [0.4, 0.271],
      [0.85, 0.271],
    ],
    [
      [0.6, 0.271],
      [0.6, 0.7],
      [0.15, 0.7],
      [0.15, 0.629],
    ],
  ],
  K: [
    [
      [0.15, 0.271],
      [0.15, 0.7],
    ],
    [
      [0.85, 0.271],
      [0.15, 0.557],
      [0.85, 0.7],
    ],
  ],
  L: [
    [
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  M: [
    [
      [0.15, 0.7],
      [0.15, 0.271],
      [0.5, 0.557],
      [0.85, 0.271],
      [0.85, 0.7],
    ],
  ],
  N: [
    [
      [0.15, 0.7],
      [0.15, 0.271],
      [0.85, 0.7],
      [0.85, 0.271],
    ],
  ],
  O: [
    [
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.271],
      [0.15, 0.271],
    ],
  ],
  P: [
    [
      [0.15, 0.557],
      [0.85, 0.557],
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
    ],
  ],
  Q: [
    [
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.271],
      [0.15, 0.271],
    ],
    [
      [0.6, 0.629],
      [0.95, 0.736],
    ],
  ],
  R: [
    [
      [0.15, 0.557],
      [0.85, 0.557],
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.557],
      [0.85, 0.7],
    ],
  ],
  S: [
    [
      [0.85, 0.271],
      [0.15, 0.271],
      [0.15, 0.557],
      [0.85, 0.557],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
  ],
  T: [
    [
      [0.15, 0.271],
      [0.85, 0.271],
    ],
    [
      [0.5, 0.271],
      [0.5, 0.7],
    ],
  ],
  U: [
    [
      [0.15, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.271],
    ],
  ],
  V: [
    [
      [0.15, 0.271],
      [0.5, 0.7],
      [0.85, 0.271],
    ],
  ],
  W: [
    [
      [0.15, 0.271],
      [0.3, 0.7],
      [0.5, 0.557],
      [0.7, 0.7],
      [0.85, 0.271],
    ],
  ],
  X: [
    [
      [0.15, 0.271],
      [0.85, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.271],
    ],
  ],
  Y: [
    [
      [0.15, 0.271],
      [0.5, 0.557],
      [0.85, 0.271],
    ],
    [
      [0.5, 0.557],
      [0.5, 0.7],
    ],
  ],
  Z: [
    [
      [0.15, 0.271],
      [0.85, 0.271],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
} as Font;

export { base };
