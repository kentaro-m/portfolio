import PropTypes from 'prop-types';
import Header from './Header'
import Main from './Main'

const Layout = (props) => (
  <div>
    <Header/>
    <Main
      repos={props.repos}
      slides={props.slides}
      qiitaItems={props.qiitaItems}
    />
  </div>
)

Layout.propTypes = {
  repos: PropTypes.array,
  slides: PropTypes.array,
  qiitaItems: PropTypes.array
}

export default Layout