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

  return <ul className="alt">{items}</ul>
}

QiitaItems.propTypes = {
  qiitaItems: PropTypes.array
}

export default QiitaItems
