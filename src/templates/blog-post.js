import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
const _ = require("lodash")

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props.data);
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
          }}
        >
          {post.frontmatter.date}
          {` • ${post.timeToRead} min read`}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            margin: rhythm(1),
          }}
        />
        {post.frontmatter.tags.map(tag=>{
          return (
            <a
              key={tag}
              style={{
                padding: rhythm(1/4),
                backgroundColor: "grey",
                color: "white",
                marginLeft: rhythm(1/4),
              }}
              href={`/blog/tags/${tag}`}
            >
              {tag}
            </a>
          )
        })}

        <hr
          style={{
            margin: rhythm(1),
          }}
        />

        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            }
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
