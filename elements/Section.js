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

const Section = styled('div')(
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

Section.defaultProps = {
  w: 1,
}

export default Section
