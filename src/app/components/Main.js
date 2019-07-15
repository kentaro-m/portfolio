import React from 'react'
import PropTypes from 'prop-types'
import GitHubRepos from '../containers/GitHubRepos'
import Slides from '../containers/Slides'
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
      <Slides/>
    </div>
  )
}

Main.propTypes = {
  articles: PropTypes.array,
  blogUrl: PropTypes.string
}

export default Main
