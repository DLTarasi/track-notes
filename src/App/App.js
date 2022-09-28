import hpr from '../hpr_map.webp';
import './App.css';
import Note from '../Notes/Notes';
import React from 'react';

function App() {
  const [showNote, setshowNote] = React.useState(false)
  const onClick = () => setshowNote(!showNote)
  return (
    <div style={{  
      backgroundImage: "url(" + hpr + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
    <button style={{position: 'fixed', top: '72%', right: '19%',}} onClick={onClick}>1</button>
    { showNote ? < Note /> : null}
    </div>
  );
}

export default App;
