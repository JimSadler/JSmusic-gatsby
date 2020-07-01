/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import "./layout.css"
import './global.css';

import DarkModeToggle from './UseDarkMode.js';


const Main = styled.main`
  margin: 0 auto;
  max-width: 1000px;
`
const Layout = ({ children }) => {


  return (
    <>
      <DarkModeToggle />
      <Main>{children}</Main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
