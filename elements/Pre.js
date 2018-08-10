import styled from 'react-emotion'
import {space, width, fontSize, color} from 'styled-system'

const Pre = styled('pre')(space, width, fontSize, color, {
  boxSizing: 'border-box',
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
})

Pre.defaultProps = {}

export default Pre
