import React, { Component } from 'react'
import PropTypes from 'prop-types'
import config from '../lib/config'
import Layout from '../components/Layout'
import { getSlides, getArticles } from '../lib/utils'
import { fetchRepos } from '../actions/github'
import { fetchQiitaItems } from '../actions/qiita'
import { connect } from 'react-redux'
import '../styles/main.scss'

class Index extends Component {
  static async getInitialProps(props) {
    const { store } = props.ctx

    store.dispatch(
      fetchRepos.start({ user: config.user.github, topic: config.github.topic })
    )
    store.dispatch(fetchQiitaItems.start({ count: config.qiita.item_count }))

    const slides = await getSlides(
      config.user.speaker_deck,
      config.speaker_deck.slides_count
    )
    // const qiitaItems = await getQiitaItems(config.qiita.item_count)
    const articles = await getArticles(
      config.blog.feed_url,
      config.blog.article_count
    )
    return {
      slides: slides,
      articles: articles
    }
  }

  render() {
    const { slides, articles } = this.props

    return <Layout slides={slides} articles={articles} />
  }
}

Index.propTypes = {
  slides: PropTypes.array,
  articles: PropTypes.array
}

export default connect()(Index)
