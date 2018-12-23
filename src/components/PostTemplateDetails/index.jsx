import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { author } = this.props.siteMetadata
    const post = this.props.post
    const next = this.props.next
    const prev = this.props.prev
    const tags = post.fields.tagSlugs

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          All Articles
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
              <em>
                Published{' '}
                {moment(post.frontmatter.date).format('MMMM DD, YYYY')}
              </em>
            </div>
            <div
              className="post-single__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          <div className="post-single__footer">
            {tagsBlock}
            {/* 
            <hr />
            <p className="post-single__footer-text">
              Don't forget to&nbsp;
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>say "hi" 👋 on Twitter!</strong>
              </a>
            </p> 
            */}
          </div>

          <div className="post-single__footer-nextprev">
            {prev ? (
              <Link className="post-single__footer-prev" to={prev.fields.slug}>
                &lt;&lt; {prev.frontmatter.title}
              </Link>
            ) : null}
            {next ? (
              <Link className="post-single__footer-next" to={next.fields.slug}>
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
