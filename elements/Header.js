import styled from 'react-emotion'
import {space, width, display, fontSize, textAlign, color} from 'styled-system'

const Header = styled('header')(
  space,
  width,
  display,
  fontSize,
  textAlign,
  color,
  {
    boxSizing: 'border-box',
  },
)

Header.defaultProps = {}

export default Header
