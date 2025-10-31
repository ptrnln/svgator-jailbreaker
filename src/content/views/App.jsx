import Logo from '@/assets/crowbar.svg'
import { useEffect, useState } from 'react'
import './App.css'
import DownloadMessage from './DownloadMessage'
import Handle from './Handle'
import * as downloadActions from '../store/downloads'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  const dispatch = useDispatch();
  const numDownloads = useSelector((state) => Object.values(state.downloads.items).length)

  useEffect(() => {
    chrome.runtime.onMessage.addListener(async (msg, ) => {
      if(msg.action === 'downloadFile') {
        setShow(true);
        if(msg.item) dispatch(downloadActions.receiveItem(msg.item));
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
    <div className="popup-container handle-container" draggable='true' title={numDownloads === 0 ? 'No downloads at this time' : 'Download(s) detected'}>
        <div className='popup-content-container'>
          <div className={`popup-content ${show ? '' : 'opacity-0'}`}>
            <DownloadMessage></DownloadMessage>
          </div>
        </div>
      <button className="toggle-button" onClick={toggle} disabled={(numDownloads === 0)}>
        <object data={Logo} color='inherit' alt="CRXJS logo" className="button-icon" style={{height: '80%', margin: '0.2em 0.2em'}} pointerEvents='none'/>
      </button>
      <Handle />
    </div>
  )
}

export default App
