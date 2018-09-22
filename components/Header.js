import React from 'react'
import SiteDescription from '../content/site_description.md'
import config from '../lib/config'

const Header = props => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src="/static/images/avatar.png" alt="" />
      </a>
      <SiteDescription/>
    </div>
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a href="#" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon fa-envelope-o">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; {config.user.name}</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
  </header>
)

export default Header
