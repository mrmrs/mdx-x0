import React from 'react'

import {} from '../elements/'

export default class extends React.Component {
  render() {
    return (
      <Div
        bg="blue.0"
        color="blue.9"
        py={[5, 6, 7]}
        px={4}
        fontSize={[1, 2, 5]}
        textAlign={['left', null, 'center']}
      >
        <H1 mb={0}>Hallo</H1>
      </Div>
    )
  }
}
