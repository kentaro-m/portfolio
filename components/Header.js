const Header = (props) => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar"><img src="/static/images/avatar.jpg" alt=""/></a>
      <h1><strong>I am Strata</strong>, a super simple<br/>
        responsive site template freebie<br/>
        crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
    </div>
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
          <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
          <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </footer>
  </header>
)

export default Header