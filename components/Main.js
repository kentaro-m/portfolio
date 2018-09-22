import React from 'react'
import PropTypes from 'prop-types'
import GitHubRepos from './GitHubRepos'
import Slides from './Slides'
import QiitaItems from './QiitaItems'
import config from '../lib/config'

const Main = props => (
  <div id="main">
    <section id="one">
      <h2>GitHub</h2>
      <GitHubRepos repos={props.repos} />
      <ul className="actions">
        <li>
          <a
            href={`https://github.com/${config.user.github}`}
            className="button"
          >
            Show More Items
          </a>
        </li>
      </ul>
    </section>

    <section id="two">
      <h2>Qiita</h2>
      <QiitaItems qiitaItems={props.qiitaItems} />
      <ul className="actions">
        <li>
          <a href={`https://qiita.com/${config.user.qiita}`} className="button">
            Show More Items
          </a>
        </li>
      </ul>
    </section>

    <section id="three">
      <h2>Slides</h2>
      <div className="row">
        <Slides slides={props.slides} />
      </div>
      <ul className="actions">
        <li>
          <a
            href={`https://speakerdeck.com/${config.user.speaker_deck}`}
            className="button"
          >
            Show More Slides
          </a>
        </li>
      </ul>
    </section>
  </div>
)

Main.propTypes = {
  repos: PropTypes.array,
  slides: PropTypes.array,
  qiitaItems: PropTypes.array
}

export default Main
