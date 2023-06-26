
import instagram from "./../../img/icons/instagram.svg"
import github from "./../../img/icons/github.svg"
import facebook from "./../../img/icons/facebook.svg"
import linkedin from "./../../img/icons/linkedin.svg"
import "./style.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.facebook.com/dinu.vidrascu.29" target="_blank">
                <img src={facebook} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/DinuVidrascu" target="_blank">
                <img src={github} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/dinu-vidrascu-a922b8226" target="_blank">
                <img src={linkedin} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/dinu.vidrascu/" target="_blank">
                <img src={instagram} alt="link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>Copyright © 2023. All rights are reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;