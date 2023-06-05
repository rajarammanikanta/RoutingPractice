import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="List-container">
    <div className="overall-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <p className="heading">Wave</p>
      </div>
      <div>
        <ul className="nav-bar-links">
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
