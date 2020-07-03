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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons'
import { faSoundcloud, faFacebookF } from '@fortawesome/free-brands-svg-icons'

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
// FontAwesome Icons
const Envelope = <FontAwesomeIcon icon={faEnvelope} />
const SoundCloud = <FontAwesomeIcon icon={faSoundcloud} />
const Facebook = <FontAwesomeIcon icon={faFacebookF} />
const Gear = <FontAwesomeIcon icon={faCog} size="1x" spin />


const Branding = styled.div`
  margin: auto 0;
`
const Footer = styled.footer`
  border-top: 1px solid;
  text-align: center;
  margin-top: 7%;
  padding: 1.5rem 7rem .5rem;
`
const FootTitle = styled.div`
  float: left;
`
const FootLinks = styled.ul`
  list-style: none;
  float: right;
  li {
    display: inline-block;
    padding: 0.5rem .7rem;
    margin: 0 .5rem;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    font-size: 20px;
    line-height: 37px;
    transition: all .3s ease-in-out;
  }
`
const DevLink = styled.div`
  padding-top: 1rem;
  margin-top: 2rem;
  a {
    font-size: 14px;
  }
    
`
const SocialLink = styled.a`
  font-size: 14px;
  transition: all .3s ease-in-out;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  font-size: 20px;
  line-height: 37px;
  color: #f4f5f7;

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
      <Footer>
        <FootTitle>
          <h2>Jim Sadler Music</h2>
        </FootTitle>
        <FootLinks>
          <li className="facebook">
            <SocialLink rel="noreferrer" href="https://www.facebook.com/Jimsadlermusic/" target="_blank" aria-label="Facebook">
              <i>{Facebook}</i>

            </SocialLink>
          </li>
          <li className="soundcloud">
            <SocialLink rel="noreferrer" href="https://soundcloud.com/jim-sadler-music/sets" target="_blank" aria-label="Soundcloud">
              <i>{SoundCloud}</i>
            </SocialLink>
          </li>
          <li className="envelope">
            <SocialLink className="envelope" rel="noreferrer" href="mailto:jim@jimsadlermusic.com" target="_blank" aria-label="Email">
              <i>{Envelope}</i>
            </SocialLink>
          </li>
        </FootLinks>
        <DevLink>
          © {new Date().getFullYear()}, Jim Sadler Music
          {` `}
          <div><a rel="noreferrer" target="_blank" href="https://jsdevelopment.tech">
            {Gear}Website developed by J.S Development</a></div>
        </DevLink>

      </Footer>
    </PageFade>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
