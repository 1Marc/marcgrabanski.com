const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  siteMetadata: {
    url: 'https://marcgrabanski.com',
    siteUrl: `https://marcgrabanski.com`,
    title: `Marc Grabanski's Web Development, Business and Life Thoughts`,
    subtitle:
      'Web Development, Business and Life Thoughts from Marc Grabanski – Founder, CEO & UI Developer of Frontend Masters',
    copyright: '© All rights reserved.',
    menu: [
      {
        label: 'Articles',
        path: '/',
      },
      {
        label: 'About me',
        path: '/about/',
      },
    ],
    author: {
      name: 'Marc Grabanski',
      twitter: '1marc',
      github: '1marc',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/favicon.png`,

        options: {
          name: `MarcGrabanski.com`,
          short_name: `MarcGrabanski.com`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                const slug = node.frontmatter.path ? node.frontmatter.path : node.fields.slug;
                const pageUrl = `${site.siteMetadata.siteUrl}/${slug}`;

                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: pageUrl,
                  guid: pageUrl,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields { 
                      slug 
                    }
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "MarcGrabanski.com: Web Development & Business RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: '100%',
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-963303-2' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700'],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          })
        ],
        sassOptions: {
          precision: 8,
        },
      },
    },
  ],
}
