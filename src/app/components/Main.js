import React from 'react'
import GitHubReposContainer from '../containers/GitHubReposContainer'
import SlidesContainer from '../containers/SlidesContainer'
import QiitaItemsContainer from '../containers/QiitaItemsContainer'
import BlogArticlesContainer from '../containers/BlogArticlesContainer'
import SkillBars from './SkillBars'
import config from '../lib/config'

const Main = () => {
  return (
    <div id="main">
      <SkillBars backgroundColor="#4173B3" skills={config.skills} />
      <GitHubReposContainer />
      <QiitaItemsContainer />
      <BlogArticlesContainer />
      <SlidesContainer />
    </div>
  )
}

export default Main
