import styled from 'react-emotion'
import {color} from 'styled-system'

const Path = styled('path')(color, {
  boxSizing: 'border-box',
})

Path.defaultProps = {
  fill: 'currentColor',
}

export default Path
