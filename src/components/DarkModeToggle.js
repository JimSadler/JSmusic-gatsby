import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './global.css';

class darkModeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <>
            <label for="darkToggle"></label>
            <input
              id="darkToggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </>
        )}
      </ThemeToggler>
    )
  }
}
export default darkModeToggle;