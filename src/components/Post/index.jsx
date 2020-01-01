import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class Post extends React.Component {
  render() {
    const { title, date, description, path } = this.props.data.node.frontmatter
    const slug = path ? path : this.props.data.node.fields.slug

    return (
      <div className="post">
        <div className="post__meta">
          {moment(date).isBefore('2007-05-06') ? (
            <time>Written Sometime Before 2007</time>
          ) : (
            <time
              className="post__meta-time"
              dateTime={moment(date).format('MMMM D, YYYY')}
            >
              {moment(date).format('MMMM YYYY')}
            </time>
          )}

          <span className="post__meta-divider" />
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
      </div>
    )
  }
}

export default Post
