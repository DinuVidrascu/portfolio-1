import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

import detectDarkMode from '../../utils/detectDarkMode';

import moon from '../../img/icons/moon.svg';
import sun from '../../img/icons/sun.svg';

import "./style.scss"



function BtnDarkMode() {

   const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

   useEffect(() => {

      if (darkMode === 'dark') {
         document.body.classList.add('dark')
      } else {
         document.body.classList.remove('dark')
      }
   }, [darkMode])

   useEffect(() => {
      window.matchMedia("(prefers-color-scheme: dark)")
         .addEventListener('change', (e) => {
            const newColorScheme = e.matches ? "dark" : 'light';
            setDarkMode(newColorScheme);
         })
   }, [setDarkMode])

   const toogleDarkMode = () => {
      setDarkMode((currentValue) => {
         return currentValue === 'light' ? 'dark' : 'light';
      })
   }

   const btnNormal = 'dark-mode-btn';
   const btnACtive = 'dark-mode-btn dark-mode-btn--active';


   return (
      <button className={darkMode === 'dark' ? btnACtive : btnNormal} onClick={toogleDarkMode}>
         <img className="dark-mode-btn_icon"
            src={sun} alt="Light mode" />
         <img className="dark-mode-btn_icon"
            src={moon} alt="Dark mode" />
      </button>
   )
}

export default BtnDarkMode;