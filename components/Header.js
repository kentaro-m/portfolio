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
            <a
              href={`https://twitter.com/${config.user.twitter}`}
              className="icon fa-twitter"
              target="_blank"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href={`https://github.com/${config.user.github}`}
              className="icon fa-github"
              target="_blank"
            >
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a
              href={`https://www.facebook.com/${config.user.facebook}`}
              className="icon fa-facebook"
              target="_blank"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href={`https://www.linkedin.com/in/${config.user.linkedin}`}
              className="icon fa-linkedin"
              target="_blank"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; 2018 {config.user.name}</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
  </header>
)

export default Header
