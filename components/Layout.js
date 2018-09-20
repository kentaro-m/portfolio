import Header from './Header'
import Main from './Main'

const Layout = (props) => (
  <div>
    <Header/>
    <Main
      slides={props.slides}
      qiitaItems={props.qiitaItems}
    />
  </div>
)

export default Layout