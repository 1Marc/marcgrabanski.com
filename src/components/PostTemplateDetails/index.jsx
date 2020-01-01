import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import profilePic from '../../pages/photo.jpg'
import Links from '../Links'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { author, subtitle } = this.props.siteMetadata
    const post = this.props.post
    const next = this.props.next
    const prev = this.props.prev
    const tags = post.fields.tagSlugs

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          <img
            src={profilePic}
            className="post-single__home-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__date">
              {moment(post.frontmatter.date).isBefore('2007-05-06') ? (
                <time>Written Sometime Before 2007</time>
              ) : (
                moment(post.frontmatter.date).format('MMMM YYYY')
              )}
            </div>
            <div
              className="post-single__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <div>
              <h2 className="post-single__footer-title">
                <Link className="sidebar__author-title-link" to="/">
                  {author.name}
                </Link>
              </h2>
              <p className="post-single__footer-subtitle">{subtitle}</p>
            </div>
            <Links data={author} />
          </div>

          <div className="post-single__footer-nextprev">
            {prev ? (
              <Link
                className="post-single__footer-prev"
                to={prev.frontmatter.path}
              >
                &lt;&lt; {prev.frontmatter.title}
              </Link>
            ) : null}
            {next ? (
              <Link
                className="post-single__footer-next"
                to={next.frontmatter.path}
              >
                {next.frontmatter.title} &gt;&gt;
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default PostTemplateDetails
