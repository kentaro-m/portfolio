import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const BlogArticles = props => {
  // NOTE: Remove duplicate article ids.
  const articleIDs = [...new Set(props.articles.map(article => article.id))]

  const articles = articleIDs.map(articleId => {
    return props.articles.find(article => article.id === articleId)
  })

  const items = articles.map(item => {
    const createdAt = moment(item.published).format('YYYY-MM-DD')

    return (
      <li key={item.id}>
        {createdAt}
        <a className="item-title" href={item.link.href} target="_blank">
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
  articles: PropTypes.array
}

export default BlogArticles
