import React from 'react'
import fetch from 'isomorphic-unfetch'
import querystring from 'querystring'
import Layout from '../components/Layout'
import '../styles/main.scss'

export default class Index extends React.Component {
  static async getInitialProps () {
    const qs = querystring.stringify({
      q: 'select * from feed where url = \'https://speakerdeck.com/kentarom.atom\'',
      format: 'json'
    })
    const res = await fetch(`https://query.yahooapis.com/v1/public/yql?${qs}`)
    const json = await res.json()

    return { slidesList: json.query.results.entry }
  }

  render () {
    return (
      <Layout slidesList={this.props.slidesList} />
    )
  }
}