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
  const [prevDisabled, setprevDisabled] = useState(true);
  const [nextDisabled, setnextDisabled] = useState(false);

  const next = () => {
    if (index < 3) {
      setprevDisabled(false)
      setIndex(index + 1);
    }
    if (index === 2) {
      setnextDisabled(true)
    }
  }
  const prev = () => {
    if (index > 0) {
      setnextDisabled(false)
      setIndex(index - 1);
    }
    if (index === 1) {
      setprevDisabled(true)
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
        <Button onClick={prev} text="Anterior" disabled={prevDisabled} />
        <Button onClick={next} text="Següent" disabled={nextDisabled}/>        
        {history.map((sentence, key) => 
        <div key={key} >
          <Escena text={sentence.text} className={(index === key) ? "selected" : ""} src={sentence.img}/>
        </div>
        )}
      </div>
      }
      
    </div>
  );
}

export default App;
