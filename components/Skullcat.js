import React from 'react'
import theme from '../theme'

import Svg from '../elements/Svg'
import Path from '../elements/Path'

const Skullcat = ({size, ...props}) => {

  return (
    <Svg {...props}>
      <Path d="M16 7 C13 7 2 9 2 16 C2 23 6 23 10 24 L11 28 L12 26 L20 26 L21 28 L22 24 C26 23 30 23 30 16 C30 9 19 7 16 7 M4 18 A4 4 0 0 1 12 18 A4 4 0 0 1 4 18 M20 18 A4 4 0 0 1 28 18 A4 4 0 0 1 20 18 " />
    </Svg>
  )
}

Skullcat.defaultProps = {
  fill: 'currentColor',
  viewBox: '0 0 32 32',
  width: 32,
  height: 32
}

export default Skullcat
