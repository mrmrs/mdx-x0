import React from 'react'

import {H1, Div, P, Small} from '../elements/'

export default class extends React.Component {
  render() {
    return (

      <Div bg="blue.0" color="blue.9" w={1/2} mx='auto' py={5} px={4}>
        <H1 mb={0}>Hallo</H1>
      </Div>

    )
  }
}
