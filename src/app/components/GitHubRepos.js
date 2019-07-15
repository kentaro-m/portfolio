import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'

const GitHubRepos = props => {
  const repos = props.repos.map(repo => {
    return (
      <li key={repo.id}>
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>
        <br />
        <span>
          <Emoji text={repo.description} />
        </span>
      </li>
    )
  })

  return (
    <section id="github">
      <h2>GitHub</h2>
      <ul className="alt">{repos}</ul>
      <ul className="actions">
        <li>
          <a
            href={`https://github.com/${props.user}`}
            className="button"
            target="_blank"
          >
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  )
}

GitHubRepos.propTypes = {
  repos: PropTypes.array,
  user: PropTypes.string
}

export default GitHubRepos
