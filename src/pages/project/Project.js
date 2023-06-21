import { useParams } from 'react-router-dom';
import BtnOutline from '../../components/btnOutline/BtnOutline';
import { projects } from '../../helpers/projectsList';

import './style.css'


function Project() {
   const {id} = useParams();
   const project = projects[id];
   console.log(project)

   return (
      <main className="section">
         <div className="container">
            <div className="project-details">

               <h1 className="title-1">{project.title}</h1>
               <img src={project.imgBig} alt={project.title} className="project-details__cover" />
               <div className="project-details__desc">
                  <p>Skills: {project.skills}</p>
               </div>
               {project.gitHubLink && (
                  <BtnOutline gitHubLink={project.gitHubLink} 
                  projectLink={project.projectLink}/>
               )}
               
            </div>
         </div>
      </main>


   )
}

export default Project;