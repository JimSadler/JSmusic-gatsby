import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons'
import { faSoundcloud, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

// FontAwesome Icons
const Envelope = <FontAwesomeIcon icon={faEnvelope} />
const SoundCloud = <FontAwesomeIcon icon={faSoundcloud} />
const Facebook = <FontAwesomeIcon icon={faFacebookF} />
const Gear = <FontAwesomeIcon icon={faCog} size="1x" spin />
const FooterContainer = styled.footer`
  border-top: 1px solid;
  text-align: center;
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
    padding: 0.4rem .7rem;
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
const Footer = () => {
  return (
    <FooterContainer >
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
          {Gear} Website developed by J.S Development</a></div>
      </DevLink>

    </FooterContainer >
  )

}
export default Footer;