require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.md?$/
})

module.exports = withMDX(withSass({
  webpack(config) {
    pageExtensions: ['md']

    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
}))