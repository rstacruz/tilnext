import { graphql, Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import BlogPostContent from '../components/BlogPostContent'
import BlogPostTitle from '../components/BlogPostTitle'
import decorate from 'rehype-decorate'
import sectionize from 'rehype-sectionize-headings'
import Layout from '../components/Layout'
import { MainHeading } from '../components/MainHeading'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const { title, date } = post.frontmatter
    const { slug } = post.fields
    const htmlAst = transformHtmlAst(post.htmlAst)

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${title} | ${siteTitle}`}
        />
        <MainHeading {...{ title, slug }} />
        <BlogPostTitle {...{ title, date }} />
        <BlogPostContent {...{ title, date, htmlAst }} />
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </Layout>
    )
  }
}

function transformHtmlAst(ast) {
  ast = decorate(ast)
  ast = sectionize(ast, {
    h2: { sectionTag: 'h2-section' },
    h3: { sectionTag: 'h3-section' },
  })
  return ast
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
