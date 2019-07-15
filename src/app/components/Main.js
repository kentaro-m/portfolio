import React from 'react'
import PropTypes from 'prop-types'
import GitHubRepos from '../containers/GitHubRepos'
import Slides from './Slides'
import QiitaItems from '../containers/QiitaItems'
import BlogArticles from './BlogArticles'
import SkillBars from './SkillBars'
import config from '../lib/config'

const Main = props => {
  return (
    <div id="main">
      <SkillBars backgroundColor="#4173B3" skills={config.skills} />
      <GitHubRepos />
      <QiitaItems />
      <BlogArticles articles={props.articles} blogUrl={config.blog.url} />
      <Slides slides={props.slides} user={config.user.speaker_deck} />
    </div>
  )
}

Main.propTypes = {
  slides: PropTypes.array,
  articles: PropTypes.array,
  user: PropTypes.string,
  blogUrl: PropTypes.string
}

export default Main
