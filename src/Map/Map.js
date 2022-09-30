import hpr from '../hpr_map.webp';
import noMap from '../no_map.png'
import Note from '../Notes/Notes.js';
import {useState, useEffect} from 'react';
import CornerButton from '../CornerButton/CornerButton.js'

function Map(track) {
    const [activeNote, setActiveNote] = useState(null)
    const [activeTrack, setActiveTrack] = useState(noMap)

    const onClick = (cornerNumber) => {
        if (cornerNumber === activeNote) {
            setActiveNote(null)
        }
        else {
            setActiveNote(cornerNumber)
        }
        }

    useEffect(() => {
        if (track.track === 'hpr') {
            setActiveTrack(hpr)
        }
        else {
            setActiveTrack(noMap)
        }
    }, [track])

  return (
    <div>
      <div style={{
        height: '700px',
        width: '1000px',
        position: 'relative'
      }}>
      <div style={{  
      backgroundImage: "url(" + activeTrack + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      position: 'relative',
    }}>
    </div>
    {(activeTrack != noMap) && < CornerButton top={'66%'} right={'19%'} cornerNumber={'1'} onClick={() => onClick('1')} />}
    {(activeTrack != noMap) && < CornerButton top={'53%'} right={'7%'} cornerNumber={'2'} onClick={() => onClick('2')} />}
    {(activeTrack != noMap) && < CornerButton top={'78%'} right={'5%'} cornerNumber={'3'} onClick={() => onClick('3')} />}
    </div>
    { activeNote && < Note number = {activeNote} /> }
  </div>
  );
}

export default Map;
