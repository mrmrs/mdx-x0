import styled from 'react-emotion'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const Li = styled('li')(
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderWidth,
  {
    boxSizing: 'border-box',
  },
)

Li.defaultProps = {
  pl: 0,
}

export default Li
