import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const Ul = styled('ul')(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    boxSizing: 'border-box',
    listStyleType: 'none'
  },
)

Ul.defaultProps = {
  ml: 0,
  pt: 0,
}

export default Ul
