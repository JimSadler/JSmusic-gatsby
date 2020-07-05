import React from 'react'
import Iframe from 'react-iframe'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import RichText from '../components/RichText';
import styled, { keyframes } from 'styled-components'
import { fadeIn, rollIn } from 'react-animations'
const tadaFlip = keyframes(rollIn);
const fadeInAnimation = keyframes`${fadeIn}`;

const HeadImg = styled.img`
  border-radius: 50%;
  width: 35%;
  border: .1rem solid #66FEFF;
  text-align: center;
`
const HeadImgContainer = styled.div`
  text-align: center;
    animation: 1s ${tadaFlip};
  max-width:900px;
  margin: 0 auto;

`;

const PageContent = styled.div`
  animation: 4s ${fadeInAnimation};
    max-width:900px;
    margin: 0 auto 50px;


`
const PageTitle = styled.div`
    margin: 0 auto;
    max-width:900px;

`
const PageMain = styled.div`
  padding-top: 20px;
`
const IframeContainer = styled.div`
  margin: 0% 10% 10% 10%;
  
`
export const query = graphql`
  {
  prismic {
    allMusic_pages {
      edges {
        node {
          music_title
          music_page_content
          music_head_img
          _meta {
            uid
          }
        }
      }
    }
  }
}
 `
const MusicPage = (props) => {
  const pageTitle = props.data.prismic.allMusic_pages.edges[0].node.music_title;
  const pageContent = props.data.prismic.allMusic_pages.edges[0].node.music_page_content;
  const musicHeaderImg = props.data.prismic.allMusic_pages.edges[0].node.music_head_img.url;

  return (
    <Layout>
      <PageMain>
        <PageTitle>
          <RichText render={pageTitle} />
        </PageTitle>
        <HeadImgContainer>
          <HeadImg render={props.data.prismic.allMusic_pages.edges[0].node.music_head_img.alt} src={musicHeaderImg} />
        </HeadImgContainer>
        <PageContent>
          <RichText render={pageContent} />
        </PageContent>
      </PageMain>
      <IframeContainer>
        <Iframe
          width="100%"
          height="650"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          allowtransparency="true"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2610982&color=%235cadad&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </Iframe>
      </IframeContainer>


    </Layout >
  )
}

export default MusicPage