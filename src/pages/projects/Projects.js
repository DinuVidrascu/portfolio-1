import "./style.css"

import MyProject from "../../components/myproject/MyProject";

import { projects } from "../../helpers/projectsList";


function Projects() {
   return (

      <main className="section">
         <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">

               {projects.map((project, index) => {
                  return <MyProject 
                  key={index} 
                  title={project.title} 
                  img={project.img}
                  index={index} />
               })}

            </ul>
         </div>
      </main>
   )
}

export default Projects;