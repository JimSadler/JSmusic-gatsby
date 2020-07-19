import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby';
import './global.css';
import SideBar from "./Sidebar";
import { fadeInUp, slideInLeft } from 'react-animations'
import DarkModeToggle from './UseDarkMode.js';

const fadeUp = keyframes`${fadeInUp}`;
const lightIn = keyframes`${slideInLeft}`;

// const NavLink = styled.div`
//   margin: auto 0;
//   a {
//     padding: 0 16px;
//     text-decoration: none;
//     &:hover {
//       color: orange;
//     }
//   }
// `
// const NavLinks = styled.div`
//   margin-left: auto;
//   display: flex;
// `
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
    color: rgb(223 223 223);
    font-size: 35px;
    
  }

`
const NavUl = styled.ul`
animation: 1.5s ${fadeUp};

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
// `
// const LogoImg = styled.img`
//   width: 10%;
// `
// const Branding = styled.div`
//   margin: auto 0;
// `
const LayoutHeader = ({ siteTitle }) => (
  <>
    <div id="sideNav">
      <SideBar pageWrapId={"page_wrapper"} outerContainerId={"sideNav"} />
    </div>
    <Header>

      {/* <LogoImg src="../src/images/Js_guitar_logoFinal_alt.png" alt="" /> */}
      <Logo>

        <a className="HeaderLogoText" href="/">Jim Sadler Music</a>
      </Logo >
      <NavUl className="navigation">
        <li>
          <Link to="/jimbio">Bio</Link>
        </li>
        <li>
          <Link to="/sounds">Sounds</Link>
        </li>
        <li>
          <Link to="/lessons">Lessons</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
        {/* <li>
          <Link to="/blog">Blog</Link>
        </li> */}
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
  </>
)

LayoutHeader.propTypes = {
  siteTitle: PropTypes.string,
}

LayoutHeader.defaultProps = {
  siteTitle: ``,
}

export default LayoutHeader
