import React, { Component } from 'react'
import PropTypes from 'prop-types'
import config from '../lib/config'
import Layout from '../components/Layout'
import { getArticles } from '../lib/utils'
import { fetchRepos } from '../actions/github'
import { fetchQiitaItems } from '../actions/qiita'
import { fetchSlides } from '../actions/slide'
import { connect } from 'react-redux'
import '../styles/main.scss'

class Index extends Component {
  static async getInitialProps(props) {
    const { store } = props.ctx

    store.dispatch(
      fetchRepos.start({ user: config.user.github, topic: config.github.topic })
    )
    store.dispatch(fetchQiitaItems.start({ count: config.qiita.item_count }))
    store.dispatch(fetchSlides.start({ user: config.user.speaker_deck, count: config.speaker_deck.slides_count }))

    const articles = await getArticles(
      config.blog.feed_url,
      config.blog.article_count
    )
    return {
      articles: articles
    }
  }

  render() {
    const { articles } = this.props

    return <Layout articles={articles} />
  }
}

Index.propTypes = {
  articles: PropTypes.array
}

export default connect()(Index)
