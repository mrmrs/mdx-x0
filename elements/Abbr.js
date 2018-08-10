import styled from 'react-emotion'
import {
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
} from 'styled-system'

const Abbr = styled('abbr')(
  space,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  {},
)

Abbr.defaultProps = {}

export default Abbr
