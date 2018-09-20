import React, { Component } from 'react'
import moment from 'moment'

export default class QiitaItems extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const items = this.props.qiitaItems.map((item) => {
      const createdAt = moment(item.created_at).format('YYYY-MM-DD')

      return (
        <li key={item.id}>
          {createdAt}　<a href={item.url}>{item.title}</a>
        </li>
      )
    })

    return (
      <ul className="alt">
        {items}
      </ul>
    )
  }
}