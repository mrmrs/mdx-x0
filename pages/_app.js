import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import { Link } from 'react-router-dom'

import theme from '../theme'

import A from '../elements/A'

export default class extends React.Component {
  render() {
    const {render, routes, location} = this.props
    return (
      <ThemeProvider theme={theme}>
        <div>
          <nav style={{display: 'none'}}>
            <A fontWeight={600} href='/'>Home</A>
            <A fontWeight={600} href='/work'>Work</A>
            <A fontWeight={600} href='/writing'>Writing</A>
          </nav>
          {render(this.props)}
        </div>
      </ThemeProvider>
    )
  }
}
