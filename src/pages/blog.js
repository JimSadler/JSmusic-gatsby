// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../components/layout'
// import RichText from '../components/RichText';
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
//     margin: 0 auto 50px;


// `
// const PageTitle = styled.div`
//     margin: 0 auto;
//     max-width:900px;

// `
// const PageMain = styled.div`
//   padding-top: 20px;
// `

// export const query = graphql`
// {
//   prismic {
//     allBlog_homes {
//       edges {
//         node {
//           blog_image
//           title
//           body {
//             ... on PRISMIC_Blog_homeBodyList_of_articles {
//               type
//               label
//               fields {
//                 articles_to_link {
//                   ... on PRISMIC_Post {
//                     post_title
//                     post_image
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`
// const BlogHome = (props) => {
//   const pageTitle = props.data.prismic.allBlog_homes.edges[0].node.title;
//   const blogContent = props.data.prismic.allBlog_homes.edges[0].node.body.fields.articles_to_link.post_title;
//   const blogImg = props.data.prismic.allBlog_homes.edges[0].node.blog_image.url;

// return (
//   <Layout>
//     <PageMain>
//       <PageTitle>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <RichText render={pageTitle} />
//             </div>
//           </div>
//         </div>
//       </PageTitle>
//       <HeadImgContainer>
//         <HeadImg render={props.data.prismic.allBlog_homes.edges[0].node.blog_image.alt} src={blogImg} />
//       </HeadImgContainer>
//       <PageContent>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <RichText render={blogContent} />
//             </div>
//           </div>
//         </div>
//       </PageContent>
//     </PageMain>



//   //   </Layout >
//   )
// }

export default BlogHome