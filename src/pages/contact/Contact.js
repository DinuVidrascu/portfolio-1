import "./style.css"

function Contact() {
   return (
      <main className="section">
         <div className="container">

            <h1 className="title-1">Contacts</h1>
            <ul className="content-list">

               <li className="content-list__item">
                  <h2 className="title-2">Location</h2>
                  <p>Chisinau, Moldova</p>
               </li>

               <li className="content-list__item">
                  <h2 className="title-2">Telegram / Viber / WatsApp</h2>
                  <p><a href="tel:+37360535665">+37360535665</a></p>
               </li>

               <li className="content-list__item">
                  <h2 className="title-2">Email</h2>
                  <p><a href="mailto:dinuweb@gmail.com">dinuweb@gmail.com</a></p>
               </li>
            </ul>
         </div>
      </main>

   )
}

export default Contact;