import hpr from '../hpr_map.webp';
import './App.css';
import Note from '../Notes/Notes.js';
import React from 'react';
import CornerButton from '../CornerButton/CornerButton.js'

function App() {
  const [showNote1, setshowNote1] = React.useState(false)
  const onClick1 = () => setshowNote1(!showNote1) /// need to set all other notes to false for each of these
  const [showNote2, setshowNote2] = React.useState(false)
  const onClick2 = () => setshowNote2(!showNote2) 

  return (
    <div>
      <header style={{textAlign: 'center'}}>High Plains Raceway</header>
      <div style={{
        height: '600px',
        width: '800px',
        position: 'relative'
      }}>
      <div style={{  
      backgroundImage: "url(" + hpr + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      position: 'relative'
    }}>
    </div>
    {< CornerButton top={'65%'} right={'19%'} cornerNumber={'1'} onClick={onClick1} />}
    {< CornerButton top={'52%'} right={'7%'} cornerNumber={'2'} onClick={onClick2} />}
    </div>
    { showNote1 ? < Note number = '1' /> : null}
    { showNote2 ? < Note number = '2' /> : null}
  </div>
  );
}

export default App;
