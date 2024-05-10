import { type Font } from '../../type';

const base = {
  A: [
    [
      [0.85, 0.7],
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.5],
      [0.85, 0.5],
    ],
  ],
  Æ: [
    [
      [0.5, 0.7],
      [0.5, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.5],
      [0.6, 0.5],
    ],
    [
      [0.85, 0.2],
      [0.5, 0.2],
      [0.5, 0.7],
      [0.85, 0.7],
    ],
  ],
  B: [
    [
      [0.6, 0.5],
      [0.6, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.5],
      [0.15, 0.5],
    ],
  ],
  Ƀ: [
    [
      [0.6, 0.5],
      [0.6, 0.2],
      [0.25, 0.2],
      [0.25, 0.7],
      [0.85, 0.7],
      [0.85, 0.5],
      [0.25, 0.5],
    ],
    [
      [0.15, 0.6],
      [0.35, 0.6]
    ]
  ],
  Ɓ: [
    [
      [0.6, 0.5],
      [0.6, 0.2],
      [0.25, 0.2],
      [0.25, 0.7],
      [0.85, 0.7],
      [0.85, 0.5],
      [0.25, 0.5],
    ],
    [
      [0.3, 0.2],
      [0.15, 0.2],
      [0.15, 0.3]
    ]
  ],
  Ƃ: [
    [
      [0.6, 0.2],
      [0.25, 0.2],
      [0.25, 0.7],
      [0.85, 0.7],
      [0.85, 0.5],
      [0.25, 0.5],
    ],
  ],


  C: [
    [
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  Ƈ: [
    [
      [0.85, 0.1],
      [0.8, 0.11],
      [0.75, 0.15],
      [0.75, 0.2],
      [0.25, 0.2],
      [0.25, 0.7],
      [0.75, 0.7],
    ],
  ],

  D: [
    [
      [0.15, 0.2],
      [0.85, 0.2],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
    [
      [0.3, 0.2],
      [0.3, 0.7],
    ],
  ],
  Đ: [
    [
      [0.25, 0.2],
      [0.85, 0.2],
      [0.85, 0.7],
      [0.25, 0.7],
    ],
    [
      [0.3, 0.2],
      [0.3, 0.7],
    ],
    [
      [0.2, 0.45],
      [0.4, 0.45]
    ]

  ],
  Ǳ: [
    [
      [0.15, 0.2],
      [0.45, 0.2],
      [0.45, 0.7],
      [0.15, 0.7],
    ],
    [
      [0.2, 0.2],
      [0.2, 0.7],
    ],
    [
      [0.55, 0.2],
      [0.85, 0.2],
      [0.55, 0.7],
      [0.85, 0.7],
    ],

  ],
  Ɗ: [
    [
      [0.15, 0.3],
      [0.15, 0.2],
      [0.85, 0.2],
      [0.85, 0.7],
      [0.25, 0.7],
    ],
    [
      [0.3, 0.2],
      [0.3, 0.7],
    ],
  ],
  Ƌ: [
    [
      [0.15, 0.1],
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



  E: [
    [
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.15, 0.5],
      [0.55, 0.5],
    ],
  ],
  F: [
    [
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.5],
      [0.55, 0.5],
    ],
  ],
  G: [
    [
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.5],
      [0.5, 0.5],
    ],
  ],
  H: [
    [
      [0.15, 0.2],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.5],
      [0.85, 0.5],
    ],
    [
      [0.85, 0.2],
      [0.85, 0.7],
    ],
  ],
  I: [
    [
      [0.15, 0.2],
      [0.85, 0.2],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.7],
    ],
    [
      [0.5, 0.2],
      [0.5, 0.7],
    ],
  ],
  J: [
    [
      [0.4, 0.2],
      [0.85, 0.2],
    ],
    [
      [0.6, 0.2],
      [0.6, 0.7],
      [0.15, 0.7],
      [0.15, 0.6],
    ],
  ],
  K: [
    [
      [0.15, 0.2],
      [0.15, 0.7],
    ],
    [
      [0.85, 0.2],
      [0.15, 0.5],
      [0.85, 0.7],
    ],
  ],
  L: [
    [
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
  M: [
    [
      [0.15, 0.7],
      [0.15, 0.2],
      [0.5, 0.5],
      [0.85, 0.2],
      [0.85, 0.7],
    ],
  ],
  N: [
    [
      [0.15, 0.7],
      [0.15, 0.2],
      [0.85, 0.7],
      [0.85, 0.2],
    ],
  ],
  O: [
    [
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.2],
      [0.15, 0.2],
    ],
  ],
  P: [
    [
      [0.15, 0.5],
      [0.85, 0.5],
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
    ],
  ],
  Q: [
    [
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.2],
      [0.15, 0.2],
    ],
    [
      [0.6, 0.6],
      [0.95, 0.75],
    ],
  ],
  R: [
    [
      [0.15, 0.5],
      [0.85, 0.5],
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.7],
    ],
    [
      [0.15, 0.5],
      [0.85, 0.7],
    ],
  ],
  S: [
    [
      [0.85, 0.2],
      [0.15, 0.2],
      [0.15, 0.5],
      [0.85, 0.5],
      [0.85, 0.7],
      [0.15, 0.7],
    ],
  ],
  T: [
    [
      [0.15, 0.2],
      [0.85, 0.2],
    ],
    [
      [0.5, 0.2],
      [0.5, 0.7],
    ],
  ],
  U: [
    [
      [0.15, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
      [0.85, 0.2],
    ],
  ],
  V: [
    [
      [0.15, 0.2],
      [0.5, 0.7],
      [0.85, 0.2],
    ],
  ],
  W: [
    [
      [0.15, 0.2],
      [0.3, 0.7],
      [0.5, 0.5],
      [0.7, 0.7],
      [0.85, 0.2],
    ],
  ],
  X: [
    [
      [0.15, 0.2],
      [0.85, 0.7],
    ],
    [
      [0.15, 0.7],
      [0.85, 0.2],
    ],
  ],
  Y: [
    [
      [0.15, 0.2],
      [0.5, 0.5],
      [0.85, 0.2],
    ],
    [
      [0.5, 0.5],
      [0.5, 0.7],
    ],
  ],
  Z: [
    [
      [0.15, 0.2],
      [0.85, 0.2],
      [0.15, 0.7],
      [0.85, 0.7],
    ],
  ],
}  as Font;


export { base };