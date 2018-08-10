import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Aside = styled('aside')(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Aside.defaultProps = {}

export default Aside
