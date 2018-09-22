import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'

const GitHubRepos = props => {
  const repos = props.repos.map(repo => {
    const topics = repo.topics.map(topic => {
      return (
        <span key={topic} className="topic-tag">
          {topic}
        </span>
      )
    })

    return (
      <li key={repo.id}>
        <a href={repo.html_url}>{repo.name}</a>
        <br />
        <span>
          <Emoji text={repo.description} />
        </span>
        <br />
        <div className="topics-list">{topics}</div>
      </li>
    )
  })

  return <ul className="alt">{repos}</ul>
}

GitHubRepos.propTypes = {
  repos: PropTypes.array
}

export default GitHubRepos
