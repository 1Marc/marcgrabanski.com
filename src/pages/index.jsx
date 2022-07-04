import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'
import Menu from '../components/Menu'

class IndexRoute extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark.edges
    const items = []
    const menu = this.props.data.site.siteMetadata.menu

    posts.forEach(post => {
      if (post.node.frontmatter.archived) return
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1>{page.frontmatter.title}</h1>
                <div
                  className="page__body"
                  /* eslint-disable-next-line react/no-danger */
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
                <hr />
                <h1>Recent Articles:</h1>
                {items}
                <h1>Post Categories:</h1>
                <div>
                  <Menu data={menu} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
      subtitle
      copyright
      menu {
        label
        path
      }
      author {
        name
        twitter
        github
      }
    }
  }
  sitePage {
    id
    path
    component
  }
  markdownRemark(frontmatter: { path: { eq: "about" } }) {
    id
    html
    frontmatter {
      title
      description
    }
  }
  allMarkdownRemark(
    limit: 5
    filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          description
          archived
          path
        }
      }
    }
  }
}
`