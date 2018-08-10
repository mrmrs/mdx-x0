import React from 'react'

import {H1, Div, P, Small} from '../elements/'

export default class extends React.Component {
  render() {
    return (

      <Div px={[4,6]} py={[5,6,7]} fontSize={[3,5,7]} bg="blue.0" color="blue.9">
        <H1 mb={0}>Hallo</H1>
        <P mb={0}>This is some paragraph text!</P>
      </Div>

    )
  }
}
