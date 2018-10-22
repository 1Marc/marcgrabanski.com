import React from 'react'
import './style.scss'
import twitterIcon from './svg/twitter.svg'
import githubIcon from './svg/github.svg'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      twitter: author.twitter,
      github: author.github,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
            >
              <img src={twitterIcon} />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.github.com/${links.github}`} target="_blank">
              <img src={githubIcon} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
