import fetch from "isomorphic-unfetch";
import querystring from 'querystring'

export async function getSlides(user, count) {
  const qs = querystring.stringify({
    q: `select * from feed where url = \'https://speakerdeck.com/${user}.atom\' limit ${count}`,
    format: 'json'
  })

  const res = await fetch(`https://query.yahooapis.com/v1/public/yql?${qs}`)
  const json = await res.json()
  const slides = json.query.results.entry

  return slides
}

export async function getQiitaItems(count) {
  const qs = querystring.stringify({
    page: 1,
    per_page: count
  })

  const res = await fetch(`https://qiita.com/api/v2/authenticated_user/items?${qs}`, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`
    }
  })

  const items = await res.json()

  return items
}