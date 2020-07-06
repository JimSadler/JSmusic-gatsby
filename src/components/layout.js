/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from 'styled-components'
import "./layout.css"
import './global.css';
import { fadeIn } from 'react-animations'
import Footer from './Footer'
import Header from './LayoutHeader'


// animations
const fadeInAnimation = keyframes`${fadeIn}`;
;

const PageFade = styled.div`
  animation: 2.5s ${fadeInAnimation};

`
const Main = styled.main`
  margin: 0 auto;
  height: auto;
`
const Layout = ({ children }) => {
  return (
    <PageFade id="page_wrapper">
      <Header />
      <Main> {children}</ Main>
      <Footer />
    </PageFade>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
