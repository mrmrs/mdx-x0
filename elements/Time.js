import styled from 'react-emotion'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
} from 'styled-system'

const Time = styled('time')(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  color,
  borders,
  {},
)

Time.defaultProps = {}

export default Time
