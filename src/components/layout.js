/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby';
import "./layout.css"
import './global.css';
import { fadeIn, fadeInUp, slideInLeft } from 'react-animations'
import Footer from './Footer'
import DarkModeToggle from './UseDarkMode.js';

// animations
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeUp = keyframes`${fadeInUp}`;
const lightIn = keyframes`${slideInLeft}`;

const PageFade = styled.div`
  animation: 3s ${fadeInAnimation};

`
const Main = styled.main`
  margin: 0 auto;
  height: auto;
`
const NavLink = styled.div`
  margin: auto 0;
  a {
    padding: 0 16px;
    text-decoration: none;
    &:hover {
      color: orange;
    }
  }
`
const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`
const Header = styled.header`
  display: flex;
  background: #2A2A2A;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
  align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;

`
const Logo = styled.div`
animation: 1s ${lightIn};
  margin-top: -20px;
  
  a{
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    color: rgb(255 255 255);
    font-size: 40px;
    
  }

`
const NavUl = styled.ul`
animation: 3s ${fadeUp};

  li {
    display: inline-block;
    margin: 1rem;
    
  }
  a {
    color: rgb(255 255 255);
    transition: .7s;
    :hover {
      color: #66FEFF;
      text-decoration: underline;
    }
  }
`

const Branding = styled.div`
  margin: auto 0;
`

// const navigationQuery = graphql`
// {
//   prismic {
//     allNavigations {
//       edges {
//         node {
//           branding
//           navigation_links {
//             label
//             link {
//               ... on PRISMIC_Page {
//                 _meta {
//                   uid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// `
const Layout = ({ children }) => {


  return (
    <PageFade>

      <Header>

        <Logo>
          <a href="/">
            Jim Sadler Music</a>
        </Logo>
        <NavUl className="navigation">
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/jimbio">Bio</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </NavUl>




        {/* <StaticQuery
          query={`${navigationQuery}`}
          render={(data) => {

            return (
              console.log(data),
              <>
                <Branding>
                  {data.prismic.allNavigations.edges[0].node.branding}
                </Branding>
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
                    return (
                      <NavLink key={link.link._meta.uid}>
                        <Link to={`/${link.link._meta.uid}`}>
                          {link.link.label}
                        </Link>
                      </NavLink>
                    )
                  })}
                </NavLinks>
              </>
            )
          }}
        /> */}
      </Header>
      <Main> {children}</ Main>
      <Footer />

    </PageFade >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
