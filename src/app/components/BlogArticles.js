import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const BlogArticles = props => {
  const items = props.articles.map(item => {
    const createdAt = moment(item.pubDate).format('YYYY-MM-DD')

    return (
      <li key={item.guid}>
        {createdAt}
        <a className="item-title" href={item.link} target="_blank">
          {item.title}
        </a>
      </li>
    )
  })

  return (
    <section id="blog">
      <h2>Blog</h2>
      <ul className="alt">{items}</ul>
      <ul className="actions">
        <li>
          <a href={props.blogUrl} className="button" target="_blank">
            Show More Items
          </a>
        </li>
      </ul>
    </section>
  )
}

BlogArticles.propTypes = {
  articles: PropTypes.array,
  blogUrl: PropTypes.string
}

export default BlogArticles
