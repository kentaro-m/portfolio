import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const QiitaItems = props => {
  const items = props.qiitaItems.map(item => {
    const createdAt = moment(item.created_at).format('YYYY-MM-DD')

    return (
      <li key={item.id}>
        {createdAt}
        <a className="item-title" href={item.url} target="_blank">
          {item.title}
        </a>
      </li>
    )
  })

  return (
    <section id="qiita">
      <h2>Qiita</h2>
      <ul className="alt">{items}</ul>
      <ul className="actions">
        <li>
          <a
            href={`https://qiita.com/${props.user}`}
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

QiitaItems.propTypes = {
  qiitaItems: PropTypes.array,
  user: PropTypes.string
}

export default QiitaItems
