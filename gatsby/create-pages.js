'use strict'

const path = require('path')
const _ = require('lodash')
const slash = require('slash')

const postTemplate = path.resolve('./src/templates/post-template.jsx')
const pageTemplate = path.resolve('./src/templates/page-template.jsx')
const tagTemplate = path.resolve('./src/templates/tag-template.jsx')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              layout
              path
            }
          }
        }
      }
    }
  `)

  _.each(result.data.allMarkdownRemark.edges, edge => {
    if (_.get(edge, 'node.frontmatter.layout') === 'page') {
      createPage({
        path: edge.node.frontmatter.path
          ? edge.node.frontmatter.path
          : edge.node.fields.slug,
        component: slash(pageTemplate),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (_.get(edge, 'node.frontmatter.layout') === 'post') {
      createPage({
        path: edge.node.frontmatter.path
          ? edge.node.frontmatter.path
          : edge.node.fields.slug,
        component: slash(postTemplate),
        context: {
          slug: edge.node.fields.slug,
        },
      })

      let tags = []
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }

      tags = _.uniq(tags)
      _.each(tags, tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagTemplate,
          context: { tag },
        })
      })
    }
  })
}

module.exports = createPages
