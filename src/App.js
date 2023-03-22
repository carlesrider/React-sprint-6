// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Escena from './components/Escena/Escena';
import Welcome from './components/Welcome/Welcome';
import history from './history.json';


function App() {
  const [index, setIndex] = useState(0);
  const [welcome, setWelcome] = useState(true);

  const next = () => {
    if (index < 3) {
      setIndex(index + 1);
    }
  }
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  const toggleWelcome = () => {
    setWelcome(!welcome);
  }

  return (
    <div className="App">
      { welcome ? <Welcome text="Una història increïble" onClick={toggleWelcome} buttonText="Comença!" />
      : 
      <div>
        <Button onClick={prev} text="Anterior" />
        <Button onClick={next} text="Següent" />        
        {history.map((sentence, key) => <Escena key={key} text={sentence} className={(index === key) ? "selected" : ""} />)}
      </div>
      }
      
    </div>
  );
}

export default App;
