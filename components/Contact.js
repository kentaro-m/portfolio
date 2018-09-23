import config from '../lib/config'
import Header from "./Header";
import React from "react";

const Contact = props => (
  <div className="row">
    <div className="col-8 col-12-small">
      <form method="post" action="#">
        <div className="row gtr-uniform gtr-50">
          <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name"/></div>
          <div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email"/>
          </div>
          <div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
          </div>
        </div>
      </form>
      <ul className="actions">
        <li><input type="submit" value="Send Message"/></li>
      </ul>
    </div>
    <div className="col-4 col-12-small">
      <ul className="labeled-icons">
        <li>
          <h3 className="icon fa-twitter"><span className="label">Twitter</span></h3>
          <a
            href={`https://twitter.com/${config.user.twitter}`}
            target="_blank"
          >
            @_kentaro_m
          </a>
        </li>
        <li>
          <h3 className="icon fa-facebook"><span className="label">Facebook</span></h3>
          <a
            href={`https://www.facebook.com/${config.user.facebook}`}
            target="_blank"
          >
            kentaro.m9
          </a>
        </li>
        <li>
          <h3 className="icon fa-linkedin"><span className="label">LinkedIn</span></h3>
          <a
            href={`https://www.linkedin.com/in/${config.user.linkedin}`}
            target="_blank"
          >
            kentarom
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Contact