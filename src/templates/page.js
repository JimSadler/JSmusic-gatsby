import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Layout from '../components/layout'
import styled from 'styled-components'

const HeadImg = styled.img`
  border-radius: 50%;
  width: 35%;
  border: .1rem solid #66FEFF;
  text-align: center;
`
const HeadImgContainer = styled.div`
  text-align: center;
`;
export const query = graphql`
query PageQuery($id: String) {
  prismic {
    allPages(id: $id) {
      edges {
        node {
          page_title
          header_img
          content
          _meta {
            uid
          }
        }
      }
    }
  }
}
`

const Page = (props) => {
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
  const pageContent = props.data.prismic.allPages.edges[0].node.content;
  const pageHeaderImg = props.data.prismic.allPages.edges[0].node.header_img.url;
  return (

    <Layout>

      <RichText render={pageTitle} />
      <HeadImgContainer>
        <HeadImg alt={props.data.prismic.allPages.edges[0].node.header_img.alt} src={pageHeaderImg} />
      </HeadImgContainer>

      <RichText render={pageContent} />
    </Layout>

  )
}
export default Page;