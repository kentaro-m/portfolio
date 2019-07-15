import { connect } from 'react-redux'
import QiitaItems from '../components/QiitaItems'
import { bindActionCreators } from 'redux'
import { fetchQiitaItems } from '../actions/qiita'
import config from '../lib/config'

const mapStateToProps = state => {
  return {
    qiitaItems: state.qiita.qiitaItems,
    user: config.user.qiita
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchReposStart: params => fetchQiitaItems.start({ params })
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QiitaItems)
