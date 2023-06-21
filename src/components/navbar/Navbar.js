
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

import "./style.css"

function Navbar() {

  const activeLink = "nav-list__link nav-list__link--active"
  const normalLink = "nav-list__link"
  const isLink = ({ isActive }) => isActive ? activeLink : normalLink;



  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>My</strong> Portfolio
          </NavLink>

        <BtnDarkMode/>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={isLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={isLink}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={isLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;