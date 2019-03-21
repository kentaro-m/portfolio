const prod = process.env.NODE_ENV === 'production'

module.exports = {
  site: {
    url: prod ? 'https://kentarom.com' : 'http://localhost:3000',
    title: 'Kentaro Matsushita - @kentaro-m',
    description: '',
    image: 'ogp_image.png'
  },
  user: {
    name: 'Kentaro Matsushita',
    github: 'kentaro-m',
    qiita: 'kentaro-m',
    speaker_deck: 'kentarom',
    twitter: '_kentaro_m',
    facebook: 'kentaro.m9',
    linkedin: 'kentarom'
  },
  skills: [
    { type: 'Node.js', level: 80 },
    { type: 'React', level: 70 },
    { type: 'JavaScript', level: 60 },
    { type: 'TypeScript', level: 40 },
    { type: 'HTML5', level: 40 },
    { type: 'CSS', level: 40 },
    { type: 'Java', level: 60 },
    { type: 'Go', level: 40 },
    { type: 'AWS', level: 70 },
    { type: 'MySQL', level: 50 },
    { type: 'Docker', level: 40 }
  ],
  github: {
    topic: 'my-portfolio'
  },
  qiita: {
    item_count: '5'
  },
  blog: {
    url: 'https://blog.kentarom.com/',
    feed_url: 'https://blog.kentarom.com/rss.xml',
    article_count: '5'
  },
  speaker_deck: {
    slides_count: '6'
  }
}
