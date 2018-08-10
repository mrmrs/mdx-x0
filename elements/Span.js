import styled from 'react-emotion'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
} from 'styled-system'

const Span = styled('span')(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  {},
)

Span.defaultProps = {}

export default Span
