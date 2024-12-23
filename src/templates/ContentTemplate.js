export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        hidden
        course_info_page
        sidebar_priority
        hide_in_sidebar
      }
    }
  }
`
