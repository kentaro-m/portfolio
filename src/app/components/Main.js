import React from 'react'
import PropTypes from 'prop-types'
import GitHubRepos from './GitHubRepos'
import Slides from './Slides'
import QiitaItems from './QiitaItems'
import BlogArticles from './BlogArticles'
import SkillBars from './SkillBars'
import config from '../lib/config'

const Main = props => {
  return (
    <div id="main">
      <SkillBars backgroundColor="#4173B3" skills={config.skills} />
      <GitHubRepos repos={props.repos} user={config.user.github} />
      <QiitaItems qiitaItems={props.qiitaItems} user={config.user.qiita} />
      <BlogArticles articles={props.articles} blogUrl={config.blog.url} />
      <Slides slides={props.slides} user={config.user.speaker_deck} />
    </div>
  )
}

Main.propTypes = {
  repos: PropTypes.array,
  slides: PropTypes.array,
  qiitaItems: PropTypes.array,
  articles: PropTypes.array,
  user: PropTypes.string,
  blogUrl: PropTypes.string
}

export default Main
