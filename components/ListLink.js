import React from 'react'

import A from '../elements/A'
import Li from '../elements/Li'

const ListLink = ({...props}) => {

  return (
    <Li {...props}>
      <A color='#000' fontWeight={600} f={[2,3,4]} href={props.href}>{props.children}</A>
    </Li>
  )
}

ListLink.defaultProps = {
  borderBottom: '1px solid black',
  py: [2, 3, 4],
  display: 'block',
  color: 'black.0'
}

export default ListLink
