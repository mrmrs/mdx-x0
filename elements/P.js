import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
} from 'styled-system'

const P = styled('p')(
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  {
    boxSizing: 'border-box',
  },
)

P.defaultProps = {
  maxWidth: '34em', // Sets text to maximum 80 characters wide
}

export default P
