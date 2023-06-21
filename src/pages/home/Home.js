
import htmlSkill from "./../../img/icons/skills/html.svg"
import cssSkill from "./../../img/icons/skills/css.svg"
import jsSkill from "./../../img/icons/skills/javascript.svg"
import reactSkill from "./../../img/icons/skills/react.svg"
import reduxSkill from "./../../img/icons/skills/redux.svg"
import sassSkill from "./../../img/icons/skills/sass.svg"
import bsSkill from "./../../img/icons/skills/bootstrap.svg"
import gitSkill from "./../../img/icons/skills/git.svg"
import githubSkill from "./../../img/icons/skills/github.svg"
import figmaSkill from "./../../img/icons/skills/figma.svg"
import psSkill from "./../../img/icons/skills/photoshop.svg"
import tailwindSkill from "./../../img/icons/skills/tailwind-css.svg"

import "./style.css"

import Header from "../../components/header/Header"

function Home() {
   return (
      <>
         <Header />

         <main className="section">
            <div className="title-1">My Skills</div>
            <div className="container container-skills">
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={htmlSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>HTML</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={cssSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>CSS</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={jsSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>JavaScript</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={reactSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>React Js</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={reduxSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>Redux</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={sassSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>Sass</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={tailwindSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>TailwindCSS</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={bsSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>Bootstrap</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={gitSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>git</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={githubSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>GitHub</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={figmaSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>Figma</h3>
                  </div>
               </div>
               <div className="skill-box">
                  <div className="skill-title">
                     <div className="img">
                        <img src={psSkill} alt="" className="skill-icon" />
                     </div>
                     <h3>Photoshop</h3>
                  </div>
               </div>
            </div>
         </main>

      </>
   )
}

export default Home;