import React, { Component } from 'react'
import config from '../lib/config'
import Layout from '../components/Layout'
import { getSlides, getQiitaItems } from '../lib/utils'
import '../styles/main.scss'

export default class Index extends Component {
  static async getInitialProps () {
    const slides = await getSlides(config.user.speaker_deck, config.speaker_deck.slides_count)
    const qiitaItems = await getQiitaItems(config.qiita.item_count)
    return { slides: slides, qiitaItems: qiitaItems }
  }

  render () {
    return (
      <Layout
        slides={this.props.slides}
        qiitaItems={this.props.qiitaItems}
      />
    )
  }
}