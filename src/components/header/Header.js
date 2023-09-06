import CV from "../../img/pdf/VIdrascu-Dinu_CV_Front-End.pdf"

import "./style.css"
function Header() {
   return (
      <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <en>Dinu</en></strong><br />
          a front-end developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={CV} target="_blank" title="My-Resume" className="btn">View CV</a>
      </div>
    </header>
   )
}

export default Header;