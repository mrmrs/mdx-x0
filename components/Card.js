import React from 'react'

import Module from '../components/ModuleWrapper'
import CardTitle from '../elements/H2'
import CardText from '../elements/P'
import CardButton from '../elements/A'
import Div from '../elements/Div'

const Card = ({...props}) => {

  return (
    <Module  {...props}>
      <Div p={5}>
        <CardTitle my={0} children='Title of a card' />
        <CardText lineHeight={1.5} mt={3} mb={0} children="Encrypt communication to and from your website using SSL.
It may take up to 24 hours after the site becomes active on Cloudflare for new certificates to issue." />
      </Div>
      <Div width={1/3} display='flex' alignItems='center' justifyContent='flex-end' py={5} pr={5}>
        <CardButton textAlign='center' bg='blue.4' color='white' borderRadius={1} display='block' width={1} fontSize={2} px={4} py={3} children='Click Here' style={{whiteSpace: 'nowrap' }} />
      </Div>
    </Module>
  )
}

Card.defaultProps = {
  display: 'flex'
}

export default Card
