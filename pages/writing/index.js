import React from 'react'
import sortBy from 'lodash.sortby'

import { Footer, H3, Time, Nav,H1, Div, A, P, Pre } from '../../elements/'

import NavLink from '../../components/NavLink'
import ListLink from '../../components/ListLink'
import Skullcat from '../../components/Skullcat'

export default class extends React.Component {
  render () {
    const {routes = []} = this.props;

    const posts =
      sortBy([...routes]
        .filter(r => !!r.props)
        .filter(r => r.name !== 'index'),
        route => route.props.created
      )
      .map(route => ({ ...route, ...route.props }))
      .filter(route => !route.draft)
      .filter(route => !!route.title)
      .reverse()

    return (
      <Div>
        <Nav bg='indigo.0' color='indigo.9' display='flex' flexWrap='wrap' alignItems='center' px={[4,5,6]} py={4}>
          <A href='/' w={48} >
            <Skullcat />
          </A>
          <NavLink href='/' color='indigo.9' ml='auto' children='Work' />
          <NavLink href='/' color='indigo.9' children='Writing' />
          <NavLink href='/' color='indigo.9' children='Reading' />
          <NavLink href='/' color='indigo.9' children='GitHub' />
        </Nav>
        <Div px={[4,5,6]} py={[5,6,7]}>
          {posts.map(post => (
            <A
              key={post.name}
              mb={5}
              display='block'
              color='black.0'
              href={post.path}>
              <Time color='black.2'>{new Date(post.created).toDateString()}</Time>
              <H1 fontSize={[ 4, 5, 6 ]} mb={3}>{post.title}</H1>
              {post.excerpt && <P mb={3}>{post.excerpt}</P>}
            </A>
          ))}
        </Div>
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
