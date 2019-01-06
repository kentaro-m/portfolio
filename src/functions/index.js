const functions = require('firebase-functions')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production';

// NOTE: Change how to set the environment variables if deploying from CircleCI.
if (!dev && functions.config().hasOwnProperty('token')) {
  process.env.GITHUB_API_TOKEN = functions.config().token.github
  process.env.QIITA_API_TOKEN = functions.config().token.qiita
  process.env.RSS2JSON_API_TOKEN = functions.config().token.rss2json
  process.env.SENTRY_PUBLIC_DSN = functions.config().token.sentry
  console.log('the environment variables was loaded from firebase functions config')
} else {
  console.log('the environment variables was loaded from .env file')
}

const app = next({dev, conf: {distDir: 'next'}});
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})