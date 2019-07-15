import React, { Component } from 'react'
import config from '../lib/config'
import Layout from '../components/Layout'
import { fetchRepos } from '../actions/github'
import { fetchQiitaItems } from '../actions/qiita'
import { fetchSlides } from '../actions/slide'
import { fetchArticles } from '../actions/article'
import { connect } from 'react-redux'
import '../styles/main.scss'

class Index extends Component {
  static async getInitialProps(props) {
    const { store } = props.ctx

    store.dispatch(
      fetchRepos.start({ user: config.user.github, topic: config.github.topic })
    )
    store.dispatch(fetchQiitaItems.start({ count: config.qiita.item_count }))
    store.dispatch(
      fetchSlides.start({
        user: config.user.speaker_deck,
        count: config.speaker_deck.slides_count
      })
    )
    store.dispatch(
      fetchArticles.start({
        url: config.blog.feed_url,
        count: config.blog.article_count
      })
    )
  }

  render() {
    return <Layout />
  }
}

export default connect()(Index)
