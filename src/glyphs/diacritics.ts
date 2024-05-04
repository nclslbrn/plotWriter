import type { Font } from "../type";
/*
 * Create diacritic to create latin extended
 * @url https://en.wikipedia.org/wiki/Latin_Extended_Additional
 */
const diacritics = {
  // grave accent
  gr: [
    [
      [0.4, 0.1],
      [0.6, 0.15],
    ],
  ],
  // acute accent
  ct: [
    [
      [0.4, 0.15],
      [0.6, 0.1],
    ],
  ],
  // circumflex accent
  cr: [
    [
      [0.4, 0.15],
      [0.5, 0.1],
      [0.6, 0.15],
    ],
  ],
  // circumflex below
  crb: [
    [
      [0.4, 0.85],
      [0.5, 0.8],
      [0.6, 0.85],
    ],
  ],
  // diaeresis
  dr: [
    [
      [0.4, 0.1],
      [0.4, 0.15],
    ],
    [
      [0.6, 0.1],
      [0.6, 0.15],
    ],
  ],
  // tild
  tl: [
    [
      [0.4, 0.15],
      [0.4, 0.1],
      [0.6, 0.15],
      [0.6, 0.1],
    ],
  ],
  // tild bottom
  tlb: [
    [
      [0.4, 0.85],
      [0.4, 0.8],
      [0.6, 0.85],
      [0.6, 0.8],
    ],
  ],
  // breve
  br: [
    [
      [0.4, 0.1],
      [0.4, 0.15],
      [0.6, 0.15],
      [0.6, 0.1],
    ],
  ],
  // inverse breve
  bri: [
    [
      [0.4, 0.15],
      [0.4, 0.1],
      [0.6, 0.1],
      [0.6, 0.15],
    ],
  ],
  // half circle right
  hcr: [
    [
      [0.6, 0.1],
      [0.7, 0.1],
      [0.7, 0.2],
      [0.6, 0.2],
    ],
  ],
  // haček or caron
  hc: [
    [
      [0.4, 0.1],
      [0.5, 0.15],
      [0.6, 0.1],
    ],
  ],
  // macron
  mc: [
    [
      [0.3, 0.1],
      [0.7, 0.1],
    ],
  ],
  // angstorm or circle or ring (top)
  gs: [
    [
      [0.45, 0.2],
      [0.45, 0.15],
      [0.55, 0.15],
      [0.55, 0.2],
      [0.45, 0.2],
    ],
  ],
  // cedilla
  cd: [
    [
      [0.5, 0.7],
      [0.5, 0.75],
      [0.55, 0.75],
      [0.55, 0.8],
      [0.45, 0.8],
    ],
  ],
  // cedilla left
  cdl: [
    [
      [0.15, 0.7],
      [0.15, 0.75],
      [0.2, 0.75],
      [0.2, 0.8],
      [0.2, 0.8],
    ],
  ],
  // cedilla right
  cdr: [
    [
      [0.85, 0.7],
      [0.85, 0.75],
      [0.9, 0.75],
      [0.9, 0.8],
      [0.7, 0.8],
    ],
  ],
  // ring/dot below
  db: [
    [
      [0.5, 0.75],
      [0.55, 0.8],
      [0.5, 0.85],
      [0.45, 0.8],
      [0.5, 0.75],
    ],
  ],
  // dot above
  da: [
    [
      [0.5, 0.05],
      [0.55, 0.1],
      [0.5, 0.15],
      [0.45, 0.1],
      [0.5, 0.05],
    ],
  ],
  // hook above
  ha: [
    [
      [0.45, 0.2],
      [0.55, 0.2],
      [0.55, 0.25],
      [0.5, 0.25],
      [0.5, 0.3],
    ],
  ],
  // hook bottom right
  hbr: [
    [
      [0.85, 0.725],
      [0.85, 0.85],
      [0.9, 0.9]
    ]
  ],
  // line below
  lb: [
    [
      [0.3, 0.8],
      [0.7, 0.8],
    ],
  ],
  // horn
  hr: [
    [
      [0.85, 0.3],
      [0.9, 0.25],
      [0.9, 0.2],
    ],
  ],
  // cross (right)
  crs: [
    [
      [0.85, 0.3],
      [0.85, 0.25],
      [0.90, 0.2],
    ],
  ],
  // barred (kind of /)
  brd: [
    [
      [0.55, 0.2],
      [0.35, 0.8],
    ],
  ],
  // ogonek 
  gnk: [
    [
      [0.85, 0.7],
      [0.75, 0.75],
      [0.85, 0.8]
    ]
  ]
} as Font;

export default diacritics;
