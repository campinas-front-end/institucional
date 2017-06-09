'use strict'

import React from 'react'

const MainHeader = () => (

  <header className='header' role='banner'>
    <a className='logo' href='./' role='logo'>
      <img src='img/logotipo-horizontal.svg' />
    </a>
    <nav className='menu' role='navigation'>
      <ul>
        <li>
          <a
            className='btn-link'
            target='_blank'
            href='https://frontendmeetup.typeform.com/to/vNNQyd'
            title='Quero apresentar'>
            Quero palestrar
          </a>
        </li>
        <li>
          <a
            className='btn-link'
            target='_blank'
            href='https://frontendmeetup.typeform.com/to/XuXAD5'
            title='Quero sediar'>
            Quero sediar
          </a>
        </li>
        <li>
          <a
            className='btn-link'
            href='#manifest'
            title='Manifesto Campinas front-end'>
            Manifesto
          </a>
        </li>
        <li>
          <a
            className='btn-link'
            href='#conduct'
            title='Código de conduta'>
            Código de conduta
          </a>
        </li>
        <li>
          <a
            className='btn-link'
            target='_blank'
            href='http://slack.campinasfrontend.com.br'
            title='Slack'>
            Slack
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default MainHeader
