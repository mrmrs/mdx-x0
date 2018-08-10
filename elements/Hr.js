import styled from 'react-emotion'
import {space, width, color, borders} from 'styled-system'

const Hr = styled('hr')(space, width, color, borders, {
  boxSizing: 'border-box',
  height: 0,
  overflow: 'visible',
})

Hr.defaultProps = {}

export default Hr
