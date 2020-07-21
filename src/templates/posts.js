// import React from 'react';
// import { graphql } from 'gatsby';
// import RichText from '../components/RichText';
// import Layout from '../components/layout'
// import styled, { keyframes } from 'styled-components'
// import { fadeIn, rollIn } from 'react-animations'

// const tadaFlip = keyframes(rollIn);
// const fadeInAnimation = keyframes`${fadeIn}`;

// const HeadImg = styled.img`
//   border-radius: 50%;
//   width: 35%;
//   border: .1rem solid #66FEFF;
//   text-align: center;
// `
// const HeadImgContainer = styled.div`
//   text-align: center;
//     animation: 1s ${tadaFlip};
//   max-width:900px;
//   margin: 0 auto;

// `;

// const PageContent = styled.div`
//   animation: 4s ${fadeInAnimation};
//     max-width:900px;
//     margin: 0 auto 150px;


// `
// const PageTitle = styled.div`
//     margin: 0 auto;
//     max-width:900px;

// `
// const PageMain = styled.div`
//   padding-top: 20px;
// `
// export const query = graphql`
// query PostQuery($id: String) {
//   prismic {
//     allPosts(id: "$id") {
//       edges {
//         node {
//           post_title
//           post_image
//           post_content
//           _meta {
//             uid
//           }
//         }
//       }
//     }
//   }
// }
// `

// const Post = (props) => {
//   const prismicContent = props.data.prismic.allPosts.edges[0]
//   if (!prismicContent) return null
//   const pageTitle = props.data.prismic.allPosts.edges[0].node.post_title;
//   const pageContent = props.data.prismic.allPosts.edges[0].node.post_content;
//   const pageHeaderImg = props.data.prismic.allPosts.edges[0].node.post_image.url;
//   return (

//     <Layout>
//       <PageMain>
//         <PageTitle>
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <RichText render={pageTitle} />
//               </div>
//             </div>
//           </div>
//         </PageTitle>
//         <HeadImgContainer>
//           <HeadImg alt={props.data.prismic.allPosts.edges[0].node.post_image.alt} src={pageHeaderImg} />
//         </HeadImgContainer>
//         <PageContent>
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <RichText render={pageContent} />
//               </div>
//             </div>
//           </div>

//         </PageContent>
//       </PageMain>
//     </Layout>

//   )
// }
// export default Post;