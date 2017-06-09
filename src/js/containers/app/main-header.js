'use strict'

import React from 'react'

const MainHeader = () => (

  <header className='header' role='banner'>
    <a className='logo' href='./' role='logo'>
      <img src='img/logotipo-horizontal.svg' />
    </a>
    <a
      className='btn-link'
      target='_blank'
      href='https://frontendmeetup.typeform.com/to/vNNQyd'
      title='Quero apresentar'>
        Quero palestrar
    </a>
    <a
      className='btn-link'
      target='_blank'
      href='https://frontendmeetup.typeform.com/to/XuXAD5'
      title='Quero sediar'>
        Quero sediar
    </a>
    <a
      className='btn-link'
      href='#manifest'
      title='Manifesto Campinas front-end'>
        Manifesto
    </a>
    <a
      className='btn-link'
      href='#conduct'
      title='Código de conduta'>
        Código de conduta
    </a>

    <a
      className='btn-link'
      target='_blank'
      href='http://frontendcampinas.herokuapp.com/'
      title='Slack'>
        Slack
    </a>
  </header>
)

export default MainHeader
