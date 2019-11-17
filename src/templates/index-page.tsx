import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import HomeLayout from '../components/HomeLayout';

interface Props {
  title: String,
  heading: String,
  subheading: String,
  mainpitch: object,
  description: String,
  intro: any,
  goal: String
}

export const IndexPageTemplate = ({
  heading,
  subheading,
  goal,
}: Props) => (
   <div></div>
  )

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <HomeLayout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        goal={frontmatter.goal}
      />
    </HomeLayout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        goal
      }
    }
  }
`
