import functions from "firebase-functions";
import next from "next";

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev, conf: {distDir: 'next'}});
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})