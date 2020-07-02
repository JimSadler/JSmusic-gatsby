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
import { fadeIn } from 'react-animations'


import DarkModeToggle from './UseDarkMode.js';
const fadeInAnimation = keyframes`${fadeIn}`;

const PageFade = styled.div`
  animation: 3s ${fadeInAnimation};

`
const Main = styled.main`
  margin: 0 auto;
  
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
  background: black;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;

`
const Branding = styled.div`
  margin: auto 0;
`
const navigationQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          branding
          navigation_links {
            label
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}

`
const Layout = ({ children }) => {


  return (
    <PageFade>

      <Header>
        <StaticQuery
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
        />
        <DarkModeToggle />
      </Header>
      <Main> {children}</ Main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </PageFade>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
