import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Img = styled('img')(
  space,
  width,
  maxWidth,
  color,
  borders,
  borderRadius,
  {
    display: 'block',
    maxWidth: '100%',
    borderStyle: 'none',
  },
)

Img.defaultProps = {
  w: 1,
}

export default Img
