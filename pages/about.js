import React from 'react'

import Div from '../elements/Div'
import H1 from '../elements/H1'

export default class extends React.Component {
  render () {
    return (
      <Div bg='red.1' py={5} px={4} fontSize={[1,2,5]}>
        <H1 mb={0}>Hello this is an about page</H1>
      </Div>
    )
  }
}
