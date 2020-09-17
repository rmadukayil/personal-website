const palette = {
  orange: '#3bba9c',
  oranges: [
    '#fdf2e1',
    '#fbe3c2',
    '#f9d49e',
    '#f7c276',
    '#f5ad47',
    '#f2930d',
    '#da840b',
    '#bf740a',
    '#9f6008',
    '#724506',
  ],

  black: '#2a2722',
  otherblack: '#212121',
  white: '#ffffff',
  saturatedblack: '#121212',
  grays: [
    '#ffffff',
    '#f9f9f8',
    '#efedea',
    '#e3e0db',
    '#d6d2cb',
    '#c9c2ba',
    '#b9b1a6',
    '#a89e90',
    '#938776',
    '#756a5b',
    '#443e35',
    '#39342d',
  ],
}

export default {
  black: palette.black,
  white: palette.white,

  text: palette.grays[10],
  background: palette.white,
  primary: palette.orange,
  secondary: palette.oranges[6],
  accent: palette.orange,
  highlight: palette.orange,
  muted: palette.grays[2],
  'muted-text': palette.grays[8],
  border: palette.black,

  modes: {
    dark: {
      text: palette.grays[2],
      background: palette.otherblack,
      primary: palette.orange,
      secondary: palette.oranges[3],
      accent: palette.orange,
      highlight: palette.grays[1],
      muted: palette.saturatedblack,
      'muted-text': palette.grays[8],
      border: palette.black,
    },
  },
}
