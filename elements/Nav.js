import styled from 'react-emotion'
import {
  space,
  display,
  width,
  maxWidth,
  fontSize,
  flex,
  flexWrap,
  alignItems,
  color,
  borders,
  borderWidth,
  borderColor,
  borderRadius,
} from 'styled-system'

const Nav = styled('nav')(
  space,
  display,
  width,
  maxWidth,
  fontSize,
  flex,
  flexWrap,
  alignItems,
  color,
  borders,
  borderWidth,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Nav.defaultProps = { 
}

export default Nav
