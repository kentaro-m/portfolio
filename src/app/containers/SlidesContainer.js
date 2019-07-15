import { connect } from 'react-redux'
import Slides from '../components/Slides'
import { bindActionCreators } from 'redux'
import { fetchSlides } from '../actions/slide'
import config from '../lib/config'

const mapStateToProps = state => {
  return {
    slides: state.slide.slides,
    user: config.user.speaker_deck
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSlidesStart: params => fetchSlides.start({ params })
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slides)
