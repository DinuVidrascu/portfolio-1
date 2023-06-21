import githubIcon from './github-project.svg';
import view from './bx-heart-circle.svg';
import viewSite from './play-icon.svg'

import './style.css'

function BtnOutline({gitHubLink, projectLink}){
   return(
      <div className="btn-section">
      <a href={gitHubLink} target='_blank' rel='noreferrer' className="btn-outline">
         <img src={githubIcon} alt="" />
         GitHub repo
      </a>
      <a href={projectLink} target='_blank' className="btn-outline">
         <img src={viewSite} alt="" />
         View demo
      </a>
   </div>
   )
}

export default BtnOutline;