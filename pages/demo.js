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
  Footer
} from '../elements/'

import Skullcat from '../components/Skullcat'
import NavLink from '../components/NavLink'
import ListLink from '../components/ListLink'
import Card from '../components/Card'
import Container from '../components/Container'

export default class extends React.Component {
  render() {
    return (
      <Div>
        <Nav display='flex' flexWrap='wrap' alignItems='center' px={[4,5,6]} py={4}>
          <A href='/' w={48} color='black.0'>
            <Skullcat />
          </A>
          <NavLink href='/' color='black.0' ml='auto' children='Work' />
          <NavLink href='/writing' color='black.0' children='Writing' />
          <NavLink href='/' color='black.0' children='Reading' />
          <NavLink href='/' color='#000' children='GitHub' />
        </Nav>
        <Article px={[4,5,6]} bg='blue.0' py={7}>
          <Container>
          <H2 f={2} mb={2}>Adam Morse. Designer in London.</H2>
          <P f={[4,5,7]} fontWeight={700} my={0}>Trying to make the web: fast, readable, and easy to navigate.</P>
          </Container>
        </Article>
        <Section px={[4,5,6]} py={5}>
          <H3>Work</H3>
          <Div flexWrap='wrap' display='flex' mx={-4}>
            <Div w={[1,1/2]} px={4}><Card title="Tachyons" text="Functional CSS Toolkit" image='http://d13i5ryuluqz5i.cloudfront.net/cube-small.gif' />  </Div>
            <Div w={[1, 1/2]} px={4}><Card title="Compositor" text="Tools for Designs and Developers" image='http://d13i5ryuluqz5i.cloudfront.net/SO3-small.gif' />  </Div>
            <Div w={[1, 1/2]} px={4}><Card w={1} title="MrsJxn" text="Post-future beats" image='http://d13i5ryuluqz5i.cloudfront.net/pre-flight-madness-small.gif' />  </Div>
            <Div w={[1, 1/2]} px={4}><Card w={1} title="Up and in Thirds" text="A collection of photographs" image='http://d13i5ryuluqz5i.cloudfront.net/wires-small.gif' />  </Div>
            <Div w={1} px={4}><Card w={1} title="Gfffs" text="Hi-def gifs for the super-bored" image='https://s3-us-west-1.amazonaws.com/gfffs/diamonds-2.gif' />  </Div>
          </Div>
        </Section>
        <Section px={[4,5,6]}>
          <H3>Writing</H3>
        <Ul pl={0}>
          <ListLink href='/'>CSS and Scalability</ListLink>
          <ListLink href='/'>Veil of Ignorance</ListLink>
          <ListLink href='/'>Growing up with Dogma</ListLink>
          <ListLink href='/'>Design Systems</ListLink>
          <ListLink href='/'>Too Many Tools and Frameworks</ListLink>
          <ListLink href='/'>Webfonts</ListLink>
          <ListLink href='/'>What are Classes for?</ListLink>
          <ListLink href='/'>Vim as a Design Tool</ListLink>
        </Ul>
        </Section>
        <Section py={5} px={[4,5,6]}>
          <H3>Reading List</H3>
          <Ul pl={0}>
            <ListLink href='#0'>Learnable Programming</ListLink>
            <ListLink href='#0'>No Silver-Bullet —Essence and Accident in Software Engineering</ListLink>
            <ListLink href='#0'>Words as Material</ListLink>
            <ListLink href='#0'>Material Honesty on the Web</ListLink>
            <ListLink href='#0'>Words</ListLink>
            <ListLink href='#0'>What is Code?</ListLink>
            <ListLink href='#0'>Web Design the First 100 Years</ListLink>
            <ListLink href='#0'>Git Koans</ListLink>
            <ListLink href='#0'>Vim Koans</ListLink>
            <ListLink href='#0'>Universal UI Components</ListLink>
            <ListLink href='#0'>Patterns for Style Composition in React</ListLink>
            <ListLink href='#0'>A classless class—on using more classes in your HTML</ListLink>
            <ListLink href='#0'>Code Smells in CSS</ListLink>
            <ListLink href='#0'>A Case for the Fool</ListLink>
            <ListLink href='#0'>Visual Semantics in HTML and CSS</ListLink>
            <ListLink href='#0'>About HTML Semantics Front-end Architecture</ListLink>
            <ListLink href='#0'>The Media Object Saves Hundreds of Lines of Code</ListLink>
            <ListLink href='#0'>The Cognitive Style of Unix</ListLink>
            <ListLink href='#0'>Mathematical Web Typography</ListLink>
            <ListLink href='#0'>The Automatic Corporation</ListLink>
            <ListLink href='#0'>Making it Right: Technical Debt vs. Slop</ListLink>
            <ListLink href='#0'>The Best Interface is No Interface</ListLink>
            <ListLink href='#0'>The 100% Easy-2-Read Standard</ListLink>
            <ListLink href='#0'>What Screens Want</ListLink>
            <ListLink href='#0'>Typography Research Papers</ListLink>
            <ListLink href='#0'>Unix Design Philosophy</ListLink>
            <ListLink href='#0'>Basics of the Unix Philosophy</ListLink>
          </Ul>

        </Section>
        <Footer display='flex' alignItems='center' borderTop='1px solid rgba(0,0,0,.2)' px={[4,5,6]} py={5}>
          <Skullcat />
          <NavLink ml='auto'>GitHub</NavLink> 
          <NavLink>Twitter</NavLink> 
          <NavLink>Instagram</NavLink> 
          <NavLink>Soundcloud</NavLink> 
        </Footer>

      </Div>
    )
  }
}
