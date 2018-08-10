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

const Article = styled('article')(
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
    boxSizing: 'border-box',
  },
)

Article.defaultProps = {
  w: 1,
}

export default Article
