import React from 'react'
import Helmet from 'react-helmet'
import PostTemplateDetails from '../components/PostTemplateDetails'
import { graphql } from 'gatsby'

class PostTemplate extends React.Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    const { title, subtitle } = siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle

    let next, prev

    posts.forEach(({ node }, i) => {
      if (node.id == post.id) {
        if (posts[i - 1]) prev = posts[i - 1].node
        if (posts[i + 1]) next = posts[i + 1].node
      }
    })

    return (
      <div>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PostTemplateDetails
          siteMetadata={siteMetadata}
          post={post}
          next={next}
          prev={prev}
        />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        author {
          name
          twitter
          github
        }
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`
