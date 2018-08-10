const containerWidth = '60rem'

const breakpoints = ['36em', '48em', '64em']

const borders = [
  '0px solid', 
  '1px solid', 
  '2px solid', 
  '4px solid'
]

const borderWidths = [0, 1, 2]

const radii = [0, 3, 5]

const measures = ['20em', '30em', '34em']

const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [ 10, 12, 14, 16, 20, 24, 32, 48, 64, 80 ]

const fontFamily = {
  serif: 'serif',
  sansSerif: 'sans-serif',
  mono: 'monaco',
}

const lineHeights = [1, 1, 25, 1.5]

const letterSpacings = ['0.05em', '0.075em', '0.1em']

const colors = {
  red: [  
      "#430c15",
      "#711423",
      "#a01c32",
      "#bf223c",
      "#da304c",
      "#e35f75",
      "#ec93a2",
      "#f3bac3",
      "#f9dce1",
      "#fcf0f2"
    ],
    orange:[  
      "#361a03",
      "#5d2e04",
      "#844106",
      "#a65108",
      "#ba5c09",
      "#e5710b",
      "#f7a359",
      "#fac699",
      "#fcd8b8",
      "#fef1e7"
    ],
    green:[  
      "#0f2417",
      "#1c422b",
      "#285d3d",
      "#31724b",
      "#398557",
      "#46a46c",
      "#79c698",
      "#b0ddc2",
      "#d8eee1",
      "#eff8f3"
    ],
    cyan:[  
      "#0c2427",
      "#164249",
      "#1d5962",
      "#26727e",
      "#2b818e",
      "#35a0b1",
      "#66c3d1",
      "#a5dce4",
      "#d0edf1",
      "#e9f7f9"
    ],
    blue:[  
      "#0c2231",
      "#163d57",
      "#1f567a",
      "#276d9b",
      "#2c7cb0",
      "#479ad1",
      "#7cb7de",
      "#add2eb",
      "#d6e9f5",
      "#ebf4fa"
    ],
    indigo:[  
      "#181e34",
      "#2c365e",
      "#404e88",
      "#5062aa",
      "#6373b6",
      "#8794c7",
      "#a5aed5",
      "#c8cde5",
      "#e0e3f0",
      "#f1f3f8"
    ],
    violet:[  
      "#2d1832",
      "#502b5a",
      "#753f83",
      "#8e4c9e",
      "#9f5bb0",
      "#b683c3",
      "#c9a2d2",
      "#dbc1e1",
      "#ebddee",
      "#f7f1f8"
    ],
    black: "#000000",
    white: "#ffffff",
    gray:[  
      "#232526",
      "#404345",
      "#5d6265",
      "#71767a",
      "#81878b",
      "#a0a4a7",
      "#b7bbbd",
      "#cfd1d3",
      "#e4e6e7",
      "#f4f5f5"
    ],
    marketing: {
      orange: '#f38020',
      lightOrange: '#faae40',
      red: '#e04e64',
      lightRed: '#e27179',
      green: '#71c492',
      lightGreen: '#9fd3b5',
      blue: '#2da7cb',
      lightBlue: '#89c4e1',
      purple: '#7d4788',
      lightPurple: '#af7baf',
      navy: '#00517f',
      lightNavy: '#4f8cc8',
      gray: [ 
        '#404242',
        '#707070',
        '#aaaaaa',
        '#dddddd',
        '#f5f5f5'
      ]
    }
}

const textStyles = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
}

const colorStyles = {
  error: {
    color: 'red.9',
    backgroundColor: 'red.4',
  },
  success: {
    color: 'green.9',
    backgroundColor: 'green.4',
  },
  warning: {
    color: 'orange.9',
    backgroundColor: 'orange.4',
  },
}

const theme = {
  containerWidth,
  breakpoints,
  borders,
  borderWidths,
  radii,
  colors,
  space,
  fontSizes,
  fontFamily,
  lineHeights,
  letterSpacings,
  measures,
  textStyles,
  colorStyles,
}

export default theme
