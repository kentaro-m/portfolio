import { connect } from 'react-redux'
import BlogArticles from '../components/BlogArticles'
import { bindActionCreators } from 'redux'
import { fetchArticles } from '../actions/article'
import config from '../lib/config'

const mapStateToProps = state => {
  return {
    articles: state.article.articles,
    blogUrl: config.blog.url
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchArticlesStart: params => fetchArticles.start({ params })
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogArticles)
