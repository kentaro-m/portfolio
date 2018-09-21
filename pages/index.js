import React, { Component } from 'react'
import PropTypes from 'prop-types';
import config from '../lib/config'
import Layout from '../components/Layout'
import { getRepos, getSlides, getQiitaItems } from '../lib/utils'
import '../styles/main.scss'

export default class Index extends Component {
  static async getInitialProps () {
    const repos = await getRepos(config.user.github, config.github.topic)
    const slides = await getSlides(config.user.speaker_deck, config.speaker_deck.slides_count)
    const qiitaItems = await getQiitaItems(config.qiita.item_count)
    return { repos: repos, slides: slides, qiitaItems: qiitaItems }
  }

  render () {
    return (
      <Layout
        repos={this.props.repos}
        slides={this.props.slides}
        qiitaItems={this.props.qiitaItems}
      />
    )
  }
}

Index.propTypes = {
  repos: PropTypes.array,
  slides: PropTypes.array,
  qiitaItems: PropTypes.array
}