import Logo from '@/assets/crowbar.svg'
import { useEffect, useState } from 'react'
import './App.css'
import DownloadMessage from './DownloadMessage'
import Handle from './Handle'

function App() {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)

  useEffect(() => {
    chrome.runtime.onMessage.addListener((msg, ) => {
      if(msg === "download-complete") {
        setShow(true);
      }
    })
    if(document.querySelector('.popup-container ::before') && 
      !(document.querySelector('.popup-container ::before')?.elementDrag || 0)) {
        dragElement(document.querySelector('.popup-container ::before'))
        document.querySelector('.popup-container').style.right = '0px';
        document.querySelector('.popup-container').style.bottom = '0px';
    }
  }, [])

  return (
    <div className="popup-container" draggable='true'>
      {show && (
        <div className='popup-content-container'>
          <div className="popup-content">
            <DownloadMessage></DownloadMessage>
          </div>
        </div>
      )}
      <Handle />
      <button className="toggle-button" onClick={toggle}>
        <img src={Logo} alt="CRXJS logo" className="button-icon" style={{height: '80%', margin: '0.2em 0.2em'}} />
      </button>
    </div>
  )
}

export default App
