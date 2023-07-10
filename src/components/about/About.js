import "./style.css"
import my from "./dinu.png"
function About() {
   return (
      <div className="about">
         <div className="about__wrapper">
            <h1 className="about__title">
               <strong>Hello and welcome !</strong><br />
            </h1>
            <div className="about__text">
               <p>I am an enthusiastic and dedicated Front-End Developer with a passion for creating captivating user experiences. Proficient in HTML,
                   CSS, and JavaScript, with exposure to React framework.
                  Committed to delivering high-quality work, I thrive in collaborative environments and continuously seek opportunities to learn and grow</p>
            </div>
         </div>
         <div className="about-img">
            <img src={my} alt="" />
         </div>
      </div>
   )
}

export default About;