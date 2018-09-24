import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'

const GitHubRepos = props => {
  const repos = props.repos.map(repo => {
    return (
      <li key={repo.id}>
        <a href={repo.html_url} target="_blank">{repo.name}</a>
        <br />
        <span>
          <Emoji text={repo.description} />
        </span>
      </li>
    )
  })

  return <ul className="alt">{repos}</ul>
}

GitHubRepos.propTypes = {
  repos: PropTypes.array
}

export default GitHubRepos
