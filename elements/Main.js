import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Main = styled('div')(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Main.defaultProps = {
  w: 1,
}

export default Main
