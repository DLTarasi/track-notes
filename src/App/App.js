import hpr from '../hpr_map.webp';
import './App.css';
import Note from '../Notes/Notes.js';
import React from 'react';
import CornerButton from '../CornerButton/CornerButton.js'

function App() {
  const [activeNote, setActiveNote] = React.useState(null)
  const onClick = (cornerNumber) => {
      if (cornerNumber === activeNote) {
        setActiveNote(null)
      }
      else {
        setActiveNote(cornerNumber)
      }
    }

  return (
    <div>
      <header style={{textAlign: 'center'}}>High Plains Raceway</header>
      <div style={{
        height: '700px',
        width: '1000px',
        position: 'relative'
      }}>
      <div style={{  
      backgroundImage: "url(" + hpr + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      position: 'relative',
    }}>
    </div>
    {< CornerButton top={'66%'} right={'19%'} cornerNumber={'1'} onClick={() => onClick('1')} />}
    {< CornerButton top={'53%'} right={'7%'} cornerNumber={'2'} onClick={() => onClick('2')} />}
    {< CornerButton top={'78%'} right={'5%'} cornerNumber={'3'} onClick={() => onClick('3')} />}
    </div>
    { activeNote && < Note number = {activeNote} /> }
  </div>
  );
}

export default App;
