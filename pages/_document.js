import React from 'react'
import Document, { Main, NextScript } from 'next/document'
import Head from '../components/Head'
import config from '../lib/config'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head
          title={config.site.title}
          url={config.site.url}
          image={config.site.image}
          twitter={config.user.twitter}
        />
        <body className="is-preload">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
