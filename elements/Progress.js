import styled from 'react-emotion'
import {
  space,
  width,
  display,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const Progress = styled('progress')(
  space,
  width,
  display,
  color,
  borders,
  borderColor,
  borderWidth,
  {

  },
)

Progress.defaultProps = {}

export default Progress
