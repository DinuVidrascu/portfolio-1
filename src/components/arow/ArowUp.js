import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './style.scss';


const ArrowUp = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300){
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp 
        className="scrollTop" onClick={scrollTop} 
        style={{display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ArrowUp;