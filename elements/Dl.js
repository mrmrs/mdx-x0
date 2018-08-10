import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Dl = styled('dl')(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {},
)

Dl.defaultProps = {}

export default Dl
