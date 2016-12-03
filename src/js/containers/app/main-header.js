'use strict'

import React from 'react'

const MainHeader = () => (

  <header className='header' role='banner'>
    <a href='https://github.com/campinas-front-end-meetup' target='_blank'>
      <img
        className='github-ribbon'
        src='https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67'
        alt='Fork me on GitHub'
        data-canonical-src='https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png' />
    </a>

    <a className='logo' href='./' role='logo'>
      <img src='img/logo.png' />
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
      href=''
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
