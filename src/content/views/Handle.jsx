import { useEffect } from 'react';
import './Handle.css'

export default function Handle() {
  var innerHeight, innerWidth
    function dragMouseDown(e) {
    e.preventDefault();

    let el = e.target;
    while (el.className !== 'popup-container') {
      el = el.parentElement
    }

    
    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {
    e.preventDefault();

    let elmnt = document.querySelector('.popup-container');

    elmnt.style.top = (e.clientY - 22) + "px";
    elmnt.style.left = (e.clientX - 22) + "px";
    elmnt.style.right = 'auto';
    elmnt.style.bottom = 'auto';
  }

  function closeDragElement() {
    document.onmousemove = null;
    document.onmouseup = null;
  }

  function handleResize(e) {
    let elmnt = document.querySelector('.popup-container');

    const top = Number(elmnt.style.top?.replaceAll("px", "")) || 
      window.innerHeight - elmnt.style.bottom + (elmnt.getBoundingClientRect().bottom - elmnt.getBoundingClientRect().top) + "px";
    const left = Number(elmnt.style.left?.replaceAll("px", "")) ||
      window.innerWidth - elmnt.style.bottom + (elmnt.getBoundingClientRect().right - elmnt.getBoundingClientRect().left) + "px"

    elmnt.style.top = (window.innerHeight / innerHeight) * top + "px";
    elmnt.style.left = (window.innerWidth / innerWidth) * left + "px";

    innerHeight = window.innerHeight;
    innerWidth = window.innerWidth;
  }

  useEffect(() => {
    let firstRender = true;
    if(firstRender) {
      window.onresize = handleResize;
      firstRender = false;
      innerHeight = window.innerHeight;
      innerWidth = window.innerWidth;
    }
  }, [])
    
  return (
      <svg id="handle" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.5149 24.8433' width='21.5149px' height='24.8433px' onMouseDown={dragMouseDown}>
          <path d="M 24.903 31.28 L 49.746 52.795 L 24.903 52.795 L 24.903 31.28 Z" style={{stroke: 'rgb(0, 0, 0)', fill: 'rgb(255, 255, 255)', strokeWidth: 0.053, transformOrigin: '37.3245px 42.0375px',}} transform="matrix(0, 1, -1, 0, -26.56733322, -29.61606598)"/>
          <path d="M 1.365 21.203 L 18.526 1.387 L 18.526 5.302 L 4.756 21.203 L 1.365 21.203 Z" style={{strokeWidth: 0.053}} transform="matrix(-1, 0, 0, -1, 19.89097023010254, 22.590005874633796)"/>
          <path d="M 18.553 1.316 L 18.553 5.312 L 4.768 21.23 L 1.307 21.23 Z M 4.744 21.177 L 18.5 5.292 L 18.5 1.458 L 1.423 21.176 Z" transform="matrix(-1, 0, 0, -1, 19.89097023010254, 22.590005874633796)"/>
          <path d="M 26.29 39.729 L 39.672 51.319 L 26.29 51.319 L 26.29 39.729 Z" style={{stroke: 'rgb(0, 0, 0)', strokeWidth: 0.053, transformOrigin: '32.981px 45.524px'}} transform="matrix(0, 1, -1, 0, -25.71030807, -37.44604111)"/>
      </svg>
  )
}