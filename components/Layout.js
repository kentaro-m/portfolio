import Header from './Header'
import Main from './Main'

const Layout = (props) => (
  <div>
    <Header/>
    <Main slidesList={props.slidesList} />
  </div>
)

export default Layout