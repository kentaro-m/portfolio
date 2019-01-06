import fetch from 'isomorphic-unfetch'
import querystring from 'querystring'
import Octokit from '@octokit/rest'

export async function getRepos(user, topic) {
  const octokit = new Octokit({ headers: { 'user-agent': 'portfolio' } })

  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_API_TOKEN
  })

  const res = await octokit.search.repos({ q: `topic:${topic}+user:${user}` })
  const repos = res.data.items

  return repos
}

export async function getSlides(user, count) {
  const qs = querystring.stringify({
    rss_url: `https://speakerdeck.com/${user}.atom`,
    count: count,
    api_key: process.env.RSS2JSON_API_TOKEN
  })

  const res = await fetch(`https://api.rss2json.com/v1/api.json?${qs}`)
  const json = await res.json()
  const slides = json.items

  return slides
}

export async function getQiitaItems(count) {
  const qs = querystring.stringify({
    page: 1,
    per_page: count
  })

  const res = await fetch(
    `https://qiita.com/api/v2/authenticated_user/items?${qs}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`
      }
    }
  )

  const items = await res.json()

  return items
}

export async function getArticles(url, count) {
  const qs = querystring.stringify({
    rss_url: url,
    count: count,
    api_key: process.env.RSS2JSON_API_TOKEN
  })

  const res = await fetch(`https://api.rss2json.com/v1/api.json?${qs}`)
  const json = await res.json()
  const articles = json.items

  return articles
}
