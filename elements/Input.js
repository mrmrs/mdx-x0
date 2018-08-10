import styled from 'react-emotion'
import {
  space,
  width,
  display,
  fontSize,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  color,
} from 'styled-system'

const Input = styled('input')(
  space,
  width,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {},
)

Input.defaultProps = {}

export default Input
