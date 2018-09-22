import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
          <script src="/static/js/jquery.min.js" />
          <script src="/static/js/jquery.poptrox.min.js" />
          <script src="/static/js/browser.min.js" />
          <script src="/static/js/breakpoints.min.js" />
          <script src="/static/js/util.js" />
          <script src="/static/js/main.js" />
        </Head>
        <body className="is-preload">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
