import React from 'react'

import {
  P,
  H1,
  H2,
  H3,
  Div,
  Ul,
  Article,
  Section,
  Header,
  Main,
  Nav,
  A,
  Footer,
} from '../elements/'

export default class extends React.Component {
  render() {
    return (
      <Div>
        <Header p={[6,7]}>
          <H1 fontSize={[7,9]}>Component Library</H1>
        </Header>
      </Div>
    )
  }
}
