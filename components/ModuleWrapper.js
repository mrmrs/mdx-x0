import React from 'react'
import theme from '../theme'

import styled from 'react-emotion'

import {
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const ModuleWrapper = styled('article')(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    overflow: 'hidden'
  },
)

ModuleWrapper.defaultProps = {
  borderRadius: 2,
  border: '1px solid rgba(0,0,0,.1)'
}

 export default ModuleWrapper
