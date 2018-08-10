import styled from 'react-emotion'
import {color, height, width, space } from 'styled-system'

const Svg = styled('svg')(color, height, width, space, {
  boxSizing: 'border-box',
})

Svg.defaultProps = {
  fill: 'currentColor',
  width: 32,
  height: 32
}

export default Svg
