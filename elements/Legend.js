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

const Legend = styled('legend')(
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
    maxWidth: '100%',
    whiteSpace: 'normal',
  },
)

Legend.defaultProps = {
  color: 'inherit',
  display: 'table',
  p: 0,
}

export default Legend
