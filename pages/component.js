import React from 'react'
import { Responsive } from '@compositor/kit'

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

import Card from '../components/Card'

export default class extends React.Component {
  render() {
    return (
      <Div p={[6,7]}>
        <Section>
          <Header>
            <H2 fontSize={[7]}>Card</H2>
          </Header>
          <Card />
        </Section>

          <Section mt={5}>
          <H3>Responsive</H3>
          <Responsive>
            <Card />
          </Responsive>
          
        </Section>
      </Div>
    )
  }
}
