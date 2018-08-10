import React from 'react'

import A from '../elements/A'

const NavLink = ({...props}) => {

  return (
    <A {...props} />
  )
}

NavLink.defaultProps = {
  fontWeight: 600,
  fontSize: [1,2],
  pl: 4
}

export default NavLink
