'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Manifest from '../../components/manifest'

const Page = ({ events }) => {
  return (
    <section className='page' id='manifest'>
      <header className='page-header'>
        <h3 className='title'>Manifesto</h3>
      </header>
      <Manifest />
    </section>
  )
}

Page.propTypes = {
  events: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  const { filter } = state
  const monthsFilter = filter.months
  const stateFilter = filter.state
  return {
    events: state.events.events
      .filter((event) => {
        if (monthsFilter.selected && stateFilter.selected) {
          return event.shouldShowByMonth !== false &&
            event.shouldShowByState !== false
        }

        if (monthsFilter.selected && !stateFilter.selected) {
          return event.shouldShowByMonth !== false
        }

        if (!monthsFilter.selected && stateFilter.selected) {
          return event.shouldShowByState !== false
        }

        return event
      })
      .filter((event) => {
        return event.shouldShowByText !== false
      })
  }
}

export default connect(mapStateToProps)(Page)
