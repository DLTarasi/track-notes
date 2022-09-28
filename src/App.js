import hpr from './hpr_map.webp';
import './App.css';
import React from 'react';



function App() {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div style={{  
      backgroundImage: "url(" + hpr + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
    <button onClick={onClick}>1</button>
    
    </div>
  );
}

export default App;
