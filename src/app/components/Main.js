import React from 'react'
import GitHubRepos from '../containers/GitHubRepos'
import Slides from '../containers/Slides'
import QiitaItems from '../containers/QiitaItems'
import BlogArticles from '../containers/BlogArticles'
import SkillBars from './SkillBars'
import config from '../lib/config'

const Main = () => {
  return (
    <div id="main">
      <SkillBars backgroundColor="#4173B3" skills={config.skills} />
      <GitHubRepos />
      <QiitaItems />
      <BlogArticles />
      <Slides />
    </div>
  )
}

export default Main
