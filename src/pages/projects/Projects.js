import React, { useState, useEffect } from 'react';
import MyProject from "../../components/myproject/MyProject";
import { projects } from "../../helpers/projectsList";
import "./style.css"


function Projects() {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 200);
   }, []);

   return (

      <>
      {loading ? (
      <div className = "loader-container" >
         <div className="spinner"></div>
      </div>
      ) : (


         <main className="section">
            <div className="container">
               <h2 className="title-1">Projects</h2>
               <ul className="projects">

                  {projects.map((project, index) => {
                     return <MyProject
                        key={index}
                        skils={project.skills}
                        title={project.title}
                        img={project.img}
                        index={index} />
                  })}

               </ul>
            </div>
         </main>
      )}
      </>
   )
}

export default Projects;