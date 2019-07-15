import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Main from './Main'

const Layout = props => (
  <div>
    <Header />
    <Main
      slides={props.slides}
      qiitaItems={props.qiitaItems}
      articles={props.articles}
    />
  </div>
)

Layout.propTypes = {
  slides: PropTypes.array,
  qiitaItems: PropTypes.array
}

export default Layout
