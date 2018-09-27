import React, { Component } from 'react'
import PropTypes from 'prop-types'
import config from '../lib/config'
import Layout from '../components/Layout'
import { getRepos, getSlides, getQiitaItems, getArticles } from '../lib/utils'
import '../styles/main.scss'

export default class Index extends Component {
  static async getInitialProps() {
    const repos = await getRepos(config.user.github, config.github.topic)
    const slides = await getSlides(
      config.user.speaker_deck,
      config.speaker_deck.slides_count
    )
    const qiitaItems = await getQiitaItems(config.qiita.item_count)
    const articles = await getArticles(
      config.blog.feed_url,
      config.blog.article_count
    )
    return {
      repos: repos,
      slides: slides,
      qiitaItems: qiitaItems,
      articles: articles
    }
  }

  render() {
    const { repos, slides, qiitaItems, articles } = this.props

    return (
      <Layout
        repos={repos}
        slides={slides}
        qiitaItems={qiitaItems}
        articles={articles}
      />
    )
  }
}

Index.propTypes = {
  repos: PropTypes.array,
  slides: PropTypes.array,
  qiitaItems: PropTypes.array,
  articles: PropTypes.array
}
