import { Head } from 'next/document'
import React from 'react'

export default props => {
  const { title, description, url, image, twitter } = props

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/static/images/${image}`} />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${twitter}`} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/static/images/${image}`} />
      <link rel="canonical" href={url} />
      <link rel="stylesheet" href="/_next/static/style.css" />
      <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
      <script src="/static/js/jquery.min.js" />
      <script src="/static/js/jquery.poptrox.min.js" />
      <script src="/static/js/browser.min.js" />
      <script src="/static/js/breakpoints.min.js" />
      <script src="/static/js/util.js" />
      <script src="/static/js/main.js" />
    </Head>
  )
}
