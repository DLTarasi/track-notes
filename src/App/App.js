import hpr from '../hpr_map.webp';
import './App.css';
import Note from '../Notes/Notes';
import React from 'react';

function App() {
  const [showNote1, setshowNote1] = React.useState(false)
  const onClick1 = () => setshowNote1(!showNote1) /// need to set all other notes to false for each of these
  const [showNote2, setshowNote2] = React.useState(false)
  const onClick2 = () => setshowNote2(!showNote2) 

  return (
      <div style={{  
      backgroundImage: "url(" + hpr + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
    <header>High Plains Raceway</header>
    <button style={{position: 'fixed', top: '72%', right: '19%',}} onClick={onClick1}>1</button>
    <button style={{position: 'fixed', top: '56%', right: '7%',}} onClick={onClick2}>2</button>
    { showNote1 ? < Note number = '1' /> : null}
    { showNote2 ? < Note number = '2' /> : null}
      </div>
  );
}

export default App;
