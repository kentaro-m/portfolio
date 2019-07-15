import { connect } from 'react-redux'
import GitHubRepos from '../components/GitHubRepos'
import { bindActionCreators } from 'redux'
import { fetchRepos } from '../actions/github'

const mapStateToProps = state => {
  return {
    repos: state.github.repos
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchReposStart: params => fetchRepos.start({ params })
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitHubRepos)
